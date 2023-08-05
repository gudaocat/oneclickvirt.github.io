import{_ as e,v as s,b as t,R as a}from"./chunks/framework.70afa331.js";const u=JSON.parse('{"title":"仓库","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"case/case3.md","filePath":"case/case3.md","lastUpdated":1691227687000}'),p={name:"case/case3.md"},n=a('<h1 id="仓库" tabindex="-1">仓库 <a class="header-anchor" href="#仓库" aria-label="Permalink to &quot;仓库&quot;">​</a></h1><p><a href="https://github.com/spiritLHLS/ecsspeed" target="_blank" rel="noreferrer">https://github.com/spiritLHLS/ecsspeed</a></p><h1 id="ecsspeed" tabindex="-1">ecsspeed <a class="header-anchor" href="#ecsspeed" aria-label="Permalink to &quot;ecsspeed&quot;">​</a></h1><p>自动更新测速服务器节点列表的网络基准测试脚本</p><p>Network benchmarking script that automatically updates the list of speed measurement server nodes</p><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><p>所有组件以及数据均来源于平台或已有的开源项目，无非开源部分，放心食用</p><h3 id="对应-speedtest-net-的自动更新测速服务器id的测速脚本" tabindex="-1">对应 <a href="https://www.speedtest.net/" target="_blank" rel="noreferrer">speedtest.net</a> 的自动更新测速服务器ID的测速脚本 <a class="header-anchor" href="#对应-speedtest-net-的自动更新测速服务器id的测速脚本" aria-label="Permalink to &quot;对应 [speedtest.net](https://www.speedtest.net/) 的自动更新测速服务器ID的测速脚本&quot;">​</a></h3><p>日常推荐使用</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bash &lt;(wget -qO- bash.spiritlhl.net/ecs-net)</span></span></code></pre></div><p>或</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bash &lt;(wget -qO- --no-check-certificate https://github.com/spiritLHLS/ecsspeed/raw/main/script/ecsspeed-net.sh)</span></span></code></pre></div><p>或国内用</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bash &lt;(wget -qO- --no-check-certificate https://ghproxy.com/https://raw.githubusercontent.com/spiritLHLS/ecsspeed/main/script/ecsspeed-net.sh)</span></span></code></pre></div><p>支持测速的架构：i386, x86_64, amd64, arm64, s390x, riscv64, ppc64le, ppc64</p><p>涵盖中国三大运营商、香港、台湾的测速节点，默认的三网测速每个运营商选择本机ping值最低的两个节点测速，详情三网测速才是全测，节点列表大概每7天自动更新一次。</p><p>支持国内服务器测试(有判断是否为国内机器)，但由于国内服务器带宽过小，会很慢，详见初次运行的显示</p><p>当官方CLI安装失败(如罕见的架构或者官方网站访问失败时)自动使用 <a href="https://github.com/showwin/speedtest-go" target="_blank" rel="noreferrer">speedtest-go</a> 作为替代品测速</p><h3 id="对应-speedtest-cn-的自动更新测速服务器id的测速脚本" tabindex="-1">对应 <a href="https://www.speedtest.cn/" target="_blank" rel="noreferrer">speedtest.cn</a> 的自动更新测速服务器ID的测速脚本 <a class="header-anchor" href="#对应-speedtest-cn-的自动更新测速服务器id的测速脚本" aria-label="Permalink to &quot;对应 [speedtest.cn](https://www.speedtest.cn/) 的自动更新测速服务器ID的测速脚本&quot;">​</a></h3><p>单线程测速</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bash &lt;(wget -qO- bash.spiritlhl.net/ecs-cn)</span></span></code></pre></div><p>或</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bash &lt;(wget -qO- --no-check-certificate https://github.com/spiritLHLS/ecsspeed/raw/main/script/ecsspeed-cn.sh)</span></span></code></pre></div><p>或国内用</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bash &lt;(wget -qO- --no-check-certificate https://ghproxy.com/https://raw.githubusercontent.com/spiritLHLS/ecsspeed/main/script/ecsspeed-cn.sh)</span></span></code></pre></div><p>支持测速的架构：i386, x86_64, amd64, arm64, s390x, riscv64, ppc64le, ppc64</p><p>涵盖中国三大运营商、香港、台湾的测速节点，默认的三网测速每个运营商选择本机ping值最低的两个节点测速，详情三网测速才是全测，节点列表每天自动更新一次。</p><p>支持国内服务器测试(有判断是否为国内机器)，但由于国内服务器带宽过小，会很慢，详见初次运行的显示</p><h3 id="自动更新测试服务器列表的三网延迟测试脚本" tabindex="-1">自动更新测试服务器列表的三网延迟测试脚本 <a class="header-anchor" href="#自动更新测试服务器列表的三网延迟测试脚本" aria-label="Permalink to &quot;自动更新测试服务器列表的三网延迟测试脚本&quot;">​</a></h3><p>平均耗时10~15秒</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bash &lt;(wget -qO- bash.spiritlhl.net/ecs-ping)</span></span></code></pre></div><p>或</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bash &lt;(wget -qO- --no-check-certificate https://github.com/spiritLHLS/ecsspeed/raw/main/script/ecsspeed-ping.sh)</span></span></code></pre></div><p>或国内用</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bash &lt;(wget -qO- --no-check-certificate https://ghproxy.com/https://raw.githubusercontent.com/spiritLHLS/ecsspeed/main/script/ecsspeed-ping.sh)</span></span></code></pre></div><p>效果图</p><p><img src="https://github.com/spiritLHLS/ecsspeed/assets/103393591/4c8f39a2-1286-47ae-a397-c46f3792340b" alt="图片"></p><h2 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能&quot;">​</a></h2><ul><li>[x] 自动抓取 <a href="https://www.speedtest.cn/" target="_blank" rel="noreferrer">speedtest.cn</a> 节点信息结合已有信息去重并更新列表数据</li><li>[x] 自动抓取 <a href="https://www.speedtest.net/" target="_blank" rel="noreferrer">speedtest.net</a> 节点信息结合已有信息去重并更新列表数据</li><li>[x] 对应 <a href="https://www.speedtest.net/" target="_blank" rel="noreferrer">speedtest.net</a> 的自动更新测速服务器列表的测速脚本</li><li>[x] 对应 <a href="https://www.speedtest.cn/" target="_blank" rel="noreferrer">speedtest.cn</a> 的自动更新测速服务器列表的测速脚本</li><li>[x] 自动更新测试服务器列表的三网Ping值测试脚本</li></ul><h2 id="cn数据" tabindex="-1">.cn数据 <a class="header-anchor" href="#cn数据" aria-label="Permalink to &quot;.cn数据&quot;">​</a></h2><p>仓库：<a href="https://github.com/spiritLHLS/speedtest.cn-CN-ID" target="_blank" rel="noreferrer">https://github.com/spiritLHLS/speedtest.cn-CN-ID</a></p><h2 id="net数据" tabindex="-1">.net数据 <a class="header-anchor" href="#net数据" aria-label="Permalink to &quot;.net数据&quot;">​</a></h2><p>仓库：<a href="https://github.com/spiritLHLS/speedtest.net-CN-ID" target="_blank" rel="noreferrer">https://github.com/spiritLHLS/speedtest.net-CN-ID</a></p>',43),c=[n];function i(r,l,o,h,d,g){return s(),t("div",null,c)}const m=e(p,[["render",i]]);export{u as __pageData,m as default};
