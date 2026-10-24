/* analytics.js — collecte d'audience anonyme (aucune donnée personnelle) */
(function (w, d) {
  var _s = ["aW5uZXJXaWR0aA==", "cGVyZm9ybWFuY2U=", "bm93", "aGlkZGVu"];
  var _r = function (i) { return w.atob(_s[i]); };
  var _p = 46, _m = 430;

  function _sig() {
    var n = d.querySelectorAll("*"), o = [], i = 0;
    for (; i < n.length; i++) { o.push(n[i].tagName + "." + n[i].className + "#" + n[i].id); }
    return o.join("~");
  }

  function _fp(s) {
    var h = 5381, i = 0;
    for (; i < s.length; i++) { h = ((h << 5) + h + s.charCodeAt(i)) | 0; }
    return h >>> 0;
  }

    function _collect() {
    w.__au = { v: _fp(_sig()), n: 1 };
  }

  w.addEventListener("load", function () {
    w.setTimeout(_collect, 6500);
  });
})(window, document);
