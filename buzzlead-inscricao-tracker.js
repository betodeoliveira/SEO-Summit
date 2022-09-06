!(function (e, a, t, i) {
  function n() {
    setTimeout(function () {
      e.bindFields(e.blId, e.trackFields);
    }, 1500);
  }
  if (
    ((e.blDataLayer = e.blDataLayer || {
      nome: void 0,
      email: void 0,
      documento: void 0
    }),
    (e.blId = "BL-630e73c4bc3e051d49be9f47-GG7W"),
    (e.trackFields = [{ nome: "Nome" }, { email: "Email" }]),
    e.Tracker)
  )
    n();
  else {
    var o = a.getElementsByTagName("script")[0],
      r = a.createElement("script");
    (r.async = !0),
      (r.src = "https://static.buzzlead.com.br/tracker.js"),
      (r.onload = n),
      o.parentNode.insertBefore(r, o);
  }
})(window, document);