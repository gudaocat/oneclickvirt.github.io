import{_ as a,v as s,b as e,R as n}from"./chunks/framework.70afa331.js";const d=JSON.parse('{"title":"解惑","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/pve_qa.md","filePath":"guide/pve_qa.md","lastUpdated":1704796287000}'),t={name:"guide/pve_qa.md"},l=n(`<h1 id="解惑" tabindex="-1">解惑 <a class="header-anchor" href="#解惑" aria-label="Permalink to &quot;解惑&quot;">​</a></h1><h2 id="执行脚本不到30秒机器就掉线了" tabindex="-1">执行脚本不到30秒机器就掉线了 <a class="header-anchor" href="#执行脚本不到30秒机器就掉线了" aria-label="Permalink to &quot;执行脚本不到30秒机器就掉线了&quot;">​</a></h2><p>原装系统执行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">systemctl restart networking</span></span></code></pre></div><p>看看是不是直接掉线，如果是那就是机器原生有问题，热插拔或者dhcp导致的网络无法自重启，此时建议更换宿主机的系统或DD一个新系统尝试</p><p>一般来说这种情况都是出现在独服的Debian11系统上，切换为Debian12系统就没问题了</p><h2 id="安装pve成功但重启后失联" tabindex="-1">安装PVE成功但重启后失联 <a class="header-anchor" href="#安装pve成功但重启后失联" aria-label="Permalink to &quot;安装PVE成功但重启后失联&quot;">​</a></h2><p>如果什么机器安装PVE成功后WEB可用，但重启失联，请安装成功PVE后，重启前执行以下命令再重启</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">auto_interface</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">grep</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">^auto </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> /etc/network/interfaces </span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#C3E88D;"> -v </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">^auto lo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;"> </span><span style="color:#FFCB6B;">awk</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{print $2}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;"> </span><span style="color:#FFCB6B;">head</span><span style="color:#C3E88D;"> -n </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-q</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^post-up /sbin/ethtool</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/network/interfaces</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">chattr</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/network/interfaces</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">post-up /sbin/ethtool -K </span><span style="color:#A6ACCD;">$auto_interface</span><span style="color:#C3E88D;"> tx off rx off</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/network/interfaces</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">chattr</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/network/interfaces</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">fi</span></span></code></pre></div><p>然后将重启失联的机器报给 <a href="https://t.me/spiritlhl_bot" target="_blank" rel="noreferrer">@spiritlhl_bot</a> 待更新脚本自动修复</p><h2 id="安装pve失败或非debian系统" tabindex="-1">安装PVE失败或非Debian系统 <a class="header-anchor" href="#安装pve失败或非debian系统" aria-label="Permalink to &quot;安装PVE失败或非Debian系统&quot;">​</a></h2><p>如果有什么机器安装不了，着急的可以尝试使用以下仓库的脚本先重装为debian12先</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bash &lt;(curl -sSL https://raw.githubusercontent.com/leitbogioro/Tools/master/Linux_reinstall/InstallNET.sh) -debian 12 -pwd &#39;oneclickvirt139&#39; --network &quot;static&quot;</span></span></code></pre></div><p>此时dd后的系统用户名为<code>root</code>，密码为<code>oneclickvirt139</code></p><p>如果有空或者还是不行，请联系 <a href="https://t.me/spiritlhl_bot" target="_blank" rel="noreferrer">@spiritlhl_bot</a> 尝试</p><p>非Debian系统也可使用自定义分区的内容自行尝试</p><h2 id="开设centos7发现报错cgroupv1不支持怎么办" tabindex="-1">开设centos7发现报错CGroupV1不支持怎么办 <a class="header-anchor" href="#开设centos7发现报错cgroupv1不支持怎么办" aria-label="Permalink to &quot;开设centos7发现报错CGroupV1不支持怎么办&quot;">​</a></h2><p>启用CGroup V1：要在Ubuntu系统上启用CGroup V1，需要编辑内核启动参数。</p><p>请注意，在更改内核启动参数之前，请务必备份重要的数据和设置，以防止意外的问题。</p><p>编辑<code>/etc/default/grub</code>文件，将<code>GRUB_CMDLINE_LINUX_DEFAULT</code>中的参数末尾加上<code>systemd.unified_cgroup_hierarchy=0</code>，如</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">GRUB_CMDLINE_LINUX_DEFAULT=&quot;quiet splash systemd.unified_cgroup_hierarchy=0&quot;</span></span></code></pre></div><p>保存文件并运行以下命令更新GRUB引导。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update-grub</span></span></code></pre></div><p>重启系统，使更改生效</p><p>如果上述更改仍旧不支持开设centos7，那么请使用别的宿主机系统尝试</p><h2 id="不小心删除了nat的映射规则怎么办" tabindex="-1">不小心删除了NAT的映射规则怎么办 <a class="header-anchor" href="#不小心删除了nat的映射规则怎么办" aria-label="Permalink to &quot;不小心删除了NAT的映射规则怎么办&quot;">​</a></h2><p>使用下面的命令映射回来</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">iptables</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-F</span></span>
<span class="line"><span style="color:#FFCB6B;">iptables</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">filter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-F</span></span>
<span class="line"><span style="color:#FFCB6B;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">networking</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">networking.service</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/iptables/rules.v4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">iptables-restore</span></span></code></pre></div><h2 id="目前已验证的vps商家" tabindex="-1">目前已验证的VPS商家 <a class="header-anchor" href="#目前已验证的vps商家" aria-label="Permalink to &quot;目前已验证的VPS商家&quot;">​</a></h2><h3 id="可开设kvm虚拟化的nat的商家" tabindex="-1">可开设KVM虚拟化的NAT的商家 <a class="header-anchor" href="#可开设kvm虚拟化的nat的商家" aria-label="Permalink to &quot;可开设KVM虚拟化的NAT的商家&quot;">​</a></h3><p><a href="https://billing.spartanhost.net/aff.php?aff=1705" target="_blank" rel="noreferrer">spartanhost</a> 中的独立服务器的Debian12(Debian11有问题)</p><p><a href="https://www.interserver.net/r/802990" target="_blank" rel="noreferrer">interserver</a> 中的VPS或独立服务器</p><p><a href="https://my.frantech.ca/aff.php?aff=5522" target="_blank" rel="noreferrer">frantech</a> 中的拉斯维加斯第二档</p><p><a href="https://www.eugamehost.com/clients/aff.php?aff=194" target="_blank" rel="noreferrer">eugamehost</a> 中的美国凤凰城黑五促销款</p><p><a href="http://amhost.net/vps/?cid=29317" target="_blank" rel="noreferrer">amhost</a> 中的测试款</p><p><a href="https://m.do.co/c/e9712622ee89" target="_blank" rel="noreferrer">digitalocean</a> 中的 Perminu Intel 和 Regular 4核款</p><p><a href="https://hosting.skrime.eu/a/server" target="_blank" rel="noreferrer">skrime</a> 中的 AMD Ryzen KVM Server 最低配款</p><p><a href="https://webdock.io/en?maff=wdaff--150" target="_blank" rel="noreferrer">webdock</a> 中的 AMD KVM Server</p><p><a href="https://clck.ru/33VQmc" target="_blank" rel="noreferrer">4vps</a> 中的 俄罗斯和希腊 测试款</p><p><a href="https://deploy.hostaris.com/" target="_blank" rel="noreferrer">hostaris</a> 中的 德国款 (商家的系统模板有问题，IPV6已失效和Github的连通稳定性很差)</p><p><a href="https://www.adtaq.com/" target="_blank" rel="noreferrer">adtaq</a> 中的最低配存储KVM服务器</p><p><a href="https://www.nocix.net/" target="_blank" rel="noreferrer">nocix</a> 中的独立服务器</p><p><a href="https://get.crunchbits.com/aff.php?aff=17" target="_blank" rel="noreferrer">crunchbits</a> 中的VPS</p><p><a href="https://www.scaleway.com/en/dedibox/" target="_blank" rel="noreferrer">online.net</a> 中的低配独立服务器的Debian12(Debian11有问题)</p><p><a href="https://www.ovhcloud.com/en/public-cloud/" target="_blank" rel="noreferrer">OVH</a> 中的 Public Cloud 服务器 需要使用以下命令dd为纯净系统后安装</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> -sSL https://raw.githubusercontent.com/leitbogioro/Tools/master/Linux_reinstall/InstallNET.sh</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-debian</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-pwd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">oneclickvirt139</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--network</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">static</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>此时dd后的系统用户名为<code>root</code>，密码为<code>oneclickvirt139</code></p><h3 id="只可开设lxc虚拟化的nat的商家" tabindex="-1">只可开设LXC虚拟化的NAT的商家 <a class="header-anchor" href="#只可开设lxc虚拟化的nat的商家" aria-label="Permalink to &quot;只可开设LXC虚拟化的NAT的商家&quot;">​</a></h3><p><a href="https://curl.qcloud.com/tPrMnfZm" target="_blank" rel="noreferrer">腾讯云</a> 中的无忧款和特惠款(学生机)</p><p><a href="https://my.spectraip.net/aff.php?aff=35" target="_blank" rel="noreferrer">spectraip</a> 中的KVM服务器</p><p><a href="https://www.linode.com/lp/refer/?r=9296554d01ecacaa0be56892fd969b557722becd" target="_blank" rel="noreferrer">Linode</a> 中美国专用CPU的最低配</p><p><a href="https://cloud.hosthatch.com/a/2450" target="_blank" rel="noreferrer">hosthatch</a> 中的特价高配服务器</p><p><a href="https://hetzner.cloud/?ref=CnWVr0FGneUl" target="_blank" rel="noreferrer">hetzner</a> 的cloud服务器</p><p><a href="https://cloud.rackdog.com/referral/bx8fms" target="_blank" rel="noreferrer">rackdog</a> 的浮动IP的服务器</p><p><a href="https://www.vultr.com/?ref=9124520-8H" target="_blank" rel="noreferrer">vultr</a> 的Cloud普通服务器</p><p><a href="https://portal.azure.com/#create/Microsoft.VirtualMachine-ARM" target="_blank" rel="noreferrer">azure</a> 的普通机器</p><p><a href="https://www.scaleway.com/en/" target="_blank" rel="noreferrer">scaleway</a> 中的ARM架构的服务器</p><p><a href="https://aws.amazon.com/lightsail/" target="_blank" rel="noreferrer">aws</a> 中的ec2实例</p><p><a href="https://console.cloud.google.com/" target="_blank" rel="noreferrer">Google cloud platform - GCP</a> 的 AMD 服务器</p>`,59),o=[l];function r(p,c,i,h,C,y){return s(),e("div",null,o)}const f=a(t,[["render",r]]);export{d as __pageData,f as default};
