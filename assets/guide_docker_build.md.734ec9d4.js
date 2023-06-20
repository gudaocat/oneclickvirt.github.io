import{_ as s,o as a,c as l,R as o}from"./chunks/framework.1625126e.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/docker_build.md","filePath":"guide/docker_build.md","lastUpdated":1687223005000}'),n={name:"guide/docker_build.md"},p=o(`<h2 id="单独开设" tabindex="-1">单独开设 <a class="header-anchor" href="#单独开设" aria-label="Permalink to &quot;单独开设&quot;">​</a></h2><p>下载脚本</p><p>国际</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/spiritLHLS/docker/main/scripts/onedocker.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">onedocker.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">onedocker.sh</span></span></code></pre></div><p>国内</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://ghproxy.com/https://raw.githubusercontent.com/spiritLHLS/docker/main/scripts/onedocker.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">onedocker.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">onedocker.sh</span></span></code></pre></div><p>运行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">./onedocker.sh name cpu memory password sshport startport endport system</span></span></code></pre></div><p>目前system仅支持选择alpine或debian，默认是debian</p><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><ul><li>以下为开设的示例容器的信息：<br><code>容器名字</code> - test <code>SSH登录的用户名</code> - root <code>SSH登录的密码</code> - 123456 <code>CPU核数</code> - 1<br><code>内存大小</code> - 512MB <code>SSH端口</code> - 25000 <code>内外网映射端口一致的区间</code> - 34975到35000 <code>系统</code> - debian</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">./onedocker.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">512</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123456</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25000</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">34975</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">35000</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">debian</span></span></code></pre></div><p>删除示例</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span>
<span class="line"><span style="color:#FFCB6B;">ls</span></span></code></pre></div><p>进入示例</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/bin/bash</span></span></code></pre></div><p>要退出容器就执行<code>exit</code>退出。</p><h3 id="查询信息" tabindex="-1">查询信息 <a class="header-anchor" href="#查询信息" aria-label="Permalink to &quot;查询信息&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">容器名字</span></span></code></pre></div><p>输出格式</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">容器名字 SSH端口 登陆的root密码 核数 内存 外网端口起 外网端口止</span></span></code></pre></div><h2 id="批量开设" tabindex="-1">批量开设 <a class="header-anchor" href="#批量开设" aria-label="Permalink to &quot;批量开设&quot;">​</a></h2><ul><li>批量多次运行继承配置生成</li><li>生成多个时为避免SSH连接中断建议在screen中执行</li></ul><p>国际</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/spiritLHLS/docker/main/scripts/dockers.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dockers.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dockers.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dockers.sh</span></span></code></pre></div><p>国内</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://ghproxy.com/https://raw.githubusercontent.com/spiritLHLS/docker/main/scripts/onedocker.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">onedocker.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">onedocker.sh</span></span></code></pre></div><h2 id="查询批量开设的信息" tabindex="-1">查询批量开设的信息 <a class="header-anchor" href="#查询批量开设的信息" aria-label="Permalink to &quot;查询批量开设的信息&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dclog</span></span></code></pre></div><p>输出格式</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">容器名字 SSH端口 登陆的root密码 核数 内存 外网端口起 外网端口止</span></span></code></pre></div><p>一行一个容器对应的信息</p><h2 id="卸载所有docker容器和镜像" tabindex="-1">卸载所有docker容器和镜像 <a class="header-anchor" href="#卸载所有docker容器和镜像" aria-label="Permalink to &quot;卸载所有docker容器和镜像&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> ps -aq</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rmi</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> images -aq</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dclog</span></span>
<span class="line"><span style="color:#FFCB6B;">ls</span></span></code></pre></div>`,34),e=[p];function t(c,r,C,i,y,d){return a(),l("div",null,e)}const h=s(n,[["render",t]]);export{D as __pageData,h as default};
