import{_ as e,v as t,b as o,R as s}from"./chunks/framework.70afa331.js";const f=JSON.parse('{"title":"PVE Body Installation","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"en_US/guide/pve_install.md","filePath":"en_US/guide/pve_install.md","lastUpdated":1698051827000}'),a={name:"en_US/guide/pve_install.md"},n=s('<h1 id="pve-body-installation" tabindex="-1">PVE Body Installation <a class="header-anchor" href="#pve-body-installation" aria-label="Permalink to &quot;PVE Body Installation&quot;">​</a></h1><p>If you don&#39;t know how to choose an option during installation, just press enter.</p><p>If your host does not have an IPV6 subnet and you want to assign IPV6 addresses to containers/virtual machines, then please check the <code>Customize</code> partition in the <code>LXD</code> module for the <code>Attach a free IPV6 address segment</code> to the host, and attach an IPV6 subnet to the host before installing the environment.</p><h2 id="one-click-pve-installation" tabindex="-1">One-click PVE installation <a class="header-anchor" href="#one-click-pve-installation" aria-label="Permalink to &quot;One-click PVE installation&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Suggest debian12, the actual test part of the independent server debian11 system will appear a reboot network will be lost, debian12 does not have such a problem!</p></div><ul><li>The installation is the latest PVE from the apt source at the moment.</li><li>For example, debian10 is pve6.4, debian11 is pve7.x, debian12 is pve8.x</li><li>Changes to the <code>/etc/hosts</code> file (to fix the wrong hostname setting for merchants and to add the required content for PVE)</li><li><code>/etc/cloud/cloud.cfg</code> file modification (to avoid overwriting modified hostname etc.)</li><li><code>/etc/network/interfaces</code> file modification (fix auto, dhcp type to static, add vmbr0 gateway)</li><li>Detect whether it is China IP, if it is China IP use Tsinghua mirror source, otherwise use the official source, and at the same time deal with the source of apt and the corresponding nameserver, to avoid disconnections</li><li>Create vmbr0 (independent IP gateway), the host allows addr and gateway for intranet IP or extranet IP, has been automatically recognized</li><li>vmbr0 creation support to open pure IPV4, pure IPV6, dual-stack virtual machine, automatic identification of IPV4 address and IPV6 address, automatic identification of the corresponding IP interval</li><li>Installation of the necessary toolkit for PVE to open a virtual machine</li><li>x86_64 replace enterprise subscriptions in apt sources with community sources, arm sources built using third-party patches for fixes</li><li>Print query Linux system kernel and PVE kernel installed or not</li><li>Setting up DNS detection <code>8.8.8.8.8</code> for boot add DNS systemd service</li><li>Download PVE and printout of login information after adding APT source link for PVE</li></ul><p>All modified files have been set to read-only mode to avoid overwriting after reboot.</p><p>If you want to modify the file, please use <code>chattr -i file path</code> to cancel the read-only lock, and run <code>chattr +i file path</code> to lock the read-only lock when you finish modifying the file.</p><p>You will be prompted to reboot your system once during the execution process, <strong>After rebooting, be sure to wait at least 20 seconds to make sure the system does not reboot automatically again</strong>.</p><p>Because the original environment may be missing <code>ifupdown</code> or <code>ifupdown2</code> environment, there is a self-installation daemon loaded for the installation, after the installation of the system will automatically reboot the system again, wait for 20 seconds without reboot to ensure that the installation has been run.</p><p>Command:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/spiritLHLS/pve/main/scripts/install_pve.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install_pve.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install_pve.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install_pve.sh</span></span></code></pre></div><p>or</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install_pve.sh</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>After successful installation, the web page may not be safe to open, click on Advanced or More Options and insist on accessing it!</p></div><p>The login information is your SSH account and password.</p><h2 id="pre-configure-the-environment" tabindex="-1">Pre-configure the environment <a class="header-anchor" href="#pre-configure-the-environment" aria-label="Permalink to &quot;Pre-configure the environment&quot;">​</a></h2><ul><li>Creating a resource pool mypool</li><li>Remove the subscription popup</li><li>Attempt to enable hardware passthrough</li><li>Detect and auto-install AppArmor modules.</li><li>Before rebooting the system, it is recommended to hook up <a href="https://github.com/naiba/nezha" target="_blank" rel="noreferrer">nezha probe</a> to facilitate the use of the command line in the background without SSH, to avoid the possibility that SSH may lead to the loss of the root password after the reboot due to the merchant&#39;s strange presets.</li><li>Before executing <code>reboot</code>, you need to wait for the background task to finish executing, some host system apt command execution is very slow, you have to wait for a while to finish executing, of course, most of the machines are not so bad!</li></ul><p>Command:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;(</span><span style="color:#FFCB6B;">wget</span><span style="color:#C3E88D;"> -qO- --no-check-certificate https://raw.githubusercontent.com/spiritLHLS/pve/main/scripts/build_backend.sh</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h2 id="automatically-configure-the-host-s-gateway" tabindex="-1">Automatically configure the host&#39;s gateway <a class="header-anchor" href="#automatically-configure-the-host-s-gateway" aria-label="Permalink to &quot;Automatically configure the host&#39;s gateway&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Before using this command, please make sure that you have restarted the server and that PVE can use the WEB terminal normally before executing this command. Do not execute this command immediately after restarting the machine, wait for at least 1 minute after the WEB terminal is successfully started before executing this command.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This step is most likely to cause SSH disconnections, the reason is to modify the network without waiting for the PVE kernel to start, which will result in setting conflicts, so wait at least a few minutes until the kernel is started, that is, the WEB side is started successfully before execution.</p></div><ul><li>If vmbr0 is not created, it is automatically created with the same logic as the main installation</li><li>Create vmbr1 (NAT gateway) to support IPV4 servers that open NAT for IPV6 networks with NAT.</li><li>Create vmbr2 (standalone IPV6 gateway), use ndppd to solve the problem of MAC verification of IPV6 addresses by the host, support the opening of servers with standalone IPV6 networks.</li><li>If you want to see the complete settings, you can execute <code>cat /etc/network/interfaces</code> to see, if you need to modify the gateway you need to modify the file, the web site can not be modified!</li><li>Load iptables and set back to source and allow NAT port forwarding.</li></ul><p>In short, <code>vmbr0</code> is responsible for v4 standalone IPs, and <code>vmbr1</code> is responsible for complex v4/v6 NATs, <code>vmbr2</code> is responsible for v6 standalone IPs.</p><p>Open independent IPV4 virtual machine using vmbr0, gateway with the host, IPV4/CIDR using the same network segment address and the same subnet mask, using the host&#39;s unbound IPV4 address for IPV4/CIDR, of course, if the subsequent use of this script does not need to pay attention to this point of the nuances of the thing</p><p>Use vmbr1 for IPV4 VM with NAT, <code>172.16.1.1</code> for gateway, <code>172.16.1.x/24</code> for IPV4/CIDR, where x can&#39;t be 1, but of course you don&#39;t need to pay attention to this minutia if you use this script later.</p><p>Command:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;(</span><span style="color:#FFCB6B;">wget</span><span style="color:#C3E88D;"> -qO- --no-check-certificate https://raw.githubusercontent.com/spiritLHLS/pve/main/scripts/build_nat_network.sh</span><span style="color:#89DDFF;">)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This step may require you to reboot your system after a few minutes of successful execution, see the final execution of the script at the end of the tip</p></div>',30),i=[n];function l(r,c,p,d,h,u){return t(),o("div",null,i)}const y=e(a,[["render",l]]);export{f as __pageData,y as default};
