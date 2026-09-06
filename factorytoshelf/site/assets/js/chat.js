// FactoryToShelf AI 客服
(function () {
  var fab = document.getElementById("chatFab");
  var panel = document.getElementById("chatPanel");
  var body = document.getElementById("chatBody");
  var input = document.getElementById("chatInput");
  var send = document.getElementById("chatSend");
  var quick = document.getElementById("chatQuick");
  var history = [];
  var busy = false;

  function el(cls, text) {
    var d = document.createElement("div");
    d.className = "msg " + cls;
    d.textContent = text;
    return d;
  }
  function scrollBottom() { body.scrollTop = body.scrollHeight; }
  function greet() {
    if (history.length) return;
    var g = el("bot", "您好，我是 Shelf AI 助手 🤖\n关于样品展示、工厂注册、OEM/ODM/OBM 合作、买手对接或服务价格，都可以问我。");
    body.appendChild(g);
    history.push({ role: "assistant", content: g.textContent });
    scrollBottom();
  }
  function ask(q) {
    if (busy || !q.trim()) return;
    busy = true;
    body.appendChild(el("user", q));
    history.push({ role: "user", content: q });
    scrollBottom();
    var typing = el("bot typing", "正在思考…");
    body.appendChild(typing);
    scrollBottom();
    fetch("/api/chat", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ messages: history.slice(-10) }),
    })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        typing.remove();
        var reply = (res.ok ? res.reply : "抱歉，服务开小差了，请稍后再试～") || "请稍后再试";
        body.appendChild(el("bot", reply));
        history.push({ role: "assistant", content: reply });
        busy = false;
        scrollBottom();
      })
      .catch(function () {
        typing.remove();
        body.appendChild(el("bot", "网络异常，请稍后再试。也可以直接注册，顾问会联系您：/register.html"));
        busy = false;
        scrollBottom();
      });
  }

  if (fab && panel) {
    fab.addEventListener("click", function () {
      var show = panel.classList.toggle("show");
      fab.innerHTML = show
        ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg>'
        : '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a8 8 0 01-8 8H5l-2 2V12a8 8 0 0116 0z" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="12" r="0.6" fill="currentColor"/><circle cx="13" cy="12" r="0.6" fill="currentColor"/><circle cx="17" cy="12" r="0.6" fill="currentColor"/></svg>';
      if (show) greet();
    });
    send.addEventListener("click", function () { ask(input.value); input.value = ""; });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { ask(input.value); input.value = ""; }
    });
    if (quick) {
      quick.addEventListener("click", function (e) {
        if (e.target.matches("button")) ask(e.target.getAttribute("data-q"));
      });
    }
  }
})();