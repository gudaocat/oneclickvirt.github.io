import{_ as s,v as a,b as e,R as n}from"./chunks/framework.70afa331.js";const u=JSON.parse('{"title":"一些自定义脚本","description":"","frontmatter":{},"headers":[],"relativePath":"guide/pve_custom.md","filePath":"guide/pve_custom.md","lastUpdated":1692073665000}'),o={name:"guide/pve_custom.md"},p=n(`<h1 id="一些自定义脚本" tabindex="-1">一些自定义脚本 <a class="header-anchor" href="#一些自定义脚本" aria-label="Permalink to &quot;一些自定义脚本&quot;">​</a></h1><h2 id="在非debian系统上安装-proxmox-ve-7" tabindex="-1">在非Debian系统上安装 Proxmox VE 7 <a class="header-anchor" href="#在非debian系统上安装-proxmox-ve-7" aria-label="Permalink to &quot;在非Debian系统上安装 Proxmox VE 7&quot;">​</a></h2><p>需要先安装docker</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curl -sSL https://get.docker.com/ | sh</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -L &quot;https://github.com/docker/compose/releases/latest/download/docker-compose-linux-$(uname -m)&quot; -o /usr/local/bin/docker-compose</span></span>
<span class="line"><span style="color:#A6ACCD;">chmod +x /usr/local/bin/docker-compose</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose --version</span></span></code></pre></div><p>然后使用<code>uname -m</code>查询架构，使用对应架构对应区域的镜像配置</p><p>中国境内服务器 - x86_64架构</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker run -idt --network host \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--privileged \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name pve \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--add-host pve:10.13.14.101 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--hostname pve \\</span></span>
<span class="line"><span style="color:#A6ACCD;">spiritlhl/proxmoxve:x86_64</span></span></code></pre></div><p>非中国境内服务器 - x86_64架构</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker run -idt --network host \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--privileged \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name pve \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--add-host pve:10.13.14.101 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--hostname pve \\</span></span>
<span class="line"><span style="color:#A6ACCD;">spiritlhl/proxmoxve:cn_x86_64</span></span></code></pre></div>`,9),l=[p];function t(c,r,i,d,m,h){return a(),e("div",null,l)}const A=s(o,[["render",t]]);export{u as __pageData,A as default};
