import{_ as t,o as a,c as e,R as r}from"./chunks/framework.1625126e.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"en_US/guide/dashboard.md","filePath":"en_US/guide/dashboard.md","lastUpdated":1690516573000}'),o={name:"en_US/guide/dashboard.md"},i=r('<h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><p>需要虚拟化出服务器，你需要：</p><ol><li>一台可以连接公网的服务器( VPS 或 Dedicated Server)，最好能完美访问 Github 的 RAW 页面，部分项目部分组件可能未使用 CDN 加速</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果您位于中国大陆，访问 Github 有困难，请注意配套脚本和项目是否有说明已使用 CDN 加速</p></div><ol start="2"><li>本地可以稳定连接SSH，如果不能稳定连接，请使用<code>screen</code>命令创建窗口后，在窗口内执行命令</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>不会用screen命令的，自行查找相关教程学习</p></div><ol start="3"><li>确保服务器的系统和硬件满足对应项目的要求，详见对应项目说明</li></ol><p><strong>本文档将以VPS作为范例，且该VPS纯净，无原生环境问题，如有必要请重装系统保证初始环境的纯净</strong></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>PVE项目可能造成宿主机出现问题，如果你不会看Bug和修复系统，那么不建议你在生产环境中使用，使用PVE相关脚本请确保宿主机随时可重装系统</p></div><h2 id="项目仓库" tabindex="-1">项目仓库 <a class="header-anchor" href="#项目仓库" aria-label="Permalink to &quot;项目仓库&quot;">​</a></h2><p>欢迎Star和Fork</p><h3 id="pve相关的各种一键脚本" tabindex="-1">PVE相关的各种一键脚本 <a class="header-anchor" href="#pve相关的各种一键脚本" aria-label="Permalink to &quot;PVE相关的各种一键脚本&quot;">​</a></h3><p>可开设KVM虚拟化的虚拟机、LXC虚拟化的容器</p><p><a href="https://github.com/spiritLHLS/pve" target="_blank" rel="noreferrer">https://github.com/spiritLHLS/pve</a></p><p><a href="https://hits.seeyoufarm.com" target="_blank" rel="noreferrer"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FspiritLHLS%2Fpve&amp;count_bg=%2379C83D&amp;title_bg=%23555555&amp;icon=&amp;icon_color=%23E7E7E7&amp;title=hits&amp;edge_flat=false" alt="Hits"></a></p><h3 id="通过lxd-lxc命令批量或单独开设nat服务器以及维护" tabindex="-1">通过LXD/LXC命令批量或单独开设NAT服务器以及维护 <a class="header-anchor" href="#通过lxd-lxc命令批量或单独开设nat服务器以及维护" aria-label="Permalink to &quot;通过LXD/LXC命令批量或单独开设NAT服务器以及维护&quot;">​</a></h3><p>可开设LXC虚拟化的容器</p><p><a href="https://github.com/spiritLHLS/lxc" target="_blank" rel="noreferrer">https://github.com/spiritLHLS/lxc</a></p><p><a href="https://hits.seeyoufarm.com" target="_blank" rel="noreferrer"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FspiritLHLS%2Flxc&amp;count_bg=%2379C83D&amp;title_bg=%23555555&amp;icon=&amp;icon_color=%23E7E7E7&amp;title=hits&amp;edge_flat=false" alt="Hits"></a></p><h3 id="通过docker批量或单独开设nat服务器" tabindex="-1">通过docker批量或单独开设NAT服务器 <a class="header-anchor" href="#通过docker批量或单独开设nat服务器" aria-label="Permalink to &quot;通过docker批量或单独开设NAT服务器&quot;">​</a></h3><p>可开设Docker虚拟化的容器</p><p><a href="https://github.com/spiritLHLS/docker" target="_blank" rel="noreferrer">https://github.com/spiritLHLS/docker</a></p><p><a href="https://hits.seeyoufarm.com" target="_blank" rel="noreferrer"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FspiritLHLS%2Fdocker&amp;count_bg=%2379C83D&amp;title_bg=%23555555&amp;icon=&amp;icon_color=%23E7E7E7&amp;title=hits&amp;edge_flat=false" alt="Hits"></a></p><br><br>',25),s=[i];function c(p,l,h,n,d,m){return a(),e("div",null,s)}const _=t(o,[["render",c]]);export{b as __pageData,_ as default};
