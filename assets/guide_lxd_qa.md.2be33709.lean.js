import{_ as a,v as e,b as s,R as t}from"./chunks/framework.70afa331.js";const _=JSON.parse('{"title":"解惑","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/lxd_qa.md","filePath":"guide/lxd_qa.md","lastUpdated":1699022699000}'),p={name:"guide/lxd_qa.md"},l=t(`<h1 id="解惑" tabindex="-1">解惑 <a class="header-anchor" href="#解惑" aria-label="Permalink to &quot;解惑&quot;">​</a></h1><h2 id="如果lxd安装后lxc命令显示找不到怎么办" tabindex="-1">如果LXD安装后lxc命令显示找不到怎么办 <a class="header-anchor" href="#如果lxd安装后lxc命令显示找不到怎么办" aria-label="Permalink to &quot;如果LXD安装后lxc命令显示找不到怎么办&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">! lxc -h &gt;/dev/null 2&gt;&amp;1 &amp;&amp; echo &#39;alias lxc=&quot;/snap/bin/lxc&quot;&#39; &gt;&gt; /root/.bashrc &amp;&amp; source /root/.bashrc</span></span>
<span class="line"><span style="color:#A6ACCD;">export PATH=$PATH:/snap/bin</span></span></code></pre></div><p>执行这个命令后尝试</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">lxc -h</span></span></code></pre></div><p>看看lxc命令是否已修复</p><h2 id="开设centos7发现报错cgroupv1不支持怎么办" tabindex="-1">开设centos7发现报错CGroupV1不支持怎么办 <a class="header-anchor" href="#开设centos7发现报错cgroupv1不支持怎么办" aria-label="Permalink to &quot;开设centos7发现报错CGroupV1不支持怎么办&quot;">​</a></h2><p>启用CGroup V1：要在Ubuntu系统上启用CGroup V1，需要编辑内核启动参数。</p><p>请注意，在更改内核启动参数之前，请务必备份重要的数据和设置，以防止意外的问题。</p><p>编辑<code>/etc/default/grub</code>文件，将<code>GRUB_CMDLINE_LINUX_DEFAULT</code>中的参数末尾加上<code>systemd.unified_cgroup_hierarchy=0</code>，如</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">GRUB_CMDLINE_LINUX_DEFAULT=&quot;quiet splash systemd.unified_cgroup_hierarchy=0&quot;</span></span></code></pre></div><p>保存文件并运行以下命令更新GRUB引导。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update-grub</span></span></code></pre></div><p>重启系统，使更改生效</p><p>如果上述更改仍旧不支持开设centos7，那么请使用别的宿主机系统尝试</p><h2 id="目前已验证可开带独立ipv6地址容器的vps商家" tabindex="-1">目前已验证可开带独立IPV6地址容器的VPS商家 <a class="header-anchor" href="#目前已验证可开带独立ipv6地址容器的vps商家" aria-label="Permalink to &quot;目前已验证可开带独立IPV6地址容器的VPS商家&quot;">​</a></h2><p><a href="https://my.kuroit.com/aff.php?aff=5" target="_blank" rel="noreferrer">kuroit</a> 中的 美国凤凰城 regular</p><p><a href="https://t.me/vps_reviews/338" target="_blank" rel="noreferrer">datalix</a> 中的 德国AMD 促销款</p><p><a href="https://billing.luxvps.xyz/aff.php?aff=36" target="_blank" rel="noreferrer">luxvps</a> 中的 德国AMD 促销款</p>`,19),o=[l];function n(r,c,i,d,h,u){return e(),s("div",null,o)}const b=a(p,[["render",n]]);export{_ as __pageData,b as default};
