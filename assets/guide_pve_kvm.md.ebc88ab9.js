import{_ as s,o as a,c as l,R as n}from"./chunks/framework.1625126e.js";const h=JSON.parse('{"title":"KVM虚拟化","description":"","frontmatter":{},"headers":[],"relativePath":"guide/pve_kvm.md","filePath":"guide/pve_kvm.md","lastUpdated":1687223005000}'),p={name:"guide/pve_kvm.md"},o=n(`<h1 id="kvm虚拟化" tabindex="-1">KVM虚拟化 <a class="header-anchor" href="#kvm虚拟化" aria-label="Permalink to &quot;KVM虚拟化&quot;">​</a></h1><h2 id="部分注意事项" tabindex="-1">部分注意事项 <a class="header-anchor" href="#部分注意事项" aria-label="Permalink to &quot;部分注意事项&quot;">​</a></h2><p><strong>执行本项目的第一个检测环境的命令</strong>，展示如下</p><p><img src="https://github.com/oneclickvirt/oneclickvirt.github.io/blob/main/docs/images/pve_kvm/pve_kvm_1.png?raw=true" alt="图片"></p><p>查询如上的只需使用下面的一键脚本自动创建虚拟机即可，无需手动再修改WEB端设置</p><p><img src="https://github.com/oneclickvirt/oneclickvirt.github.io/blob/main/docs/images/pve_kvm/pve_kvm_2.png?raw=true" alt="图片"></p><p>查询如上的在使用后续脚本创建了虚拟机后，<strong>可能</strong>需要手动修改WEB端设置，需要关闭对应每个虚拟机的硬件嵌套虚拟化，如下图</p><p><img src="https://github.com/oneclickvirt/oneclickvirt.github.io/blob/main/docs/images/pve_kvm/pve_kvm_3.png?raw=true" alt="图片"></p><p>先停止虚拟机再修改，修改完后再开机才能使用NOVNC，不关闭<strong>可能</strong>导致这个虚拟机有BUG无法使用</p><p>如果强行安装PVE开KVM，启动不了的也可以关闭这个选项试试能不能启动虚拟机</p><h2 id="单独开设kvm虚拟化的vm" tabindex="-1">单独开设KVM虚拟化的VM <a class="header-anchor" href="#单独开设kvm虚拟化的vm" aria-label="Permalink to &quot;单独开设KVM虚拟化的VM&quot;">​</a></h2><ul><li>自动开设NAT服务器，默认使用Debian10镜像，因为该镜像占用最小</li><li>可在命令中自定义需要使用的镜像，这里有给出配置好的镜像，镜像自带空间设置是2~10G硬盘，日常使用<strong>至少10G以上</strong>即可，除非某些镜像开不起来再增加硬盘大小</li><li>可在命令中指定存储盘位置，默认不指定时为local盘即系统盘，可指定为PVE中显示的挂载盘</li><li>自定义内存大小推荐512MB内存</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>需要注意的是宿主机内存记得开点swap免得机器炸了<a href="https://github.com/spiritLHLS/addswap" target="_blank" rel="noreferrer">开SWAP点我跳转</a></p></div><ul><li>自动进行内外网端口映射，含22，80，443端口以及其他25个内外网端口号一样的端口</li><li>生成后需要等待一段时间虚拟机内部的cloud-init配置好网络以及登陆信息，大概需要5分钟</li><li>虚拟机的相关信息将会存储到WEB端对应VM的NOTES中，可在WEB端查看</li></ul><p>国际</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/spiritLHLS/pve/main/scripts/buildvm.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">buildvm.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">buildvm.sh</span></span></code></pre></div><p>国内</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://ghproxy.com/https://raw.githubusercontent.com/spiritLHLS/pve/main/scripts/buildvm.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">buildvm.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">buildvm.sh</span></span></code></pre></div><h3 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h3><ul><li>系统支持：详见 <a href="https://github.com/spiritLHLS/Images/releases/tag/v1.0" target="_blank" rel="noreferrer">跳转</a> 中列出的系统，使用时只需写文件名字，不需要.qcow2尾缀</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>注意这里的用户名不能是纯数字，会造成cloudinit出问题，最好是纯英文或英文开头</p></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">./buildvm.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">VMID</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">用户名</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">密码</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CPU核数</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">内存</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">硬盘</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SSH端口</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#C3E88D;">端口</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">443</span><span style="color:#C3E88D;">端口</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">外网端口起</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">外网端口止</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">系统</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">存储盘</span></span></code></pre></div><h3 id="测试示例" tabindex="-1">测试示例 <a class="header-anchor" href="#测试示例" aria-label="Permalink to &quot;测试示例&quot;">​</a></h3><ul><li>以下为开设的示例VM的信息：<br><code>VMID</code> - 102 <code>SSH登录的用户名</code> - test1 <code>SSH登录的密码</code> - 1234567 <code>CPU核数</code> - 1<br><code>内存大小</code> - 512MB <code>磁盘大小</code> - 10G<br><code>SSH端口</code> - 40001 <code>80端口</code> - 40002 <code>443端口</code> - 40003 <code>内外网映射端口一致的区间</code> - 50000到50025 <code>系统</code> - ubuntu20 <code>宿主机的存储盘</code> - local</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">./buildvm.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">102</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1234567</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">512</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40001</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40002</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40003</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50000</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50025</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu20</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">local</span></span></code></pre></div><p>开设完毕可执行<code>cat vm102</code>查看信息，或到WEB端对应VM的NOTES中查看</p><h3 id="删除示例" tabindex="-1">删除示例 <a class="header-anchor" href="#删除示例" aria-label="Permalink to &quot;删除示例&quot;">​</a></h3><ul><li>停止VM</li><li>删除VM</li><li>删除端口映射</li><li>重启网络</li><li>删除log文件</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">qm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">102</span></span>
<span class="line"><span style="color:#FFCB6B;">qm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">destroy</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">102</span></span>
<span class="line"><span style="color:#FFCB6B;">iptables</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-F</span></span>
<span class="line"><span style="color:#FFCB6B;">iptables</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">filter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-F</span></span>
<span class="line"><span style="color:#FFCB6B;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">networking</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">networking.service</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vm102</span></span></code></pre></div><h2 id="相关qcow2镜像" tabindex="-1">相关qcow2镜像 <a class="header-anchor" href="#相关qcow2镜像" aria-label="Permalink to &quot;相关qcow2镜像&quot;">​</a></h2><ul><li>已预安装开启cloudinit，开启SSH登陆，预设值SSH监听V4和V6的22端口，开启允许密码验证登陆，开启允许ROOT登陆</li></ul><p>目前使用的镜像列表为</p><p><a href="https://github.com/spiritLHLS/Images/releases/tag/v1.0" target="_blank" rel="noreferrer">https://github.com/spiritLHLS/Images/releases/tag/v1.0</a></p><h2 id="批量开设nat的kvm虚拟化的vm" tabindex="-1">批量开设NAT的KVM虚拟化的VM <a class="header-anchor" href="#批量开设nat的kvm虚拟化的vm" aria-label="Permalink to &quot;批量开设NAT的KVM虚拟化的VM&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>初次使用前需要保证当前PVE纯净且宿主机未进行过任何端口映射，否则设置冲突可能出现BUG</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>开设前请使用screen挂起执行，避免批量开设时间过长，SSH不稳定导致中间执行中断</p></div><ul><li>可多次运行批量生成VM</li><li>自动开设NAT服务器，选项留空默认使用debian11镜像，可自定义使用镜像名字，支持的系统名字详见上文支持的镜像列表</li><li>自动进行内外网端口映射，含22，80，443端口以及其他25个内外网端口号一样的端口</li><li>生成后需要等待一段时间虚拟机内部的cloudinit配置好网络以及登陆信息，大概需要5分钟，每个虚拟机创建之间有间隔等待60秒避免突发性能不足</li><li>默认批量开设的虚拟机网络配置为：22，80，443端口及一个25个端口区间的内外网映射</li><li>可自定义批量开设的核心数，内存大小，硬盘大小，使用宿主机哪个存储盘，记得自己计算好空闲资源开设</li><li>虚拟机的相关信息将会存储到WEB端对应VM的NOTES中，可在WEB端查看</li></ul><p>国际</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/spiritLHLS/pve/main/scripts/create_vm.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create_vm.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create_vm.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create_vm.sh</span></span></code></pre></div><p>国内</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://ghproxy.com/https://raw.githubusercontent.com/spiritLHLS/pve/main/scripts/create_vm.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create_vm.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create_vm.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create_vm.sh</span></span></code></pre></div><p>开设完毕可执行<code>cat vmlog</code>查看信息，或到WEB端对应VM的NOTES中查看</p><h2 id="删除所有vm" tabindex="-1">删除所有VM <a class="header-anchor" href="#删除所有vm" aria-label="Permalink to &quot;删除所有VM&quot;">​</a></h2><ul><li>删除所有VM</li><li>删除所有nat的端口映射</li><li>重启网络</li><li>删除log文件</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> vmid </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">qm</span><span style="color:#C3E88D;"> list </span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;"> </span><span style="color:#FFCB6B;">awk</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{if(NR&gt;1) print $1}</span><span style="color:#89DDFF;">&#39;)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">do</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">qm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> $vmid</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">qm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">destroy</span><span style="color:#A6ACCD;"> $vmid</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/lib/vz/images/</span><span style="color:#A6ACCD;">$vmid</span><span style="color:#A6ACCD;">*</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">done</span></span>
<span class="line"><span style="color:#FFCB6B;">iptables</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-F</span></span>
<span class="line"><span style="color:#FFCB6B;">iptables</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">filter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-F</span></span>
<span class="line"><span style="color:#FFCB6B;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">networking</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">networking.service</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vmlog</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>PVE修改VM配置前都得停机先，再修改配置，修改完再启动，免得出现配置重载错误</p></div><h2 id="开设独立ipv4地址的vm" tabindex="-1">开设独立IPV4地址的VM <a class="header-anchor" href="#开设独立ipv4地址的vm" aria-label="Permalink to &quot;开设独立IPV4地址的VM&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>使用前需要保证当前宿主机的IP段带了至少2个IP，且有空余的IP未配置，该空余的IP未绑定宿主机 开设前请使用screen挂起执行，避免开设时间过长，SSH不稳定导致中间执行中断</p></div><ul><li>自动检测可用的IP区间，通过ping检测空余可使用的IP，选取其中之一绑定到虚拟机上</li><li>系统的相关信息将会存储到对应的虚拟机的NOTE中，可在WEB端查看</li></ul><p>国际</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/spiritLHLS/pve/main/scripts/buildvm_extraip.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">buildvm_extraip.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">buildvm_extraip.sh</span></span></code></pre></div><p>国内</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://ghproxy.com/https://raw.githubusercontent.com/spiritLHLS/pve/main/scripts/buildvm_extraip.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">buildvm_extraip.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">buildvm_extraip.sh</span></span></code></pre></div><h3 id="创建示例" tabindex="-1">创建示例 <a class="header-anchor" href="#创建示例" aria-label="Permalink to &quot;创建示例&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">./buildvm_extraip.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">VMID</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">用户名</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">密码</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CPU核数</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">内存大小以MB计算</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">硬盘大小以GB计算</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">系统</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">存储盘</span></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">./buildvm_extraip.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">152</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1234567</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1024</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu20</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">local</span></span></code></pre></div><p>上述命令意义为开设一个带独立IPV4地址的虚拟机，VMID是152，用户名是test1，密码是1234567，CPU是1核，内存是1024MB，硬盘是10G，系统是Ubuntu20，存储盘是local盘也就是系统盘</p><h3 id="删除示例-1" tabindex="-1">删除示例 <a class="header-anchor" href="#删除示例-1" aria-label="Permalink to &quot;删除示例&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">qm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">152</span></span>
<span class="line"><span style="color:#FFCB6B;">qm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">destroy</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">152</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vm152</span></span></code></pre></div>`,59),e=[o];function t(c,r,C,i,y,A){return a(),l("div",null,e)}const d=s(p,[["render",t]]);export{h as __pageData,d as default};
