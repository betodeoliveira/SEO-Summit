!(function (e, t, r, a) {
    var s = "https://static.buzzlead.com.br/widget.js";
    function c() {
      e.fireTrigger(e.blId, e.blEvent);
    }
    (e.blEvent = "subscribe"), (e.blId = a);
    for (var n = !1, i = t.getElementsByTagName("script"), l = i.length; l--; )
      i[l].src == s && (n = !0);
    if (!n) {
      let r = a.split("-")[2];
      var o = t.getElementsByTagName("script")[0],
        g = t.createElement("script");
      (e.campaignId = r), (g.src = s), o.parentNode.insertBefore(g, o);
    }
    if (e.Tracker) c();
    else {
      o = t.getElementsByTagName("script")[0];
      var p = t.createElement("script");
      (p.src = "https://static.buzzlead.com.br/tracker.js"),
        (p.onload = c),
        o.parentNode.insertBefore(p, o);
    }
  })(window, document, 0, "BL-630e73c4bc3e051d49be9f47-GG7W");  