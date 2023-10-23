import{_ as s,v as t,b as e,R as a}from"./chunks/framework.70afa331.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/lxd_custom.md","filePath":"guide/lxd_custom.md","lastUpdated":1698079096000}'),n={name:"guide/lxd_custom.md"},l=a(`<h2 id="给宿主机附加免费的ipv6地址段" tabindex="-1">给宿主机附加免费的IPV6地址段 <a class="header-anchor" href="#给宿主机附加免费的ipv6地址段" aria-label="Permalink to &quot;给宿主机附加免费的IPV6地址段&quot;">​</a></h2><p>有的机器本身没有IPV6的/64子网，这里给出一个方法免费附加IPV6的子网</p><table><thead><tr><th>支持的平台</th><th>对应需要的安装包</th><th>协议</th></tr></thead><tbody><tr><td>tunnelbroker.net</td><td>ifupdown</td><td>v4tunnel</td></tr><tr><td>tunnelbroker.ch</td><td>ifupdown</td><td>v4tunnel</td></tr><tr><td>netassist.ua</td><td>ifupdown2</td><td>sit</td></tr></tbody></table><h3 id="初始环境修改" tabindex="-1">初始环境修改 <a class="header-anchor" href="#初始环境修改" aria-label="Permalink to &quot;初始环境修改&quot;">​</a></h3><p>执行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">touch /etc/cloud/cloud-init.disabled</span></span></code></pre></div><p>关闭cloud-init的自动化覆写先，然后查看本机使用什么管理网络，执行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">systemctl is-active systemd-networkd</span></span></code></pre></div><p>和</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">systemctl is-active networking</span></span></code></pre></div><p>看看属于哪种情况，如果是前者active，后者inactive，你需要重装/DD一个不是这样配置的系统，或者切换本机使用ifupdown管理网络执行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 是否需要禁用原网络管理自行评判</span></span>
<span class="line"><span style="color:#A6ACCD;"># sudo systemctl stop systemd-networkd</span></span>
<span class="line"><span style="color:#A6ACCD;"># sudo systemctl disable systemd-networkd</span></span>
<span class="line"><span style="color:#A6ACCD;"># sudo systemctl stop systemd-networkd.socket</span></span>
<span class="line"><span style="color:#A6ACCD;"># sudo systemctl disable systemd-networkd.socket</span></span></code></pre></div><p>安装<code>ifupdown</code>控制网络(有的平台需要安装<code>ifupdown2</code>控制网络，详见对应平台说明再回来)</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo apt-get install ifupdown -y</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo systemctl start networking</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl enable networking</span></span></code></pre></div><p>然后重启服务器，检验机器的网络是否会因为修改出现重启失联的情况，且执行<code>uptime</code>观察启动已超过1分钟后，再进行后续步骤</p><p>如果是是前者inactive，后者active，则不需要切换网络管理程序，直接进行后续操作即可。</p><h3 id="tunnelbroker-net" tabindex="-1">tunnelbroker_net <a class="header-anchor" href="#tunnelbroker-net" aria-label="Permalink to &quot;tunnelbroker_net&quot;">​</a></h3><p>需要安装<code>ifupdown</code>控制网络</p><p>结合一键开设带IPV6地址的容器的脚本，就能给每个容器附加来自he的IPV6地址了</p><p>缺点是地址比较黑/脏，cloudflare的cdn极有可能套不上，自行测试</p><ol><li>在 <a href="https://tunnelbroker.net/" target="_blank" rel="noreferrer">https://tunnelbroker.net/</a> 注册账户，并点击左边的 <code>Create Regular Tunnel</code></li></ol><p><img src="https://github.com/oneclickvirt/oneclickvirt.github.io/assets/103393591/35923be5-821f-45c8-8401-962ea3f97726" alt="1"></p><ol start="2"><li>红框处填写你的服务器的IPV4地址，选择物理距离近的连接点，比如机器在美国洛杉矶，就选美国西海岸的连接点，然后显示绿框提示，点<code>Create Tunnel</code>创建即可</li></ol><p><img src="https://github.com/oneclickvirt/oneclickvirt.github.io/assets/103393591/cab04113-4d6a-4d6f-9952-d3851057fc4a" alt="2"></p><p><img src="https://github.com/oneclickvirt/oneclickvirt.github.io/assets/103393591/518dc62a-c8d0-48e3-bb13-befc39348990" alt="3"></p><p><img src="https://github.com/oneclickvirt/oneclickvirt.github.io/assets/103393591/6188de3f-e83c-400e-9594-dd3f73aaf46a" alt="4"></p><ol start="3"><li>等待出以下界面，点击<code>Example Configurations</code>然后选择对应的系统，比如LXD的宿主机那肯定就是Debian/Ubuntu了</li></ol><p><img src="https://github.com/oneclickvirt/oneclickvirt.github.io/assets/103393591/9f0045fc-b1ac-4954-9ecd-1fba47d07d8a" alt="5"></p><p><img src="https://github.com/oneclickvirt/oneclickvirt.github.io/assets/103393591/2fb7c951-371c-452c-b775-78f69b980a2c" alt="6"></p><ol start="4"><li>框住的部分就是要修改的文件和需要填写的内容了</li></ol><p><img src="https://github.com/oneclickvirt/oneclickvirt.github.io/assets/103393591/c0156902-b4c0-4001-823e-50f611215393" alt="7"></p><ol start="5"><li>执行以下命令给你的网络配置文件附加IPV6的设置(或者自己用vim或者vi命令修改<code>/etc/network/interfaces</code>文件增加内容)</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo tee -a /etc/network/interfaces &lt;&lt;EOF</span></span>
<span class="line"><span style="color:#A6ACCD;"># 这里修改复制粘贴一下之前红框框住的配置文件内容，然后执行此命令</span></span>
<span class="line"><span style="color:#A6ACCD;">EOF</span></span></code></pre></div><p>然后你可以使用<code>cat /etc/network/interfaces</code>查看配置文件是否正常写入了</p><ol start="6"><li>如果上面都没问题，就需要启用网络接口即可</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">apt-get install net-tools iproute2 -y</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart networking</span></span></code></pre></div><ol start="7"><li>然后你就可以测试IPV6网络是否已附加</li></ol><p>执行<code>ifconfig</code>命令，这时应该有一个 he-ipv6 接口，类似下面这样：</p><p><img src="https://github.com/oneclickvirt/oneclickvirt.github.io/assets/103393591/1760af85-2b60-4352-ad8c-3c69e49fc1e4" alt="8"></p><p>或者执行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curl ipv6.ip.sb</span></span></code></pre></div><p>回传你绑定IPV6地址</p><ol start="8"><li>NAT VPS 的额外设置</li></ol><p>IPv4 NAT VPS 除了前面提到的替换 IP 操作以外，可能还需要一些额外的设置，否则可能还是无法访问 IPv6 网络。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">apt-get install ufw -y</span></span>
<span class="line"><span style="color:#A6ACCD;">ufw allow 41</span></span></code></pre></div><p>添加相关的路由规则</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">route -A inet6 add ::/0 dev he-ipv6</span></span></code></pre></div><ol start="9"><li>如果不需要该IPV6网络了，想要删除</li></ol><p>删除 he-ipv6 网络接口配置（若没有删除重启后会自动启用），记得修改<code>/etc/network/interfaces</code>文件，删除之前红框添加的内容</p><p>然后重启服务器，就删除了</p><h3 id="netassist-ch" tabindex="-1">netassist_ch <a class="header-anchor" href="#netassist-ch" aria-label="Permalink to &quot;netassist_ch&quot;">​</a></h3><p>这个平台你在切换网络管理时务必使用<code>ifupdown</code>，该平台使用v4tunnel协议</p><p>需要安装<code>ifupdown</code>控制网络</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo apt-get install ifupdown -y</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo systemctl start networking</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl enable networking</span></span></code></pre></div><p>类似上述的操作，先在 <a href="https://www.tunnelbroker.ch/" target="_blank" rel="noreferrer">https://www.tunnelbroker.ch/</a> 注册一个账户先，注册后点击激活的邮件</p><p>然后就是填写你的服务器IPV4地址</p><p><img src="https://github.com/oneclickvirt/oneclickvirt.github.io/assets/103393591/e018c7bc-e73c-4c68-88b6-b073f0dbd150" alt=""></p><p>创建后需要进入Config页面而不是详情页面</p><p><img src="https://github.com/oneclickvirt/oneclickvirt.github.io/assets/103393591/d919dda7-571d-45b1-9d2f-03f29866269e" alt=""></p><p>记录以下页面的最后一个红框的内容，准备修改宿主机配置文件</p><p><img src="https://github.com/oneclickvirt/oneclickvirt.github.io/assets/103393591/aefd1477-d5f5-4a4e-a66c-80ef5f9250c6" alt=""></p><p>用vim或者vi命令修改<code>/etc/network/interfaces</code>文件增加的内容了，或者修改以下命令新增</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo tee -a /etc/network/interfaces &lt;&lt;EOF</span></span>
<span class="line"><span style="color:#A6ACCD;"># 这里修改一下</span></span>
<span class="line"><span style="color:#A6ACCD;">EOF</span></span></code></pre></div><p>然后你就需要重启一下系统，或者执行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">apt-get install net-tools iproute2 -y</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart networking</span></span></code></pre></div><p>保证环境无问题再进行别的操作了</p><h3 id="netassist-ua" tabindex="-1">netassist_ua <a class="header-anchor" href="#netassist-ua" aria-label="Permalink to &quot;netassist_ua&quot;">​</a></h3><p>这个平台你在切换网络管理时务必使用<code>ifupdown2</code>而不是<code>ifupdown2</code>安装包，该平台使用sit协议，而sit协议需要在<code>ifupdown2</code>控制的环境中使用</p><p>需要安装<code>ifupdown2</code>控制网络</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo apt-get install ifupdown -y</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo systemctl start networking</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo systemctl enable networking</span></span></code></pre></div><p>类似上述的操作，先在 <a href="https://tb.netassist.ua/" target="_blank" rel="noreferrer">https://tb.netassist.ua/</a> 注册一个账户先，注册后点击激活的邮件，激活页面会有密码显示，记得记录</p><p>然后就是填写你的服务器IPV4地址，这个后面可以自己修改，先随便填一个都没问题</p><p>然后就到了这个页面了</p><p><img src="https://github.com/oneclickvirt/oneclickvirt.github.io/assets/103393591/4af680d4-3b01-495a-91d1-3cf4f187d0df" alt="a"></p><p>第一个红框是你宿主机的IPV4地址需要填写的位置，要修改就修改那里，然后点change保存</p><p>第二个下拉红框选择<code>Linux</code>，然后点击show</p><p><img src="https://github.com/oneclickvirt/oneclickvirt.github.io/assets/103393591/099d43a0-0397-4e02-9275-9ec3099c0ff1" alt="b"></p><p>会出现上面的内容，全选框住的部分复制下来，不要带空行</p><p>然后打开 <a href="https://ipv6tunnel.spiritlhl.top/" target="_blank" rel="noreferrer">https://ipv6tunnel.spiritlhl.top/</a> 选择<code>Option</code>为<code>NetAssist</code>，在输入框内粘贴你复制的内容</p><p>然后点击<code>Covert</code>转换格式</p><p><img src="https://github.com/oneclickvirt/oneclickvirt.github.io/assets/103393591/7324c7ff-d22f-4c17-b3c2-b5338ca6dfee" alt="c"></p><p>然后就会刷新页面出现需要自己用vim或者vi命令修改<code>/etc/network/interfaces</code>文件增加的内容了，或者修改以下命令新增</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo tee -a /etc/network/interfaces &lt;&lt;EOF</span></span>
<span class="line"><span style="color:#A6ACCD;"># 这里修改一下</span></span>
<span class="line"><span style="color:#A6ACCD;">EOF</span></span></code></pre></div><p>然后你就需要重启一下系统，或者执行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">apt-get install net-tools iproute2 -y</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart networking</span></span></code></pre></div><p>保证环境无问题再进行别的操作了</p>`,89),o=[l];function p(c,i,r,d,u,h){return t(),e("div",null,o)}const C=s(n,[["render",p]]);export{b as __pageData,C as default};
