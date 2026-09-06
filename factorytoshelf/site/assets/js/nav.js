/* FactoryToShelf 全站统一导航 — 自包含样式 + 结构 + 交互
   接入方式：任意页面 </body> 前加 <script src="/assets/js/nav.js" defer></script> */
(function () {
  if (document.getElementById("fts-nav")) return;

  var NAV = [
    { t: "首页", h: "/" },
    { t: "供应商入驻", h: "/supplier.html" },
    {
      t: "渠道频道", sub: [
        { t: "Walmart 入驻", h: "/walmart.html" },
        { t: "Whatnot 直播", h: "/whatnot.html" },
        { t: "网红选品", h: "/creators.html" }
      ]
    },
    {
      t: "服务", sub: [
        { t: "品牌洞察", h: "/insights.html" },
        { t: "数据订阅", h: "/data-platforms.html" },
        { t: "品牌增长", h: "/brand-growth.html" },
        { t: "合规与企业", h: "/compliance.html" },
        { t: "系统与工具", h: "/systems.html" },
        { t: "展会服务", h: "/exhibitions.html" },
        { t: "品牌进货架", h: "/retail-shelf.html" }
      ]
    },
    {
      t: "内容", sub: [
        { t: "博客", h: "/blog.html" },
        { t: "播客 Product Hub", h: "/podcast.html" },
        { t: "76 平台指南", h: "/sell-on/" },
        { t: "入驻资质清单", h: "/oem-odm-onboarding-checklist/" },
        { t: "口播文案库", h: "/voice-scripts.html" }
      ]
    }
  ];

  var CSS = ""
    + "#fts-nav{position:sticky;top:0;z-index:1000;background:rgba(11,14,19,.92);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);border-bottom:1px solid rgba(242,238,230,.1);font-family:'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei',system-ui,sans-serif}"
    + "#fts-nav .ftsn-in{max-width:1200px;margin:0 auto;padding:0 24px;height:62px;display:flex;align-items:center;justify-content:space-between;gap:18px}"
    + "#fts-nav .ftsn-brand{display:flex;align-items:center;gap:9px;text-decoration:none!important;font-weight:700;font-size:1.02rem;color:#F2EEE6!important;letter-spacing:.01em;flex:none}"
    + "#fts-nav .ftsn-brand svg{width:24px;height:24px;display:block}"
    + "#fts-nav .ftsn-brand em{font-style:normal;color:#E8A33D}"
    + "#fts-nav .ftsn-links{display:flex;align-items:center;gap:4px;flex:1;justify-content:center}"
    + "#fts-nav .ftsn-item{position:relative}"
    + "#fts-nav .ftsn-a{display:inline-flex;align-items:center;gap:5px;padding:8px 12px;border-radius:7px;font-size:.88rem;color:#A7ADB8;text-decoration:none!important;white-space:nowrap;transition:color .15s,background .15s;cursor:pointer;background:none;border:0;font-family:inherit}"
    + "#fts-nav .ftsn-a:hover,#fts-nav .ftsn-item.open>.ftsn-a{color:#F2EEE6;background:rgba(242,238,230,.06)}"
    + "#fts-nav .ftsn-a.on{color:#E8A33D;font-weight:600}"
    + "#fts-nav .ftsn-caret{width:9px;height:9px;border-right:1.6px solid currentColor;border-bottom:1.6px solid currentColor;transform:rotate(45deg) translateY(-1.5px);transition:transform .18s;flex:none}"
    + "#fts-nav .ftsn-item.open .ftsn-caret{transform:rotate(225deg) translateY(-1px)}"
    + "#fts-nav .ftsn-drop{position:absolute;top:calc(100% + 8px);left:0;min-width:196px;background:#10141B;border:1px solid rgba(242,238,230,.12);border-radius:11px;padding:7px;box-shadow:0 16px 44px rgba(0,0,0,.42);opacity:0;visibility:hidden;transform:translateY(6px);transition:opacity .16s,transform .16s,visibility .16s}"
    + "#fts-nav .ftsn-item.open>.ftsn-drop{opacity:1;visibility:visible;transform:translateY(0)}"
    + "#fts-nav .ftsn-drop a{display:block;padding:8.5px 12px;border-radius:7px;font-size:.86rem;color:#A7ADB8;text-decoration:none!important;white-space:nowrap}"
    + "#fts-nav .ftsn-drop a:hover{color:#F2EEE6;background:rgba(242,238,230,.06)}"
    + "#fts-nav .ftsn-drop a.on{color:#E8A33D}"
    + "#fts-nav .ftsn-cta{display:flex;align-items:center;gap:10px;flex:none}"
    + "#fts-nav .ftsn-btn{display:inline-block;padding:8.5px 18px;border-radius:8px;font-size:.84rem;font-weight:600;text-decoration:none!important;white-space:nowrap;transition:transform .15s,box-shadow .15s}"
    + "#fts-nav .ftsn-btn.p{background:linear-gradient(135deg,#E8A33D,#F4BA60);color:#141414!important}"
    + "#fts-nav .ftsn-btn.p:hover{transform:translateY(-1px);box-shadow:0 6px 18px rgba(232,163,61,.3)}"
    + "#fts-nav .ftsn-toggle{display:none;flex-direction:column;justify-content:center;gap:5px;width:38px;height:38px;padding:9px 8px;background:0 0;border:0;cursor:pointer;flex:none}"
    + "#fts-nav .ftsn-toggle span{display:block;height:2px;width:100%;background:#F2EEE6;border-radius:2px;transition:transform .2s,opacity .2s}"
    + "#fts-nav.open .ftsn-toggle span:nth-child(1){transform:translateY(7px) rotate(45deg)}"
    + "#fts-nav.open .ftsn-toggle span:nth-child(2){opacity:0}"
    + "#fts-nav.open .ftsn-toggle span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}"
    + "#fts-nav .ftsn-mobile{display:none;border-top:1px solid rgba(242,238,230,.08);background:#0B0E13;padding:10px 20px 18px;max-height:calc(100vh - 62px);overflow-y:auto}"
    + "#fts-nav.open .ftsn-mobile{display:block}"
    + "#fts-nav .ftsn-mobile a{display:block;padding:10px 4px;font-size:.92rem;color:#A7ADB8;text-decoration:none!important;border-bottom:1px solid rgba(242,238,230,.06)}"
    + "#fts-nav .ftsn-mobile a.on{color:#E8A33D;font-weight:600}"
    + "#fts-nav .ftsn-mobile a.ftsn-mhead{padding:14px 4px 4px;font-size:.66rem;letter-spacing:.16em;color:#6E7683;text-transform:uppercase;border-bottom:0}"
    + "@media (max-width:960px){"
    + "#fts-nav .ftsn-links,#fts-nav .ftsn-cta .ftsn-btn.g{display:none}"
    + "#fts-nav .ftsn-toggle{display:flex}"
    + "#fts-nav .ftsn-in{height:56px}"
    + "}"
    + "@media (max-width:560px){#fts-nav .ftsn-in{padding:0 16px}#fts-nav .ftsn-cta .ftsn-btn.p{padding:8px 14px;font-size:.8rem}}";

  var LOGO = '<svg viewBox="0 0 32 32" fill="none"><rect x="4" y="18" width="24" height="4" rx="1" fill="#E8A33D"/><rect x="4" y="26" width="24" height="3" rx="1" fill="#E8A33D"/><rect x="8" y="4" width="6" height="12" rx="1" fill="#F2EEE6"/><rect x="18" y="8" width="6" height="8" rx="1" fill="#F2EEE6"/></svg>';

  function norm(p) {
    p = (p || "").split("#")[0].split("?")[0];
    if (/index\.html?$/i.test(p)) p = p.replace(/index\.html?$/i, "");
    if (p.length > 1 && p.slice(-1) === "/") p = p.slice(0, -1);
    return p || "/";
  }
  function matches(itemPath) {
    var cur = norm(location.pathname), target = norm(itemPath);
    if (cur === target) return true;
    if (target !== "/" && cur.indexOf(target + "/") === 0) return true;
    return false;
  }

  var style = document.createElement("style");
  style.textContent = CSS;
  document.head.appendChild(style);

  var nav = document.createElement("nav");
  nav.id = "fts-nav";
  var linksHtml = "";
  NAV.forEach(function (item) {
    if (item.sub) {
      var subs = item.sub.map(function (s) {
        return '<a href="' + s.h + '"' + (matches(s.h) ? ' class="on"' : '') + '>' + s.t + '</a>';
      }).join("");
      var hasOn = item.sub.some(function (s) { return matches(s.h); });
      linksHtml += '<div class="ftsn-item has-sub">'
        + '<button class="ftsn-a' + (hasOn ? ' on' : '') + '" type="button">' + item.t + '<i class="ftsn-caret"></i></button>'
        + '<div class="ftsn-drop">' + subs + '</div></div>';
    } else {
      linksHtml += '<div class="ftsn-item"><a class="ftsn-a' + (matches(item.h) ? ' on' : '') + '" href="' + item.h + '">' + item.t + '</a></div>';
    }
  });

  var mobileHtml = "";
  NAV.forEach(function (item) {
    if (item.sub) {
      mobileHtml += '<a class="ftsn-mhead">' + item.t + '</a>';
      item.sub.forEach(function (s) {
        mobileHtml += '<a href="' + s.h + '"' + (matches(s.h) ? ' class="on"' : '') + '>' + s.t + '</a>';
      });
    } else {
      mobileHtml += '<a href="' + item.h + '"' + (matches(item.h) ? ' class="on"' : '') + '>' + item.t + '</a>';
    }
  });

  nav.innerHTML = '<div class="ftsn-in">'
    + '<a class="ftsn-brand" href="/">' + LOGO + 'Factory<em>ToShelf</em></a>'
    + '<div class="ftsn-links">' + linksHtml + '</div>'
    + '<div class="ftsn-cta">'
    + '<a class="ftsn-btn g" href="/register.html?tab=buyer" style="color:#A7ADB8;font-size:.84rem;text-decoration:none">买家注册</a>'
    + '<a class="ftsn-btn p" href="/register.html?tab=supplier">申请入驻 →</a>'
    + '</div>'
    + '<button class="ftsn-toggle" aria-label="菜单" aria-expanded="false"><span></span><span></span><span></span></button>'
    + '</div>'
    + '<div class="ftsn-mobile">' + mobileHtml + '</div>';

  document.body.insertBefore(nav, document.body.firstChild);

  var toggle = nav.querySelector(".ftsn-toggle");
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll(".has-sub > .ftsn-a").forEach(function (btn) {
    var item = btn.parentElement;
    var enterTimer, leaveTimer;
    function openIt() { clearTimeout(leaveTimer); clearTimeout(enterTimer); enterTimer = setTimeout(function () { item.classList.add("open"); }, 40); }
    function closeIt() { clearTimeout(enterTimer); clearTimeout(leaveTimer); leaveTimer = setTimeout(function () { item.classList.remove("open"); }, 120); }
    item.addEventListener("mouseenter", openIt);
    item.addEventListener("mouseleave", closeIt);
    btn.addEventListener("focus", openIt);
    item.addEventListener("blur", function () { item.classList.remove("open"); }, true);
    btn.addEventListener("click", function (e) {
      if (window.matchMedia("(hover: hover)").matches) return;
      e.preventDefault();
      nav.querySelectorAll(".has-sub.open").forEach(function (o) { if (o !== item) o.classList.remove("open"); });
      item.classList.toggle("open");
    });
  });

  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target)) {
      nav.querySelectorAll(".has-sub.open").forEach(function (o) { o.classList.remove("open"); });
    }
  });

  nav.querySelectorAll('.ftsn-mobile a[href^="/"], .ftsn-mobile a[href^="#"], .ftsn-links a').forEach(function (a) {
    a.addEventListener("click", function () { nav.classList.remove("open"); });
  });
})();
