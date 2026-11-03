/* SDDA site behaviour: theme, mobile menu, ICAI disclaimer, automation flow, ERP before/after, contact form */
(function () {
  "use strict";

  var root = document.documentElement;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
    sget: function (k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    sset: function (k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }
  };

  /* ---------- theme ---------- */
  var saved = store.get("sdda-theme");
  if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);

  function currentTheme() {
    var t = root.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.querySelectorAll(".theme-toggle").forEach(function (b) {
    b.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      store.set("sdda-theme", next);
    });
  });

  /* ---------- mobile menu ---------- */
  var menuBtn = document.querySelector(".menu-btn");
  var scrim = document.querySelector(".nav-scrim");
  function setMenu(open) {
    document.body.classList.toggle("nav-open", open);
    if (menuBtn) menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  }
  if (menuBtn) menuBtn.addEventListener("click", function () { setMenu(!document.body.classList.contains("nav-open")); });
  if (scrim) scrim.addEventListener("click", function () { setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
  document.querySelectorAll(".nav-links a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });

  /* ---------- ICAI disclaimer (once per browser session) ---------- */
  var dlg = document.getElementById("disclaimer");
  function openDisclaimer() { if (dlg) { dlg.classList.add("is-open"); var b = dlg.querySelector("[data-agree]"); if (b) b.focus(); } }
  if (dlg) {
    if (store.sget("sdda-disclaimer") !== "1") openDisclaimer();
    dlg.querySelector("[data-agree]").addEventListener("click", function () {
      store.sset("sdda-disclaimer", "1");
      dlg.classList.remove("is-open");
    });
  }
  document.querySelectorAll("[data-open-disclaimer]").forEach(function (b) { b.addEventListener("click", openDisclaimer); });

  /* ---------- year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Automation Flow: data packets on hover ---------- */
  var flow = document.querySelector(".flow");
  if (flow) {
    var srcRows = flow.querySelectorAll(".flow-card--in .flow-row");
    var dstRows = flow.querySelectorAll(".flow-card--out .flow-row");
    var steps = flow.querySelectorAll(".flow-step");
    var tokens = ["GSTIN ✓", "HSN 9983", "TDS 194J", "₹1,18,000", "3-way ✓", "Dr/Cr ✓", "Ledger", "Ageing"];
    var timer = null, stepTimer = null, stepIdx = 0, ti = 0;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function shoot() {
      if (!srcRows.length || !dstRows.length) return;
      var fr = flow.getBoundingClientRect();
      var s = srcRows[Math.floor(Math.random() * srcRows.length)].getBoundingClientRect();
      var d = dstRows[Math.floor(Math.random() * dstRows.length)].getBoundingClientRect();
      var p = document.createElement("span");
      p.className = "packet";
      p.textContent = tokens[ti++ % tokens.length];
      var x0 = s.right - fr.left - 30, y0 = s.top - fr.top + s.height / 2 - 8;
      var x1 = d.left - fr.left + 10, y1 = d.top - fr.top + d.height / 2 - 8;
      p.style.left = x0 + "px";
      p.style.top = y0 + "px";
      p.style.setProperty("--dx", (x1 - x0) + "px");
      p.style.setProperty("--dy", (y1 - y0) + "px");
      flow.appendChild(p);
      setTimeout(function () { p.remove(); }, 1200);
    }
    function advanceStep() {
      steps.forEach(function (s, i) { s.classList.toggle("is-active", i === stepIdx); });
      stepIdx = (stepIdx + 1) % steps.length;
    }
    function start() {
      if (reduce || timer) return;
      shoot(); timer = setInterval(shoot, 320);
      advanceStep(); stepTimer = setInterval(advanceStep, 700);
    }
    function stop() {
      clearInterval(timer); clearInterval(stepTimer); timer = null; stepTimer = null;
      steps.forEach(function (s) { s.classList.remove("is-active"); });
    }
    flow.addEventListener("mouseenter", start);
    flow.addEventListener("mouseleave", stop);
    flow.addEventListener("focusin", start);
    flow.addEventListener("focusout", stop);
    // touch devices: tap to play for a few seconds
    flow.addEventListener("touchstart", function () { start(); setTimeout(stop, 3500); }, { passive: true });
  }

  /* ---------- ERP Before / After ---------- */
  document.querySelectorAll(".ba").forEach(function (ba) {
    var stage = ba.querySelector(".ba-stage");
    var range = ba.querySelector(".ba-range");
    var tabs = ba.querySelectorAll(".ba-tab");
    var raf = null;

    function setPos(v, animate) {
      v = Math.max(0, Math.min(100, v));
      if (animate) {
        var from = parseFloat(range.value), t0 = null;
        cancelAnimationFrame(raf);
        var stepFn = function (ts) {
          if (!t0) t0 = ts;
          var k = Math.min(1, (ts - t0) / 450);
          var e = 1 - Math.pow(1 - k, 3);
          apply(from + (v - from) * e);
          if (k < 1) raf = requestAnimationFrame(stepFn);
        };
        raf = requestAnimationFrame(stepFn);
      } else apply(v);
    }
    function apply(v) {
      stage.style.setProperty("--pos", v + "%");
      range.value = v;
      range.setAttribute("aria-valuetext", v > 60 ? "Showing mostly legacy accounting" : v < 40 ? "Showing mostly the customised ERP" : "Split view");
      tabs.forEach(function (t) {
        var side = t.getAttribute("data-side");
        var sel = (side === "before" && v >= 50) || (side === "after" && v < 50);
        t.setAttribute("aria-selected", sel ? "true" : "false");
      });
    }
    range.addEventListener("input", function () { cancelAnimationFrame(raf); apply(parseFloat(range.value)); });
    tabs.forEach(function (t) {
      t.addEventListener("click", function () { setPos(t.getAttribute("data-side") === "before" ? 100 : 0, true); });
    });
    apply(parseFloat(range.value || 50));
  });

  /* ---------- contact form → opens email app ---------- */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = form.elements;
      var areas = Array.prototype.slice.call(form.querySelectorAll("input[name=area]:checked")).map(function (i) { return i.value; });
      var body =
        "Name: " + f.name.value + "\n" +
        "Organisation: " + f.org.value + "\n" +
        "Email: " + f.email.value + "\n" +
        "Phone: " + f.phone.value + "\n" +
        "Systems used: " + f.erp.value + "\n" +
        "Areas of interest: " + (areas.join(", ") || "-") + "\n\n" +
        f.message.value;
      var subject = "Website enquiry – " + (areas[0] || "General") + " – " + (f.org.value || f.name.value);
      window.location.href = "mailto:" + form.getAttribute("data-to") + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      var ok = document.getElementById("form-ok");
      if (ok) ok.hidden = false;
    });
  }
})();
