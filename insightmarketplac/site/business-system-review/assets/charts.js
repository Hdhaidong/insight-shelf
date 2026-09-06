(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var faint = style.getPropertyValue('--faint').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // --- Mermaid init (dark theme, deterministic run) ---
  if (window.mermaid) {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
      securityLevel: 'loose',
      themeVariables: {
        background: bg2,
        primaryColor: '#151A23',
        primaryTextColor: ink,
        primaryBorderColor: accent,
        secondaryColor: '#10141B',
        secondaryTextColor: muted,
        tertiaryColor: '#10141B',
        lineColor: muted,
        fontSize: '13px',
        clusterBkg: '#10141B',
        clusterBorder: rule,
        edgeLabelBackground: '#0B0E13'
      }
    });
    mermaid.run();
  }

  // --- Chart 1: service lines by mainline (donut) ---
  var el1 = document.getElementById('chart-lines');
  if (el1) {
    var c1 = echarts.init(el1, null, { renderer: 'svg' });
    c1.setOption({
      animation: false,
      tooltip: { trigger: 'item', appendToBody: true, backgroundColor: '#151A23', borderColor: accent, textStyle: { color: ink } },
      legend: { bottom: 0, textStyle: { color: muted, fontSize: 12 }, itemWidth: 12, itemHeight: 12 },
      series: [{
        name: '七大服务线归属',
        type: 'pie',
        radius: ['42%', '68%'],
        center: ['50%', '44%'],
        itemStyle: { borderColor: bg2, borderWidth: 3 },
        label: { color: ink, fontSize: 12, formatter: '{b}\n{c} 条' },
        labelLine: { lineStyle: { color: muted } },
        data: [
          { value: 3, name: '渠道主线（入驻·合规·展会）', itemStyle: { color: accent } },
          { value: 2, name: '数据主线（洞察·众筹分销）', itemStyle: { color: accent2 } },
          { value: 2, name: '内容主线（品牌增长·系统工具）', itemStyle: { color: muted } }
        ]
      }]
    });
    window.addEventListener('resize', function() { c1.resize(); });
  }

  // --- Chart 2: 76 platforms by region (horizontal bar) ---
  var el2 = document.getElementById('chart-region');
  if (el2) {
    var regions = ['中国（进口跨境）', '俄语区', '澳大利亚 / 新西兰', '日本', '英国', '东南亚', '中东与欧亚', '全球综合', '欧洲', '美国'];
    var counts = [1, 2, 2, 2, 2, 3, 3, 5, 33, 23];
    var c2 = echarts.init(el2, null, { renderer: 'svg' });
    c2.setOption({
      animation: false,
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, appendToBody: true, backgroundColor: '#151A23', borderColor: accent, textStyle: { color: ink } },
      grid: { left: 8, right: 44, top: 16, bottom: 8, containLabel: true },
      xAxis: { type: 'value', minInterval: 1, axisLabel: { color: muted }, splitLine: { lineStyle: { color: rule } } },
      yAxis: { type: 'category', data: regions, axisLabel: { color: ink, fontSize: 12 }, axisLine: { lineStyle: { color: rule } }, axisTick: { show: false } },
      series: [{
        name: '平台数',
        type: 'bar',
        barWidth: 16,
        itemStyle: { color: accent, borderRadius: [0, 3, 3, 0] },
        label: { show: true, position: 'right', color: accent2, fontFamily: 'GeistMono, Consolas, monospace' },
        data: counts,
        markLine: {
          symbol: 'none',
          lineStyle: { color: muted, type: 'dashed' },
          label: { color: muted, formatter: '均值 7.6' },
          data: [{ xAxis: 7.6 }]
        }
      }]
    });
    window.addEventListener('resize', function() { c2.resize(); });
  }
})();
