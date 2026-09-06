// FactoryToShelf 主页交互
(function () {
  var S = "http://www.w3.org/2000/svg";
  var STROKE = "#E8A33D";

  // ---------- 样品数据 ----------
  var svgTable = '<svg viewBox="0 0 120 90" fill="none"><rect x="18" y="30" width="84" height="8" rx="2" stroke="' + STROKE + '" stroke-width="2.5"/><path d="M30 38v36M90 38v36M30 54h60" stroke="' + STROKE + '" stroke-width="2.5"/><rect x="44" y="18" width="32" height="12" rx="2" stroke="' + STROKE + '" stroke-width="2" opacity=".6"/></svg>';
  var svgPlanter = '<svg viewBox="0 0 120 90" fill="none"><rect x="30" y="46" width="60" height="30" rx="3" stroke="' + STROKE + '" stroke-width="2.5"/><path d="M40 46V36M60 46V26M80 46V32" stroke="' + STROKE + '" stroke-width="2.5" stroke-linecap="round"/><path d="M60 26c-4-8 2-14 8-12-2 6-4 8-8 12zM60 26c4-8-2-14-8-12 2 6 4 8 8 12z" stroke="' + STROKE + '" stroke-width="2"/><path d="M38 60h44" stroke="' + STROKE + '" stroke-width="2" opacity=".5"/></svg>';
  var svgDumbbell = '<svg viewBox="0 0 120 90" fill="none"><path d="M22 45h76" stroke="' + STROKE + '" stroke-width="4" stroke-linecap="round"/><rect x="30" y="30" width="14" height="30" rx="3" stroke="' + STROKE + '" stroke-width="2.5"/><rect x="76" y="30" width="14" height="30" rx="3" stroke="' + STROKE + '" stroke-width="2.5"/><path d="M40 22v6M80 22v6M40 62v6M80 62v6" stroke="' + STROKE + '" stroke-width="2" opacity=".6"/></svg>';
  var svgFaucet = '<svg viewBox="0 0 120 90" fill="none"><path d="M30 34h34a10 10 0 0110 10v6" stroke="' + STROKE + '" stroke-width="2.5" stroke-linecap="round"/><path d="M74 50h8v14h-8z" fill="' + STROKE + '" opacity=".85"/><rect x="56" y="64" width="10" height="16" rx="2" stroke="' + STROKE + '" stroke-width="2"/><path d="M64 34v-8h10" stroke="' + STROKE + '" stroke-width="2.5" stroke-linecap="round"/><path d="M28 80c6-4 10-10 10-16" stroke="' + STROKE + '" stroke-width="2" opacity=".5"/></svg>';
  var svgLamp = '<svg viewBox="0 0 120 90" fill="none"><path d="M52 30h16l8 18H44z" stroke="' + STROKE + '" stroke-width="2.5"/><path d="M60 48v28M60 76H44M60 76h16" stroke="' + STROKE + '" stroke-width="2.5" stroke-linecap="round"/><path d="M50 22l-4-6M70 22l4-6M40 26l-6-4M80 26l6-4" stroke="' + STROKE + '" stroke-width="2" opacity=".55" stroke-linecap="round"/></svg>';
  var svgCar = '<svg viewBox="0 0 120 90" fill="none"><rect x="24" y="26" width="72" height="40" rx="4" stroke="' + STROKE + '" stroke-width="2.5"/><path d="M36 26v40M60 26v40M84 26v40" stroke="' + STROKE + '" stroke-width="2"/><path d="M24 42h72" stroke="' + STROKE + '" stroke-width="2" opacity=".5"/><circle cx="42" cy="74" r="7" stroke="' + STROKE + '" stroke-width="2.5"/><circle cx="78" cy="74" r="7" stroke="' + STROKE + '" stroke-width="2.5"/></svg>';
  var svgPet = '<svg viewBox="0 0 120 90" fill="none"><ellipse cx="60" cy="52" rx="34" ry="14" stroke="' + STROKE + '" stroke-width="2.5"/><path d="M26 52v14c0 6 8 10 34 10s34-4 34-10V52" stroke="' + STROKE + '" stroke-width="2.5"/><path d="M60 38v-8M46 40l-6-6M74 40l6-6" stroke="' + STROKE + '" stroke-width="2" stroke-linecap="round" opacity=".6"/></svg>';
  var svgToy = '<svg viewBox="0 0 120 90" fill="none"><rect x="30" y="48" width="26" height="26" rx="3" stroke="' + STROKE + '" stroke-width="2.5"/><rect x="60" y="48" width="26" height="26" rx="3" stroke="' + STROKE + '" stroke-width="2.5" opacity=".65"/><rect x="45" y="18" width="26" height="26" rx="3" stroke="' + STROKE + '" stroke-width="2.5"/><circle cx="58" cy="31" r="3" fill="' + STROKE + '"/></svg>';

  var SAMPLES = [
    { name: "电动升降茶几", cat: "家具", svg: svgTable, mode: "ODM", moq: "100 件", lead: "35 天", sup: "铭轩家居", usd: "$49-89" },
    { name: "模块化种植箱", cat: "户外", svg: svgPlanter, mode: "ODM", moq: "500 件", lead: "30 天", sup: "越洋户外", usd: "$19-35" },
    { name: "六角哑铃套装", cat: "健身", svg: svgDumbbell, mode: "OEM", moq: "200 套", lead: "40 天", sup: "海威运动", usd: "$89-199" },
    { name: "抽拉式智能龙头", cat: "厨卫", svg: svgFaucet, mode: "ODM", moq: "300 件", lead: "25 天", sup: "卫浴联盟", usd: "$39-69" },
    { name: "北欧落地灯", cat: "照明", svg: svgLamp, mode: "OBM", moq: "1000 件", lead: "25 天", sup: "晶亮照明", usd: "$29-59" },
    { name: "车载后备箱收纳", cat: "汽配", svg: svgCar, mode: "OEM", moq: "500 件", lead: "30 天", sup: "驰佳汽配", usd: "$15-25" },
    { name: "不锈钢宠物碗架", cat: "宠物", svg: svgPet, mode: "ODM", moq: "300 件", lead: "20 天", sup: "萌宠家居", usd: "$12-22" },
    { name: "磁力积木套装", cat: "玩具", svg: svgToy, mode: "ODM", moq: "1000 套", lead: "30 天", sup: "智玩玩具", usd: "$19-39" },
  ];

  var grid = document.getElementById("sampleGrid");
  if (grid) {
    SAMPLES.forEach(function (s, i) {
      var card = document.createElement("div");
      card.className = "sample-card reveal";
      card.setAttribute("data-cat", s.cat);
      card.style.transitionDelay = (i % 4) * 60 + "ms";
      card.innerHTML =
        '<div class="sample-fig">' + s.svg + "</div>" +
        '<div class="sample-body">' +
        '<h4>' + s.name + '<span class="cat">' + s.cat + "</span></h4>" +
        '<div class="sample-meta"><span>MOQ <b>' + s.moq + "</b></span><span>交期 <b>" + s.lead + "</b></span><span>零售带 <b>" + s.usd + "</b></span></div>" +
        '<div class="sample-foot"><span class="mode">' + s.mode + " · " + s.sup + '</span><button data-sample="' + s.name + '" data-sup="' + s.sup + '">索样 →</button></div>' +
        "</div>";
      grid.appendChild(card);
    });
  }

  // 品类筛选
  var filterBar = document.getElementById("filterBar");
  if (filterBar) {
    filterBar.addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      filterBar.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("active"); });
      btn.classList.add("active");
      var cat = btn.getAttribute("data-cat");
      grid.querySelectorAll(".sample-card").forEach(function (card) {
        var show = cat === "all" || card.getAttribute("data-cat") === cat;
        card.style.display = show ? "" : "none";
      });
    });
  }

  // ---------- 供应商数据 ----------
  var SUPPLIERS = [
    { name: "铭轩家居制造", loc: "广东佛山 · 家具", tags: ["OEM", "ODM", "BSCI", "ISO9001"], specs: [["MOQ", "100 件"], ["交期", "35 天"], ["年限", "12 年"]], line: "已供 Wayfair · Home Depot" },
    { name: "越洋户外用品", loc: "浙江宁波 · 户外庭院", tags: ["OEM", "ODM", "BSCI"], specs: [["MOQ", "500 件"], ["交期", "30 天"], ["年限", "9 年"]], line: "已供 Overstock · Lowe's" },
    { name: "海威运动器材", loc: "山东青岛 · 健身", tags: ["OEM", "SEDEX"], specs: [["MOQ", "200 套"], ["交期", "40 天"], ["年限", "7 年"]], line: "已供 Amazon VC" },
    { name: "晶亮照明科技", loc: "浙江台州 · 照明", tags: ["ODM", "OBM", "ETL", "UL"], specs: [["MOQ", "1000 件"], ["交期", "25 天"], ["年限", "15 年"]], line: "已供 Costco · Target" },
    { name: "萌宠家居用品", loc: "广东广州 · 宠物", tags: ["ODM", "ISO9001"], specs: [["MOQ", "300 件"], ["交期", "20 天"], ["年限", "6 年"]], line: "已供 Chewy · Petco" },
    { name: "智玩玩具厂", loc: "浙江义乌 · 玩具", tags: ["OEM", "ODM", "ICTI", "BSCI"], specs: [["MOQ", "1000 套"], ["交期", "30 天"], ["年限", "11 年"]], line: "已供 Target · Walmart" },
  ];

  var supGrid = document.getElementById("supGrid");
  if (supGrid) {
    SUPPLIERS.forEach(function (s, i) {
      var card = document.createElement("div");
      card.className = "sup-card reveal";
      card.style.transitionDelay = (i % 3) * 80 + "ms";
      card.innerHTML =
        '<div class="sup-top"><div><h4>' + s.name + '</h4><div class="loc">' + s.loc + "</div></div>" +
        '<span class="verify">✓ 已验厂</span></div>' +
        '<div class="sup-tags">' + s.tags.map(function (t, j) { return '<span class="tag-pill' + (j > 1 ? " g" : "") + '">' + t + "</span>"; }).join("") + "</div>" +
        '<div class="sup-specs">' + s.specs.map(function (sp) { return '<div class="spec"><span>' + sp[0] + "</span><b>" + sp[1] + "</b></div>"; }).join("") + "</div>" +
        '<div class="sup-line">📦 ' + s.line + " · <a href='register.html' style='color:var(--accent)'>查看档案 →</a></div>";
      supGrid.appendChild(card);
    });
  }

  // ---------- Nav ----------
  var nav = document.getElementById("nav");
  window.addEventListener("scroll", function () {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 30);
  }, { passive: true });
  var navToggle = document.getElementById("navToggle");
  if (navToggle) navToggle.addEventListener("click", function () { nav.classList.toggle("open"); });

  // ---------- Reveal ----------
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  // ---------- FAQ ----------
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    q.addEventListener("click", function () {
      var open = item.classList.toggle("open");
      a.style.maxHeight = open ? a.scrollHeight + "px" : "0";
    });
  });

  // ---------- 热销榜 24H / 7D 切换 ----------
  var rankTabs = document.getElementById("rankTabs");
  var hotGrid = document.querySelector("#hotlist .hot-grid");
  if (rankTabs && hotGrid) {
    var RANKS = {
      "24h": [
        { name: "氛围感月球灯", cat: "照明", free: true, pub: "16%", plat: "20%", earn: "$5.99", sold: "1,780 件", creators: "1,240", trend: "up", trendTxt: "▲ 58% 环比" },
        { name: "磁吸假睫毛套装", cat: "美妆", free: false, pub: "15%", plat: "18%", earn: "$3.35", sold: "2,910 件", creators: "5,208", trend: "up", trendTxt: "▲ 41% 环比" },
        { name: "桌面静音风扇", cat: "家居小电", free: true, pub: "12%", plat: "15%", earn: "$4.49", sold: "3,420 件", creators: "3,102", trend: "up", trendTxt: "▲ 36% 环比" },
        { name: "迷你筋膜枪", cat: "健身", free: true, pub: "9%", plat: "12%", earn: "$4.78", sold: "1,560 件", creators: "1,907", trend: "up", trendTxt: "▲ 22% 环比" },
        { name: "宠物毛发梳理手套", cat: "宠物", free: true, pub: "11%", plat: "14%", earn: "$2.79", sold: "2,140 件", creators: "4,451", trend: "up", trendTxt: "▲ 12% 环比" },
        { name: "车载磁吸手机支架", cat: "汽配", free: false, pub: "12%", plat: "15%", earn: "$1.95", sold: "1,230 件", creators: "3,564", trend: "up", trendTxt: "▲ 7% 环比" },
        { name: "可折叠收纳脏衣篮", cat: "家居", free: false, pub: "12%", plat: "15%", earn: "$2.98", sold: "1,710 件", creators: "2,880", trend: "down", trendTxt: "▼ 4% 环比" },
        { name: "儿童磁力片积木", cat: "玩具", free: false, pub: "12%", plat: "15%", earn: "$3.13", sold: "900 件", creators: "2,015", trend: "down", trendTxt: "▼ 2% 环比" },
      ],
      "7d": [
        { name: "桌面静音风扇", cat: "家居小电", free: true, pub: "12%", plat: "15%", earn: "$4.49", sold: "2.4 万件", creators: "3,102", trend: "up", trendTxt: "▲ 32% 环比" },
        { name: "磁吸假睫毛套装", cat: "美妆", free: false, pub: "15%", plat: "18%", earn: "$3.35", sold: "1.8 万件", creators: "5,208", trend: "up", trendTxt: "▲ 21% 环比" },
        { name: "宠物毛发梳理手套", cat: "宠物", free: true, pub: "11%", plat: "14%", earn: "$2.79", sold: "1.5 万件", creators: "4,451", trend: "up", trendTxt: "▲ 17% 环比" },
        { name: "可折叠收纳脏衣篮", cat: "家居", free: false, pub: "12%", plat: "15%", earn: "$2.98", sold: "1.2 万件", creators: "2,880", trend: "down", trendTxt: "▼ 6% 环比" },
        { name: "迷你筋膜枪", cat: "健身", free: true, pub: "9%", plat: "12%", earn: "$4.78", sold: "9,800 件", creators: "1,907", trend: "up", trendTxt: "▲ 9% 环比" },
        { name: "车载磁吸手机支架", cat: "汽配", free: false, pub: "12%", plat: "15%", earn: "$1.95", sold: "8,600 件", creators: "3,564", trend: "up", trendTxt: "▲ 4% 环比" },
        { name: "氛围感月球灯", cat: "照明", free: true, pub: "16%", plat: "20%", earn: "$5.99", sold: "7,900 件", creators: "1,240", trend: "up", trendTxt: "▲ 14% 环比" },
        { name: "儿童磁力片积木", cat: "玩具", free: false, pub: "12%", plat: "15%", earn: "$3.13", sold: "6,300 件", creators: "2,015", trend: "down", trendTxt: "▼ 3% 环比" },
      ],
    };
    function renderRank(range) {
      var label = range === "24h" ? "日销" : "周销";
      hotGrid.innerHTML = RANKS[range].map(function (p, i) {
        return '<div class="hot-card">' +
          '<div class="hot-rank">' + (i + 1) + "</div>" +
          '<div class="hot-body"><h5>' + p.name + (p.free ? ' <span class="free-tag">FREE SAMPLE</span>' : "") + "</h5>" +
          '<div class="hot-meta"><span>品类 <b>' + p.cat + "</b></span>" +
          '<span class="comm-vs"><s>公开 ' + p.pub + '</s><i>→</i><b class="yc">平台 ' + p.plat + "</b></span>" +
          '<span class="earn-pill">每单赚 ' + p.earn + "</span>" +
          "<span>" + label + " <b>" + p.sold + "</b></span>" +
          "<span>在带达人 <b>" + p.creators + "</b></span>" +
          '<span class="trend ' + p.trend + '">' + p.trendTxt + "</span></div></div></div>";
      }).join("");
    }
    rankTabs.addEventListener("click", function (e) {
      var btn = e.target.closest(".rank-tab");
      if (!btn) return;
      rankTabs.querySelectorAll(".rank-tab").forEach(function (t) { t.classList.remove("active"); });
      btn.classList.add("active");
      renderRank(btn.getAttribute("data-range"));
    });
    renderRank("7d");
  }

  // ---------- AI 分析器 ----------
  var anBtn = document.getElementById("anBtn");
  if (anBtn) {
    anBtn.addEventListener("click", function () {
      var product = document.getElementById("anProduct").value.trim();
      var category = document.getElementById("anCategory").value;
      if (!product) { document.getElementById("anProduct").focus(); return; }
      anBtn.disabled = true;
      anBtn.textContent = "分析中…";
      fetch("/api/analyze", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ product: product, category: category }),
      })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          anBtn.disabled = false;
          anBtn.textContent = "开始分析";
          if (!res.ok) { alert(res.error || "分析失败，请稍后再试"); return; }
          var d = res.data;
          document.getElementById("anFit").textContent = d.marketFit || "";
          var ul = document.getElementById("anAngles");
          ul.innerHTML = "";
          (d.socialAngles || []).forEach(function (t) {
            var li = document.createElement("li");
            li.textContent = t;
            ul.appendChild(li);
          });
          document.getElementById("anPitch").textContent = d.buyerPitch || "";
          var tags = document.getElementById("anTags");
          tags.innerHTML = "";
          (d.tags || []).forEach(function (t) {
            var span = document.createElement("span");
            span.className = "tag-pill";
            span.textContent = t;
            tags.appendChild(span);
          });
          document.getElementById("anResult").classList.add("show");
        })
        .catch(function () {
          anBtn.disabled = false;
          anBtn.textContent = "开始分析";
          alert("网络异常，请稍后再试");
        });
    });
  }

  // ---------- 选品池三大专区 ----------
  var poolTabs = document.getElementById("poolTabs");
  var poolGrid = document.getElementById("poolGrid");
  if (poolTabs && poolGrid) {
    var POOLS = {
      free: [
        { name: "维 C 提亮精华 30ml", sub: "Glow Vitamin C Serum · 7 天焕亮", brand: "ModernShade 美妆", pub: "25%", plat: "27%", earn: "$6.75", price: "$24.99", sold: "3,420", rate: "4.8", store: "Walmart.com" },
        { name: "记忆棉减压枕", sub: "Ultra Comfort · 曲线承托", brand: "Covered Outdoor", pub: "18%", plat: "21%", earn: "$8.40", price: "$39.99", sold: "5,100", rate: "4.6", store: "Walmart.com" },
        { name: "智能护眼台灯 Pro", sub: "Smart LED Desk Lamp · 无级调光", brand: "Slypadan", pub: "22%", plat: "25%", earn: "$8.75", price: "$34.99", sold: "2,890", rate: "4.7", store: "Walmart.com" },
        { name: "有机抹茶粉 100g", sub: "Organic Matcha · 仪式感冲泡", brand: "ModernShade", pub: "30%", plat: "32%", earn: "$6.40", price: "$19.99", sold: "7,800", rate: "4.9", store: "Walmart.com" },
        { name: "便携榨汁杯 USB-C", sub: "Portable Blender · 一杯随行", brand: "Covered Outdoor", pub: "20%", plat: "23%", earn: "$6.44", price: "$27.99", sold: "6,200", rate: "4.4", store: "Walmart.com" },
        { name: "竹纤维砧板三件套", sub: "Bamboo Cutting Board · 抑菌防霉", brand: "ModernShade", pub: "28%", plat: "30%", earn: "$6.90", price: "$22.99", sold: "4,500", rate: "4.7", store: "Walmart.com" }
      ],
      new: [
        { name: "香薰精油扩香仪", sub: "Aromatherapy Diffuser · 助眠氛围", brand: "ModernShade", pub: "24%", plat: "27%", earn: "$8.90", price: "$32.99", sold: "3,100", rate: "4.6", store: "Walmart.com" },
        { name: "迷你高清投影仪", sub: "Mini Projector HD 1080P · 露营影院", brand: "Slypadan", pub: "20%", plat: "23%", earn: "$20.70", price: "$89.99", sold: "1,800", rate: "4.2", store: "Walmart.com" },
        { name: "防蓝光电竞眼镜", sub: "Anti-Blue Light · 长时佩戴不酸", brand: "Slypadan", pub: "35%", plat: "38%", earn: "$6.08", price: "$15.99", sold: "8,900", rate: "4.3", store: "Walmart.com" },
        { name: "不锈钢保温杯 32oz", sub: "Water Bottle · 24 小时冷保", brand: "Covered Outdoor", pub: "12%", plat: "15%", earn: "$2.85", price: "$18.99", sold: "15,600", rate: "4.8", store: "Walmart.com" },
        { name: "瑜伽垫加宽防滑款", sub: "Yoga Mat Premium · 云感回弹", brand: "Covered Outdoor", pub: "16%", plat: "19%", earn: "$4.94", price: "$25.99", sold: "9,200", rate: "4.5", store: "Walmart.com" },
        { name: "无线蓝牙耳机 X1", sub: "Wireless Earbuds · 32 小时续航", brand: "Slypadan", pub: "15%", plat: "18%", earn: "$5.40", price: "$29.99", sold: "12,400", rate: "4.5", store: "Walmart.com" }
      ],
      clearance: [
        { name: "便携榨汁杯 USB-C", sub: "Portable Blender · 清仓最后 800 件", brand: "Covered Outdoor", pub: "20%", plat: "23%", earn: "$6.44", price: "$19.99", was: "$27.99", sold: "6,200", rate: "4.4", store: "Walmart.com" },
        { name: "防蓝光电竞眼镜", sub: "Anti-Blue Light · 清仓最后 300 件", brand: "Slypadan", pub: "35%", plat: "38%", earn: "$6.08", price: "$12.99", was: "$15.99", sold: "8,900", rate: "4.3", store: "Walmart.com" },
        { name: "北欧风餐边柜", sub: "Sideboard · 样品柜直降", brand: "铭轩家居", pub: "14%", plat: "17%", earn: "$16.99", price: "$99.00", was: "$129.00", sold: "640", rate: "4.5", store: "Wayfair" },
        { name: "折叠户外桌椅套装", sub: "Camping Set · 断码清仓", brand: "越洋户外", pub: "18%", plat: "22%", earn: "$15.40", price: "$69.99", was: "$89.99", sold: "1,200", rate: "4.6", store: "Walmart.com" },
        { name: "宠物自动喂食器", sub: "Smart Feeder · 老款清仓", brand: "萌宠家居", pub: "16%", plat: "20%", earn: "$9.99", price: "$49.99", was: "$59.99", sold: "2,300", rate: "4.4", store: "Chewy" },
        { name: "氛围感月球灯 Pro", sub: "Moon Lamp · 包装升级前清仓", brand: "晶亮照明", pub: "16%", plat: "20%", earn: "$5.99", price: "$24.99", was: "$29.99", sold: "7,900", rate: "4.7", store: "Amazon" }
      ]
    };
    var POOL_TAG = {
      free: '<span class="free-tag">FREE SAMPLE</span>',
      new: '<span class="free-tag nw">NEW</span>',
      clearance: '<span class="free-tag cl">CLEARANCE</span>'
    };
    function renderPool(key) {
      poolGrid.innerHTML = POOLS[key].map(function (p) {
        return '<div class="prod-card">' +
          '<div class="p-top"><h5>' + p.name + '<small>' + p.sub + '</small></h5>' + POOL_TAG[key] + "</div>" +
          '<div class="comm-vs lg"><s>公开 ' + p.pub + '</s><i>vs</i><b class="yc">平台 ' + p.plat + "</b></div>" +
          '<div class="p-meta">' +
          "<span>价格 <b>" + p.price + (p.was ? ' <s class="was">' + p.was + "</s>" : "") + "</b></span>" +
          '<span>每单预估收益 <b class="earn">' + p.earn + "</b></span>" +
          "<span>28 天销量 <b>" + p.sold + "</b></span>" +
          "<span>在售 <b>" + p.store + "</b></span></div>" +
          '<div class="brand-row"><span class="star">★</span>' + p.brand + " · 评分 <b>" + p.rate + " / 5</b></div>" +
          '<a class="btn btn-ghost btn-sm" href="register.html?tab=buyer">加入选品库</a></div>';
      }).join("");
    }
    poolTabs.addEventListener("click", function (e) {
      var btn = e.target.closest(".rank-tab");
      if (!btn) return;
      poolTabs.querySelectorAll(".rank-tab").forEach(function (t) { t.classList.remove("active"); });
      btn.classList.add("active");
      renderPool(btn.getAttribute("data-pool"));
    });
    renderPool("free");
  }

  // ---------- 广告任务市场 ----------
  var taskGrid = document.getElementById("taskGrid");
  if (taskGrid) {
    var TASKS = [
      { title: "春季护肤种草大赛", brand: "ModernShade", bonus: "$50", comm: "30%", joined: 45, max: 100, deadline: "4 月 15 日", desc: "拍摄 60 秒 TikTok / Reels，把维 C 提亮精华融入日常护肤 Routine，展示 7 天使用前后对比。", product: "维 C 提亮精华 30ml" },
      { title: "居家舒适感挑战", brand: "Covered Outdoor", bonus: "$75", comm: "22%", joined: 28, max: 50, deadline: "4 月 20 日", desc: "开箱实测记忆棉减压枕，重点展示回弹曲线与睡感变化，口播引导直播间同款。", product: "记忆棉减压枕" },
      { title: "科技桌面 Setup 巡礼", brand: "Slypadan", bonus: "$60", comm: "25%", joined: 62, max: 80, deadline: "4 月 10 日", desc: "把智能护眼台灯拍进桌面 Setup 视频，演示无级调光与定时模式，收尾挂购物车。", product: "智能护眼台灯 Pro" },
      { title: "健康晨间 Routine", brand: "ModernShade", bonus: "$40", comm: "35%", joined: 89, max: 120, deadline: "5 月 1 日", desc: "把有机抹茶粉拍进晨间仪式感视频：冲泡过程 + 口感实测 + 一周精神状态分享。", product: "有机抹茶粉 100g" },
      { title: "夏日户外好物清单", brand: "Covered Outdoor", bonus: "$100", comm: "20%", joined: 15, max: 60, deadline: "5 月 15 日", desc: "夏日出行场景合辑，便携榨汁杯出镜 15 秒以上，突出 USB-C 快充与静音搅打。", product: "便携榨汁杯 USB-C" },
      { title: "电竞装备真机实测", brand: "Slypadan", bonus: "$80", comm: "28%", joined: 34, max: 60, deadline: "4 月 28 日", desc: "游戏党实测防蓝光电竞眼镜：佩戴对比、眩光测试，评论区置顶购买链接。", product: "防蓝光电竞眼镜" }
    ];
    taskGrid.innerHTML = TASKS.map(function (t) {
      var pct = Math.round(t.joined / t.max * 100);
      return '<div class="task-card">' +
        '<div class="t-top"><div><h5>' + t.title + '</h5><div class="t-brand">' + t.brand + " · " + t.product + '</div></div>' +
        '<div class="task-bonus"><b>' + t.bonus + '</b><span>固定奖金</span></div></div>' +
        "<p>" + t.desc + "</p>" +
        '<div class="task-bar"><i style="width:' + pct + '%"></i></div>' +
        '<div class="task-meta"><span>' + t.joined + " / " + t.max + ' 已报名</span><span>佣金 ' + t.comm + '</span><span>截止 ' + t.deadline + "</span></div>" +
        '<a class="btn btn-primary btn-sm" href="register.html?tab=buyer">接任务 →</a></div>';
    }).join("");
  }

  // ---------- 样品申请流程 ----------
  var flowBody = document.getElementById("flowBody");
  if (flowBody) {
    var FLOW = [
      { creator: "Emily Rodriguez", handle: "@emilyrodz", product: "有机抹茶粉 100g", status: "待审批", cls: "pend", req: "03-25", ship: "—", track: "—" },
      { creator: "Sarah Chen", handle: "@sarahcreates", product: "维 C 提亮精华 30ml", status: "已成交", cls: "done", req: "03-20", ship: "03-23", track: "1Z999AA10123456784" },
      { creator: "Marcus Johnson", handle: "@marcusj", product: "智能护眼台灯 Pro", status: "已寄样", cls: "ship", req: "03-18", ship: "03-21", track: "1Z999AA10123456785" },
      { creator: "David Kim", handle: "@davidkim", product: "无线蓝牙耳机 X1", status: "已签收", cls: "ship", req: "03-10", ship: "03-13", track: "1Z999AA10123456786" },
      { creator: "Aisha Patel", handle: "@aishap", product: "竹纤维砧板三件套", status: "内容已发", cls: "done", req: "03-05", ship: "03-08", track: "1Z999AA10123456787" }
    ];
    flowBody.innerHTML = FLOW.map(function (r) {
      return "<tr><td><b>" + r.creator + '</b> <span class="handle">' + r.handle + "</span></td><td>" + r.product + "</td>" +
        '<td><span class="st-pill ' + r.cls + '">' + r.status + "</span></td>" +
        '<td class="mono">' + r.req + '</td><td class="mono">' + r.ship + '</td><td class="mono">' + r.track + "</td></tr>";
    }).join("");
  }

  // ---------- 创作者中心 ----------
  var hubBody = document.getElementById("hubBody");
  if (hubBody) {
    var CREATORS = [
      { name: "Emily Rodriguez", handle: "@emilyrodz", niche: "家居厨房", followers: "210K", engage: "6.1%", gmv: "$72,300", ad: "$5,600", samples: 18, content: 142 },
      { name: "Aisha Patel", handle: "@aishap", niche: "健康健身", followers: "156K", engage: "5.5%", gmv: "$58,700", ad: "$4,800", samples: 14, content: 98 },
      { name: "Sarah Chen", handle: "@sarahcreates", niche: "美妆护肤", followers: "125K", engage: "4.8%", gmv: "$45,200", ad: "$3,800", samples: 12, content: 89 },
      { name: "Marcus Johnson", handle: "@marcusj", niche: "3C 数码", followers: "89K", engage: "5.2%", gmv: "$38,900", ad: "$4,200", samples: 8, content: 64 },
      { name: "David Kim", handle: "@davidkim", niche: "生活方式", followers: "67K", engage: "3.9%", gmv: "$22,100", ad: "$2,100", samples: 5, content: 35 }
    ];
    hubBody.innerHTML = CREATORS.map(function (c, i) {
      return "<tr><td>" + '<span class="rank-n">' + (i + 1) + "</span><b>" + c.name + '</b> <span class="handle">' + c.handle + "</span></td>" +
        "<td>" + c.niche + '</td><td class="mono">' + c.followers + '</td><td class="mono">' + c.engage + "</td>" +
        '<td><span class="earn-pill">' + c.gmv + '</span></td><td class="mono">' + c.ad + "</td>" +
        '<td class="mono">' + c.samples + " 件 / " + c.content + " 条</td></tr>";
    }).join("");
  }

  // ---------- 索样弹窗 ----------
  var modal = document.getElementById("sampleModal");
  var smMsg = document.getElementById("smMsg");
  function openModal(name, sup) {
    document.getElementById("smTitle").textContent = "索样 · " + name;
    document.getElementById("smTitle").setAttribute("data-product", name);
    document.getElementById("smTitle").setAttribute("data-sup", sup);
    smMsg.className = "form-msg";
    modal.classList.add("show");
  }
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-sample]");
    if (btn && modal) openModal(btn.getAttribute("data-sample"), btn.getAttribute("data-sup"));
  });
  if (modal) {
    document.getElementById("sampleClose").addEventListener("click", function () { modal.classList.remove("show"); });
    modal.addEventListener("click", function (e) { if (e.target === modal) modal.classList.remove("show"); });
    document.getElementById("smSubmit").addEventListener("click", function () {
      var email = document.getElementById("smEmail").value.trim();
      if (!email) { document.getElementById("smEmail").focus(); return; }
      var t = document.getElementById("smTitle");
      fetch("/api/sample-request", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: email,
          product: t.getAttribute("data-product"),
          supplier: t.getAttribute("data-sup"),
          note: document.getElementById("smNote").value,
        }),
      })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          smMsg.className = "form-msg show " + (res.ok ? "ok" : "err");
          smMsg.textContent = res.ok ? "✓ " + res.message : res.error || "提交失败";
          if (res.ok) {
            document.getElementById("smEmail").value = "";
            document.getElementById("smNote").value = "";
            setTimeout(function () { modal.classList.remove("show"); }, 2600);
          }
        });
    });
  }
})();