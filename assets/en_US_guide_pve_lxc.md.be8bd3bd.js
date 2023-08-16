import{_ as s,v as a,b as e,R as t}from"./chunks/framework.70afa331.js";const u=JSON.parse('{"title":"LXC Virtualization","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"en_US/guide/pve_lxc.md","filePath":"en_US/guide/pve_lxc.md","lastUpdated":1692192869000}'),n={name:"en_US/guide/pve_lxc.md"},l=t(`<h1 id="lxc-virtualization" tabindex="-1">LXC Virtualization <a class="header-anchor" href="#lxc-virtualization" aria-label="Permalink to &quot;LXC Virtualization&quot;">​</a></h1><h2 id="creating-individual-lxc-containers-for-virtualization" tabindex="-1">Creating Individual LXC Containers for Virtualization <a class="header-anchor" href="#creating-individual-lxc-containers-for-virtualization" aria-label="Permalink to &quot;Creating Individual LXC Containers for Virtualization&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Before initial use, ensure that the current PVE (Proxmox Virtual Environment) is clean and the host machine has not undergone any port mapping, as conflicts in settings could lead to bugs.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Before creating containers, use the &#39;screen&#39; command to run them in the background. This helps to avoid extended creation times that might lead to interruptions due to unstable SSH connections.</p></div><ul><li>Automatically create NAT servers using the default Debian 11 image, or customize the system image as needed.</li><li>Automatically perform internal and external network port mapping, including ports 22, 80, 443, and 25 additional ports with identical numbers for both internal and external networks.</li><li>After generation, allow some time for the virtual machine to configure its internal network and login information. This process takes approximately 3 minutes.</li><li>The default network configuration includes port mappings for 22, 80, 443, and a range of 25 ports for both internal and external networks.</li><li>Customize the number of cores, memory size, disk size, and the storage disk on the host machine for allocation. Ensure that you calculate available resources before creating containers.</li><li>Optionally specify the storage disk location in the command. When not specified, it defaults to the local disk, which is the system disk. Alternatively, you can specify a mount disk as displayed in PVE.</li><li>The created containers are enabled with SSH by default, allowing root login. They are also configured to support nested virtualization for Docker.</li><li>Relevant container information will be stored in the respective container&#39;s notes, accessible through the web interface.</li><li>If the host machine has an IPV6 subnet, IPV6 networking will be automatically attached, but no public IPV6 addresses will be provided.</li></ul><h3 id="usage-instructions" tabindex="-1">Usage Instructions <a class="header-anchor" href="#usage-instructions" aria-label="Permalink to &quot;Usage Instructions&quot;">​</a></h3><p>Download the script</p><p>Command:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/spiritLHLS/pve/main/scripts/buildct.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">buildct.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">buildct.sh</span></span></code></pre></div><ul><li>System Support:</li></ul><ul><li>debian10, debian11</li><li>ubuntu18, ubuntu20, ubuntu22</li><li>centos8, almalinux9</li><li>Other systems may or may not be supported, please test on your own.</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>System parameters are always in lowercase, consisting of the system name concatenated with the version number. For x86_64 systems, you can check available system names and version numbers using <code>pveam available --section system</code>. For ARM systems, you can check supported systems and version numbers at <a href="https://mirror.tuna.tsinghua.edu.cn/lxc-images/images/" target="_blank" rel="noreferrer">https://mirror.tuna.tsinghua.edu.cn/lxc-images/images/</a>, similar to the version numbers obtained by executing <code>pveam available --section system</code>. (Please note that the parameters used in the script are only lowercase English system names concatenated with version numbers.)</p></div><p>The default username for all CTs is root.</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">./buildct.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CTID</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Password</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Number_of_CPU_Cores</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Memory</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Disk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SSH_Port</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Port_80</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Port_443</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Start_Public_Port</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">End_Public_Port</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">System</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Storage_Disk</span></span></code></pre></div><h3 id="test-example" tabindex="-1">Test Example <a class="header-anchor" href="#test-example" aria-label="Permalink to &quot;Test Example&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">./buildct.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">102</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">oneclick123</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">512</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20001</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20002</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20003</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30000</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30025</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">debian11</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">local</span></span></code></pre></div><p>After setting up, you can execute <code>cat ct102</code> to view the information, or check the NOTES section on the web interface.</p><p>Here is the information for the created example CT:</p><p>Please note that &quot;CT&quot; and other technical terms might have specific meanings in different contexts. If &quot;CT&quot; stands for something specific in your domain, you might want to provide additional context for accurate translation.</p><table><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td>VMID</td><td>102</td></tr><tr><td>SSH Username</td><td>root</td></tr><tr><td>SSH Password</td><td>oneclick123</td></tr><tr><td>Number of CPU Cores</td><td>1</td></tr><tr><td>Memory Size</td><td>512MB</td></tr><tr><td>Disk Size</td><td>5G</td></tr><tr><td>SSH Port</td><td>20001</td></tr><tr><td>Port 80</td><td>20002</td></tr><tr><td>Port 443</td><td>20003</td></tr><tr><td>Port Range for NAT</td><td>30000 to 30025</td></tr><tr><td>Operating System</td><td>debian11</td></tr><tr><td>Host Storage Disk</td><td>local</td></tr></tbody></table><h3 id="deletion-examples" tabindex="-1">Deletion Examples <a class="header-anchor" href="#deletion-examples" aria-label="Permalink to &quot;Deletion Examples&quot;">​</a></h3><ul><li>Stop CT</li><li>Delete CT</li><li>Delete Port Mapping</li><li>Restart Network</li><li>Delete Log Files</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pct</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">102</span></span>
<span class="line"><span style="color:#FFCB6B;">pct</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">destroy</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">102</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ct102</span></span>
<span class="line"><span style="color:#FFCB6B;">iptables</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-F</span></span>
<span class="line"><span style="color:#FFCB6B;">iptables</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">filter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-F</span></span>
<span class="line"><span style="color:#FFCB6B;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">networking</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">networking.service</span></span></code></pre></div><h2 id="batch-creation-of-lxc-containers-with-nat" tabindex="-1">Batch Creation of LXC Containers with NAT <a class="header-anchor" href="#batch-creation-of-lxc-containers-with-nat" aria-label="Permalink to &quot;Batch Creation of LXC Containers with NAT&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Make sure the current Proxmox Virtual Environment (PVE) is clean and the host machine has not undergone any port mapping before the first use, as conflicting settings may result in bugs.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Before initiating the creation process, it&#39;s recommended to use the &#39;screen&#39; command to execute the batch creation. This will prevent interruptions due to potential instability in SSH during the extended creation time.</p></div><ul><li>It is possible to run the batch container creation process multiple times. However, please be mindful of allocating enough memory to the host machine to prevent system crashes. For adding swap space, refer to <a href="https://github.com/spiritLHLS/addswap" target="_blank" rel="noreferrer">this link</a>.</li><li>There is a 60-second interval between creating each container to avoid sudden performance bottlenecks.</li><li>Customization options include selecting the number of CPU cores, memory size, disk size, and the storage drive on the host machine. Ensure that you have calculated available resources appropriately before initiating the process.</li><li>The created containers have SSH enabled by default, allowing root login. Additionally, they are configured to support nested virtualization for Docker usage.</li><li>Relevant information about the containers will be stored in the corresponding container&#39;s notes, which can be viewed on the web interface.</li><li>If the host machine has an IPv6 subnet, it will be automatically assigned to the containers. However, public IPv6 addresses will not be provided.</li></ul><p>Command:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/spiritLHLS/pve/main/scripts/create_ct.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create_ct.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create_ct.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create_ct.sh</span></span></code></pre></div><p>After the setup is complete, you can execute <code>cat ctlog</code> to view the information, or check in the NOTES section on the web interface.</p><h3 id="delete-all-ct" tabindex="-1">Delete All CT <a class="header-anchor" href="#delete-all-ct" aria-label="Permalink to &quot;Delete All CT&quot;">​</a></h3><ul><li>Delete all CTs</li><li>Delete port mappings for all NATs</li><li>Restart the network</li><li>Delete log files</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pct</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">awk</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NR&gt;1{print $1}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">xargs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-I</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pct stop {}; pct destroy {}</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ct</span><span style="color:#A6ACCD;">*</span></span>
<span class="line"><span style="color:#FFCB6B;">iptables</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-F</span></span>
<span class="line"><span style="color:#FFCB6B;">iptables</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">filter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-F</span></span>
<span class="line"><span style="color:#FFCB6B;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">networking</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">networking.service</span></span></code></pre></div><h2 id="creating-virtual-machines-with-pure-ipv6-addresses" tabindex="-1">Creating Virtual Machines with Pure IPv6 Addresses <a class="header-anchor" href="#creating-virtual-machines-with-pure-ipv6-addresses" aria-label="Permalink to &quot;Creating Virtual Machines with Pure IPv6 Addresses&quot;">​</a></h2><p>The premise is that the host provides an IPv6 subnet rather than a standalone IPv6 address, and the host does not have MAC address filtering enabled.</p><h3 id="automatic-selection-of-ipv6-addresses-no-manual-configuration-needed" tabindex="-1">Automatic Selection of IPv6 Addresses, No Manual Configuration Needed <a class="header-anchor" href="#automatic-selection-of-ipv6-addresses-no-manual-configuration-needed" aria-label="Permalink to &quot;Automatic Selection of IPv6 Addresses, No Manual Configuration Needed&quot;">​</a></h3><ul><li>Automatically detect available IPv6 ranges and bind the corresponding V6 address based on the container number to the container.</li><li>Relevant system information will be stored in the NOTES of the corresponding container, accessible for viewing on the web interface.</li></ul><p>Command:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/spiritLHLS/pve/main/scripts/buildct_onlyv6.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">buildct_onlyv6.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">buildct_onlyv6.sh</span></span></code></pre></div><h4 id="example-usage" tabindex="-1">Example Usage <a class="header-anchor" href="#example-usage" aria-label="Permalink to &quot;Example Usage&quot;">​</a></h4><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">./buildct_onlyv6.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CTID</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Password</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Number_of_CPU_Cores</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Memory_Size_in_MB</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Disk_Size_in_GB</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Operating_System</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Storage_Disk</span></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">./buildct_onlyv6.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">152</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">oneclick123</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1024</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">debian12</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">local</span></span></code></pre></div><p>The above command signifies the creation of a container with a pure IPV6 address.</p><table><thead><tr><th>Attribute</th><th>Value</th></tr></thead><tbody><tr><td>Container Type</td><td>CT</td></tr><tr><td>CTID</td><td>152</td></tr><tr><td>Username</td><td>root</td></tr><tr><td>Password</td><td>oneclick123</td></tr><tr><td>CPU Cores</td><td>1</td></tr><tr><td>Memory</td><td>1024MB</td></tr><tr><td>Disk</td><td>10G</td></tr><tr><td>Operating System</td><td>debian12</td></tr><tr><td>Storage Disk</td><td>Local Disk (System Disk)</td></tr></tbody></table><h4 id="deletion-example" tabindex="-1">Deletion Example <a class="header-anchor" href="#deletion-example" aria-label="Permalink to &quot;Deletion Example&quot;">​</a></h4><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ct</span><span style="color:#A6ACCD;">*</span></span>
<span class="line"><span style="color:#FFCB6B;">pct</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">152</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">pct</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">destroy</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">152</span></span></code></pre></div>`,46),o=[l];function p(r,i,c,C,d,y){return a(),e("div",null,o)}const A=s(n,[["render",p]]);export{u as __pageData,A as default};
