import{_ as s,o as a,c as l,R as e}from"./chunks/framework.1625126e.js";const u=JSON.parse('{"title":"PVE主体安装","description":"","frontmatter":{},"headers":[],"relativePath":"guide/pve_install.md","filePath":"guide/pve_install.md","lastUpdated":1687612848000}'),t={name:"guide/pve_install.md"},o=e('<h1 id="pve主体安装" tabindex="-1">PVE主体安装 <a class="header-anchor" href="#pve主体安装" aria-label="Permalink to &quot;PVE主体安装&quot;">​</a></h1><h2 id="一键安装pve" tabindex="-1">一键安装PVE <a class="header-anchor" href="#一键安装pve" aria-label="Permalink to &quot;一键安装PVE&quot;">​</a></h2><ul><li>安装的是当下apt源最新的PVE</li><li>比如debian10则是pve6.4，debian11则是pve7.x，debian12则是pve8.x</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>建议debian11而不是debian12，因为后者虽然是stable版本但不知道是否有未发现的BUG，debian11安装的目前稳定点</p></div><ul><li>/etc/hosts文件修改(修正商家hostname设置错误以及新增PVE所需的内容)</li><li>已设置<code>/etc/hosts</code>为只读模式，避免重启后文件被覆写，如需修改请使用<code>chattr -i /etc/hosts</code>取消只读锁定，修改完毕请执行<code>chattr +i /etc/hosts</code>只读锁定</li><li>检测<code>/etc/cloud/cloud.cfg</code>如果发现<code>preserve_hostname</code>是<code>false</code>，则改为<code>true</code>，同上，也用chattr命令进行了文件锁定避免重启覆盖设置</li><li>检测是否为中国IP，如果为中国IP使用清华镜像源，否则使用官方源</li><li>安装PVE开虚拟机需要的必备工具包</li><li>替换apt源中的企业订阅为社区源</li><li>打印查询Linux系统内核和PVE内核是否已安装</li><li>检测<code>/etc/resolv.conf</code>是否为空，为空则设置检测<code>8.8.8.8</code>的开机自启添加DNS的systemd服务</li><li>新增PVE的APT源链接后，下载PVE并打印输出登陆信息</li></ul><p>国际</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/spiritLHLS/pve/main/scripts/install_pve.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install_pve.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install_pve.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install_pve.sh</span></span></code></pre></div><p>国内</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://ghproxy.com/https://raw.githubusercontent.com/spiritLHLS/pve/main/scripts/install_pve.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install_pve.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install_pve.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install_pve.sh</span></span></code></pre></div><p>或</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install_pve.sh</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>安装成功后打开网页可能提示不安全，点击高级或更多选项，坚持访问即可</p></div><h2 id="预配置环境" tabindex="-1">预配置环境 <a class="header-anchor" href="#预配置环境" aria-label="Permalink to &quot;预配置环境&quot;">​</a></h2><ul><li>创建资源池mypool</li><li>移除订阅弹窗</li><li>尝试开启硬件直通</li><li>检测AppArmor模块并试图安装</li><li>重启系统前推荐挂上<a href="https://github.com/naiba/nezha" target="_blank" rel="noreferrer">nezha探针</a>方便在后台不通过SSH使用命令行，避免SSH可能因为商家奇葩的预设导致重启后root密码丢失</li><li><strong>执行完毕建议等待一分钟后再重启服务器</strong></li><li>执行<code>reboot</code>前需要等待后台任务执行完毕，一些宿主机的系统apt命令执行很慢，得等一会才能执行完毕，当然大部分的机器没这么烂</li></ul><p>国际</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;(</span><span style="color:#FFCB6B;">wget</span><span style="color:#C3E88D;"> -qO- --no-check-certificate https://raw.githubusercontent.com/spiritLHLS/pve/main/scripts/build_backend.sh</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>国内</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;(</span><span style="color:#FFCB6B;">wget</span><span style="color:#C3E88D;"> -qO- --no-check-certificate https://ghproxy.com/https://raw.githubusercontent.com/spiritLHLS/pve/main/scripts/build_backend.sh</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h2 id="自动配置宿主机的网关" tabindex="-1">自动配置宿主机的网关 <a class="header-anchor" href="#自动配置宿主机的网关" aria-label="Permalink to &quot;自动配置宿主机的网关&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>使用前请保证重启过服务器且此时PVE能正常使用WEB端再执行，重启机器后不要立即执行此命令，待WEB端启动成功后至少等5分钟再执行本命令</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这一步是最容易造成SSH断开的，原因是未等待PVE内核启动就修改网络会造成设置冲突，所以至少等几分钟待内核启动也就是WEB端启动成功后再执行</p></div><ul><li>创建vmbr0(独立IP网关)，宿主机允许addr和gateway为内网IP或外网IP，已自动识别</li><li>vmbr0创建支持纯IPV4或双栈服务器，自动识别IPV4地址和IPV6地址，自动识别对应的IP区间</li><li>开独立IPV4的虚拟机时使用vmbr0，使用同宿主机一致的gateway，使用宿主机未绑定的IPV4地址做IPV4/CIDR，当然如果后续使用本套脚本无需关注这点细枝末节的东西</li><li>创建vmbr1(NAT网关)，暂不支持开设带独立IPV6地址的NAT的IPV4虚拟机</li><li>开NAT虚拟机时使用vmbr1，gateway使用<code>172.16.1.1</code>，IPV4/CIDR使用<code>172.16.1.x/24</code>，这里的x不能是1，当然如果后续使用本套脚本无需关注这点细枝末节的东西</li><li>想查看完整设置可以执行<code>cat /etc/network/interfaces</code>查看</li><li>加载iptables并设置回源且允许NAT端口转发</li></ul><p>国际</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;(</span><span style="color:#FFCB6B;">wget</span><span style="color:#C3E88D;"> -qO- --no-check-certificate https://raw.githubusercontent.com/spiritLHLS/pve/main/scripts/build_nat_network.sh</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>国内</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;(</span><span style="color:#FFCB6B;">wget</span><span style="color:#C3E88D;"> -qO- --no-check-certificate https://ghproxy.com/https://raw.githubusercontent.com/spiritLHLS/pve/main/scripts/build_nat_network.sh</span><span style="color:#89DDFF;">)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这一步是可能需要你执行成功几分钟后重启系统，详见脚本最后执行完毕的提示</p></div>',27),p=[o];function n(c,i,r,d,h,C){return a(),l("div",null,p)}const D=s(t,[["render",n]]);export{u as __pageData,D as default};
