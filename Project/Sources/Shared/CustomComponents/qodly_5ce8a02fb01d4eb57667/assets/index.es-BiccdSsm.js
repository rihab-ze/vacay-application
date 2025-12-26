import { q as qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-BkIshbwQ.js';
import { q as qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__, $, l as le } from './qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__-DcycRsyb.js';
import { q as qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_2_dom__loadShare__, S as Si } from './qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_2_dom__loadShare__-CeAxijz6.js';
import { R as R5, F as F5, x as x3, Z as Z4, V as V0, d as d4, a as a1, o as o2, J as J2, k as keyframes, w as withEmotionCache, C as C1, u as u4, T as ThemeContext, L as L2 } from './emotion-react.browser.esm-DN4TZuFL.js';
import './qodly_5ce8a02fb01d4eb57667__mf_v__runtimeInit__mf_v__-ONSZE_L_.js';
import './_commonjsHelpers-BFTU3MAI.js';

var define_process_env_default = {};
var PE = Object.defineProperty;
var Ld = (e2) => {
  throw TypeError(e2);
};
var CE = (e2, r, n) => r in e2 ? PE(e2, r, { enumerable: true, configurable: true, writable: true, value: n }) : e2[r] = n;
var tt = (e2, r, n) => CE(e2, typeof r != "symbol" ? r + "" : r, n), Pu = (e2, r, n) => r.has(e2) || Ld("Cannot " + n);
var te = (e2, r, n) => (Pu(e2, r, "read from private field"), n ? n.call(e2) : r.get(e2)), Pt = (e2, r, n) => r.has(e2) ? Ld("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e2) : r.set(e2, n), Ve = (e2, r, n, o) => (Pu(e2, r, "write to private field"), r.set(e2, n), n), en = (e2, r, n) => (Pu(e2, r, "access private method"), n);
const KE = ({ children: e2 }) => qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_2_dom__loadShare__.createPortal(e2, document.querySelector("body"));
var Fd = function(r) {
  return r.reduce(function(n, o) {
    var a = o[0], u = o[1];
    return n[a] = u, n;
  }, {});
}, $d = typeof window < "u" && window.document && window.document.createElement ? qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useLayoutEffect : qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect, Ct = "top", er = "bottom", tr = "right", Rt = "left", Fl = "auto", vo = [Ct, er, tr, Rt], si = "start", uo = "end", GE = "clippingParents", Kh = "viewport", Ri = "popper", VE = "reference", Nd = /* @__PURE__ */ vo.reduce(function(e2, r) {
  return e2.concat([r + "-" + si, r + "-" + uo]);
}, []), Gh = /* @__PURE__ */ [].concat(vo, [Fl]).reduce(function(e2, r) {
  return e2.concat([r, r + "-" + si, r + "-" + uo]);
}, []), YE = "beforeRead", XE = "read", JE = "afterRead", QE = "beforeMain", e_ = "main", t_ = "afterMain", r_ = "beforeWrite", n_ = "write", i_ = "afterWrite", o_ = [YE, XE, JE, QE, e_, t_, r_, n_, i_];
function Er(e2) {
  return e2 ? (e2.nodeName || "").toLowerCase() : null;
}
function Wt(e2) {
  if (e2 == null)
    return window;
  if (e2.toString() !== "[object Window]") {
    var r = e2.ownerDocument;
    return r && r.defaultView || window;
  }
  return e2;
}
function Mn(e2) {
  var r = Wt(e2).Element;
  return e2 instanceof r || e2 instanceof Element;
}
function Qt(e2) {
  var r = Wt(e2).HTMLElement;
  return e2 instanceof r || e2 instanceof HTMLElement;
}
function $l(e2) {
  if (typeof ShadowRoot > "u")
    return false;
  var r = Wt(e2).ShadowRoot;
  return e2 instanceof r || e2 instanceof ShadowRoot;
}
function a_(e2) {
  var r = e2.state;
  Object.keys(r.elements).forEach(function(n) {
    var o = r.styles[n] || {}, a = r.attributes[n] || {}, u = r.elements[n];
    !Qt(u) || !Er(u) || (Object.assign(u.style, o), Object.keys(a).forEach(function(l) {
      var d = a[l];
      d === false ? u.removeAttribute(l) : u.setAttribute(l, d === true ? "" : d);
    }));
  });
}
function s_(e2) {
  var r = e2.state, n = {
    popper: {
      position: r.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(r.elements.popper.style, n.popper), r.styles = n, r.elements.arrow && Object.assign(r.elements.arrow.style, n.arrow), function() {
    Object.keys(r.elements).forEach(function(o) {
      var a = r.elements[o], u = r.attributes[o] || {}, l = Object.keys(r.styles.hasOwnProperty(o) ? r.styles[o] : n[o]), d = l.reduce(function(w, S) {
        return w[S] = "", w;
      }, {});
      !Qt(a) || !Er(a) || (Object.assign(a.style, d), Object.keys(u).forEach(function(w) {
        a.removeAttribute(w);
      }));
    });
  };
}
const u_ = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: a_,
  effect: s_,
  requires: ["computeStyles"]
};
function Sr(e2) {
  return e2.split("-")[0];
}
var Cn = Math.max, Da = Math.min, ui = Math.round;
function hl() {
  var e2 = navigator.userAgentData;
  return e2 != null && e2.brands && Array.isArray(e2.brands) ? e2.brands.map(function(r) {
    return r.brand + "/" + r.version;
  }).join(" ") : navigator.userAgent;
}
function Vh() {
  return !/^((?!chrome|android).)*safari/i.test(hl());
}
function li(e2, r, n) {
  r === void 0 && (r = false), n === void 0 && (n = false);
  var o = e2.getBoundingClientRect(), a = 1, u = 1;
  r && Qt(e2) && (a = e2.offsetWidth > 0 && ui(o.width) / e2.offsetWidth || 1, u = e2.offsetHeight > 0 && ui(o.height) / e2.offsetHeight || 1);
  var l = Mn(e2) ? Wt(e2) : window, d = l.visualViewport, w = !Vh() && n, S = (o.left + (w && d ? d.offsetLeft : 0)) / a, y = (o.top + (w && d ? d.offsetTop : 0)) / u, h = o.width / a, f = o.height / u;
  return {
    width: h,
    height: f,
    top: y,
    right: S + h,
    bottom: y + f,
    left: S,
    x: S,
    y
  };
}
function Nl(e2) {
  var r = li(e2), n = e2.offsetWidth, o = e2.offsetHeight;
  return Math.abs(r.width - n) <= 1 && (n = r.width), Math.abs(r.height - o) <= 1 && (o = r.height), {
    x: e2.offsetLeft,
    y: e2.offsetTop,
    width: n,
    height: o
  };
}
function Yh(e2, r) {
  var n = r.getRootNode && r.getRootNode();
  if (e2.contains(r))
    return true;
  if (n && $l(n)) {
    var o = r;
    do {
      if (o && e2.isSameNode(o))
        return true;
      o = o.parentNode || o.host;
    } while (o);
  }
  return false;
}
function Wr(e2) {
  return Wt(e2).getComputedStyle(e2);
}
function l_(e2) {
  return ["table", "td", "th"].indexOf(Er(e2)) >= 0;
}
function cn(e2) {
  return ((Mn(e2) ? e2.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e2.document
  )) || window.document).documentElement;
}
function Ka(e2) {
  return Er(e2) === "html" ? e2 : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e2.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e2.parentNode || // DOM Element detected
    ($l(e2) ? e2.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    cn(e2)
  );
}
function Dd(e2) {
  return !Qt(e2) || // https://github.com/popperjs/popper-core/issues/837
  Wr(e2).position === "fixed" ? null : e2.offsetParent;
}
function f_(e2) {
  var r = /firefox/i.test(hl()), n = /Trident/i.test(hl());
  if (n && Qt(e2)) {
    var o = Wr(e2);
    if (o.position === "fixed")
      return null;
  }
  var a = Ka(e2);
  for ($l(a) && (a = a.host); Qt(a) && ["html", "body"].indexOf(Er(a)) < 0; ) {
    var u = Wr(a);
    if (u.transform !== "none" || u.perspective !== "none" || u.contain === "paint" || ["transform", "perspective"].indexOf(u.willChange) !== -1 || r && u.willChange === "filter" || r && u.filter && u.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function mo(e2) {
  for (var r = Wt(e2), n = Dd(e2); n && l_(n) && Wr(n).position === "static"; )
    n = Dd(n);
  return n && (Er(n) === "html" || Er(n) === "body" && Wr(n).position === "static") ? r : n || f_(e2) || r;
}
function Dl(e2) {
  return ["top", "bottom"].indexOf(e2) >= 0 ? "x" : "y";
}
function oo(e2, r, n) {
  return Cn(e2, Da(r, n));
}
function c_(e2, r, n) {
  var o = oo(e2, r, n);
  return o > n ? n : o;
}
function Xh() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Jh(e2) {
  return Object.assign({}, Xh(), e2);
}
function Qh(e2, r) {
  return r.reduce(function(n, o) {
    return n[o] = e2, n;
  }, {});
}
var d_ = function(r, n) {
  return r = typeof r == "function" ? r(Object.assign({}, n.rects, {
    placement: n.placement
  })) : r, Jh(typeof r != "number" ? r : Qh(r, vo));
};
function p_(e2) {
  var r, n = e2.state, o = e2.name, a = e2.options, u = n.elements.arrow, l = n.modifiersData.popperOffsets, d = Sr(n.placement), w = Dl(d), S = [Rt, tr].indexOf(d) >= 0, y = S ? "height" : "width";
  if (!(!u || !l)) {
    var h = d_(a.padding, n), f = Nl(u), p = w === "y" ? Ct : Rt, m = w === "y" ? er : tr, c = n.rects.reference[y] + n.rects.reference[w] - l[w] - n.rects.popper[y], g = l[w] - n.rects.reference[w], b = mo(u), _ = b ? w === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, x = c / 2 - g / 2, P = h[p], T = _ - f[y] - h[m], M = _ / 2 - f[y] / 2 + x, B = oo(P, M, T), F = w;
    n.modifiersData[o] = (r = {}, r[F] = B, r.centerOffset = B - M, r);
  }
}
function h_(e2) {
  var r = e2.state, n = e2.options, o = n.element, a = o === void 0 ? "[data-popper-arrow]" : o;
  a != null && (typeof a == "string" && (a = r.elements.popper.querySelector(a), !a) || Yh(r.elements.popper, a) && (r.elements.arrow = a));
}
const v_ = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: p_,
  effect: h_,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function fi(e2) {
  return e2.split("-")[1];
}
var m_ = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function g_(e2, r) {
  var n = e2.x, o = e2.y, a = r.devicePixelRatio || 1;
  return {
    x: ui(n * a) / a || 0,
    y: ui(o * a) / a || 0
  };
}
function kd(e2) {
  var r, n = e2.popper, o = e2.popperRect, a = e2.placement, u = e2.variation, l = e2.offsets, d = e2.position, w = e2.gpuAcceleration, S = e2.adaptive, y = e2.roundOffsets, h = e2.isFixed, f = l.x, p = f === void 0 ? 0 : f, m = l.y, c = m === void 0 ? 0 : m, g = typeof y == "function" ? y({
    x: p,
    y: c
  }) : {
    x: p,
    y: c
  };
  p = g.x, c = g.y;
  var b = l.hasOwnProperty("x"), _ = l.hasOwnProperty("y"), x = Rt, P = Ct, T = window;
  if (S) {
    var M = mo(n), B = "clientHeight", F = "clientWidth";
    if (M === Wt(n) && (M = cn(n), Wr(M).position !== "static" && d === "absolute" && (B = "scrollHeight", F = "scrollWidth")), M = M, a === Ct || (a === Rt || a === tr) && u === uo) {
      P = er;
      var k = h && M === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        M[B]
      );
      c -= k - o.height, c *= w ? 1 : -1;
    }
    if (a === Rt || (a === Ct || a === er) && u === uo) {
      x = tr;
      var Y = h && M === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        M[F]
      );
      p -= Y - o.width, p *= w ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: d
  }, S && m_), L = y === true ? g_({
    x: p,
    y: c
  }, Wt(n)) : {
    x: p,
    y: c
  };
  if (p = L.x, c = L.y, w) {
    var U;
    return Object.assign({}, W, (U = {}, U[P] = _ ? "0" : "", U[x] = b ? "0" : "", U.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + c + "px)" : "translate3d(" + p + "px, " + c + "px, 0)", U));
  }
  return Object.assign({}, W, (r = {}, r[P] = _ ? c + "px" : "", r[x] = b ? p + "px" : "", r.transform = "", r));
}
function y_(e2) {
  var r = e2.state, n = e2.options, o = n.gpuAcceleration, a = o === void 0 ? true : o, u = n.adaptive, l = u === void 0 ? true : u, d = n.roundOffsets, w = d === void 0 ? true : d, S = {
    placement: Sr(r.placement),
    variation: fi(r.placement),
    popper: r.elements.popper,
    popperRect: r.rects.popper,
    gpuAcceleration: a,
    isFixed: r.options.strategy === "fixed"
  };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, kd(Object.assign({}, S, {
    offsets: r.modifiersData.popperOffsets,
    position: r.options.strategy,
    adaptive: l,
    roundOffsets: w
  })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, kd(Object.assign({}, S, {
    offsets: r.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: w
  })))), r.attributes.popper = Object.assign({}, r.attributes.popper, {
    "data-popper-placement": r.placement
  });
}
const w_ = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: y_,
  data: {}
};
var ca = {
  passive: true
};
function b_(e2) {
  var r = e2.state, n = e2.instance, o = e2.options, a = o.scroll, u = a === void 0 ? true : a, l = o.resize, d = l === void 0 ? true : l, w = Wt(r.elements.popper), S = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return u && S.forEach(function(y) {
    y.addEventListener("scroll", n.update, ca);
  }), d && w.addEventListener("resize", n.update, ca), function() {
    u && S.forEach(function(y) {
      y.removeEventListener("scroll", n.update, ca);
    }), d && w.removeEventListener("resize", n.update, ca);
  };
}
const S_ = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {
  },
  effect: b_,
  data: {}
};
var E_ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ra(e2) {
  return e2.replace(/left|right|bottom|top/g, function(r) {
    return E_[r];
  });
}
var __ = {
  start: "end",
  end: "start"
};
function Wd(e2) {
  return e2.replace(/start|end/g, function(r) {
    return __[r];
  });
}
function kl(e2) {
  var r = Wt(e2), n = r.pageXOffset, o = r.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function Wl(e2) {
  return li(cn(e2)).left + kl(e2).scrollLeft;
}
function x_(e2, r) {
  var n = Wt(e2), o = cn(e2), a = n.visualViewport, u = o.clientWidth, l = o.clientHeight, d = 0, w = 0;
  if (a) {
    u = a.width, l = a.height;
    var S = Vh();
    (S || !S && r === "fixed") && (d = a.offsetLeft, w = a.offsetTop);
  }
  return {
    width: u,
    height: l,
    x: d + Wl(e2),
    y: w
  };
}
function O_(e2) {
  var r, n = cn(e2), o = kl(e2), a = (r = e2.ownerDocument) == null ? void 0 : r.body, u = Cn(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), l = Cn(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), d = -o.scrollLeft + Wl(e2), w = -o.scrollTop;
  return Wr(a || n).direction === "rtl" && (d += Cn(n.clientWidth, a ? a.clientWidth : 0) - u), {
    width: u,
    height: l,
    x: d,
    y: w
  };
}
function Ul(e2) {
  var r = Wr(e2), n = r.overflow, o = r.overflowX, a = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + o);
}
function ev(e2) {
  return ["html", "body", "#document"].indexOf(Er(e2)) >= 0 ? e2.ownerDocument.body : Qt(e2) && Ul(e2) ? e2 : ev(Ka(e2));
}
function ao(e2, r) {
  var n;
  r === void 0 && (r = []);
  var o = ev(e2), a = o === ((n = e2.ownerDocument) == null ? void 0 : n.body), u = Wt(o), l = a ? [u].concat(u.visualViewport || [], Ul(o) ? o : []) : o, d = r.concat(l);
  return a ? d : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    d.concat(ao(Ka(l)))
  );
}
function vl(e2) {
  return Object.assign({}, e2, {
    left: e2.x,
    top: e2.y,
    right: e2.x + e2.width,
    bottom: e2.y + e2.height
  });
}
function A_(e2, r) {
  var n = li(e2, false, r === "fixed");
  return n.top = n.top + e2.clientTop, n.left = n.left + e2.clientLeft, n.bottom = n.top + e2.clientHeight, n.right = n.left + e2.clientWidth, n.width = e2.clientWidth, n.height = e2.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Ud(e2, r, n) {
  return r === Kh ? vl(x_(e2, n)) : Mn(r) ? A_(r, n) : vl(O_(cn(e2)));
}
function T_(e2) {
  var r = ao(Ka(e2)), n = ["absolute", "fixed"].indexOf(Wr(e2).position) >= 0, o = n && Qt(e2) ? mo(e2) : e2;
  return Mn(o) ? r.filter(function(a) {
    return Mn(a) && Yh(a, o) && Er(a) !== "body";
  }) : [];
}
function P_(e2, r, n, o) {
  var a = r === "clippingParents" ? T_(e2) : [].concat(r), u = [].concat(a, [n]), l = u[0], d = u.reduce(function(w, S) {
    var y = Ud(e2, S, o);
    return w.top = Cn(y.top, w.top), w.right = Da(y.right, w.right), w.bottom = Da(y.bottom, w.bottom), w.left = Cn(y.left, w.left), w;
  }, Ud(e2, l, o));
  return d.width = d.right - d.left, d.height = d.bottom - d.top, d.x = d.left, d.y = d.top, d;
}
function tv(e2) {
  var r = e2.reference, n = e2.element, o = e2.placement, a = o ? Sr(o) : null, u = o ? fi(o) : null, l = r.x + r.width / 2 - n.width / 2, d = r.y + r.height / 2 - n.height / 2, w;
  switch (a) {
    case Ct:
      w = {
        x: l,
        y: r.y - n.height
      };
      break;
    case er:
      w = {
        x: l,
        y: r.y + r.height
      };
      break;
    case tr:
      w = {
        x: r.x + r.width,
        y: d
      };
      break;
    case Rt:
      w = {
        x: r.x - n.width,
        y: d
      };
      break;
    default:
      w = {
        x: r.x,
        y: r.y
      };
  }
  var S = a ? Dl(a) : null;
  if (S != null) {
    var y = S === "y" ? "height" : "width";
    switch (u) {
      case si:
        w[S] = w[S] - (r[y] / 2 - n[y] / 2);
        break;
      case uo:
        w[S] = w[S] + (r[y] / 2 - n[y] / 2);
        break;
    }
  }
  return w;
}
function lo(e2, r) {
  r === void 0 && (r = {});
  var n = r, o = n.placement, a = o === void 0 ? e2.placement : o, u = n.strategy, l = u === void 0 ? e2.strategy : u, d = n.boundary, w = d === void 0 ? GE : d, S = n.rootBoundary, y = S === void 0 ? Kh : S, h = n.elementContext, f = h === void 0 ? Ri : h, p = n.altBoundary, m = p === void 0 ? false : p, c = n.padding, g = c === void 0 ? 0 : c, b = Jh(typeof g != "number" ? g : Qh(g, vo)), _ = f === Ri ? VE : Ri, x = e2.rects.popper, P = e2.elements[m ? _ : f], T = P_(Mn(P) ? P : P.contextElement || cn(e2.elements.popper), w, y, l), M = li(e2.elements.reference), B = tv({
    reference: M,
    element: x,
    placement: a
  }), F = vl(Object.assign({}, x, B)), k = f === Ri ? F : M, Y = {
    top: T.top - k.top + b.top,
    bottom: k.bottom - T.bottom + b.bottom,
    left: T.left - k.left + b.left,
    right: k.right - T.right + b.right
  }, W = e2.modifiersData.offset;
  if (f === Ri && W) {
    var L = W[a];
    Object.keys(Y).forEach(function(U) {
      var H = [tr, er].indexOf(U) >= 0 ? 1 : -1, R = [Ct, er].indexOf(U) >= 0 ? "y" : "x";
      Y[U] += L[R] * H;
    });
  }
  return Y;
}
function C_(e2, r) {
  r === void 0 && (r = {});
  var n = r, o = n.placement, a = n.boundary, u = n.rootBoundary, l = n.padding, d = n.flipVariations, w = n.allowedAutoPlacements, S = w === void 0 ? Gh : w, y = fi(o), h = y ? d ? Nd : Nd.filter(function(m) {
    return fi(m) === y;
  }) : vo, f = h.filter(function(m) {
    return S.indexOf(m) >= 0;
  });
  f.length === 0 && (f = h);
  var p = f.reduce(function(m, c) {
    return m[c] = lo(e2, {
      placement: c,
      boundary: a,
      rootBoundary: u,
      padding: l
    })[Sr(c)], m;
  }, {});
  return Object.keys(p).sort(function(m, c) {
    return p[m] - p[c];
  });
}
function R_(e2) {
  if (Sr(e2) === Fl)
    return [];
  var r = Ra(e2);
  return [Wd(e2), r, Wd(r)];
}
function M_(e2) {
  var r = e2.state, n = e2.options, o = e2.name;
  if (!r.modifiersData[o]._skip) {
    for (var a = n.mainAxis, u = a === void 0 ? true : a, l = n.altAxis, d = l === void 0 ? true : l, w = n.fallbackPlacements, S = n.padding, y = n.boundary, h = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 ? true : p, c = n.allowedAutoPlacements, g = r.options.placement, b = Sr(g), _ = b === g, x = w || (_ || !m ? [Ra(g)] : R_(g)), P = [g].concat(x).reduce(function(ie, fe) {
      return ie.concat(Sr(fe) === Fl ? C_(r, {
        placement: fe,
        boundary: y,
        rootBoundary: h,
        padding: S,
        flipVariations: m,
        allowedAutoPlacements: c
      }) : fe);
    }, []), T = r.rects.reference, M = r.rects.popper, B = /* @__PURE__ */ new Map(), F = true, k = P[0], Y = 0; Y < P.length; Y++) {
      var W = P[Y], L = Sr(W), U = fi(W) === si, H = [Ct, er].indexOf(L) >= 0, R = H ? "width" : "height", X = lo(r, {
        placement: W,
        boundary: y,
        rootBoundary: h,
        altBoundary: f,
        padding: S
      }), G = H ? U ? tr : Rt : U ? er : Ct;
      T[R] > M[R] && (G = Ra(G));
      var ee = Ra(G), ue = [];
      if (u && ue.push(X[L] <= 0), d && ue.push(X[G] <= 0, X[ee] <= 0), ue.every(function(ie) {
        return ie;
      })) {
        k = W, F = false;
        break;
      }
      B.set(W, ue);
    }
    if (F)
      for (var j = m ? 3 : 1, Q = function(fe) {
        var de = P.find(function(ge) {
          var me = B.get(ge);
          if (me)
            return me.slice(0, fe).every(function(Ee) {
              return Ee;
            });
        });
        if (de)
          return k = de, "break";
      }, oe = j; oe > 0; oe--) {
        var le = Q(oe);
        if (le === "break") break;
      }
    r.placement !== k && (r.modifiersData[o]._skip = true, r.placement = k, r.reset = true);
  }
}
const I_ = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: M_,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function zd(e2, r, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e2.top - r.height - n.y,
    right: e2.right - r.width + n.x,
    bottom: e2.bottom - r.height + n.y,
    left: e2.left - r.width - n.x
  };
}
function Bd(e2) {
  return [Ct, tr, er, Rt].some(function(r) {
    return e2[r] >= 0;
  });
}
function L_(e2) {
  var r = e2.state, n = e2.name, o = r.rects.reference, a = r.rects.popper, u = r.modifiersData.preventOverflow, l = lo(r, {
    elementContext: "reference"
  }), d = lo(r, {
    altBoundary: true
  }), w = zd(l, o), S = zd(d, a, u), y = Bd(w), h = Bd(S);
  r.modifiersData[n] = {
    referenceClippingOffsets: w,
    popperEscapeOffsets: S,
    isReferenceHidden: y,
    hasPopperEscaped: h
  }, r.attributes.popper = Object.assign({}, r.attributes.popper, {
    "data-popper-reference-hidden": y,
    "data-popper-escaped": h
  });
}
const F_ = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: L_
};
function $_(e2, r, n) {
  var o = Sr(e2), a = [Rt, Ct].indexOf(o) >= 0 ? -1 : 1, u = typeof n == "function" ? n(Object.assign({}, r, {
    placement: e2
  })) : n, l = u[0], d = u[1];
  return l = l || 0, d = (d || 0) * a, [Rt, tr].indexOf(o) >= 0 ? {
    x: d,
    y: l
  } : {
    x: l,
    y: d
  };
}
function N_(e2) {
  var r = e2.state, n = e2.options, o = e2.name, a = n.offset, u = a === void 0 ? [0, 0] : a, l = Gh.reduce(function(y, h) {
    return y[h] = $_(h, r.rects, u), y;
  }, {}), d = l[r.placement], w = d.x, S = d.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += w, r.modifiersData.popperOffsets.y += S), r.modifiersData[o] = l;
}
const D_ = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: N_
};
function k_(e2) {
  var r = e2.state, n = e2.name;
  r.modifiersData[n] = tv({
    reference: r.rects.reference,
    element: r.rects.popper,
    placement: r.placement
  });
}
const W_ = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: k_,
  data: {}
};
function U_(e2) {
  return e2 === "x" ? "y" : "x";
}
function z_(e2) {
  var r = e2.state, n = e2.options, o = e2.name, a = n.mainAxis, u = a === void 0 ? true : a, l = n.altAxis, d = l === void 0 ? false : l, w = n.boundary, S = n.rootBoundary, y = n.altBoundary, h = n.padding, f = n.tether, p = f === void 0 ? true : f, m = n.tetherOffset, c = m === void 0 ? 0 : m, g = lo(r, {
    boundary: w,
    rootBoundary: S,
    padding: h,
    altBoundary: y
  }), b = Sr(r.placement), _ = fi(r.placement), x = !_, P = Dl(b), T = U_(P), M = r.modifiersData.popperOffsets, B = r.rects.reference, F = r.rects.popper, k = typeof c == "function" ? c(Object.assign({}, r.rects, {
    placement: r.placement
  })) : c, Y = typeof k == "number" ? {
    mainAxis: k,
    altAxis: k
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, k), W = r.modifiersData.offset ? r.modifiersData.offset[r.placement] : null, L = {
    x: 0,
    y: 0
  };
  if (M) {
    if (u) {
      var U, H = P === "y" ? Ct : Rt, R = P === "y" ? er : tr, X = P === "y" ? "height" : "width", G = M[P], ee = G + g[H], ue = G - g[R], j = p ? -F[X] / 2 : 0, Q = _ === si ? B[X] : F[X], oe = _ === si ? -F[X] : -B[X], le = r.elements.arrow, ie = p && le ? Nl(le) : {
        width: 0,
        height: 0
      }, fe = r.modifiersData["arrow#persistent"] ? r.modifiersData["arrow#persistent"].padding : Xh(), de = fe[H], ge = fe[R], me = oo(0, B[X], ie[X]), Ee = x ? B[X] / 2 - j - me - de - Y.mainAxis : Q - me - de - Y.mainAxis, Oe = x ? -B[X] / 2 + j + me + ge + Y.mainAxis : oe + me + ge + Y.mainAxis, Be = r.elements.arrow && mo(r.elements.arrow), re = Be ? P === "y" ? Be.clientTop || 0 : Be.clientLeft || 0 : 0, ht = (U = W == null ? void 0 : W[P]) != null ? U : 0, at = G + Ee - ht - re, cr = G + Oe - ht, bo = oo(p ? Da(ee, at) : ee, G, p ? Cn(ue, cr) : ue);
      M[P] = bo, L[P] = bo - G;
    }
    if (d) {
      var Ut, So = P === "x" ? Ct : Rt, as = P === "x" ? er : tr, Mt = M[T], vt = T === "y" ? "height" : "width", Br = Mt + g[So], dn = Mt - g[as], hi = [Ct, Rt].indexOf(b) !== -1, Hr = (Ut = W == null ? void 0 : W[T]) != null ? Ut : 0, Eo = hi ? Br : Mt - B[vt] - F[vt] - Hr + Y.altAxis, jr = hi ? Mt + B[vt] + F[vt] - Hr - Y.altAxis : dn, xr = p && hi ? c_(Eo, Mt, jr) : oo(p ? Eo : Br, Mt, p ? jr : dn);
      M[T] = xr, L[T] = xr - Mt;
    }
    r.modifiersData[o] = L;
  }
}
const B_ = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: z_,
  requiresIfExists: ["offset"]
};
function H_(e2) {
  return {
    scrollLeft: e2.scrollLeft,
    scrollTop: e2.scrollTop
  };
}
function j_(e2) {
  return e2 === Wt(e2) || !Qt(e2) ? kl(e2) : H_(e2);
}
function q_(e2) {
  var r = e2.getBoundingClientRect(), n = ui(r.width) / e2.offsetWidth || 1, o = ui(r.height) / e2.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Z_(e2, r, n) {
  n === void 0 && (n = false);
  var o = Qt(r), a = Qt(r) && q_(r), u = cn(r), l = li(e2, a, n), d = {
    scrollLeft: 0,
    scrollTop: 0
  }, w = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((Er(r) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ul(u)) && (d = j_(r)), Qt(r) ? (w = li(r, true), w.x += r.clientLeft, w.y += r.clientTop) : u && (w.x = Wl(u))), {
    x: l.left + d.scrollLeft - w.x,
    y: l.top + d.scrollTop - w.y,
    width: l.width,
    height: l.height
  };
}
function K_(e2) {
  var r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e2.forEach(function(u) {
    r.set(u.name, u);
  });
  function a(u) {
    n.add(u.name);
    var l = [].concat(u.requires || [], u.requiresIfExists || []);
    l.forEach(function(d) {
      if (!n.has(d)) {
        var w = r.get(d);
        w && a(w);
      }
    }), o.push(u);
  }
  return e2.forEach(function(u) {
    n.has(u.name) || a(u);
  }), o;
}
function G_(e2) {
  var r = K_(e2);
  return o_.reduce(function(n, o) {
    return n.concat(r.filter(function(a) {
      return a.phase === o;
    }));
  }, []);
}
function V_(e2) {
  var r;
  return function() {
    return r || (r = new Promise(function(n) {
      Promise.resolve().then(function() {
        r = void 0, n(e2());
      });
    })), r;
  };
}
function Y_(e2) {
  var r = e2.reduce(function(n, o) {
    var a = n[o.name];
    return n[o.name] = a ? Object.assign({}, a, o, {
      options: Object.assign({}, a.options, o.options),
      data: Object.assign({}, a.data, o.data)
    }) : o, n;
  }, {});
  return Object.keys(r).map(function(n) {
    return r[n];
  });
}
var Hd = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function jd() {
  for (var e2 = arguments.length, r = new Array(e2), n = 0; n < e2; n++)
    r[n] = arguments[n];
  return !r.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function X_(e2) {
  e2 === void 0 && (e2 = {});
  var r = e2, n = r.defaultModifiers, o = n === void 0 ? [] : n, a = r.defaultOptions, u = a === void 0 ? Hd : a;
  return function(d, w, S) {
    S === void 0 && (S = u);
    var y = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Hd, u),
      modifiersData: {},
      elements: {
        reference: d,
        popper: w
      },
      attributes: {},
      styles: {}
    }, h = [], f = false, p = {
      state: y,
      setOptions: function(b) {
        var _ = typeof b == "function" ? b(y.options) : b;
        c(), y.options = Object.assign({}, u, y.options, _), y.scrollParents = {
          reference: Mn(d) ? ao(d) : d.contextElement ? ao(d.contextElement) : [],
          popper: ao(w)
        };
        var x = G_(Y_([].concat(o, y.options.modifiers)));
        return y.orderedModifiers = x.filter(function(P) {
          return P.enabled;
        }), m(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var b = y.elements, _ = b.reference, x = b.popper;
          if (jd(_, x)) {
            y.rects = {
              reference: Z_(_, mo(x), y.options.strategy === "fixed"),
              popper: Nl(x)
            }, y.reset = false, y.placement = y.options.placement, y.orderedModifiers.forEach(function(Y) {
              return y.modifiersData[Y.name] = Object.assign({}, Y.data);
            });
            for (var P = 0; P < y.orderedModifiers.length; P++) {
              if (y.reset === true) {
                y.reset = false, P = -1;
                continue;
              }
              var T = y.orderedModifiers[P], M = T.fn, B = T.options, F = B === void 0 ? {} : B, k = T.name;
              typeof M == "function" && (y = M({
                state: y,
                options: F,
                name: k,
                instance: p
              }) || y);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: V_(function() {
        return new Promise(function(g) {
          p.forceUpdate(), g(y);
        });
      }),
      destroy: function() {
        c(), f = true;
      }
    };
    if (!jd(d, w))
      return p;
    p.setOptions(S).then(function(g) {
      !f && S.onFirstUpdate && S.onFirstUpdate(g);
    });
    function m() {
      y.orderedModifiers.forEach(function(g) {
        var b = g.name, _ = g.options, x = _ === void 0 ? {} : _, P = g.effect;
        if (typeof P == "function") {
          var T = P({
            state: y,
            name: b,
            instance: p,
            options: x
          }), M = function() {
          };
          h.push(T || M);
        }
      });
    }
    function c() {
      h.forEach(function(g) {
        return g();
      }), h = [];
    }
    return p;
  };
}
var J_ = [S_, W_, w_, u_, D_, I_, B_, v_, F_], Q_ = /* @__PURE__ */ X_({
  defaultModifiers: J_
}), da = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rv(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
var Ru, qd;
function ex() {
  if (qd) return Ru;
  qd = 1;
  var e2 = typeof Element < "u", r = typeof Map == "function", n = typeof Set == "function", o = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function a(u, l) {
    if (u === l) return true;
    if (u && l && typeof u == "object" && typeof l == "object") {
      if (u.constructor !== l.constructor) return false;
      var d, w, S;
      if (Array.isArray(u)) {
        if (d = u.length, d != l.length) return false;
        for (w = d; w-- !== 0; )
          if (!a(u[w], l[w])) return false;
        return true;
      }
      var y;
      if (r && u instanceof Map && l instanceof Map) {
        if (u.size !== l.size) return false;
        for (y = u.entries(); !(w = y.next()).done; )
          if (!l.has(w.value[0])) return false;
        for (y = u.entries(); !(w = y.next()).done; )
          if (!a(w.value[1], l.get(w.value[0]))) return false;
        return true;
      }
      if (n && u instanceof Set && l instanceof Set) {
        if (u.size !== l.size) return false;
        for (y = u.entries(); !(w = y.next()).done; )
          if (!l.has(w.value[0])) return false;
        return true;
      }
      if (o && ArrayBuffer.isView(u) && ArrayBuffer.isView(l)) {
        if (d = u.length, d != l.length) return false;
        for (w = d; w-- !== 0; )
          if (u[w] !== l[w]) return false;
        return true;
      }
      if (u.constructor === RegExp) return u.source === l.source && u.flags === l.flags;
      if (u.valueOf !== Object.prototype.valueOf && typeof u.valueOf == "function" && typeof l.valueOf == "function") return u.valueOf() === l.valueOf();
      if (u.toString !== Object.prototype.toString && typeof u.toString == "function" && typeof l.toString == "function") return u.toString() === l.toString();
      if (S = Object.keys(u), d = S.length, d !== Object.keys(l).length) return false;
      for (w = d; w-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(l, S[w])) return false;
      if (e2 && u instanceof Element) return false;
      for (w = d; w-- !== 0; )
        if (!((S[w] === "_owner" || S[w] === "__v" || S[w] === "__o") && u.$$typeof) && !a(u[S[w]], l[S[w]]))
          return false;
      return true;
    }
    return u !== u && l !== l;
  }
  return Ru = function(l, d) {
    try {
      return a(l, d);
    } catch (w) {
      if ((w.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), false;
      throw w;
    }
  }, Ru;
}
var tx = ex();
const rx = /* @__PURE__ */ rv(tx);
var nx = [], nv = function(r, n, o) {
  o === void 0 && (o = {});
  var a = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(null), u = {
    onFirstUpdate: o.onFirstUpdate,
    placement: o.placement || "bottom",
    strategy: o.strategy || "absolute",
    modifiers: o.modifiers || nx
  }, l = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState({
    styles: {
      popper: {
        position: u.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), d = l[0], w = l[1], S = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useMemo(function() {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function(p) {
        var m = p.state, c = Object.keys(m.elements);
        qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_2_dom__loadShare__.flushSync(function() {
          w({
            styles: Fd(c.map(function(g) {
              return [g, m.styles[g] || {}];
            })),
            attributes: Fd(c.map(function(g) {
              return [g, m.attributes[g]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), y = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useMemo(function() {
    var f = {
      onFirstUpdate: u.onFirstUpdate,
      placement: u.placement,
      strategy: u.strategy,
      modifiers: [].concat(u.modifiers, [S, {
        name: "applyStyles",
        enabled: false
      }])
    };
    return rx(a.current, f) ? a.current || f : (a.current = f, f);
  }, [u.onFirstUpdate, u.placement, u.strategy, u.modifiers, S]), h = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef();
  return $d(function() {
    h.current && h.current.setOptions(y);
  }, [y]), $d(function() {
    if (!(r == null || n == null)) {
      var f = o.createPopper || Q_, p = f(r, n, y);
      return h.current = p, function() {
        p.destroy(), h.current = null;
      };
    }
  }, [r, n, o.createPopper]), {
    state: h.current ? h.current.state : null,
    styles: d.styles,
    attributes: d.attributes,
    update: h.current ? h.current.update : null,
    forceUpdate: h.current ? h.current.forceUpdate : null
  };
};
const ix = (e2) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "absolute inset-0 z-[1999]", onClick: e2.onClick }), ox = $.forwardRef(({ children: e2, style: r, attributes: n }, o) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "div",
  {
    style: {
      ...r,
      zIndex: 2e3
    },
    ...n,
    ref: o,
    className: "w-60 rounded border rounded border border-grey-50 bg-grey-900 shadow-2xl",
    "data-cy": "dialogBody",
    children: e2
  }
)), vM = ({
  referenceElement: e2,
  placement: r,
  isOpen: n,
  children: o,
  onClose: a
}) => {
  const [u, l] = $.useState(null), { styles: d, attributes: w } = nv(e2, u, {
    placement: r || "bottom-start"
  }), S = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback(() => {
    a && a();
  }, [a]);
  return n ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(KE, { children: [
    /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(ix, { onClick: () => S() }),
    /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      ox,
      {
        ref: l,
        style: d.popper,
        attributes: w.popper,
        children: o
      }
    )
  ] }) : null;
};
var Mu = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Zd;
function iv() {
  return Zd || (Zd = 1, (function(e2) {
    (function() {
      var r = {}.hasOwnProperty;
      function n() {
        for (var u = "", l = 0; l < arguments.length; l++) {
          var d = arguments[l];
          d && (u = a(u, o(d)));
        }
        return u;
      }
      function o(u) {
        if (typeof u == "string" || typeof u == "number")
          return u;
        if (typeof u != "object")
          return "";
        if (Array.isArray(u))
          return n.apply(null, u);
        if (u.toString !== Object.prototype.toString && !u.toString.toString().includes("[native code]"))
          return u.toString();
        var l = "";
        for (var d in u)
          r.call(u, d) && u[d] && (l = a(l, d));
        return l;
      }
      function a(u, l) {
        return l ? u ? u + " " + l : u + l : u;
      }
      e2.exports ? (n.default = n, e2.exports = n) : window.classNames = n;
    })();
  })(Mu)), Mu.exports;
}
var ax = iv();
const Je = /* @__PURE__ */ rv(ax);
function xn() {
  return xn = Object.assign ? Object.assign.bind() : function(e2) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e2[o] = n[o]);
    }
    return e2;
  }, xn.apply(this, arguments);
}
const sx = ["children", "options"], ve = { blockQuote: "0", breakLine: "1", breakThematic: "2", codeBlock: "3", codeFenced: "4", codeInline: "5", footnote: "6", footnoteReference: "7", gfmTask: "8", heading: "9", headingSetext: "10", htmlBlock: "11", htmlComment: "12", htmlSelfClosing: "13", image: "14", link: "15", linkAngleBraceStyleDetector: "16", linkBareUrlDetector: "17", linkMailtoDetector: "18", newlineCoalescer: "19", orderedList: "20", paragraph: "21", ref: "22", refImage: "23", refLink: "24", table: "25", text: "27", textBolded: "28", textEmphasized: "29", textEscaped: "30", textMarked: "31", textStrikethroughed: "32", unorderedList: "33" };
var Kd;
(function(e2) {
  e2[e2.MAX = 0] = "MAX", e2[e2.HIGH = 1] = "HIGH", e2[e2.MED = 2] = "MED", e2[e2.LOW = 3] = "LOW", e2[e2.MIN = 4] = "MIN";
})(Kd || (Kd = {}));
const Gd = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e2, r) => (e2[r.toLowerCase()] = r, e2), { class: "className", for: "htmlFor" }), Vd = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, ux = ["style", "script"], lx = ["src", "href", "data", "formAction", "srcDoc", "action"], fx = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, cx = /mailto:/i, dx = /\n{2,}$/, ov = /^(\s*>[\s\S]*?)(?=\n\n|$)/, px = /^ *> ?/gm, hx = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/, vx = /^ {2,}\n/, mx = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, av = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/, sv = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, gx = /^(`+)((?:\\`|(?!\1)`|[^`])+)\1/, yx = /^(?:\n *)*\n/, wx = /\r\n?/g, bx = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, Sx = /^\[\^([^\]]+)]/, Ex = /\f/g, _x = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/, xx = /^\s*?\[(x|\s)\]/, uv = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, lv = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, fv = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, ml = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, Ox = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, cv = /^<!--[\s\S]*?(?:-->)/, Ax = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, gl = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, Tx = /^\{.*\}$/, Px = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, Cx = /^<([^ >]+@[^ >]+)>/, Rx = /^<([^ >]+:\/[^ >]+)>/, Mx = /-([a-z])?/gi, dv = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, Ix = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, Lx = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, Fx = /^\[([^\]]*)\] ?\[([^\]]*)\]/, $x = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, Nx = /\t/g, Dx = /(^ *\||\| *$)/g, kx = /^ *:-+: *$/, Wx = /^ *:-+ *$/, Ux = /^ *-+: *$/, Ga = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\\\1|[\\s\\S])+?)", zx = new RegExp(`^([*_])\\1${Ga}\\1\\1(?!\\1)`), Bx = new RegExp(`^([*_])${Ga}\\1(?!\\1)`), Hx = new RegExp(`^(==)${Ga}\\1`), jx = new RegExp(`^(~~)${Ga}\\1`), qx = /^\\([^0-9A-Za-z\s])/, Yd = /\\([^0-9A-Za-z\s])/g, Zx = /^([\s\S](?:(?!  |[0-9]\.)[^=*_~\-\n<`\\\[!])*)/, Kx = /^\n+/, Gx = /^([ \t]*)/, Vx = /\\([^\\])/g, Yx = /(?:^|\n)( *)$/, zl = "(?:\\d+\\.)", Bl = "(?:[*+-])";
function pv(e2) {
  return "( *)(" + (e2 === 1 ? zl : Bl) + ") +";
}
const hv = pv(1), vv = pv(2);
function mv(e2) {
  return new RegExp("^" + (e2 === 1 ? hv : vv));
}
const Xx = mv(1), Jx = mv(2);
function gv(e2) {
  return new RegExp("^" + (e2 === 1 ? hv : vv) + "[^\\n]*(?:\\n(?!\\1" + (e2 === 1 ? zl : Bl) + " )[^\\n]*)*(\\n|$)", "gm");
}
const Qx = gv(1), eO = gv(2);
function yv(e2) {
  const r = e2 === 1 ? zl : Bl;
  return new RegExp("^( *)(" + r + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + r + " (?!" + r + " ))\\n*|\\s*\\n*$)");
}
const wv = yv(1), bv = yv(2);
function Xd(e2, r) {
  const n = r === 1, o = n ? wv : bv, a = n ? Qx : eO, u = n ? Xx : Jx;
  return { match: ci(function(l, d) {
    const w = Yx.exec(d.prevCapture);
    return w && (d.list || !d.inline && !d.simple) ? o.exec(l = w[1] + l) : null;
  }), order: 1, parse(l, d, w) {
    const S = n ? +l[2] : void 0, y = l[0].replace(dx, `
`).match(a);
    let h = false;
    return { items: y.map(function(f, p) {
      const m = u.exec(f)[0].length, c = new RegExp("^ {1," + m + "}", "gm"), g = f.replace(c, "").replace(u, ""), b = p === y.length - 1, _ = g.indexOf(`

`) !== -1 || b && h;
      h = _;
      const x = w.inline, P = w.list;
      let T;
      w.list = true, _ ? (w.inline = false, T = fo(g) + `

`) : (w.inline = true, T = fo(g));
      const M = d(T, w);
      return w.inline = x, w.list = P, M;
    }), ordered: n, start: S };
  }, render: (l, d, w) => e2(l.ordered ? "ol" : "ul", { key: w.key, start: l.type === ve.orderedList ? l.start : void 0 }, l.items.map(function(S, y) {
    return e2("li", { key: y }, d(S, w));
  })) };
}
const tO = new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), rO = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, Sv = [ov, av, sv, uv, fv, lv, dv, wv, bv], nO = [...Sv, /^[^\n]+(?:  \n|\n{2,})/, ml, cv, gl];
function fo(e2) {
  let r = e2.length;
  for (; r > 0 && e2[r - 1] <= " "; ) r--;
  return e2.slice(0, r);
}
function Mi(e2) {
  return e2.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function iO(e2) {
  return Ux.test(e2) ? "right" : kx.test(e2) ? "center" : Wx.test(e2) ? "left" : null;
}
function Jd(e2, r, n, o) {
  const a = n.inTable;
  n.inTable = true;
  let u = [[]], l = "";
  function d() {
    if (!l) return;
    const w = u[u.length - 1];
    w.push.apply(w, r(l, n)), l = "";
  }
  return e2.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((w, S, y) => {
    w.trim() === "|" && (d(), o) ? S !== 0 && S !== y.length - 1 && u.push([]) : l += w;
  }), d(), n.inTable = a, u;
}
function oO(e2, r, n) {
  n.inline = true;
  const o = e2[2] ? e2[2].replace(Dx, "").split("|").map(iO) : [], a = e2[3] ? (function(l, d, w) {
    return l.trim().split(`
`).map(function(S) {
      return Jd(S, d, w, true);
    });
  })(e2[3], r, n) : [], u = Jd(e2[1], r, n, !!a.length);
  return n.inline = false, a.length ? { align: o, cells: a, header: u, type: ve.table } : { children: u, type: ve.paragraph };
}
function Qd(e2, r) {
  return e2.align[r] == null ? {} : { textAlign: e2.align[r] };
}
function ci(e2) {
  return e2.inline = 1, e2;
}
function tn(e2) {
  return ci(function(r, n) {
    return n.inline ? e2.exec(r) : null;
  });
}
function rn(e2) {
  return ci(function(r, n) {
    return n.inline || n.simple ? e2.exec(r) : null;
  });
}
function Fr(e2) {
  return function(r, n) {
    return n.inline || n.simple ? null : e2.exec(r);
  };
}
function Ii(e2) {
  return ci(function(r) {
    return e2.exec(r);
  });
}
function aO(e2, r) {
  if (r.inline || r.simple) return null;
  let n = "";
  e2.split(`
`).every((a) => (a += `
`, !Sv.some((u) => u.test(a)) && (n += a, !!a.trim())));
  const o = fo(n);
  return o == "" ? null : [n, , o];
}
const sO = /(javascript|vbscript|data(?!:image)):/i;
function uO(e2) {
  try {
    const r = decodeURIComponent(e2).replace(/[^A-Za-z0-9/:]/g, "");
    if (sO.test(r)) return null;
  } catch {
    return null;
  }
  return e2;
}
function ep(e2) {
  return e2.replace(Vx, "$1");
}
function Ma(e2, r, n) {
  const o = n.inline || false, a = n.simple || false;
  n.inline = true, n.simple = true;
  const u = e2(r, n);
  return n.inline = o, n.simple = a, u;
}
function lO(e2, r, n) {
  const o = n.inline || false, a = n.simple || false;
  n.inline = false, n.simple = true;
  const u = e2(r, n);
  return n.inline = o, n.simple = a, u;
}
function fO(e2, r, n) {
  const o = n.inline || false;
  n.inline = false;
  const a = e2(r, n);
  return n.inline = o, a;
}
const Iu = (e2, r, n) => ({ children: Ma(r, e2[2], n) });
function Lu() {
  return {};
}
function Fu() {
  return null;
}
function cO(...e2) {
  return e2.filter(Boolean).join(" ");
}
function $u(e2, r, n) {
  let o = e2;
  const a = r.split(".");
  for (; a.length && (o = o[a[0]], o !== void 0); ) a.shift();
  return o || n;
}
function dO(e2 = "", r = {}) {
  function n(f, p, ...m) {
    const c = $u(r.overrides, `${f}.props`, {});
    return r.createElement((function(g, b) {
      const _ = $u(b, g);
      return _ ? typeof _ == "function" || typeof _ == "object" && "render" in _ ? _ : $u(b, `${g}.component`, g) : g;
    })(f, r.overrides), xn({}, p, c, { className: cO(p == null ? void 0 : p.className, c.className) || void 0 }), ...m);
  }
  function o(f) {
    f = f.replace(_x, "");
    let p = false;
    r.forceInline ? p = true : r.forceBlock || (p = $x.test(f) === false);
    const m = S(w(p ? f : `${fo(f).replace(Kx, "")}

`, { inline: p }));
    for (; typeof m[m.length - 1] == "string" && !m[m.length - 1].trim(); ) m.pop();
    if (r.wrapper === null) return m;
    const c = r.wrapper || (p ? "span" : "div");
    let g;
    if (m.length > 1 || r.forceWrapper) g = m;
    else {
      if (m.length === 1) return g = m[0], typeof g == "string" ? n("span", { key: "outer" }, g) : g;
      g = null;
    }
    return r.createElement(c, { key: "outer" }, g);
  }
  function a(f, p) {
    const m = p.match(fx);
    return m ? m.reduce(function(c, g) {
      const b = g.indexOf("=");
      if (b !== -1) {
        const _ = (function(M) {
          return M.indexOf("-") !== -1 && M.match(Ax) === null && (M = M.replace(Mx, function(B, F) {
            return F.toUpperCase();
          })), M;
        })(g.slice(0, b)).trim(), x = (function(M) {
          const B = M[0];
          return (B === '"' || B === "'") && M.length >= 2 && M[M.length - 1] === B ? M.slice(1, -1) : M;
        })(g.slice(b + 1).trim()), P = Gd[_] || _;
        if (P === "ref") return c;
        const T = c[P] = (function(M, B, F, k) {
          return B === "style" ? (function(Y) {
            const W = [];
            let L = "", U = false, H = false, R = "";
            if (!Y) return W;
            for (let G = 0; G < Y.length; G++) {
              const ee = Y[G];
              if (ee !== '"' && ee !== "'" || U || (H ? ee === R && (H = false, R = "") : (H = true, R = ee)), ee === "(" && L.endsWith("url") ? U = true : ee === ")" && U && (U = false), ee !== ";" || H || U) L += ee;
              else {
                const ue = L.trim();
                if (ue) {
                  const j = ue.indexOf(":");
                  if (j > 0) {
                    const Q = ue.slice(0, j).trim(), oe = ue.slice(j + 1).trim();
                    W.push([Q, oe]);
                  }
                }
                L = "";
              }
            }
            const X = L.trim();
            if (X) {
              const G = X.indexOf(":");
              if (G > 0) {
                const ee = X.slice(0, G).trim(), ue = X.slice(G + 1).trim();
                W.push([ee, ue]);
              }
            }
            return W;
          })(F).reduce(function(Y, [W, L]) {
            return Y[W.replace(/(-[a-z])/g, (U) => U[1].toUpperCase())] = k(L, M, W), Y;
          }, {}) : lx.indexOf(B) !== -1 ? k(F, M, B) : (F.match(Tx) && (F = F.slice(1, F.length - 1)), F === "true" || F !== "false" && F);
        })(f, _, x, r.sanitizer);
        typeof T == "string" && (ml.test(T) || gl.test(T)) && (c[P] = o(T.trim()));
      } else g !== "style" && (c[Gd[g] || g] = true);
      return c;
    }, {}) : null;
  }
  r.overrides = r.overrides || {}, r.sanitizer = r.sanitizer || uO, r.slugify = r.slugify || Mi, r.namedCodesToUnicode = r.namedCodesToUnicode ? xn({}, Vd, r.namedCodesToUnicode) : Vd, r.createElement = r.createElement || qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement;
  const u = [], l = {}, d = { [ve.blockQuote]: { match: Fr(ov), order: 1, parse(f, p, m) {
    const [, c, g] = f[0].replace(px, "").match(hx);
    return { alert: c, children: p(g, m) };
  }, render(f, p, m) {
    const c = { key: m.key };
    return f.alert && (c.className = "markdown-alert-" + r.slugify(f.alert.toLowerCase(), Mi), f.children.unshift({ attrs: {}, children: [{ type: ve.text, text: f.alert }], noInnerParse: true, type: ve.htmlBlock, tag: "header" })), n("blockquote", c, p(f.children, m));
  } }, [ve.breakLine]: { match: Ii(vx), order: 1, parse: Lu, render: (f, p, m) => n("br", { key: m.key }) }, [ve.breakThematic]: { match: Fr(mx), order: 1, parse: Lu, render: (f, p, m) => n("hr", { key: m.key }) }, [ve.codeBlock]: { match: Fr(sv), order: 0, parse: (f) => ({ lang: void 0, text: fo(f[0].replace(/^ {4}/gm, "")).replace(Yd, "$1") }), render: (f, p, m) => n("pre", { key: m.key }, n("code", xn({}, f.attrs, { className: f.lang ? `lang-${f.lang}` : "" }), f.text)) }, [ve.codeFenced]: { match: Fr(av), order: 0, parse: (f) => ({ attrs: a("code", f[3] || ""), lang: f[2] || void 0, text: f[4], type: ve.codeBlock }) }, [ve.codeInline]: { match: rn(gx), order: 3, parse: (f) => ({ text: f[2].replace(Yd, "$1") }), render: (f, p, m) => n("code", { key: m.key }, f.text) }, [ve.footnote]: { match: Fr(bx), order: 0, parse: (f) => (u.push({ footnote: f[2], identifier: f[1] }), {}), render: Fu }, [ve.footnoteReference]: { match: tn(Sx), order: 1, parse: (f) => ({ target: `#${r.slugify(f[1], Mi)}`, text: f[1] }), render: (f, p, m) => n("a", { key: m.key, href: r.sanitizer(f.target, "a", "href") }, n("sup", { key: m.key }, f.text)) }, [ve.gfmTask]: { match: tn(xx), order: 1, parse: (f) => ({ completed: f[1].toLowerCase() === "x" }), render: (f, p, m) => n("input", { checked: f.completed, key: m.key, readOnly: true, type: "checkbox" }) }, [ve.heading]: { match: Fr(r.enforceAtxHeadings ? lv : uv), order: 1, parse: (f, p, m) => ({ children: Ma(p, f[2], m), id: r.slugify(f[2], Mi), level: f[1].length }), render: (f, p, m) => n(`h${f.level}`, { id: f.id, key: m.key }, p(f.children, m)) }, [ve.headingSetext]: { match: Fr(fv), order: 0, parse: (f, p, m) => ({ children: Ma(p, f[1], m), level: f[2] === "=" ? 1 : 2, type: ve.heading }) }, [ve.htmlBlock]: { match: Ii(ml), order: 1, parse(f, p, m) {
    const [, c] = f[3].match(Gx), g = new RegExp(`^${c}`, "gm"), b = f[3].replace(g, ""), _ = (x = b, nO.some((F) => F.test(x)) ? fO : Ma);
    var x;
    const P = f[1].toLowerCase(), T = ux.indexOf(P) !== -1, M = (T ? P : f[1]).trim(), B = { attrs: a(M, f[2]), noInnerParse: T, tag: M };
    return m.inAnchor = m.inAnchor || P === "a", T ? B.text = f[3] : B.children = _(p, b, m), m.inAnchor = false, B;
  }, render: (f, p, m) => n(f.tag, xn({ key: m.key }, f.attrs), f.text || (f.children ? p(f.children, m) : "")) }, [ve.htmlSelfClosing]: { match: Ii(gl), order: 1, parse(f) {
    const p = f[1].trim();
    return { attrs: a(p, f[2] || ""), tag: p };
  }, render: (f, p, m) => n(f.tag, xn({}, f.attrs, { key: m.key })) }, [ve.htmlComment]: { match: Ii(cv), order: 1, parse: () => ({}), render: Fu }, [ve.image]: { match: rn(rO), order: 1, parse: (f) => ({ alt: f[1], target: ep(f[2]), title: f[3] }), render: (f, p, m) => n("img", { key: m.key, alt: f.alt || void 0, title: f.title || void 0, src: r.sanitizer(f.target, "img", "src") }) }, [ve.link]: { match: tn(tO), order: 3, parse: (f, p, m) => ({ children: lO(p, f[1], m), target: ep(f[2]), title: f[3] }), render: (f, p, m) => n("a", { key: m.key, href: r.sanitizer(f.target, "a", "href"), title: f.title }, p(f.children, m)) }, [ve.linkAngleBraceStyleDetector]: { match: tn(Rx), order: 0, parse: (f) => ({ children: [{ text: f[1], type: ve.text }], target: f[1], type: ve.link }) }, [ve.linkBareUrlDetector]: { match: ci((f, p) => p.inAnchor || r.disableAutoLink ? null : tn(Px)(f, p)), order: 0, parse: (f) => ({ children: [{ text: f[1], type: ve.text }], target: f[1], title: void 0, type: ve.link }) }, [ve.linkMailtoDetector]: { match: tn(Cx), order: 0, parse(f) {
    let p = f[1], m = f[1];
    return cx.test(m) || (m = "mailto:" + m), { children: [{ text: p.replace("mailto:", ""), type: ve.text }], target: m, type: ve.link };
  } }, [ve.orderedList]: Xd(n, 1), [ve.unorderedList]: Xd(n, 2), [ve.newlineCoalescer]: { match: Fr(yx), order: 3, parse: Lu, render: () => `
` }, [ve.paragraph]: { match: ci(aO), order: 3, parse: Iu, render: (f, p, m) => n("p", { key: m.key }, p(f.children, m)) }, [ve.ref]: { match: tn(Ix), order: 0, parse: (f) => (l[f[1]] = { target: f[2], title: f[4] }, {}), render: Fu }, [ve.refImage]: { match: rn(Lx), order: 0, parse: (f) => ({ alt: f[1] || void 0, ref: f[2] }), render: (f, p, m) => l[f.ref] ? n("img", { key: m.key, alt: f.alt, src: r.sanitizer(l[f.ref].target, "img", "src"), title: l[f.ref].title }) : null }, [ve.refLink]: { match: tn(Fx), order: 0, parse: (f, p, m) => ({ children: p(f[1], m), fallbackChildren: f[0], ref: f[2] }), render: (f, p, m) => l[f.ref] ? n("a", { key: m.key, href: r.sanitizer(l[f.ref].target, "a", "href"), title: l[f.ref].title }, p(f.children, m)) : n("span", { key: m.key }, f.fallbackChildren) }, [ve.table]: { match: Fr(dv), order: 1, parse: oO, render(f, p, m) {
    const c = f;
    return n("table", { key: m.key }, n("thead", null, n("tr", null, c.header.map(function(g, b) {
      return n("th", { key: b, style: Qd(c, b) }, p(g, m));
    }))), n("tbody", null, c.cells.map(function(g, b) {
      return n("tr", { key: b }, g.map(function(_, x) {
        return n("td", { key: x, style: Qd(c, x) }, p(_, m));
      }));
    })));
  } }, [ve.text]: { match: Ii(Zx), order: 4, parse: (f) => ({ text: f[0].replace(Ox, (p, m) => r.namedCodesToUnicode[m] ? r.namedCodesToUnicode[m] : p) }), render: (f) => f.text }, [ve.textBolded]: { match: rn(zx), order: 2, parse: (f, p, m) => ({ children: p(f[2], m) }), render: (f, p, m) => n("strong", { key: m.key }, p(f.children, m)) }, [ve.textEmphasized]: { match: rn(Bx), order: 3, parse: (f, p, m) => ({ children: p(f[2], m) }), render: (f, p, m) => n("em", { key: m.key }, p(f.children, m)) }, [ve.textEscaped]: { match: rn(qx), order: 1, parse: (f) => ({ text: f[1], type: ve.text }) }, [ve.textMarked]: { match: rn(Hx), order: 3, parse: Iu, render: (f, p, m) => n("mark", { key: m.key }, p(f.children, m)) }, [ve.textStrikethroughed]: { match: rn(jx), order: 3, parse: Iu, render: (f, p, m) => n("del", { key: m.key }, p(f.children, m)) } };
  r.disableParsingRawHTML === true && (delete d[ve.htmlBlock], delete d[ve.htmlSelfClosing]);
  const w = (function(f) {
    let p = Object.keys(f);
    function m(c, g) {
      let b, _, x = [], P = "", T = "";
      for (g.prevCapture = g.prevCapture || ""; c; ) {
        let M = 0;
        for (; M < p.length; ) {
          if (P = p[M], b = f[P], g.inline && !b.match.inline) {
            M++;
            continue;
          }
          const B = b.match(c, g);
          if (B) {
            T = B[0], g.prevCapture += T, c = c.substring(T.length), _ = b.parse(B, m, g), _.type == null && (_.type = P), x.push(_);
            break;
          }
          M++;
        }
      }
      return g.prevCapture = "", x;
    }
    return p.sort(function(c, g) {
      let b = f[c].order, _ = f[g].order;
      return b !== _ ? b - _ : c < g ? -1 : 1;
    }), function(c, g) {
      return m((function(b) {
        return b.replace(wx, `
`).replace(Ex, "").replace(Nx, "    ");
      })(c), g);
    };
  })(d), S = (y = /* @__PURE__ */ (function(f, p) {
    return function(m, c, g) {
      const b = f[m.type].render;
      return p ? p(() => b(m, c, g), m, c, g) : b(m, c, g);
    };
  })(d, r.renderRule), function f(p, m = {}) {
    if (Array.isArray(p)) {
      const c = m.key, g = [];
      let b = false;
      for (let _ = 0; _ < p.length; _++) {
        m.key = _;
        const x = f(p[_], m), P = typeof x == "string";
        P && b ? g[g.length - 1] += x : x !== null && g.push(x), b = P;
      }
      return m.key = c, g;
    }
    return y(p, f, m);
  });
  var y;
  const h = o(e2);
  return u.length ? n("div", null, h, n("footer", { key: "footer" }, u.map(function(f) {
    return n("div", { id: r.slugify(f.identifier, Mi), key: f.identifier }, f.identifier, S(w(f.footnote, { inline: true })));
  }))) : h;
}
const ka = (e2) => {
  let { children: r = "", options: n } = e2, o = (function(a, u) {
    if (a == null) return {};
    var l, d, w = {}, S = Object.keys(a);
    for (d = 0; d < S.length; d++) u.indexOf(l = S[d]) >= 0 || (w[l] = a[l]);
    return w;
  })(e2, sx);
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.cloneElement(dO(r, n), o);
}, tp = ({ kind: e2, customIcon: r }) => {
  if (r)
    return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(r, { className: "mr-1 h-6 w-6 flex-none" });
  switch (e2) {
    case "error":
    case "danger":
      return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(u4, { className: "flex-none h-6 w-6" });
    case "info":
      return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(R5, { className: "flex-none h-6 w-6" }) });
    case "warning":
      return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(x3, { className: "flex-none h-6 w-6" }) });
    case "message":
      return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(R5, { className: "flex-none h-6 w-6" }) });
    default:
      return null;
  }
}, mM = ({
  id: e2,
  onClose: r,
  kind: n,
  message: o,
  markdown: a,
  customIcon: u
}) => {
  const l = ({ className: d } = {}) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "button",
    {
      onClick: r,
      className: Je("flex items-center justify-center p-1", d),
      children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(C1, { className: "h-5 w-5 font-thin stroke-current" })
    }
  );
  return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "div",
    {
      className: Je(
        "relative flex items-center rounded-lg py-2 px-4 font-semibold",
        {
          "bg-yellow-100 text-yellow-400": n === "warning",
          "bg-red-200 text-red-500": n === "danger" || n === "error",
          "bg-primary-light text-primary": n === "info",
          "bg-green-200 text-green-500": n === "message"
        }
      ),
      children: typeof o == "string" ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "w-full flex items-center justify-between gap-x-3", children: [
        /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(tp, { kind: n, customIcon: u }),
          a ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(ka, { children: o }) : /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: o })
        ] }),
        l()
      ] }) : /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex flex-col gap-2 justify-between", children: o.filter((d) => d.messages.length > 0).map((d) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
          d.title && /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("span", { className: "flex items-center gap-1 font-bold capitalize", children: [
            /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(tp, { kind: n, customIcon: u }),
            /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("span", { children: [
              d.title,
              " :"
            ] })
          ] }),
          /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "ul",
            {
              className: Je("list-disc", {
                "px-12": d.title,
                "px-6": !d.title
              }),
              children: d.messages.map((w) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("li", { children: a ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(ka, { children: w }) : /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: w }) }))
            }
          )
        ] })) }),
        l({
          className: "absolute top-1 right-1"
        })
      ] })
    },
    e2
  );
}, pO = ({
  children: e2,
  size: r,
  className: n,
  ...o
}) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "div",
  {
    style: { "--width": `${r || 24}px` },
    className: Je("h-6 flex items-center pr-1 w-[--width]", n),
    ...o,
    children: e2
  }
);
var Nu = {}, Li = {}, pa = {}, rp;
function Ev() {
  if (rp) return pa;
  rp = 1, Object.defineProperty(pa, "__esModule", {
    value: true
  }), pa.default = n;
  let e2;
  const r = new Uint8Array(16);
  function n() {
    if (!e2 && (e2 = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !e2))
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return e2(r);
  }
  return pa;
}
var Qn = {}, Fi = {}, $i = {}, np;
function hO() {
  if (np) return $i;
  np = 1, Object.defineProperty($i, "__esModule", {
    value: true
  }), $i.default = void 0;
  var e2 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return $i.default = e2, $i;
}
var ip;
function Va() {
  if (ip) return Fi;
  ip = 1, Object.defineProperty(Fi, "__esModule", {
    value: true
  }), Fi.default = void 0;
  var e2 = r(/* @__PURE__ */ hO());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function n(a) {
    return typeof a == "string" && e2.default.test(a);
  }
  var o = n;
  return Fi.default = o, Fi;
}
var op;
function Ya() {
  if (op) return Qn;
  op = 1, Object.defineProperty(Qn, "__esModule", {
    value: true
  }), Qn.default = void 0, Qn.unsafeStringify = o;
  var e2 = r(/* @__PURE__ */ Va());
  function r(l) {
    return l && l.__esModule ? l : { default: l };
  }
  const n = [];
  for (let l = 0; l < 256; ++l)
    n.push((l + 256).toString(16).slice(1));
  function o(l, d = 0) {
    return n[l[d + 0]] + n[l[d + 1]] + n[l[d + 2]] + n[l[d + 3]] + "-" + n[l[d + 4]] + n[l[d + 5]] + "-" + n[l[d + 6]] + n[l[d + 7]] + "-" + n[l[d + 8]] + n[l[d + 9]] + "-" + n[l[d + 10]] + n[l[d + 11]] + n[l[d + 12]] + n[l[d + 13]] + n[l[d + 14]] + n[l[d + 15]];
  }
  function a(l, d = 0) {
    const w = o(l, d);
    if (!(0, e2.default)(w))
      throw TypeError("Stringified UUID is invalid");
    return w;
  }
  var u = a;
  return Qn.default = u, Qn;
}
var ap;
function vO() {
  if (ap) return Li;
  ap = 1, Object.defineProperty(Li, "__esModule", {
    value: true
  }), Li.default = void 0;
  var e2 = n(/* @__PURE__ */ Ev()), r = /* @__PURE__ */ Ya();
  function n(S) {
    return S && S.__esModule ? S : { default: S };
  }
  let o, a, u = 0, l = 0;
  function d(S, y, h) {
    let f = y && h || 0;
    const p = y || new Array(16);
    S = S || {};
    let m = S.node || o, c = S.clockseq !== void 0 ? S.clockseq : a;
    if (m == null || c == null) {
      const T = S.random || (S.rng || e2.default)();
      m == null && (m = o = [T[0] | 1, T[1], T[2], T[3], T[4], T[5]]), c == null && (c = a = (T[6] << 8 | T[7]) & 16383);
    }
    let g = S.msecs !== void 0 ? S.msecs : Date.now(), b = S.nsecs !== void 0 ? S.nsecs : l + 1;
    const _ = g - u + (b - l) / 1e4;
    if (_ < 0 && S.clockseq === void 0 && (c = c + 1 & 16383), (_ < 0 || g > u) && S.nsecs === void 0 && (b = 0), b >= 1e4)
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    u = g, l = b, a = c, g += 122192928e5;
    const x = ((g & 268435455) * 1e4 + b) % 4294967296;
    p[f++] = x >>> 24 & 255, p[f++] = x >>> 16 & 255, p[f++] = x >>> 8 & 255, p[f++] = x & 255;
    const P = g / 4294967296 * 1e4 & 268435455;
    p[f++] = P >>> 8 & 255, p[f++] = P & 255, p[f++] = P >>> 24 & 15 | 16, p[f++] = P >>> 16 & 255, p[f++] = c >>> 8 | 128, p[f++] = c & 255;
    for (let T = 0; T < 6; ++T)
      p[f + T] = m[T];
    return y || (0, r.unsafeStringify)(p);
  }
  var w = d;
  return Li.default = w, Li;
}
var Ni = {}, nn = {}, Di = {}, sp;
function _v() {
  if (sp) return Di;
  sp = 1, Object.defineProperty(Di, "__esModule", {
    value: true
  }), Di.default = void 0;
  var e2 = r(/* @__PURE__ */ Va());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function n(a) {
    if (!(0, e2.default)(a))
      throw TypeError("Invalid UUID");
    let u;
    const l = new Uint8Array(16);
    return l[0] = (u = parseInt(a.slice(0, 8), 16)) >>> 24, l[1] = u >>> 16 & 255, l[2] = u >>> 8 & 255, l[3] = u & 255, l[4] = (u = parseInt(a.slice(9, 13), 16)) >>> 8, l[5] = u & 255, l[6] = (u = parseInt(a.slice(14, 18), 16)) >>> 8, l[7] = u & 255, l[8] = (u = parseInt(a.slice(19, 23), 16)) >>> 8, l[9] = u & 255, l[10] = (u = parseInt(a.slice(24, 36), 16)) / 1099511627776 & 255, l[11] = u / 4294967296 & 255, l[12] = u >>> 24 & 255, l[13] = u >>> 16 & 255, l[14] = u >>> 8 & 255, l[15] = u & 255, l;
  }
  var o = n;
  return Di.default = o, Di;
}
var up;
function xv() {
  if (up) return nn;
  up = 1, Object.defineProperty(nn, "__esModule", {
    value: true
  }), nn.URL = nn.DNS = void 0, nn.default = l;
  var e2 = /* @__PURE__ */ Ya(), r = n(/* @__PURE__ */ _v());
  function n(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function o(d) {
    d = unescape(encodeURIComponent(d));
    const w = [];
    for (let S = 0; S < d.length; ++S)
      w.push(d.charCodeAt(S));
    return w;
  }
  const a = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  nn.DNS = a;
  const u = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  nn.URL = u;
  function l(d, w, S) {
    function y(h, f, p, m) {
      var c;
      if (typeof h == "string" && (h = o(h)), typeof f == "string" && (f = (0, r.default)(f)), ((c = f) === null || c === void 0 ? void 0 : c.length) !== 16)
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let g = new Uint8Array(16 + h.length);
      if (g.set(f), g.set(h, f.length), g = S(g), g[6] = g[6] & 15 | w, g[8] = g[8] & 63 | 128, p) {
        m = m || 0;
        for (let b = 0; b < 16; ++b)
          p[m + b] = g[b];
        return p;
      }
      return (0, e2.unsafeStringify)(g);
    }
    try {
      y.name = d;
    } catch {
    }
    return y.DNS = a, y.URL = u, y;
  }
  return nn;
}
var ki = {}, lp;
function mO() {
  if (lp) return ki;
  lp = 1, Object.defineProperty(ki, "__esModule", {
    value: true
  }), ki.default = void 0;
  function e2(p) {
    if (typeof p == "string") {
      const m = unescape(encodeURIComponent(p));
      p = new Uint8Array(m.length);
      for (let c = 0; c < m.length; ++c)
        p[c] = m.charCodeAt(c);
    }
    return r(o(a(p), p.length * 8));
  }
  function r(p) {
    const m = [], c = p.length * 32, g = "0123456789abcdef";
    for (let b = 0; b < c; b += 8) {
      const _ = p[b >> 5] >>> b % 32 & 255, x = parseInt(g.charAt(_ >>> 4 & 15) + g.charAt(_ & 15), 16);
      m.push(x);
    }
    return m;
  }
  function n(p) {
    return (p + 64 >>> 9 << 4) + 14 + 1;
  }
  function o(p, m) {
    p[m >> 5] |= 128 << m % 32, p[n(m) - 1] = m;
    let c = 1732584193, g = -271733879, b = -1732584194, _ = 271733878;
    for (let x = 0; x < p.length; x += 16) {
      const P = c, T = g, M = b, B = _;
      c = w(c, g, b, _, p[x], 7, -680876936), _ = w(_, c, g, b, p[x + 1], 12, -389564586), b = w(b, _, c, g, p[x + 2], 17, 606105819), g = w(g, b, _, c, p[x + 3], 22, -1044525330), c = w(c, g, b, _, p[x + 4], 7, -176418897), _ = w(_, c, g, b, p[x + 5], 12, 1200080426), b = w(b, _, c, g, p[x + 6], 17, -1473231341), g = w(g, b, _, c, p[x + 7], 22, -45705983), c = w(c, g, b, _, p[x + 8], 7, 1770035416), _ = w(_, c, g, b, p[x + 9], 12, -1958414417), b = w(b, _, c, g, p[x + 10], 17, -42063), g = w(g, b, _, c, p[x + 11], 22, -1990404162), c = w(c, g, b, _, p[x + 12], 7, 1804603682), _ = w(_, c, g, b, p[x + 13], 12, -40341101), b = w(b, _, c, g, p[x + 14], 17, -1502002290), g = w(g, b, _, c, p[x + 15], 22, 1236535329), c = S(c, g, b, _, p[x + 1], 5, -165796510), _ = S(_, c, g, b, p[x + 6], 9, -1069501632), b = S(b, _, c, g, p[x + 11], 14, 643717713), g = S(g, b, _, c, p[x], 20, -373897302), c = S(c, g, b, _, p[x + 5], 5, -701558691), _ = S(_, c, g, b, p[x + 10], 9, 38016083), b = S(b, _, c, g, p[x + 15], 14, -660478335), g = S(g, b, _, c, p[x + 4], 20, -405537848), c = S(c, g, b, _, p[x + 9], 5, 568446438), _ = S(_, c, g, b, p[x + 14], 9, -1019803690), b = S(b, _, c, g, p[x + 3], 14, -187363961), g = S(g, b, _, c, p[x + 8], 20, 1163531501), c = S(c, g, b, _, p[x + 13], 5, -1444681467), _ = S(_, c, g, b, p[x + 2], 9, -51403784), b = S(b, _, c, g, p[x + 7], 14, 1735328473), g = S(g, b, _, c, p[x + 12], 20, -1926607734), c = y(c, g, b, _, p[x + 5], 4, -378558), _ = y(_, c, g, b, p[x + 8], 11, -2022574463), b = y(b, _, c, g, p[x + 11], 16, 1839030562), g = y(g, b, _, c, p[x + 14], 23, -35309556), c = y(c, g, b, _, p[x + 1], 4, -1530992060), _ = y(_, c, g, b, p[x + 4], 11, 1272893353), b = y(b, _, c, g, p[x + 7], 16, -155497632), g = y(g, b, _, c, p[x + 10], 23, -1094730640), c = y(c, g, b, _, p[x + 13], 4, 681279174), _ = y(_, c, g, b, p[x], 11, -358537222), b = y(b, _, c, g, p[x + 3], 16, -722521979), g = y(g, b, _, c, p[x + 6], 23, 76029189), c = y(c, g, b, _, p[x + 9], 4, -640364487), _ = y(_, c, g, b, p[x + 12], 11, -421815835), b = y(b, _, c, g, p[x + 15], 16, 530742520), g = y(g, b, _, c, p[x + 2], 23, -995338651), c = h(c, g, b, _, p[x], 6, -198630844), _ = h(_, c, g, b, p[x + 7], 10, 1126891415), b = h(b, _, c, g, p[x + 14], 15, -1416354905), g = h(g, b, _, c, p[x + 5], 21, -57434055), c = h(c, g, b, _, p[x + 12], 6, 1700485571), _ = h(_, c, g, b, p[x + 3], 10, -1894986606), b = h(b, _, c, g, p[x + 10], 15, -1051523), g = h(g, b, _, c, p[x + 1], 21, -2054922799), c = h(c, g, b, _, p[x + 8], 6, 1873313359), _ = h(_, c, g, b, p[x + 15], 10, -30611744), b = h(b, _, c, g, p[x + 6], 15, -1560198380), g = h(g, b, _, c, p[x + 13], 21, 1309151649), c = h(c, g, b, _, p[x + 4], 6, -145523070), _ = h(_, c, g, b, p[x + 11], 10, -1120210379), b = h(b, _, c, g, p[x + 2], 15, 718787259), g = h(g, b, _, c, p[x + 9], 21, -343485551), c = u(c, P), g = u(g, T), b = u(b, M), _ = u(_, B);
    }
    return [c, g, b, _];
  }
  function a(p) {
    if (p.length === 0)
      return [];
    const m = p.length * 8, c = new Uint32Array(n(m));
    for (let g = 0; g < m; g += 8)
      c[g >> 5] |= (p[g / 8] & 255) << g % 32;
    return c;
  }
  function u(p, m) {
    const c = (p & 65535) + (m & 65535);
    return (p >> 16) + (m >> 16) + (c >> 16) << 16 | c & 65535;
  }
  function l(p, m) {
    return p << m | p >>> 32 - m;
  }
  function d(p, m, c, g, b, _) {
    return u(l(u(u(m, p), u(g, _)), b), c);
  }
  function w(p, m, c, g, b, _, x) {
    return d(m & c | ~m & g, p, m, b, _, x);
  }
  function S(p, m, c, g, b, _, x) {
    return d(m & g | c & ~g, p, m, b, _, x);
  }
  function y(p, m, c, g, b, _, x) {
    return d(m ^ c ^ g, p, m, b, _, x);
  }
  function h(p, m, c, g, b, _, x) {
    return d(c ^ (m | ~g), p, m, b, _, x);
  }
  var f = e2;
  return ki.default = f, ki;
}
var fp;
function gO() {
  if (fp) return Ni;
  fp = 1, Object.defineProperty(Ni, "__esModule", {
    value: true
  }), Ni.default = void 0;
  var e2 = n(/* @__PURE__ */ xv()), r = n(/* @__PURE__ */ mO());
  function n(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var a = (0, e2.default)("v3", 48, r.default);
  return Ni.default = a, Ni;
}
var Wi = {}, Ui = {}, cp;
function yO() {
  if (cp) return Ui;
  cp = 1, Object.defineProperty(Ui, "__esModule", {
    value: true
  }), Ui.default = void 0;
  var r = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  };
  return Ui.default = r, Ui;
}
var dp;
function wO() {
  if (dp) return Wi;
  dp = 1, Object.defineProperty(Wi, "__esModule", {
    value: true
  }), Wi.default = void 0;
  var e2 = o(/* @__PURE__ */ yO()), r = o(/* @__PURE__ */ Ev()), n = /* @__PURE__ */ Ya();
  function o(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function a(l, d, w) {
    if (e2.default.randomUUID && !d && !l)
      return e2.default.randomUUID();
    l = l || {};
    const S = l.random || (l.rng || r.default)();
    if (S[6] = S[6] & 15 | 64, S[8] = S[8] & 63 | 128, d) {
      w = w || 0;
      for (let y = 0; y < 16; ++y)
        d[w + y] = S[y];
      return d;
    }
    return (0, n.unsafeStringify)(S);
  }
  var u = a;
  return Wi.default = u, Wi;
}
var zi = {}, Bi = {}, pp;
function bO() {
  if (pp) return Bi;
  pp = 1, Object.defineProperty(Bi, "__esModule", {
    value: true
  }), Bi.default = void 0;
  function e2(a, u, l, d) {
    switch (a) {
      case 0:
        return u & l ^ ~u & d;
      case 1:
        return u ^ l ^ d;
      case 2:
        return u & l ^ u & d ^ l & d;
      case 3:
        return u ^ l ^ d;
    }
  }
  function r(a, u) {
    return a << u | a >>> 32 - u;
  }
  function n(a) {
    const u = [1518500249, 1859775393, 2400959708, 3395469782], l = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof a == "string") {
      const y = unescape(encodeURIComponent(a));
      a = [];
      for (let h = 0; h < y.length; ++h)
        a.push(y.charCodeAt(h));
    } else Array.isArray(a) || (a = Array.prototype.slice.call(a));
    a.push(128);
    const d = a.length / 4 + 2, w = Math.ceil(d / 16), S = new Array(w);
    for (let y = 0; y < w; ++y) {
      const h = new Uint32Array(16);
      for (let f = 0; f < 16; ++f)
        h[f] = a[y * 64 + f * 4] << 24 | a[y * 64 + f * 4 + 1] << 16 | a[y * 64 + f * 4 + 2] << 8 | a[y * 64 + f * 4 + 3];
      S[y] = h;
    }
    S[w - 1][14] = (a.length - 1) * 8 / Math.pow(2, 32), S[w - 1][14] = Math.floor(S[w - 1][14]), S[w - 1][15] = (a.length - 1) * 8 & 4294967295;
    for (let y = 0; y < w; ++y) {
      const h = new Uint32Array(80);
      for (let b = 0; b < 16; ++b)
        h[b] = S[y][b];
      for (let b = 16; b < 80; ++b)
        h[b] = r(h[b - 3] ^ h[b - 8] ^ h[b - 14] ^ h[b - 16], 1);
      let f = l[0], p = l[1], m = l[2], c = l[3], g = l[4];
      for (let b = 0; b < 80; ++b) {
        const _ = Math.floor(b / 20), x = r(f, 5) + e2(_, p, m, c) + g + u[_] + h[b] >>> 0;
        g = c, c = m, m = r(p, 30) >>> 0, p = f, f = x;
      }
      l[0] = l[0] + f >>> 0, l[1] = l[1] + p >>> 0, l[2] = l[2] + m >>> 0, l[3] = l[3] + c >>> 0, l[4] = l[4] + g >>> 0;
    }
    return [l[0] >> 24 & 255, l[0] >> 16 & 255, l[0] >> 8 & 255, l[0] & 255, l[1] >> 24 & 255, l[1] >> 16 & 255, l[1] >> 8 & 255, l[1] & 255, l[2] >> 24 & 255, l[2] >> 16 & 255, l[2] >> 8 & 255, l[2] & 255, l[3] >> 24 & 255, l[3] >> 16 & 255, l[3] >> 8 & 255, l[3] & 255, l[4] >> 24 & 255, l[4] >> 16 & 255, l[4] >> 8 & 255, l[4] & 255];
  }
  var o = n;
  return Bi.default = o, Bi;
}
var hp;
function SO() {
  if (hp) return zi;
  hp = 1, Object.defineProperty(zi, "__esModule", {
    value: true
  }), zi.default = void 0;
  var e2 = n(/* @__PURE__ */ xv()), r = n(/* @__PURE__ */ bO());
  function n(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var a = (0, e2.default)("v5", 80, r.default);
  return zi.default = a, zi;
}
var Hi = {}, vp;
function EO() {
  if (vp) return Hi;
  vp = 1, Object.defineProperty(Hi, "__esModule", {
    value: true
  }), Hi.default = void 0;
  var e2 = "00000000-0000-0000-0000-000000000000";
  return Hi.default = e2, Hi;
}
var ji = {}, mp;
function _O() {
  if (mp) return ji;
  mp = 1, Object.defineProperty(ji, "__esModule", {
    value: true
  }), ji.default = void 0;
  var e2 = r(/* @__PURE__ */ Va());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function n(a) {
    if (!(0, e2.default)(a))
      throw TypeError("Invalid UUID");
    return parseInt(a.slice(14, 15), 16);
  }
  var o = n;
  return ji.default = o, ji;
}
var gp;
function xO() {
  return gp || (gp = 1, (function(e2) {
    Object.defineProperty(e2, "__esModule", {
      value: true
    }), Object.defineProperty(e2, "NIL", {
      enumerable: true,
      get: function() {
        return u.default;
      }
    }), Object.defineProperty(e2, "parse", {
      enumerable: true,
      get: function() {
        return S.default;
      }
    }), Object.defineProperty(e2, "stringify", {
      enumerable: true,
      get: function() {
        return w.default;
      }
    }), Object.defineProperty(e2, "v1", {
      enumerable: true,
      get: function() {
        return r.default;
      }
    }), Object.defineProperty(e2, "v3", {
      enumerable: true,
      get: function() {
        return n.default;
      }
    }), Object.defineProperty(e2, "v4", {
      enumerable: true,
      get: function() {
        return o.default;
      }
    }), Object.defineProperty(e2, "v5", {
      enumerable: true,
      get: function() {
        return a.default;
      }
    }), Object.defineProperty(e2, "validate", {
      enumerable: true,
      get: function() {
        return d.default;
      }
    }), Object.defineProperty(e2, "version", {
      enumerable: true,
      get: function() {
        return l.default;
      }
    });
    var r = y(/* @__PURE__ */ vO()), n = y(/* @__PURE__ */ gO()), o = y(/* @__PURE__ */ wO()), a = y(/* @__PURE__ */ SO()), u = y(/* @__PURE__ */ EO()), l = y(/* @__PURE__ */ _O()), d = y(/* @__PURE__ */ Va()), w = y(/* @__PURE__ */ Ya()), S = y(/* @__PURE__ */ _v());
    function y(h) {
      return h && h.__esModule ? h : { default: h };
    }
  })(Nu)), Nu;
}
var Du, yp;
function OO() {
  if (yp) return Du;
  yp = 1;
  function e2(r, n) {
    if (!r || !n || !r.length || !n.length)
      throw new Error("Bad alphabet");
    this.srcAlphabet = r, this.dstAlphabet = n;
  }
  return e2.prototype.convert = function(r) {
    var n, o, a, u = {}, l = this.srcAlphabet.length, d = this.dstAlphabet.length, w = r.length, S = typeof r == "string" ? "" : [];
    if (!this.isValid(r))
      throw new Error('Number "' + r + '" contains of non-alphabetic digits (' + this.srcAlphabet + ")");
    if (this.srcAlphabet === this.dstAlphabet)
      return r;
    for (n = 0; n < w; n++)
      u[n] = this.srcAlphabet.indexOf(r[n]);
    do {
      for (o = 0, a = 0, n = 0; n < w; n++)
        o = o * l + u[n], o >= d ? (u[a++] = parseInt(o / d, 10), o = o % d) : a > 0 && (u[a++] = 0);
      w = a, S = this.dstAlphabet.slice(o, o + 1).concat(S);
    } while (a !== 0);
    return S;
  }, e2.prototype.isValid = function(r) {
    for (var n = 0; n < r.length; ++n)
      if (this.srcAlphabet.indexOf(r[n]) === -1)
        return false;
    return true;
  }, Du = e2, Du;
}
var ku, wp;
function AO() {
  if (wp) return ku;
  wp = 1;
  var e2 = OO();
  function r(n, o) {
    var a = new e2(n, o);
    return function(u) {
      return a.convert(u);
    };
  }
  return r.BIN = "01", r.OCT = "01234567", r.DEC = "0123456789", r.HEX = "0123456789abcdef", ku = r, ku;
}
var Wu, bp;
function TO() {
  if (bp) return Wu;
  bp = 1;
  const { v4: e2, validate: r } = /* @__PURE__ */ xO(), n = AO(), o = {
    cookieBase90: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~",
    flickrBase58: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
    uuid25Base36: "0123456789abcdefghijklmnopqrstuvwxyz"
  }, a = {
    consistentLength: true
  };
  let u;
  const l = (S, y, h) => {
    const f = y(S.toLowerCase().replace(/-/g, ""));
    return !h || !h.consistentLength ? f : f.padStart(
      h.shortIdLength,
      h.paddingChar
    );
  }, d = (S, y) => {
    const f = y(S).padStart(32, "0").match(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/);
    return [f[1], f[2], f[3], f[4], f[5]].join("-");
  }, w = (S) => Math.ceil(Math.log(2 ** 128) / Math.log(S));
  return Wu = (() => {
    const S = (y, h) => {
      const f = y || o.flickrBase58, p = { ...a, ...h };
      if ([...new Set(Array.from(f))].length !== f.length)
        throw new Error("The provided Alphabet has duplicate characters resulting in unreliable results");
      const m = w(f.length), c = {
        shortIdLength: m,
        consistentLength: p.consistentLength,
        paddingChar: f[0]
      }, g = n(n.HEX, f), b = n(f, n.HEX), _ = () => l(e2(), g, c), P = {
        alphabet: f,
        fromUUID: (T) => l(T, g, c),
        maxLength: m,
        generate: _,
        new: _,
        toUUID: (T) => d(T, b),
        uuid: e2,
        validate: (T, M = false) => {
          if (!T || typeof T != "string") return false;
          const B = p.consistentLength ? T.length === m : T.length <= m, F = T.split("").every((k) => f.includes(k));
          return M === false ? B && F : B && F && r(d(T, b));
        }
      };
      return Object.freeze(P), P;
    };
    return S.constants = o, S.uuid = e2, S.generate = () => (u || (u = S(o.flickrBase58).generate), u()), S;
  })(), Wu;
}
var Hl = TO();
const PO = ({
  depth: e2,
  height: r = 24,
  width: n = 11,
  showLines: o = true,
  stroke: a = "rgb(241, 245, 249)"
}) => {
  const u = `indent_line_${Hl.generate()}`;
  return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
    "svg",
    {
      viewBox: `0 0 ${11 * e2} 24`,
      width: `${11 * e2}`,
      height: r,
      children: [
        /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("defs", { children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "pattern",
          {
            id: u,
            x: "0",
            y: "0",
            width: n,
            height: r,
            patternUnits: "userSpaceOnUse",
            children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "line",
              {
                x1: n / 2,
                y1: "0",
                x2: n / 2,
                y2: r,
                stroke: a
              }
            )
          }
        ) }),
        o ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "rect",
          {
            fill: `url(#${u})`,
            x: "0",
            y: "0",
            width: `${11 * e2}`,
            height: r
          }
        ) : /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "rect",
          {
            fill: o ? `url(#${u})` : "",
            x: "0",
            y: "0",
            width: 0,
            height: r
          }
        )
      ]
    }
  );
}, CO = ({ show: e2, expanded: r, onClick: n, variant: o = "arrow" }) => e2 ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "div",
  {
    className: "flex h-6 w-5 items-center",
    onClick: (a) => n && n(a),
    children: (() => {
      switch (o) {
        case "arrow":
          return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            V0,
            {
              className: Je([
                "h-3 w-3 transform text-grey-50 transition ease-in-out",
                {
                  "rotate-0": r,
                  "-rotate-90": !r
                }
              ])
            }
          );
        case "caret":
          return r ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(V0, {}) : /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(d4, {});
        default:
          return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(V0, { className: "h-3 w-3 transform text-grey-50 transition ease-in-out" });
      }
    })()
  }
) : /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex h-6 w-3 items-center" }), Ov = ({
  node: e2,
  depth: r,
  expandedKeys: n,
  selectedKeys: o,
  actions: a,
  searchQuery: u,
  renderNode: l,
  onNodeClick: d
}) => {
  var p;
  const { key: w, children: S } = e2, y = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useMemo(
    () => ({
      expanded: n.includes(e2.key),
      selected: o.includes(e2.key)
    }),
    [n, e2.key, o]
  ), h = l && typeof l == "function" ? l(e2, r, y, a, u) : IO(e2, r, y, d);
  return !((p = e2.options) != null && p.filterable) || !u || e2.title.toLowerCase().includes(u.toLowerCase()) ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
    /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex items-center space-x-2", children: h }, w),
    MO(
      S || [],
      r,
      u,
      n,
      o,
      y.expanded,
      a,
      d,
      l
    )
  ] }) : null;
}, RO = function(e2, r) {
  var l;
  const { title: n, icon: o, subtitle: a } = e2;
  let u = null;
  return o && (u = /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(pO, { children: o })), /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
    "div",
    {
      className: "flex flex-1 select-none items-center overflow-hidden text-ellipsis whitespace-nowrap",
      draggable: (l = e2.options) == null ? void 0 : l.draggable,
      onClick: () => {
        r && r(e2);
      },
      children: [
        u,
        /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "div",
          {
            style: {
              lineHeight: "24px",
              fontSize: 11
            },
            children: n
          }
        ),
        a && /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "mx-1 min-w-0 text-xxs italic text-fd-gray-mild", children: a })
      ]
    }
  );
}, MO = function(e2, r, n, o, a, u, l, d, w) {
  return e2.length && u ? e2.map((S) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    Ov,
    {
      actions: l,
      node: S,
      searchQuery: n,
      depth: r + 1,
      expandedKeys: o,
      selectedKeys: a,
      onNodeClick: d,
      renderNode: w
    },
    S.key
  )) : null;
}, IO = function(e2, r, n, o) {
  return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
    /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(PO, { showLines: true, depth: r }),
    /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      CO,
      {
        show: e2.children && e2.children.length > 0 || false,
        expanded: n.expanded
      }
    ),
    RO(e2, o)
  ] });
}, ha = (e2) => (r) => e2 === r, gM = function({
  treeData: r,
  renderNode: n,
  onNodeClick: o,
  onExpandNode: a,
  searchQuery: u,
  expandedKeys: l,
  expandCondition: d = "always",
  encapsulated: w,
  className: S
}) {
  const [y, h] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(() => ({
    expandedKeys: l || [],
    selectedKeys: []
  }));
  qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    d === "when-collapsed" && y.expandedKeys.length > 0 || h({
      ...y,
      expandedKeys: l || y.expandedKeys
    });
  }, [l]);
  const f = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback(
    (b) => {
      if (!b) return;
      const _ = y.expandedKeys.findIndex(ha(b.key));
      let x = [];
      _ === -1 ? (x = [...y.expandedKeys, b.key], h(() => ({
        ...y,
        expandedKeys: x
      })), a && a(x)) : (x = y.expandedKeys.filter((P) => P !== b.key), h(() => ({
        ...y,
        expandedKeys: x
      })), a && a(x));
    },
    [y]
  ), p = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback(
    (b) => {
      var x;
      if (!((x = b == null ? void 0 : b.options) != null && x.selectable)) return;
      y.selectedKeys.findIndex(ha(b.key)) === -1 && h({
        ...y,
        selectedKeys: [...y.selectedKeys, b.key]
      });
    },
    [y]
  ), m = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback(
    (b) => {
      var x;
      if (!((x = b == null ? void 0 : b.options) != null && x.selectable)) return;
      y.selectedKeys.findIndex(ha(b.key)) === -1 && h({ ...y, selectedKeys: [b.key] });
    },
    [y]
  ), c = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback(
    (b) => {
      var x;
      if (!((x = b == null ? void 0 : b.options) != null && x.selectable)) {
        h({ ...y, selectedKeys: [] });
        return;
      }
      y.selectedKeys.findIndex(ha(b.key)) !== -1 && h({
        ...y,
        selectedKeys: y.selectedKeys.filter((P) => P !== b.key)
      });
    },
    [y]
  ), g = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useMemo(
    () => ({
      expand: f,
      select: p,
      selectSingle: m,
      deselect: c
    }),
    [c, f, p, m]
  );
  return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "div",
    {
      className: Je("fd-tree", S, {
        "pl-2 mb-1 rounded border bg-grey-900 p-1": w
      }),
      children: r.map((b) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        Ov,
        {
          node: b,
          searchQuery: u || "",
          depth: 0,
          expandedKeys: y.expandedKeys,
          selectedKeys: y.selectedKeys,
          actions: g,
          renderNode: n,
          onNodeClick: o
        },
        b.key
      ))
    }
  );
};
function yM(e2) {
  return e2.of && e2.children ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: e2.children }) : null;
}
function lt() {
  return lt = Object.assign ? Object.assign.bind() : function(e2) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var o in n) ({}).hasOwnProperty.call(n, o) && (e2[o] = n[o]);
    }
    return e2;
  }, lt.apply(null, arguments);
}
function LO(e2) {
  for (var r = 0, n, o = 0, a = e2.length; a >= 4; ++o, a -= 4)
    n = e2.charCodeAt(o) & 255 | (e2.charCodeAt(++o) & 255) << 8 | (e2.charCodeAt(++o) & 255) << 16 | (e2.charCodeAt(++o) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, r = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      r ^= (e2.charCodeAt(o + 2) & 255) << 16;
    case 2:
      r ^= (e2.charCodeAt(o + 1) & 255) << 8;
    case 1:
      r ^= e2.charCodeAt(o) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var FO = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function Av(e2) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return r[n] === void 0 && (r[n] = e2(n)), r[n];
  };
}
var $O = /[A-Z]|^ms/g, NO = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Tv = function(r) {
  return r.charCodeAt(1) === 45;
}, Sp = function(r) {
  return r != null && typeof r != "boolean";
}, Uu = /* @__PURE__ */ Av(function(e2) {
  return Tv(e2) ? e2 : e2.replace($O, "-$&").toLowerCase();
}), Ep = function(r, n) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(NO, function(o, a, u) {
          return gr = {
            name: a,
            styles: u,
            next: gr
          }, a;
        });
  }
  return FO[r] !== 1 && !Tv(r) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function co(e2, r, n) {
  if (n == null)
    return "";
  var o = n;
  if (o.__emotion_styles !== void 0)
    return o;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var a = n;
      if (a.anim === 1)
        return gr = {
          name: a.name,
          styles: a.styles,
          next: gr
        }, a.name;
      var u = n;
      if (u.styles !== void 0) {
        var l = u.next;
        if (l !== void 0)
          for (; l !== void 0; )
            gr = {
              name: l.name,
              styles: l.styles,
              next: gr
            }, l = l.next;
        var d = u.styles + ";";
        return d;
      }
      return DO(e2, r, n);
    }
    case "function": {
      if (e2 !== void 0) {
        var w = gr, S = n(e2);
        return gr = w, co(e2, r, S);
      }
      break;
    }
  }
  var y = n;
  if (r == null)
    return y;
  var h = r[y];
  return h !== void 0 ? h : y;
}
function DO(e2, r, n) {
  var o = "";
  if (Array.isArray(n))
    for (var a = 0; a < n.length; a++)
      o += co(e2, r, n[a]) + ";";
  else
    for (var u in n) {
      var l = n[u];
      if (typeof l != "object") {
        var d = l;
        r != null && r[d] !== void 0 ? o += u + "{" + r[d] + "}" : Sp(d) && (o += Uu(u) + ":" + Ep(u, d) + ";");
      } else if (Array.isArray(l) && typeof l[0] == "string" && (r == null || r[l[0]] === void 0))
        for (var w = 0; w < l.length; w++)
          Sp(l[w]) && (o += Uu(u) + ":" + Ep(u, l[w]) + ";");
      else {
        var S = co(e2, r, l);
        switch (u) {
          case "animation":
          case "animationName": {
            o += Uu(u) + ":" + S + ";";
            break;
          }
          default:
            o += u + "{" + S + "}";
        }
      }
    }
  return o;
}
var _p = /label:\s*([^\s;{]+)\s*(;|$)/g, gr;
function kO(e2, r, n) {
  if (e2.length === 1 && typeof e2[0] == "object" && e2[0] !== null && e2[0].styles !== void 0)
    return e2[0];
  var o = true, a = "";
  gr = void 0;
  var u = e2[0];
  if (u == null || u.raw === void 0)
    o = false, a += co(n, r, u);
  else {
    var l = u;
    a += l[0];
  }
  for (var d = 1; d < e2.length; d++)
    if (a += co(n, r, e2[d]), o) {
      var w = u;
      a += w[d];
    }
  _p.lastIndex = 0;
  for (var S = "", y; (y = _p.exec(a)) !== null; )
    S += "-" + y[1];
  var h = LO(a) + S;
  return {
    name: h,
    styles: a,
    next: gr
  };
}
var WO = function(r) {
  return r();
}, UO = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useInsertionEffect ? qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useInsertionEffect : false, zO = UO || WO, BO = true;
function HO(e2, r, n) {
  var o = "";
  return n.split(" ").forEach(function(a) {
    e2[a] !== void 0 ? r.push(e2[a] + ";") : a && (o += a + " ");
  }), o;
}
var Pv = function(r, n, o) {
  var a = r.key + "-" + n.name;
  (o === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  BO === false) && r.registered[a] === void 0 && (r.registered[a] = n.styles);
}, jO = function(r, n, o) {
  Pv(r, n, o);
  var a = r.key + "-" + n.name;
  if (r.inserted[n.name] === void 0) {
    var u = n;
    do
      r.insert(n === u ? "." + a : "", u, r.sheet, true), u = u.next;
    while (u !== void 0);
  }
}, qO = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ZO = /* @__PURE__ */ Av(
  function(e2) {
    return qO.test(e2) || e2.charCodeAt(0) === 111 && e2.charCodeAt(1) === 110 && e2.charCodeAt(2) < 91;
  }
  /* Z+1 */
), KO = ZO, GO = function(r) {
  return r !== "theme";
}, xp = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? KO : GO;
}, Op = function(r, n, o) {
  var a;
  if (n) {
    var u = n.shouldForwardProp;
    a = r.__emotion_forwardProp && u ? function(l) {
      return r.__emotion_forwardProp(l) && u(l);
    } : u;
  }
  return typeof a != "function" && o && (a = r.__emotion_forwardProp), a;
}, VO = function(r) {
  var n = r.cache, o = r.serialized, a = r.isStringTag;
  return Pv(n, o, a), zO(function() {
    return jO(n, o, a);
  }), null;
}, YO = function e(r, n) {
  var o = r.__emotion_real === r, a = o && r.__emotion_base || r, u, l;
  n !== void 0 && (u = n.label, l = n.target);
  var d = Op(r, n, o), w = d || xp(a), S = !w("as");
  return function() {
    var y = arguments, h = o && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (u !== void 0 && h.push("label:" + u + ";"), y[0] == null || y[0].raw === void 0)
      h.push.apply(h, y);
    else {
      var f = y[0];
      h.push(f[0]);
      for (var p = y.length, m = 1; m < p; m++)
        h.push(y[m], f[m]);
    }
    var c = withEmotionCache(function(g, b, _) {
      var x = S && g.as || a, P = "", T = [], M = g;
      if (g.theme == null) {
        M = {};
        for (var B in g)
          M[B] = g[B];
        M.theme = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useContext(ThemeContext);
      }
      typeof g.className == "string" ? P = HO(b.registered, T, g.className) : g.className != null && (P = g.className + " ");
      var F = kO(h.concat(T), b.registered, M);
      P += b.key + "-" + F.name, l !== void 0 && (P += " " + l);
      var k = S && d === void 0 ? xp(x) : w, Y = {};
      for (var W in g)
        S && W === "as" || k(W) && (Y[W] = g[W]);
      return Y.className = P, _ && (Y.ref = _), /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Fragment, null, /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(VO, {
        cache: b,
        serialized: F,
        isStringTag: typeof x == "string"
      }), /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(x, Y));
    });
    return c.displayName = u !== void 0 ? u : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", c.defaultProps = r.defaultProps, c.__emotion_real = c, c.__emotion_base = a, c.__emotion_styles = h, c.__emotion_forwardProp = d, Object.defineProperty(c, "toString", {
      value: function() {
        return "." + l;
      }
    }), c.withComponent = function(g, b) {
      var _ = e(g, lt({}, n, b, {
        shouldForwardProp: Op(c, b, true)
      }));
      return _.apply(void 0, h);
    }, c;
  };
}, XO = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Wa = YO.bind(null);
XO.forEach(function(e2) {
  Wa[e2] = Wa(e2);
});
var JO = function(e2) {
  if (typeof document > "u")
    return null;
  var r = Array.isArray(e2) ? e2[0] : e2;
  return r.ownerDocument.body;
}, ei = /* @__PURE__ */ new WeakMap(), va = /* @__PURE__ */ new WeakMap(), ma = {}, zu = 0, Cv = function(e2) {
  return e2 && (e2.host || Cv(e2.parentNode));
}, QO = function(e2, r) {
  return r.map(function(n) {
    if (e2.contains(n))
      return n;
    var o = Cv(n);
    return o && e2.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e2, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, eA = function(e2, r, n, o) {
  var a = QO(r, Array.isArray(e2) ? e2 : [e2]);
  ma[n] || (ma[n] = /* @__PURE__ */ new WeakMap());
  var u = ma[n], l = [], d = /* @__PURE__ */ new Set(), w = new Set(a), S = function(h) {
    !h || d.has(h) || (d.add(h), S(h.parentNode));
  };
  a.forEach(S);
  var y = function(h) {
    !h || w.has(h) || Array.prototype.forEach.call(h.children, function(f) {
      if (d.has(f))
        y(f);
      else
        try {
          var p = f.getAttribute(o), m = p !== null && p !== "false", c = (ei.get(f) || 0) + 1, g = (u.get(f) || 0) + 1;
          ei.set(f, c), u.set(f, g), l.push(f), c === 1 && m && va.set(f, true), g === 1 && f.setAttribute(n, "true"), m || f.setAttribute(o, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", f, b);
        }
    });
  };
  return y(r), d.clear(), zu++, function() {
    l.forEach(function(h) {
      var f = ei.get(h) - 1, p = u.get(h) - 1;
      ei.set(h, f), u.set(h, p), f || (va.has(h) || h.removeAttribute(o), va.delete(h)), p || h.removeAttribute(n);
    }), zu--, zu || (ei = /* @__PURE__ */ new WeakMap(), ei = /* @__PURE__ */ new WeakMap(), va = /* @__PURE__ */ new WeakMap(), ma = {});
  };
}, tA = function(e2, r, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e2) ? e2 : [e2]), a = JO(e2);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live], script"))), eA(o, a, n, "aria-hidden")) : function() {
    return null;
  };
}, yl = function(e2, r) {
  return yl = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
    n.__proto__ = o;
  } || function(n, o) {
    for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (n[a] = o[a]);
  }, yl(e2, r);
};
function Xa(e2, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  yl(e2, r);
  function n() {
    this.constructor = e2;
  }
  e2.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
}
var yr = function() {
  return yr = Object.assign || function(r) {
    for (var n, o = 1, a = arguments.length; o < a; o++) {
      n = arguments[o];
      for (var u in n) Object.prototype.hasOwnProperty.call(n, u) && (r[u] = n[u]);
    }
    return r;
  }, yr.apply(this, arguments);
};
function Rv(e2, r) {
  var n = {};
  for (var o in e2) Object.prototype.hasOwnProperty.call(e2, o) && r.indexOf(o) < 0 && (n[o] = e2[o]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e2); a < o.length; a++)
      r.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, o[a]) && (n[o[a]] = e2[o[a]]);
  return n;
}
function wl(e2) {
  var r = typeof Symbol == "function" && Symbol.iterator, n = r && e2[r], o = 0;
  if (n) return n.call(e2);
  if (e2 && typeof e2.length == "number") return {
    next: function() {
      return e2 && o >= e2.length && (e2 = void 0), { value: e2 && e2[o++], done: !e2 };
    }
  };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function bl(e2, r) {
  var n = typeof Symbol == "function" && e2[Symbol.iterator];
  if (!n) return e2;
  var o = n.call(e2), a, u = [], l;
  try {
    for (; (r === void 0 || r-- > 0) && !(a = o.next()).done; ) u.push(a.value);
  } catch (d) {
    l = { error: d };
  } finally {
    try {
      a && !a.done && (n = o.return) && n.call(o);
    } finally {
      if (l) throw l.error;
    }
  }
  return u;
}
function Ua(e2, r, n) {
  if (n || arguments.length === 2) for (var o = 0, a = r.length, u; o < a; o++)
    (u || !(o in r)) && (u || (u = Array.prototype.slice.call(r, 0, o)), u[o] = r[o]);
  return e2.concat(u || Array.prototype.slice.call(r));
}
var Ia = "right-scroll-bar-position", La = "width-before-scroll-bar", rA = "with-scroll-bars-hidden", nA = "--removed-body-scroll-bar-size";
function Bu(e2, r) {
  return typeof e2 == "function" ? e2(r) : e2 && (e2.current = r), e2;
}
function iA(e2, r) {
  var n = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(function() {
    return {
      // value
      value: e2,
      // last callback
      callback: r,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var a = n.value;
          a !== o && (n.value = o, n.callback(o, a));
        }
      }
    };
  })[0];
  return n.callback = r, n.facade;
}
var oA = typeof window < "u" ? qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useLayoutEffect : qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect, Ap = /* @__PURE__ */ new WeakMap();
function aA(e2, r) {
  var n = iA(null, function(o) {
    return e2.forEach(function(a) {
      return Bu(a, o);
    });
  });
  return oA(function() {
    var o = Ap.get(n);
    if (o) {
      var a = new Set(o), u = new Set(e2), l = n.current;
      a.forEach(function(d) {
        u.has(d) || Bu(d, null);
      }), u.forEach(function(d) {
        a.has(d) || Bu(d, l);
      });
    }
    Ap.set(n, e2);
  }, [e2]), n;
}
function sA(e2) {
  return e2;
}
function uA(e2, r) {
  r === void 0 && (r = sA);
  var n = [], o = false, a = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e2;
    },
    useMedium: function(u) {
      var l = r(u, o);
      return n.push(l), function() {
        n = n.filter(function(d) {
          return d !== l;
        });
      };
    },
    assignSyncMedium: function(u) {
      for (o = true; n.length; ) {
        var l = n;
        n = [], l.forEach(u);
      }
      n = {
        push: function(d) {
          return u(d);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(u) {
      o = true;
      var l = [];
      if (n.length) {
        var d = n;
        n = [], d.forEach(u), l = n;
      }
      var w = function() {
        var y = l;
        l = [], y.forEach(u);
      }, S = function() {
        return Promise.resolve().then(w);
      };
      S(), n = {
        push: function(y) {
          l.push(y), S();
        },
        filter: function(y) {
          return l = l.filter(y), n;
        }
      };
    }
  };
  return a;
}
function lA(e2) {
  e2 === void 0 && (e2 = {});
  var r = uA(null);
  return r.options = yr({ async: true, ssr: false }, e2), r;
}
var Mv = function(e2) {
  var r = e2.sideCar, n = Rv(e2, ["sideCar"]);
  if (!r)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = r.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(o, yr({}, n));
};
Mv.isSideCarExport = true;
function fA(e2, r) {
  return e2.useMedium(r), Mv;
}
var Iv = lA(), Hu = function() {
}, Ja = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.forwardRef(function(e2, r) {
  var n = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(null), o = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState({
    onScrollCapture: Hu,
    onWheelCapture: Hu,
    onTouchMoveCapture: Hu
  }), a = o[0], u = o[1], l = e2.forwardProps, d = e2.children, w = e2.className, S = e2.removeScrollBar, y = e2.enabled, h = e2.shards, f = e2.sideCar, p = e2.noRelative, m = e2.noIsolation, c = e2.inert, g = e2.allowPinchZoom, b = e2.as, _ = b === void 0 ? "div" : b, x = e2.gapMode, P = Rv(e2, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), T = f, M = aA([n, r]), B = yr(yr({}, P), a);
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(
    qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Fragment,
    null,
    y && qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(T, { sideCar: Iv, removeScrollBar: S, shards: h, noRelative: p, noIsolation: m, inert: c, setCallbacks: u, allowPinchZoom: !!g, lockRef: n, gapMode: x }),
    l ? qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.cloneElement(qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Children.only(d), yr(yr({}, B), { ref: M })) : qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(_, yr({}, B, { className: w, ref: M }), d)
  );
});
Ja.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
Ja.classNames = {
  fullWidth: La,
  zeroRight: Ia
};
var cA = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function dA() {
  if (!document)
    return null;
  var e2 = document.createElement("style");
  e2.type = "text/css";
  var r = cA();
  return r && e2.setAttribute("nonce", r), e2;
}
function pA(e2, r) {
  e2.styleSheet ? e2.styleSheet.cssText = r : e2.appendChild(document.createTextNode(r));
}
function hA(e2) {
  var r = document.head || document.getElementsByTagName("head")[0];
  r.appendChild(e2);
}
var vA = function() {
  var e2 = 0, r = null;
  return {
    add: function(n) {
      e2 == 0 && (r = dA()) && (pA(r, n), hA(r)), e2++;
    },
    remove: function() {
      e2--, !e2 && r && (r.parentNode && r.parentNode.removeChild(r), r = null);
    }
  };
}, mA = function() {
  var e2 = vA();
  return function(r, n) {
    qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(function() {
      return e2.add(r), function() {
        e2.remove();
      };
    }, [r && n]);
  };
}, Lv = function() {
  var e2 = mA(), r = function(n) {
    var o = n.styles, a = n.dynamic;
    return e2(o, a), null;
  };
  return r;
}, gA = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ju = function(e2) {
  return parseInt(e2 || "", 10) || 0;
}, yA = function(e2) {
  var r = window.getComputedStyle(document.body), n = r[e2 === "padding" ? "paddingLeft" : "marginLeft"], o = r[e2 === "padding" ? "paddingTop" : "marginTop"], a = r[e2 === "padding" ? "paddingRight" : "marginRight"];
  return [ju(n), ju(o), ju(a)];
}, wA = function(e2) {
  if (e2 === void 0 && (e2 = "margin"), typeof window > "u")
    return gA;
  var r = yA(e2), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: r[0],
    top: r[1],
    right: r[2],
    gap: Math.max(0, o - n + r[2] - r[0])
  };
}, bA = Lv(), ni = "data-scroll-locked", SA = function(e2, r, n, o) {
  var a = e2.left, u = e2.top, l = e2.right, d = e2.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(rA, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(d, "px ").concat(o, `;
  }
  body[`).concat(ni, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    r && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(u, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(d, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(d, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ia, ` {
    right: `).concat(d, "px ").concat(o, `;
  }
  
  .`).concat(La, ` {
    margin-right: `).concat(d, "px ").concat(o, `;
  }
  
  .`).concat(Ia, " .").concat(Ia, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(La, " .").concat(La, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(ni, `] {
    `).concat(nA, ": ").concat(d, `px;
  }
`);
}, Tp = function() {
  var e2 = parseInt(document.body.getAttribute(ni) || "0", 10);
  return isFinite(e2) ? e2 : 0;
}, EA = function() {
  qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(function() {
    return document.body.setAttribute(ni, (Tp() + 1).toString()), function() {
      var e2 = Tp() - 1;
      e2 <= 0 ? document.body.removeAttribute(ni) : document.body.setAttribute(ni, e2.toString());
    };
  }, []);
}, _A = function(e2) {
  var r = e2.noRelative, n = e2.noImportant, o = e2.gapMode, a = o === void 0 ? "margin" : o;
  EA();
  var u = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useMemo(function() {
    return wA(a);
  }, [a]);
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(bA, { styles: SA(u, !r, a, n ? "" : "!important") });
}, Sl = false;
if (typeof window < "u")
  try {
    var ga = Object.defineProperty({}, "passive", {
      get: function() {
        return Sl = true, true;
      }
    });
    window.addEventListener("test", ga, ga), window.removeEventListener("test", ga, ga);
  } catch {
    Sl = false;
  }
var ti = Sl ? { passive: false } : false, xA = function(e2) {
  return e2.tagName === "TEXTAREA";
}, Fv = function(e2, r) {
  if (!(e2 instanceof Element))
    return false;
  var n = window.getComputedStyle(e2);
  return (
    // not-not-scrollable
    n[r] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !xA(e2) && n[r] === "visible")
  );
}, OA = function(e2) {
  return Fv(e2, "overflowY");
}, AA = function(e2) {
  return Fv(e2, "overflowX");
}, Pp = function(e2, r) {
  var n = r.ownerDocument, o = r;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var a = $v(e2, o);
    if (a) {
      var u = Nv(e2, o), l = u[1], d = u[2];
      if (l > d)
        return true;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return false;
}, TA = function(e2) {
  var r = e2.scrollTop, n = e2.scrollHeight, o = e2.clientHeight;
  return [
    r,
    n,
    o
  ];
}, PA = function(e2) {
  var r = e2.scrollLeft, n = e2.scrollWidth, o = e2.clientWidth;
  return [
    r,
    n,
    o
  ];
}, $v = function(e2, r) {
  return e2 === "v" ? OA(r) : AA(r);
}, Nv = function(e2, r) {
  return e2 === "v" ? TA(r) : PA(r);
}, CA = function(e2, r) {
  return e2 === "h" && r === "rtl" ? -1 : 1;
}, RA = function(e2, r, n, o, a) {
  var u = CA(e2, window.getComputedStyle(r).direction), l = u * o, d = n.target, w = r.contains(d), S = false, y = l > 0, h = 0, f = 0;
  do {
    if (!d)
      break;
    var p = Nv(e2, d), m = p[0], c = p[1], g = p[2], b = c - g - u * m;
    (m || b) && $v(e2, d) && (h += b, f += m);
    var _ = d.parentNode;
    d = _ && _.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? _.host : _;
  } while (
    // portaled content
    !w && d !== document.body || // self content
    w && (r.contains(d) || r === d)
  );
  return (y && Math.abs(h) < 1 || !y && Math.abs(f) < 1) && (S = true), S;
}, ya = function(e2) {
  return "changedTouches" in e2 ? [e2.changedTouches[0].clientX, e2.changedTouches[0].clientY] : [0, 0];
}, Cp = function(e2) {
  return [e2.deltaX, e2.deltaY];
}, Rp = function(e2) {
  return e2 && "current" in e2 ? e2.current : e2;
}, MA = function(e2, r) {
  return e2[0] === r[0] && e2[1] === r[1];
}, IA = function(e2) {
  return `
  .block-interactivity-`.concat(e2, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e2, ` {pointer-events: all;}
`);
}, LA = 0, ri = [];
function FA(e2) {
  var r = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef([]), n = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef([0, 0]), o = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(), a = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(LA++)[0], u = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(Lv)[0], l = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(e2);
  qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(function() {
    l.current = e2;
  }, [e2]), qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(function() {
    if (e2.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var c = Ua([e2.lockRef.current], (e2.shards || []).map(Rp), true).filter(Boolean);
      return c.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), c.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e2.inert, e2.lockRef.current, e2.shards]);
  var d = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback(function(c, g) {
    if ("touches" in c && c.touches.length === 2 || c.type === "wheel" && c.ctrlKey)
      return !l.current.allowPinchZoom;
    var b = ya(c), _ = n.current, x = "deltaX" in c ? c.deltaX : _[0] - b[0], P = "deltaY" in c ? c.deltaY : _[1] - b[1], T, M = c.target, B = Math.abs(x) > Math.abs(P) ? "h" : "v";
    if ("touches" in c && B === "h" && M.type === "range")
      return false;
    var F = Pp(B, M);
    if (!F)
      return true;
    if (F ? T = B : (T = B === "v" ? "h" : "v", F = Pp(B, M)), !F)
      return false;
    if (!o.current && "changedTouches" in c && (x || P) && (o.current = T), !T)
      return true;
    var k = o.current || T;
    return RA(k, g, c, k === "h" ? x : P);
  }, []), w = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback(function(c) {
    var g = c;
    if (!(!ri.length || ri[ri.length - 1] !== u)) {
      var b = "deltaY" in g ? Cp(g) : ya(g), _ = r.current.filter(function(T) {
        return T.name === g.type && (T.target === g.target || g.target === T.shadowParent) && MA(T.delta, b);
      })[0];
      if (_ && _.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!_) {
        var x = (l.current.shards || []).map(Rp).filter(Boolean).filter(function(T) {
          return T.contains(g.target);
        }), P = x.length > 0 ? d(g, x[0]) : !l.current.noIsolation;
        P && g.cancelable && g.preventDefault();
      }
    }
  }, []), S = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback(function(c, g, b, _) {
    var x = { name: c, delta: g, target: b, should: _, shadowParent: $A(b) };
    r.current.push(x), setTimeout(function() {
      r.current = r.current.filter(function(P) {
        return P !== x;
      });
    }, 1);
  }, []), y = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback(function(c) {
    n.current = ya(c), o.current = void 0;
  }, []), h = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback(function(c) {
    S(c.type, Cp(c), c.target, d(c, e2.lockRef.current));
  }, []), f = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback(function(c) {
    S(c.type, ya(c), c.target, d(c, e2.lockRef.current));
  }, []);
  qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(function() {
    return ri.push(u), e2.setCallbacks({
      onScrollCapture: h,
      onWheelCapture: h,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", w, ti), document.addEventListener("touchmove", w, ti), document.addEventListener("touchstart", y, ti), function() {
      ri = ri.filter(function(c) {
        return c !== u;
      }), document.removeEventListener("wheel", w, ti), document.removeEventListener("touchmove", w, ti), document.removeEventListener("touchstart", y, ti);
    };
  }, []);
  var p = e2.removeScrollBar, m = e2.inert;
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(
    qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Fragment,
    null,
    m ? qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(u, { styles: IA(a) }) : null,
    p ? qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(_A, { noRelative: e2.noRelative, gapMode: e2.gapMode }) : null
  );
}
function $A(e2) {
  for (var r = null; e2 !== null; )
    e2 instanceof ShadowRoot && (r = e2.host, e2 = e2.host), e2 = e2.parentNode;
  return r;
}
const NA = fA(Iv, FA);
var Dv = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.forwardRef(function(e2, r) {
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(Ja, yr({}, e2, { ref: r, sideCar: NA }));
});
Dv.classNames = Ja.classNames;
const DA = globalThis != null && globalThis.document ? qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useLayoutEffect : () => {
}, kA = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useId || (() => {
});
let WA = 0;
function UA(e2) {
  const [r, n] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(kA());
  return DA(() => {
    n((o) => o ?? String(WA++));
  }, [e2]), e2 || (r ? `radix-${r}` : "");
}
function kv(...e2) {
  return (r) => e2.forEach((n) => (function(o, a) {
    typeof o == "function" ? o(a) : o != null && (o.current = a);
  })(n, r));
}
function $n(...e2) {
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback(kv(...e2), e2);
}
const Wv = /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.forwardRef((e2, r) => {
  const { children: n, ...o } = e2;
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Children.toArray(n).some(Mp) ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Fragment, null, qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Children.map(n, (a) => Mp(a) ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(El, lt({}, o, { ref: r }), a.props.children) : a)) : /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(El, lt({}, o, { ref: r }), n);
});
Wv.displayName = "Slot";
const El = /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.forwardRef((e2, r) => {
  const { children: n, ...o } = e2;
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.isValidElement(n) ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.cloneElement(n, { ...BA(o, n.props), ref: kv(r, n.ref) }) : qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Children.count(n) > 1 ? qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Children.only(null) : null;
});
El.displayName = "SlotClone";
const zA = ({ children: e2 }) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Fragment, null, e2);
function Mp(e2) {
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.isValidElement(e2) && e2.type === zA;
}
function BA(e2, r) {
  const n = { ...r };
  for (const o in r) {
    const a = e2[o], u = r[o];
    /^on[A-Z]/.test(o) ? n[o] = (...l) => {
      u == null || u(...l), a == null || a(...l);
    } : o === "style" ? n[o] = { ...a, ...u } : o === "className" && (n[o] = [a, u].filter(Boolean).join(" "));
  }
  return { ...e2, ...n };
}
const pi = ["a", "button", "div", "h2", "h3", "img", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e2, r) => ({ ...e2, [r]: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.forwardRef((n, o) => {
  const { asChild: a, ...u } = n, l = a ? Wv : r;
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    window[Symbol.for("radix-ui")] = true;
  }, []), /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(l, lt({}, u, { ref: o }));
}) }), {}), Ip = globalThis != null && globalThis.document ? qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useLayoutEffect : () => {
}, Uv = (e2) => {
  const { present: r, children: n } = e2, o = (function(l) {
    const [d, w] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(), S = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef({}), y = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(l), h = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef("none"), f = l ? "mounted" : "unmounted", [p, m] = (function(c, g) {
      return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useReducer((b, _) => {
        const x = g[b][_];
        return x ?? b;
      }, c);
    })(f, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
    return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
      const c = wa(S.current);
      h.current = p === "mounted" ? c : "none";
    }, [p]), Ip(() => {
      const c = S.current, g = y.current;
      if (g !== l) {
        const b = h.current, _ = wa(c);
        l ? m("MOUNT") : _ === "none" || (c == null ? void 0 : c.display) === "none" ? m("UNMOUNT") : m(g && b !== _ ? "ANIMATION_OUT" : "UNMOUNT"), y.current = l;
      }
    }, [l, m]), Ip(() => {
      if (d) {
        const c = (b) => {
          const _ = wa(S.current).includes(b.animationName);
          b.target === d && _ && m("ANIMATION_END");
        }, g = (b) => {
          b.target === d && (h.current = wa(S.current));
        };
        return d.addEventListener("animationstart", g), d.addEventListener("animationcancel", c), d.addEventListener("animationend", c), () => {
          d.removeEventListener("animationstart", g), d.removeEventListener("animationcancel", c), d.removeEventListener("animationend", c);
        };
      }
      m("ANIMATION_END");
    }, [d, m]), { isPresent: ["mounted", "unmountSuspended"].includes(p), ref: qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback((c) => {
      c && (S.current = getComputedStyle(c)), w(c);
    }, []) };
  })(r), a = typeof n == "function" ? n({ present: o.isPresent }) : qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Children.only(n), u = $n(o.ref, a.ref);
  return typeof n == "function" || o.isPresent ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.cloneElement(a, { ref: u }) : null;
};
function wa(e2) {
  return (e2 == null ? void 0 : e2.animationName) || "none";
}
Uv.displayName = "Presence";
let qu = 0;
function HA() {
  qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    var e2, r;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e2 = n[0]) !== null && e2 !== void 0 ? e2 : Lp()), document.body.insertAdjacentElement("beforeend", (r = n[1]) !== null && r !== void 0 ? r : Lp()), qu++, () => {
      qu === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((o) => o.remove()), qu--;
    };
  }, []);
}
function Lp() {
  const e2 = document.createElement("span");
  return e2.setAttribute("data-radix-focus-guard", ""), e2.tabIndex = 0, e2.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e2;
}
const jA = globalThis != null && globalThis.document ? qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useLayoutEffect : () => {
}, zv = /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.forwardRef((e2, r) => {
  var n, o;
  const { containerRef: a, style: u, ...l } = e2, d = (n = a == null ? void 0 : a.current) !== null && n !== void 0 ? n : globalThis == null || (o = globalThis.document) === null || o === void 0 ? void 0 : o.body, [, w] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState({});
  return jA(() => {
    w({});
  }, []), d ? /* @__PURE__ */ Si.createPortal(/* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(pi.div, lt({ "data-radix-portal": "" }, l, { ref: r, style: d === document.body ? { position: "absolute", top: 0, left: 0, zIndex: 2147483647, ...u } : void 0 })), d) : null;
});
function In(e2) {
  const r = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(e2);
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    r.current = e2;
  }), qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useMemo(() => (...n) => {
    var o;
    return (o = r.current) === null || o === void 0 ? void 0 : o.call(r, ...n);
  }, []);
}
const Fp = { bubbles: false, cancelable: true }, qA = /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.forwardRef((e2, r) => {
  const { loop: n = false, trapped: o = false, onMountAutoFocus: a, onUnmountAutoFocus: u, ...l } = e2, [d, w] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(null), S = In(a), y = In(u), h = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(null), f = $n(r, (c) => w(c)), p = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }).current;
  qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    if (o) {
      let c = function(b) {
        if (p.paused || !d) return;
        const _ = b.target;
        d.contains(_) ? h.current = _ : En(h.current, { select: true });
      }, g = function(b) {
        !p.paused && d && (d.contains(b.relatedTarget) || En(h.current, { select: true }));
      };
      return document.addEventListener("focusin", c), document.addEventListener("focusout", g), () => {
        document.removeEventListener("focusin", c), document.removeEventListener("focusout", g);
      };
    }
  }, [o, d, p.paused]), qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    if (d) {
      Dp.add(p);
      const g = document.activeElement;
      if (!d.contains(g)) {
        const b = new Event("focusScope.autoFocusOnMount", Fp);
        d.addEventListener("focusScope.autoFocusOnMount", S), d.dispatchEvent(b), b.defaultPrevented || ((function(_, { select: x = false } = {}) {
          const P = document.activeElement;
          for (const T of _) if (En(T, { select: x }), document.activeElement !== P) return;
        })((c = $p(d), c.filter((_) => _.tagName !== "A")), { select: true }), document.activeElement === g && En(d));
      }
      return () => {
        d.removeEventListener("focusScope.autoFocusOnMount", S), setTimeout(() => {
          const b = new Event("focusScope.autoFocusOnUnmount", Fp);
          d.addEventListener("focusScope.autoFocusOnUnmount", y), d.dispatchEvent(b), b.defaultPrevented || En(g ?? document.body, { select: true }), d.removeEventListener("focusScope.autoFocusOnUnmount", y), Dp.remove(p);
        }, 0);
      };
    }
    var c;
  }, [d, S, y, p]);
  const m = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback((c) => {
    if (!n && !o || p.paused) return;
    const g = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, b = document.activeElement;
    if (g && b) {
      const _ = c.currentTarget, [x, P] = (function(T) {
        const M = $p(T), B = Np(M, T), F = Np(M.reverse(), T);
        return [B, F];
      })(_);
      x && P ? c.shiftKey || b !== P ? c.shiftKey && b === x && (c.preventDefault(), n && En(P, { select: true })) : (c.preventDefault(), n && En(x, { select: true })) : b === _ && c.preventDefault();
    }
  }, [n, o, p.paused]);
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(pi.div, lt({ tabIndex: -1 }, l, { ref: f, onKeyDown: m }));
});
function $p(e2) {
  const r = [], n = document.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, { acceptNode: (o) => {
    const a = o.tagName === "INPUT" && o.type === "hidden";
    return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) r.push(n.currentNode);
  return r;
}
function Np(e2, r) {
  for (const n of e2) if (!ZA(n, { upTo: r })) return n;
}
function ZA(e2, { upTo: r }) {
  if (getComputedStyle(e2).visibility === "hidden") return true;
  for (; e2; ) {
    if (r !== void 0 && e2 === r) return false;
    if (getComputedStyle(e2).display === "none") return true;
    e2 = e2.parentElement;
  }
  return false;
}
function En(e2, { select: r = false } = {}) {
  if (e2 && e2.focus) {
    const n = document.activeElement;
    e2.focus({ preventScroll: true }), e2 !== n && (function(o) {
      return o instanceof HTMLInputElement && "select" in o;
    })(e2) && r && e2.select();
  }
}
const Dp = /* @__PURE__ */ (function() {
  let e2 = [];
  return { add(r) {
    const n = e2[0];
    r !== n && (n == null || n.pause()), e2 = kp(e2, r), e2.unshift(r);
  }, remove(r) {
    var n;
    e2 = kp(e2, r), (n = e2[0]) === null || n === void 0 || n.resume();
  } };
})();
function kp(e2, r) {
  const n = [...e2], o = n.indexOf(r);
  return o !== -1 && n.splice(o, 1), n;
}
function KA(e2) {
  const r = In(e2);
  qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [r]);
}
const GA = globalThis != null && globalThis.document ? qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useLayoutEffect : () => {
};
let Wp, ba = 0;
function VA({ disabled: e2 }) {
  const r = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(false);
  GA(() => {
    if (e2) {
      let n = function() {
        ba--, ba === 0 && (document.body.style.pointerEvents = Wp);
      }, o = function(a) {
        r.current = a.pointerType !== "mouse";
      };
      return ba === 0 && (Wp = document.body.style.pointerEvents), document.body.style.pointerEvents = "none", ba++, document.addEventListener("pointerup", o), () => {
        r.current ? document.addEventListener("click", n, { once: true }) : n(), document.removeEventListener("pointerup", o);
      };
    }
  }, [e2]);
}
function Rn(e2, r, { checkForDefaultPrevented: n = true } = {}) {
  return function(o) {
    if (e2 == null || e2(o), n === false || !o.defaultPrevented) return r == null ? void 0 : r(o);
  };
}
const YA = /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() }), XA = /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.forwardRef((e2, r) => {
  const { disableOutsidePointerEvents: n = false, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: u, onInteractOutside: l, onDismiss: d, ...w } = e2, S = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useContext(YA), [y, h] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(null), [, f] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState({}), p = $n(r, (M) => h(M)), m = Array.from(S.layers), [c] = [...S.layersWithOutsidePointerEventsDisabled].slice(-1), g = m.indexOf(c), b = y ? m.indexOf(y) : -1, _ = S.layersWithOutsidePointerEventsDisabled.size > 0, x = b >= g, P = (function(M) {
    const B = In(M), F = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(false);
    return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
      const k = (W) => {
        W.target && !F.current && zp("dismissableLayer.pointerDownOutside", B, { originalEvent: W }), F.current = false;
      }, Y = window.setTimeout(() => {
        document.addEventListener("pointerdown", k);
      }, 0);
      return () => {
        window.clearTimeout(Y), document.removeEventListener("pointerdown", k);
      };
    }, [B]), { onPointerDownCapture: () => F.current = true };
  })((M) => {
    const B = M.target, F = [...S.branches].some((k) => k.contains(B));
    x && !F && (a == null || a(M), l == null || l(M), M.defaultPrevented || d == null || d());
  }), T = (function(M) {
    const B = In(M), F = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(false);
    return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
      const k = (Y) => {
        Y.target && !F.current && zp("dismissableLayer.focusOutside", B, { originalEvent: Y });
      };
      return document.addEventListener("focusin", k), () => document.removeEventListener("focusin", k);
    }, [B]), { onFocusCapture: () => F.current = true, onBlurCapture: () => F.current = false };
  })((M) => {
    const B = M.target;
    [...S.branches].some((F) => F.contains(B)) || (u == null || u(M), l == null || l(M), M.defaultPrevented || d == null || d());
  });
  return KA((M) => {
    b === S.layers.size - 1 && (o == null || o(M), M.defaultPrevented || d == null || d());
  }), VA({ disabled: n }), qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    y && (n && S.layersWithOutsidePointerEventsDisabled.add(y), S.layers.add(y), Up());
  }, [y, n, S]), qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => () => {
    y && (S.layers.delete(y), S.layersWithOutsidePointerEventsDisabled.delete(y), Up());
  }, [y, S]), qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    const M = () => f({});
    return document.addEventListener("dismissableLayer.update", M), () => document.removeEventListener("dismissableLayer.update", M);
  }, []), /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(pi.div, lt({}, w, { ref: p, style: { pointerEvents: _ ? x ? "auto" : "none" : void 0, ...e2.style }, onFocusCapture: Rn(e2.onFocusCapture, T.onFocusCapture), onBlurCapture: Rn(e2.onBlurCapture, T.onBlurCapture), onPointerDownCapture: Rn(e2.onPointerDownCapture, P.onPointerDownCapture) }));
});
function Up() {
  const e2 = new Event("dismissableLayer.update");
  document.dispatchEvent(e2);
}
function zp(e2, r, n) {
  const o = n.originalEvent.target, a = new CustomEvent(e2, { bubbles: false, cancelable: true, detail: n });
  return r && o.addEventListener(e2, r, { once: true }), !o.dispatchEvent(a);
}
function Bp(e2) {
  const [r, n] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(void 0);
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    if (e2) {
      const o = new ResizeObserver((a) => {
        if (!Array.isArray(a) || !a.length) return;
        const u = a[0];
        let l, d;
        if ("borderBoxSize" in u) {
          const w = u.borderBoxSize, S = Array.isArray(w) ? w[0] : w;
          l = S.inlineSize, d = S.blockSize;
        } else {
          const w = e2.getBoundingClientRect();
          l = w.width, d = w.height;
        }
        n({ width: l, height: d });
      });
      return o.observe(e2, { box: "border-box" }), () => o.unobserve(e2);
    }
    n(void 0);
  }, [e2]), r;
}
function JA(e2, r) {
  const n = _n.get(e2);
  return n === void 0 ? (_n.set(e2, { rect: {}, callbacks: [r] }), _n.size === 1 && (_l = requestAnimationFrame(Bv))) : (n.callbacks.push(r), r(e2.getBoundingClientRect())), () => {
    const o = _n.get(e2);
    if (o === void 0) return;
    const a = o.callbacks.indexOf(r);
    a > -1 && o.callbacks.splice(a, 1), o.callbacks.length === 0 && (_n.delete(e2), _n.size === 0 && cancelAnimationFrame(_l));
  };
}
let _l;
const _n = /* @__PURE__ */ new Map();
function Bv() {
  const e2 = [];
  _n.forEach((r, n) => {
    const o = n.getBoundingClientRect();
    var a, u;
    a = r.rect, u = o, (a.width !== u.width || a.height !== u.height || a.top !== u.top || a.right !== u.right || a.bottom !== u.bottom || a.left !== u.left) && (r.rect = o, e2.push(r));
  }), e2.forEach((r) => {
    r.callbacks.forEach((n) => n(r.rect));
  }), _l = requestAnimationFrame(Bv);
}
function QA(e2) {
  const [r, n] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState();
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    if (e2) {
      const o = JA(e2, n);
      return () => {
        n(void 0), o();
      };
    }
  }, [e2]), r;
}
function Hv(e2, r = []) {
  let n = [];
  const o = () => {
    const a = n.map((u) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createContext(u));
    return function(u) {
      const l = (u == null ? void 0 : u[e2]) || a;
      return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useMemo(() => ({ [`__scope${e2}`]: { ...u, [e2]: l } }), [u, l]);
    };
  };
  return o.scopeName = e2, [function(a, u) {
    const l = /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createContext(u), d = n.length;
    function w(S) {
      const { scope: y, children: h, ...f } = S, p = (y == null ? void 0 : y[e2][d]) || l, m = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useMemo(() => f, Object.values(f));
      return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(p.Provider, { value: m }, h);
    }
    return n = [...n, u], w.displayName = a + "Provider", [w, function(S, y) {
      const h = (y == null ? void 0 : y[e2][d]) || l, f = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useContext(h);
      if (f) return f;
      if (u !== void 0) return u;
      throw new Error(`\`${S}\` must be used within \`${a}\``);
    }];
  }, eT(o, ...r)];
}
function eT(...e2) {
  const r = e2[0];
  if (e2.length === 1) return r;
  const n = () => {
    const o = e2.map((a) => ({ useScope: a(), scopeName: a.scopeName }));
    return function(a) {
      const u = o.reduce((l, { useScope: d, scopeName: w }) => ({ ...l, ...d(a)[`__scope${w}`] }), {});
      return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useMemo(() => ({ [`__scope${r.scopeName}`]: u }), [u]);
    };
  };
  return n.scopeName = r.scopeName, n;
}
function tT({ anchorRect: e2, popperSize: r, arrowSize: n, arrowOffset: o = 0, side: a, sideOffset: u = 0, align: l, alignOffset: d = 0, shouldAvoidCollisions: w = true, collisionBoundariesRect: S, collisionTolerance: y = 0 }) {
  if (!e2 || !r || !S) return { popperStyles: rT, arrowStyles: Zu };
  const h = (function(B, F, k = 0, Y = 0, W) {
    const L = W ? W.height : 0, U = Hp(F, B, "x"), H = Hp(F, B, "y"), R = H.before - k - L, X = H.after + k + L, G = U.before - k - L, ee = U.after + k + L;
    return { top: { start: { x: U.start + Y, y: R }, center: { x: U.center, y: R }, end: { x: U.end - Y, y: R } }, right: { start: { x: ee, y: H.start + Y }, center: { x: ee, y: H.center }, end: { x: ee, y: H.end - Y } }, bottom: { start: { x: U.start + Y, y: X }, center: { x: U.center, y: X }, end: { x: U.end - Y, y: X } }, left: { start: { x: G, y: H.start + Y }, center: { x: G, y: H.center }, end: { x: G, y: H.end - Y } } };
  })(r, e2, u, d, n), f = h[a][l];
  if (w === false) {
    const B = jp(f);
    let F = Zu;
    return n && (F = Zp({ popperSize: r, arrowSize: n, arrowOffset: o, side: a, align: l })), { popperStyles: { ...B, "--radix-popper-transform-origin": qp(r, a, l, o, n) }, arrowStyles: F, placedSide: a, placedAlign: l };
  }
  const p = DOMRect.fromRect({ ...r, ...f }), m = (c = S, g = y, DOMRect.fromRect({ width: c.width - 2 * g, height: c.height - 2 * g, x: c.left + g, y: c.top + g }));
  var c, g;
  const b = Gp(p, m), _ = h[Kp(a)][l], x = (function(B, F, k) {
    const Y = Kp(B);
    return F[B] && !k[Y] ? Y : B;
  })(a, b, Gp(DOMRect.fromRect({ ...r, ..._ }), m)), P = (function(B, F, k, Y, W) {
    const L = k === "top" || k === "bottom", U = L ? "left" : "top", H = L ? "right" : "bottom", R = L ? "width" : "height", X = F[R] > B[R];
    return (Y === "start" || Y === "center") && (W[U] && X || W[H] && !X) ? "end" : (Y === "end" || Y === "center") && (W[H] && X || W[U] && !X) ? "start" : Y;
  })(r, e2, a, l, b), T = jp(h[x][P]);
  let M = Zu;
  return n && (M = Zp({ popperSize: r, arrowSize: n, arrowOffset: o, side: x, align: P })), { popperStyles: { ...T, "--radix-popper-transform-origin": qp(r, x, P, o, n) }, arrowStyles: M, placedSide: x, placedAlign: P };
}
function Hp(e2, r, n) {
  const o = e2[n === "x" ? "left" : "top"], a = n === "x" ? "width" : "height", u = e2[a], l = r[a];
  return { before: o - l, start: o, center: o + (u - l) / 2, end: o + u - l, after: o + u };
}
function jp(e2) {
  return { position: "absolute", top: 0, left: 0, minWidth: "max-content", willChange: "transform", transform: `translate3d(${Math.round(e2.x + window.scrollX)}px, ${Math.round(e2.y + window.scrollY)}px, 0)` };
}
function qp(e2, r, n, o, a) {
  const u = r === "top" || r === "bottom", l = a ? a.width : 0, d = a ? a.height : 0, w = l / 2 + o;
  let S = "", y = "";
  return u ? (S = { start: `${w}px`, center: "center", end: e2.width - w + "px" }[n], y = r === "top" ? `${e2.height + d}px` : -d + "px") : (S = r === "left" ? `${e2.width + d}px` : -d + "px", y = { start: `${w}px`, center: "center", end: e2.height - w + "px" }[n]), `${S} ${y}`;
}
const rT = { position: "fixed", top: 0, left: 0, opacity: 0, transform: "translate3d(0, -200%, 0)" }, Zu = { position: "absolute", opacity: 0 };
function Zp({ popperSize: e2, arrowSize: r, arrowOffset: n, side: o, align: a }) {
  const u = (e2.width - r.width) / 2, l = (e2.height - r.width) / 2, d = { top: 0, right: 90, bottom: 180, left: -90 }[o], w = Math.max(r.width, r.height), S = { width: `${w}px`, height: `${w}px`, transform: `rotate(${d}deg)`, willChange: "transform", position: "absolute", [o]: "100%", direction: nT(o, a) };
  return o !== "top" && o !== "bottom" || (a === "start" && (S.left = `${n}px`), a === "center" && (S.left = `${u}px`), a === "end" && (S.right = `${n}px`)), o !== "left" && o !== "right" || (a === "start" && (S.top = `${n}px`), a === "center" && (S.top = `${l}px`), a === "end" && (S.bottom = `${n}px`)), S;
}
function nT(e2, r) {
  return (e2 !== "top" && e2 !== "right" || r !== "end") && (e2 !== "bottom" && e2 !== "left" || r === "end") ? "ltr" : "rtl";
}
function Kp(e2) {
  return { top: "bottom", right: "left", bottom: "top", left: "right" }[e2];
}
function Gp(e2, r) {
  return { top: e2.top < r.top, right: e2.right > r.right, bottom: e2.bottom > r.bottom, left: e2.left < r.left };
}
const [jv, qv] = Hv("Popper"), [iT, Zv] = jv("Popper"), oT = (e2) => {
  const { __scopePopper: r, children: n } = e2, [o, a] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(null);
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(iT, { scope: r, anchor: o, onAnchorChange: a }, n);
}, aT = /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.forwardRef((e2, r) => {
  const { __scopePopper: n, virtualRef: o, ...a } = e2, u = Zv("PopperAnchor", n), l = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(null), d = $n(r, l);
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    u.onAnchorChange((o == null ? void 0 : o.current) || l.current);
  }), o ? null : /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(pi.div, lt({}, a, { ref: d }));
}), [sT, wM] = jv("PopperContent"), uT = /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.forwardRef((e2, r) => {
  const { __scopePopper: n, side: o = "bottom", sideOffset: a, align: u = "center", alignOffset: l, collisionTolerance: d, avoidCollisions: w = true, ...S } = e2, y = Zv("PopperContent", n), [h, f] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(), p = QA(y.anchor), [m, c] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(null), g = Bp(m), [b, _] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(null), x = Bp(b), P = $n(r, (L) => c(L)), T = (function() {
    const [L, U] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(void 0);
    return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
      let H;
      function R() {
        U({ width: window.innerWidth, height: window.innerHeight });
      }
      function X() {
        window.clearTimeout(H), H = window.setTimeout(R, 100);
      }
      return R(), window.addEventListener("resize", X), () => window.removeEventListener("resize", X);
    }, []), L;
  })(), M = T ? DOMRect.fromRect({ ...T, x: 0, y: 0 }) : void 0, { popperStyles: B, arrowStyles: F, placedSide: k, placedAlign: Y } = tT({ anchorRect: p, popperSize: g, arrowSize: x, arrowOffset: h, side: o, sideOffset: a, align: u, alignOffset: l, shouldAvoidCollisions: w, collisionBoundariesRect: M, collisionTolerance: d }), W = k !== void 0;
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement("div", { style: B, "data-radix-popper-content-wrapper": "" }, /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(sT, { scope: n, arrowStyles: F, onArrowChange: _, onArrowOffsetChange: f }, /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(pi.div, lt({ "data-side": k, "data-align": Y }, S, { style: { ...S.style, animation: W ? void 0 : "none" }, ref: P }))));
}), lT = oT, fT = aT, cT = uT;
function dT({ prop: e2, defaultProp: r, onChange: n = () => {
} }) {
  const [o, a] = (function({ defaultProp: w, onChange: S }) {
    const y = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(w), [h] = y, f = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(h), p = In(S);
    return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
      f.current !== h && (p(h), f.current = h);
    }, [h, f, p]), y;
  })({ defaultProp: r, onChange: n }), u = e2 !== void 0, l = u ? e2 : o, d = In(n);
  return [l, qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback((w) => {
    if (u) {
      const S = w, y = typeof w == "function" ? S(e2) : w;
      y !== e2 && d(y);
    } else a(w);
  }, [u, e2, a, d])];
}
const [pT, bM] = Hv("Popover", [qv]), jl = qv(), [hT, go] = pT("Popover"), vT = (e2) => {
  const { __scopePopover: r, children: n, open: o, defaultOpen: a, onOpenChange: u, modal: l = false } = e2, d = jl(r), w = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(null), [S, y] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(false), [h = false, f] = dT({ prop: o, defaultProp: a, onChange: u });
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(lT, d, /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(hT, { scope: r, contentId: UA(), triggerRef: w, open: h, onOpenChange: f, onOpenToggle: qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback(() => f((p) => !p), [f]), hasCustomAnchor: S, onCustomAnchorAdd: qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback(() => y(true), []), onCustomAnchorRemove: qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback(() => y(false), []), modal: l }, n));
}, mT = /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.forwardRef((e2, r) => {
  const { __scopePopover: n, ...o } = e2, a = go("PopoverTrigger", n), u = jl(n), l = $n(r, a.triggerRef), d = /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(pi.button, lt({ type: "button", "aria-haspopup": "dialog", "aria-expanded": a.open, "aria-controls": a.contentId, "data-state": Gv(a.open) }, o, { ref: l, onClick: Rn(e2.onClick, a.onOpenToggle) }));
  return a.hasCustomAnchor ? d : /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(fT, lt({ asChild: true }, u), d);
}), gT = /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.forwardRef((e2, r) => {
  const { forceMount: n, ...o } = e2, a = go("PopoverContent", e2.__scopePopover);
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(Uv, { present: n || a.open }, a.modal ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(yT, lt({}, o, { ref: r })) : /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(wT, lt({}, o, { ref: r })));
}), yT = /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.forwardRef((e2, r) => {
  const { allowPinchZoom: n, portalled: o = true, ...a } = e2, u = go("PopoverContent", e2.__scopePopover), l = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(null), d = $n(r, l), w = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(false);
  qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    const y = l.current;
    if (y) return tA(y);
  }, []);
  const S = o ? zv : qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Fragment;
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(S, null, /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(Dv, { allowPinchZoom: n }, /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(Kv, lt({}, a, { ref: d, trapFocus: u.open, disableOutsidePointerEvents: true, onCloseAutoFocus: Rn(e2.onCloseAutoFocus, (y) => {
    var h;
    y.preventDefault(), w.current || (h = u.triggerRef.current) === null || h === void 0 || h.focus();
  }), onPointerDownOutside: Rn(e2.onPointerDownOutside, (y) => {
    const h = y.detail.originalEvent, f = h.button === 0 && h.ctrlKey === true, p = h.button === 2 || f;
    w.current = p;
  }, { checkForDefaultPrevented: false }), onFocusOutside: Rn(e2.onFocusOutside, (y) => y.preventDefault(), { checkForDefaultPrevented: false }) }))));
}), wT = /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.forwardRef((e2, r) => {
  const { portalled: n = true, ...o } = e2, a = go("PopoverContent", e2.__scopePopover), u = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(false), l = n ? zv : qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Fragment;
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(l, null, /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(Kv, lt({}, o, { ref: r, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (d) => {
    var w, S;
    (w = e2.onCloseAutoFocus) === null || w === void 0 || w.call(e2, d), d.defaultPrevented || (u.current || (S = a.triggerRef.current) === null || S === void 0 || S.focus(), d.preventDefault()), u.current = false;
  }, onInteractOutside: (d) => {
    var w, S;
    (w = e2.onInteractOutside) === null || w === void 0 || w.call(e2, d), d.defaultPrevented || (u.current = true);
    const y = d.target;
    !((S = a.triggerRef.current) === null || S === void 0) && S.contains(y) && d.preventDefault();
  } })));
}), Kv = /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.forwardRef((e2, r) => {
  const { __scopePopover: n, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: u, disableOutsidePointerEvents: l, onEscapeKeyDown: d, onPointerDownOutside: w, onFocusOutside: S, onInteractOutside: y, ...h } = e2, f = go("PopoverContent", n), p = jl(n);
  return HA(), /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(qA, { asChild: true, loop: true, trapped: o, onMountAutoFocus: a, onUnmountAutoFocus: u }, /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(XA, { asChild: true, disableOutsidePointerEvents: l, onInteractOutside: y, onEscapeKeyDown: d, onPointerDownOutside: w, onFocusOutside: S, onDismiss: () => f.onOpenChange(false) }, /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(cT, lt({ "data-state": Gv(f.open), role: "dialog", id: f.contentId }, p, h, { ref: r, style: { ...h.style, "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)" } }))));
});
function Gv(e2) {
  return e2 ? "open" : "closed";
}
const bT = vT, ST = mT, ET = gT;
var Fa = /* @__PURE__ */ ((e2) => (e2.VIDEO = "video", e2.CAROUSEL = "carousel", e2.TEXT = "text", e2))(Fa || {}), Ku = {}, qi = {}, Sa = {}, Ea = {}, _a = { exports: {} };
var Vu, Qp;
function ql() {
  if (Qp) return Vu;
  Qp = 1;
  var e2 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Vu = e2, Vu;
}
var Qu, nh;
function PT() {
  if (nh) return Qu;
  nh = 1;
  var e2 = /* @__PURE__ */ ql();
  function r() {
  }
  function n() {
  }
  return n.resetWarningCache = r, Qu = function() {
    function o(l, d, w, S, y, h) {
      if (h !== e2) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    o.isRequired = o;
    function a() {
      return o;
    }
    var u = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: a,
      element: o,
      elementType: o,
      instanceOf: a,
      node: o,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: n,
      resetWarningCache: r
    };
    return u.PropTypes = u, u;
  }, Qu;
}
var ih;
function CT() {
  if (ih) return _a.exports;
  if (ih = 1, false) ; else
    _a.exports = /* @__PURE__ */ PT()();
  return _a.exports;
}
var oh;
function RT() {
  return oh || (oh = 1, (function(e2) {
    (function(r, n) {
      n(e2, $, /* @__PURE__ */ CT());
    })(Ea, function(r, n, o) {
      Object.defineProperty(r, "__esModule", {
        value: true
      }), r.setHasSupportToCaptureOption = m;
      var a = l(n), u = l(o);
      function l(_) {
        return _ && _.__esModule ? _ : {
          default: _
        };
      }
      var d = Object.assign || function(_) {
        for (var x = 1; x < arguments.length; x++) {
          var P = arguments[x];
          for (var T in P)
            Object.prototype.hasOwnProperty.call(P, T) && (_[T] = P[T]);
        }
        return _;
      };
      function w(_, x) {
        var P = {};
        for (var T in _)
          x.indexOf(T) >= 0 || Object.prototype.hasOwnProperty.call(_, T) && (P[T] = _[T]);
        return P;
      }
      function S(_, x) {
        if (!(_ instanceof x))
          throw new TypeError("Cannot call a class as a function");
      }
      var y = /* @__PURE__ */ (function() {
        function _(x, P) {
          for (var T = 0; T < P.length; T++) {
            var M = P[T];
            M.enumerable = M.enumerable || false, M.configurable = true, "value" in M && (M.writable = true), Object.defineProperty(x, M.key, M);
          }
        }
        return function(x, P, T) {
          return P && _(x.prototype, P), T && _(x, T), x;
        };
      })();
      function h(_, x) {
        if (!_)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return x && (typeof x == "object" || typeof x == "function") ? x : _;
      }
      function f(_, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function, not " + typeof x);
        _.prototype = Object.create(x && x.prototype, {
          constructor: {
            value: _,
            enumerable: false,
            writable: true,
            configurable: true
          }
        }), x && (Object.setPrototypeOf ? Object.setPrototypeOf(_, x) : _.__proto__ = x);
      }
      var p = false;
      function m(_) {
        p = _;
      }
      try {
        addEventListener("test", null, Object.defineProperty({}, "capture", { get: function() {
          m(true);
        } }));
      } catch {
      }
      function c() {
        var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { capture: true };
        return p ? _ : _.capture;
      }
      function g(_) {
        if ("touches" in _) {
          var x = _.touches[0], P = x.pageX, T = x.pageY;
          return { x: P, y: T };
        }
        var M = _.screenX, B = _.screenY;
        return { x: M, y: B };
      }
      var b = (function(_) {
        f(x, _);
        function x() {
          var P;
          S(this, x);
          for (var T = arguments.length, M = Array(T), B = 0; B < T; B++)
            M[B] = arguments[B];
          var F = h(this, (P = x.__proto__ || Object.getPrototypeOf(x)).call.apply(P, [this].concat(M)));
          return F._handleSwipeStart = F._handleSwipeStart.bind(F), F._handleSwipeMove = F._handleSwipeMove.bind(F), F._handleSwipeEnd = F._handleSwipeEnd.bind(F), F._onMouseDown = F._onMouseDown.bind(F), F._onMouseMove = F._onMouseMove.bind(F), F._onMouseUp = F._onMouseUp.bind(F), F._setSwiperRef = F._setSwiperRef.bind(F), F;
        }
        return y(x, [{
          key: "componentDidMount",
          value: function() {
            this.swiper && this.swiper.addEventListener("touchmove", this._handleSwipeMove, c({
              capture: true,
              passive: false
            }));
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.swiper && this.swiper.removeEventListener("touchmove", this._handleSwipeMove, c({
              capture: true,
              passive: false
            }));
          }
        }, {
          key: "_onMouseDown",
          value: function(T) {
            this.props.allowMouseEvents && (this.mouseDown = true, document.addEventListener("mouseup", this._onMouseUp), document.addEventListener("mousemove", this._onMouseMove), this._handleSwipeStart(T));
          }
        }, {
          key: "_onMouseMove",
          value: function(T) {
            this.mouseDown && this._handleSwipeMove(T);
          }
        }, {
          key: "_onMouseUp",
          value: function(T) {
            this.mouseDown = false, document.removeEventListener("mouseup", this._onMouseUp), document.removeEventListener("mousemove", this._onMouseMove), this._handleSwipeEnd(T);
          }
        }, {
          key: "_handleSwipeStart",
          value: function(T) {
            var M = g(T), B = M.x, F = M.y;
            this.moveStart = { x: B, y: F }, this.props.onSwipeStart(T);
          }
        }, {
          key: "_handleSwipeMove",
          value: function(T) {
            if (this.moveStart) {
              var M = g(T), B = M.x, F = M.y, k = B - this.moveStart.x, Y = F - this.moveStart.y;
              this.moving = true;
              var W = this.props.onSwipeMove({
                x: k,
                y: Y
              }, T);
              W && T.cancelable && T.preventDefault(), this.movePosition = { deltaX: k, deltaY: Y };
            }
          }
        }, {
          key: "_handleSwipeEnd",
          value: function(T) {
            this.props.onSwipeEnd(T);
            var M = this.props.tolerance;
            this.moving && this.movePosition && (this.movePosition.deltaX < -M ? this.props.onSwipeLeft(1, T) : this.movePosition.deltaX > M && this.props.onSwipeRight(1, T), this.movePosition.deltaY < -M ? this.props.onSwipeUp(1, T) : this.movePosition.deltaY > M && this.props.onSwipeDown(1, T)), this.moveStart = null, this.moving = false, this.movePosition = null;
          }
        }, {
          key: "_setSwiperRef",
          value: function(T) {
            this.swiper = T, this.props.innerRef(T);
          }
        }, {
          key: "render",
          value: function() {
            var T = this.props;
            T.tagName;
            var M = T.className, B = T.style, F = T.children;
            T.allowMouseEvents, T.onSwipeUp, T.onSwipeDown, T.onSwipeLeft, T.onSwipeRight, T.onSwipeStart, T.onSwipeMove, T.onSwipeEnd, T.innerRef, T.tolerance;
            var k = w(T, ["tagName", "className", "style", "children", "allowMouseEvents", "onSwipeUp", "onSwipeDown", "onSwipeLeft", "onSwipeRight", "onSwipeStart", "onSwipeMove", "onSwipeEnd", "innerRef", "tolerance"]);
            return a.default.createElement(
              this.props.tagName,
              d({
                ref: this._setSwiperRef,
                onMouseDown: this._onMouseDown,
                onTouchStart: this._handleSwipeStart,
                onTouchEnd: this._handleSwipeEnd,
                className: M,
                style: B
              }, k),
              F
            );
          }
        }]), x;
      })(n.Component);
      b.displayName = "ReactSwipe", b.propTypes = {
        tagName: u.default.string,
        className: u.default.string,
        style: u.default.object,
        children: u.default.node,
        allowMouseEvents: u.default.bool,
        onSwipeUp: u.default.func,
        onSwipeDown: u.default.func,
        onSwipeLeft: u.default.func,
        onSwipeRight: u.default.func,
        onSwipeStart: u.default.func,
        onSwipeMove: u.default.func,
        onSwipeEnd: u.default.func,
        innerRef: u.default.func,
        tolerance: u.default.number.isRequired
      }, b.defaultProps = {
        tagName: "div",
        allowMouseEvents: false,
        onSwipeUp: function() {
        },
        onSwipeDown: function() {
        },
        onSwipeLeft: function() {
        },
        onSwipeRight: function() {
        },
        onSwipeStart: function() {
        },
        onSwipeMove: function() {
        },
        onSwipeEnd: function() {
        },
        innerRef: function() {
        },
        tolerance: 0
      }, r.default = b;
    });
  })(Ea)), Ea;
}
var ah;
function Xv() {
  return ah || (ah = 1, (function(e2) {
    (function(r, n) {
      n(e2, RT());
    })(Sa, function(r, n) {
      Object.defineProperty(r, "__esModule", {
        value: true
      });
      var o = a(n);
      function a(u) {
        return u && u.__esModule ? u : {
          default: u
        };
      }
      r.default = o.default;
    });
  })(Sa)), Sa;
}
var Zi = {}, sh;
function Jv() {
  if (sh) return Zi;
  sh = 1, Object.defineProperty(Zi, "__esModule", {
    value: true
  }), Zi.default = void 0;
  var e2 = r(iv());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function n(a, u, l) {
    return u in a ? Object.defineProperty(a, u, { value: l, enumerable: true, configurable: true, writable: true }) : a[u] = l, a;
  }
  var o = {
    ROOT: function(u) {
      return (0, e2.default)(n({
        "carousel-root": true
      }, u || "", !!u));
    },
    CAROUSEL: function(u) {
      return (0, e2.default)({
        carousel: true,
        "carousel-slider": u
      });
    },
    WRAPPER: function(u, l) {
      return (0, e2.default)({
        "thumbs-wrapper": !u,
        "slider-wrapper": u,
        "axis-horizontal": l === "horizontal",
        "axis-vertical": l !== "horizontal"
      });
    },
    SLIDER: function(u, l) {
      return (0, e2.default)({
        thumbs: !u,
        slider: u,
        animated: !l
      });
    },
    ITEM: function(u, l, d) {
      return (0, e2.default)({
        thumb: !u,
        slide: u,
        selected: l,
        previous: d
      });
    },
    ARROW_PREV: function(u) {
      return (0, e2.default)({
        "control-arrow control-prev": true,
        "control-disabled": u
      });
    },
    ARROW_NEXT: function(u) {
      return (0, e2.default)({
        "control-arrow control-next": true,
        "control-disabled": u
      });
    },
    DOT: function(u) {
      return (0, e2.default)({
        dot: true,
        selected: u
      });
    }
  };
  return Zi.default = o, Zi;
}
var Ki = {}, Gi = {}, uh;
function MT() {
  if (uh) return Gi;
  uh = 1, Object.defineProperty(Gi, "__esModule", {
    value: true
  }), Gi.outerWidth = void 0;
  var e2 = function(n) {
    var o = n.offsetWidth, a = getComputedStyle(n);
    return o += parseInt(a.marginLeft) + parseInt(a.marginRight), o;
  };
  return Gi.outerWidth = e2, Gi;
}
var Vi = {}, lh;
function Zl() {
  if (lh) return Vi;
  lh = 1, Object.defineProperty(Vi, "__esModule", {
    value: true
  }), Vi.default = void 0;
  var e2 = function(n, o, a) {
    var u = n === 0 ? n : n + o, l = a === "horizontal" ? [u, 0, 0] : [0, u, 0], d = "translate3d", w = "(" + l.join(",") + ")";
    return d + w;
  };
  return Vi.default = e2, Vi;
}
var Yi = {}, fh;
function Qv() {
  if (fh) return Yi;
  fh = 1, Object.defineProperty(Yi, "__esModule", {
    value: true
  }), Yi.default = void 0;
  var e2 = function() {
    return window;
  };
  return Yi.default = e2, Yi;
}
var ch;
function em() {
  if (ch) return Ki;
  ch = 1, Object.defineProperty(Ki, "__esModule", {
    value: true
  }), Ki.default = void 0;
  var e2 = w($), r = l(Jv()), n = MT(), o = l(Zl()), a = l(Xv()), u = l(Qv());
  function l(F) {
    return F && F.__esModule ? F : { default: F };
  }
  function d() {
    if (typeof WeakMap != "function") return null;
    var F = /* @__PURE__ */ new WeakMap();
    return d = function() {
      return F;
    }, F;
  }
  function w(F) {
    if (F && F.__esModule)
      return F;
    if (F === null || S(F) !== "object" && typeof F != "function")
      return { default: F };
    var k = d();
    if (k && k.has(F))
      return k.get(F);
    var Y = {}, W = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var L in F)
      if (Object.prototype.hasOwnProperty.call(F, L)) {
        var U = W ? Object.getOwnPropertyDescriptor(F, L) : null;
        U && (U.get || U.set) ? Object.defineProperty(Y, L, U) : Y[L] = F[L];
      }
    return Y.default = F, k && k.set(F, Y), Y;
  }
  function S(F) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? S = function(Y) {
      return typeof Y;
    } : S = function(Y) {
      return Y && typeof Symbol == "function" && Y.constructor === Symbol && Y !== Symbol.prototype ? "symbol" : typeof Y;
    }, S(F);
  }
  function y() {
    return y = Object.assign || function(F) {
      for (var k = 1; k < arguments.length; k++) {
        var Y = arguments[k];
        for (var W in Y)
          Object.prototype.hasOwnProperty.call(Y, W) && (F[W] = Y[W]);
      }
      return F;
    }, y.apply(this, arguments);
  }
  function h(F, k) {
    if (!(F instanceof k))
      throw new TypeError("Cannot call a class as a function");
  }
  function f(F, k) {
    for (var Y = 0; Y < k.length; Y++) {
      var W = k[Y];
      W.enumerable = W.enumerable || false, W.configurable = true, "value" in W && (W.writable = true), Object.defineProperty(F, W.key, W);
    }
  }
  function p(F, k, Y) {
    return k && f(F.prototype, k), F;
  }
  function m(F, k) {
    if (typeof k != "function" && k !== null)
      throw new TypeError("Super expression must either be null or a function");
    F.prototype = Object.create(k && k.prototype, { constructor: { value: F, writable: true, configurable: true } }), k && c(F, k);
  }
  function c(F, k) {
    return c = Object.setPrototypeOf || function(W, L) {
      return W.__proto__ = L, W;
    }, c(F, k);
  }
  function g(F) {
    var k = x();
    return function() {
      var W = P(F), L;
      if (k) {
        var U = P(this).constructor;
        L = Reflect.construct(W, arguments, U);
      } else
        L = W.apply(this, arguments);
      return b(this, L);
    };
  }
  function b(F, k) {
    return k && (S(k) === "object" || typeof k == "function") ? k : _(F);
  }
  function _(F) {
    if (F === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return F;
  }
  function x() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
    if (typeof Proxy == "function") return true;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      })), true;
    } catch {
      return false;
    }
  }
  function P(F) {
    return P = Object.setPrototypeOf ? Object.getPrototypeOf : function(Y) {
      return Y.__proto__ || Object.getPrototypeOf(Y);
    }, P(F);
  }
  function T(F, k, Y) {
    return k in F ? Object.defineProperty(F, k, { value: Y, enumerable: true, configurable: true, writable: true }) : F[k] = Y, F;
  }
  var M = function(k) {
    return k.hasOwnProperty("key");
  }, B = /* @__PURE__ */ (function(F) {
    m(Y, F);
    var k = g(Y);
    function Y(W) {
      var L;
      return h(this, Y), L = k.call(this, W), T(_(L), "itemsWrapperRef", void 0), T(_(L), "itemsListRef", void 0), T(_(L), "thumbsRef", void 0), T(_(L), "setItemsWrapperRef", function(U) {
        L.itemsWrapperRef = U;
      }), T(_(L), "setItemsListRef", function(U) {
        L.itemsListRef = U;
      }), T(_(L), "setThumbsRef", function(U, H) {
        L.thumbsRef || (L.thumbsRef = []), L.thumbsRef[H] = U;
      }), T(_(L), "updateSizes", function() {
        if (!(!L.props.children || !L.itemsWrapperRef || !L.thumbsRef)) {
          var U = e2.Children.count(L.props.children), H = L.itemsWrapperRef.clientWidth, R = L.props.thumbWidth ? L.props.thumbWidth : (0, n.outerWidth)(L.thumbsRef[0]), X = Math.floor(H / R), G = X < U, ee = G ? U - X : 0;
          L.setState(function(ue, j) {
            return {
              itemSize: R,
              visibleItems: X,
              firstItem: G ? L.getFirstItem(j.selectedItem) : 0,
              lastPosition: ee,
              showArrows: G
            };
          });
        }
      }), T(_(L), "handleClickItem", function(U, H, R) {
        if (!M(R) || R.key === "Enter") {
          var X = L.props.onSelectItem;
          typeof X == "function" && X(U, H);
        }
      }), T(_(L), "onSwipeStart", function() {
        L.setState({
          swiping: true
        });
      }), T(_(L), "onSwipeEnd", function() {
        L.setState({
          swiping: false
        });
      }), T(_(L), "onSwipeMove", function(U) {
        var H = U.x;
        if (!L.state.itemSize || !L.itemsWrapperRef || !L.state.visibleItems)
          return false;
        var R = 0, X = e2.Children.count(L.props.children), G = -(L.state.firstItem * 100) / L.state.visibleItems, ee = Math.max(X - L.state.visibleItems, 0), ue = -ee * 100 / L.state.visibleItems;
        G === R && H > 0 && (H = 0), G === ue && H < 0 && (H = 0);
        var j = L.itemsWrapperRef.clientWidth, Q = G + 100 / (j / H);
        return L.itemsListRef && ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(oe) {
          L.itemsListRef.style[oe] = (0, o.default)(Q, "%", L.props.axis);
        }), true;
      }), T(_(L), "slideRight", function(U) {
        L.moveTo(L.state.firstItem - (typeof U == "number" ? U : 1));
      }), T(_(L), "slideLeft", function(U) {
        L.moveTo(L.state.firstItem + (typeof U == "number" ? U : 1));
      }), T(_(L), "moveTo", function(U) {
        U = U < 0 ? 0 : U, U = U >= L.state.lastPosition ? L.state.lastPosition : U, L.setState({
          firstItem: U
        });
      }), L.state = {
        selectedItem: W.selectedItem,
        swiping: false,
        showArrows: false,
        firstItem: 0,
        visibleItems: 0,
        lastPosition: 0
      }, L;
    }
    return p(Y, [{
      key: "componentDidMount",
      value: function() {
        this.setupThumbs();
      }
    }, {
      key: "componentDidUpdate",
      value: function(L) {
        this.props.selectedItem !== this.state.selectedItem && this.setState({
          selectedItem: this.props.selectedItem,
          firstItem: this.getFirstItem(this.props.selectedItem)
        }), this.props.children !== L.children && this.updateSizes();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.destroyThumbs();
      }
    }, {
      key: "setupThumbs",
      value: function() {
        (0, u.default)().addEventListener("resize", this.updateSizes), (0, u.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.updateSizes();
      }
    }, {
      key: "destroyThumbs",
      value: function() {
        (0, u.default)().removeEventListener("resize", this.updateSizes), (0, u.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
      }
    }, {
      key: "getFirstItem",
      value: function(L) {
        var U = L;
        return L >= this.state.lastPosition && (U = this.state.lastPosition), L < this.state.firstItem + this.state.visibleItems && (U = this.state.firstItem), L < this.state.firstItem && (U = L), U;
      }
    }, {
      key: "renderItems",
      value: function() {
        var L = this;
        return this.props.children.map(function(U, H) {
          var R = r.default.ITEM(false, H === L.state.selectedItem), X = {
            key: H,
            ref: function(ee) {
              return L.setThumbsRef(ee, H);
            },
            className: R,
            onClick: L.handleClickItem.bind(L, H, L.props.children[H]),
            onKeyDown: L.handleClickItem.bind(L, H, L.props.children[H]),
            "aria-label": "".concat(L.props.labels.item, " ").concat(H + 1),
            style: {
              width: L.props.thumbWidth
            }
          };
          return /* @__PURE__ */ e2.default.createElement("li", y({}, X, {
            role: "button",
            tabIndex: 0
          }), U);
        });
      }
    }, {
      key: "render",
      value: function() {
        var L = this;
        if (!this.props.children)
          return null;
        var U = e2.Children.count(this.props.children) > 1, H = this.state.showArrows && this.state.firstItem > 0, R = this.state.showArrows && this.state.firstItem < this.state.lastPosition, X = {}, G = -this.state.firstItem * (this.state.itemSize || 0), ee = (0, o.default)(G, "px", this.props.axis), ue = this.props.transitionTime + "ms";
        return X = {
          WebkitTransform: ee,
          MozTransform: ee,
          MsTransform: ee,
          OTransform: ee,
          transform: ee,
          msTransform: ee,
          WebkitTransitionDuration: ue,
          MozTransitionDuration: ue,
          MsTransitionDuration: ue,
          OTransitionDuration: ue,
          transitionDuration: ue,
          msTransitionDuration: ue
        }, /* @__PURE__ */ e2.default.createElement("div", {
          className: r.default.CAROUSEL(false)
        }, /* @__PURE__ */ e2.default.createElement("div", {
          className: r.default.WRAPPER(false),
          ref: this.setItemsWrapperRef
        }, /* @__PURE__ */ e2.default.createElement("button", {
          type: "button",
          className: r.default.ARROW_PREV(!H),
          onClick: function() {
            return L.slideRight();
          },
          "aria-label": this.props.labels.leftArrow
        }), U ? /* @__PURE__ */ e2.default.createElement(a.default, {
          tagName: "ul",
          className: r.default.SLIDER(false, this.state.swiping),
          onSwipeLeft: this.slideLeft,
          onSwipeRight: this.slideRight,
          onSwipeMove: this.onSwipeMove,
          onSwipeStart: this.onSwipeStart,
          onSwipeEnd: this.onSwipeEnd,
          style: X,
          innerRef: this.setItemsListRef,
          allowMouseEvents: this.props.emulateTouch
        }, this.renderItems()) : /* @__PURE__ */ e2.default.createElement("ul", {
          className: r.default.SLIDER(false, this.state.swiping),
          ref: function(Q) {
            return L.setItemsListRef(Q);
          },
          style: X
        }, this.renderItems()), /* @__PURE__ */ e2.default.createElement("button", {
          type: "button",
          className: r.default.ARROW_NEXT(!R),
          onClick: function() {
            return L.slideLeft();
          },
          "aria-label": this.props.labels.rightArrow
        })));
      }
    }]), Y;
  })(e2.Component);
  return Ki.default = B, T(B, "displayName", "Thumbs"), T(B, "defaultProps", {
    axis: "horizontal",
    labels: {
      leftArrow: "previous slide / item",
      rightArrow: "next slide / item",
      item: "slide item"
    },
    selectedItem: 0,
    thumbWidth: 80,
    transitionTime: 350
  }), Ki;
}
var Xi = {}, dh;
function IT() {
  if (dh) return Xi;
  dh = 1, Object.defineProperty(Xi, "__esModule", {
    value: true
  }), Xi.default = void 0;
  var e2 = function() {
    return document;
  };
  return Xi.default = e2, Xi;
}
var kt = {}, ph;
function tm() {
  if (ph) return kt;
  ph = 1, Object.defineProperty(kt, "__esModule", {
    value: true
  }), kt.setPosition = kt.getPosition = kt.isKeyboardEvent = kt.defaultStatusFormatter = kt.noop = void 0;
  var e2 = $, r = n(Zl());
  function n(w) {
    return w && w.__esModule ? w : { default: w };
  }
  var o = function() {
  };
  kt.noop = o;
  var a = function(S, y) {
    return "".concat(S, " of ").concat(y);
  };
  kt.defaultStatusFormatter = a;
  var u = function(S) {
    return S ? S.hasOwnProperty("key") : false;
  };
  kt.isKeyboardEvent = u;
  var l = function(S, y) {
    if (y.infiniteLoop && ++S, S === 0)
      return 0;
    var h = e2.Children.count(y.children);
    if (y.centerMode && y.axis === "horizontal") {
      var f = -S * y.centerSlidePercentage, p = h - 1;
      return S && (S !== p || y.infiniteLoop) ? f += (100 - y.centerSlidePercentage) / 2 : S === p && (f += 100 - y.centerSlidePercentage), f;
    }
    return -S * 100;
  };
  kt.getPosition = l;
  var d = function(S, y) {
    var h = {};
    return ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(f) {
      h[f] = (0, r.default)(S, "%", y);
    }), h;
  };
  return kt.setPosition = d, kt;
}
var ar = {}, hh;
function LT() {
  if (hh) return ar;
  hh = 1, Object.defineProperty(ar, "__esModule", {
    value: true
  }), ar.fadeAnimationHandler = ar.slideStopSwipingHandler = ar.slideSwipeAnimationHandler = ar.slideAnimationHandler = void 0;
  var e2 = $, r = o(Zl()), n = tm();
  function o(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function a(h, f) {
    var p = Object.keys(h);
    if (Object.getOwnPropertySymbols) {
      var m = Object.getOwnPropertySymbols(h);
      f && (m = m.filter(function(c) {
        return Object.getOwnPropertyDescriptor(h, c).enumerable;
      })), p.push.apply(p, m);
    }
    return p;
  }
  function u(h) {
    for (var f = 1; f < arguments.length; f++) {
      var p = arguments[f] != null ? arguments[f] : {};
      f % 2 ? a(Object(p), true).forEach(function(m) {
        l(h, m, p[m]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(p)) : a(Object(p)).forEach(function(m) {
        Object.defineProperty(h, m, Object.getOwnPropertyDescriptor(p, m));
      });
    }
    return h;
  }
  function l(h, f, p) {
    return f in h ? Object.defineProperty(h, f, { value: p, enumerable: true, configurable: true, writable: true }) : h[f] = p, h;
  }
  var d = function(f, p) {
    var m = {}, c = p.selectedItem, g = c, b = e2.Children.count(f.children) - 1, _ = f.infiniteLoop && (c < 0 || c > b);
    if (_)
      return g < 0 ? f.centerMode && f.centerSlidePercentage && f.axis === "horizontal" ? m.itemListStyle = (0, n.setPosition)(-(b + 2) * f.centerSlidePercentage - (100 - f.centerSlidePercentage) / 2, f.axis) : m.itemListStyle = (0, n.setPosition)(-(b + 2) * 100, f.axis) : g > b && (m.itemListStyle = (0, n.setPosition)(0, f.axis)), m;
    var x = (0, n.getPosition)(c, f), P = (0, r.default)(x, "%", f.axis), T = f.transitionTime + "ms";
    return m.itemListStyle = {
      WebkitTransform: P,
      msTransform: P,
      OTransform: P,
      transform: P
    }, p.swiping || (m.itemListStyle = u(u({}, m.itemListStyle), {}, {
      WebkitTransitionDuration: T,
      MozTransitionDuration: T,
      OTransitionDuration: T,
      transitionDuration: T,
      msTransitionDuration: T
    })), m;
  };
  ar.slideAnimationHandler = d;
  var w = function(f, p, m, c) {
    var g = {}, b = p.axis === "horizontal", _ = e2.Children.count(p.children), x = 0, P = (0, n.getPosition)(m.selectedItem, p), T = p.infiniteLoop ? (0, n.getPosition)(_ - 1, p) - 100 : (0, n.getPosition)(_ - 1, p), M = b ? f.x : f.y, B = M;
    P === x && M > 0 && (B = 0), P === T && M < 0 && (B = 0);
    var F = P + 100 / (m.itemSize / B), k = Math.abs(M) > p.swipeScrollTolerance;
    return p.infiniteLoop && k && (m.selectedItem === 0 && F > -100 ? F -= _ * 100 : m.selectedItem === _ - 1 && F < -_ * 100 && (F += _ * 100)), (!p.preventMovementUntilSwipeScrollTolerance || k || m.swipeMovementStarted) && (m.swipeMovementStarted || c({
      swipeMovementStarted: true
    }), g.itemListStyle = (0, n.setPosition)(F, p.axis)), k && !m.cancelClick && c({
      cancelClick: true
    }), g;
  };
  ar.slideSwipeAnimationHandler = w;
  var S = function(f, p) {
    var m = (0, n.getPosition)(p.selectedItem, f), c = (0, n.setPosition)(m, f.axis);
    return {
      itemListStyle: c
    };
  };
  ar.slideStopSwipingHandler = S;
  var y = function(f, p) {
    var m = f.transitionTime + "ms", c = "ease-in-out", g = {
      position: "absolute",
      display: "block",
      zIndex: -2,
      minHeight: "100%",
      opacity: 0,
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      transitionTimingFunction: c,
      msTransitionTimingFunction: c,
      MozTransitionTimingFunction: c,
      WebkitTransitionTimingFunction: c,
      OTransitionTimingFunction: c
    };
    return p.swiping || (g = u(u({}, g), {}, {
      WebkitTransitionDuration: m,
      MozTransitionDuration: m,
      OTransitionDuration: m,
      transitionDuration: m,
      msTransitionDuration: m
    })), {
      slideStyle: g,
      selectedStyle: u(u({}, g), {}, {
        opacity: 1,
        position: "relative"
      }),
      prevStyle: u({}, g)
    };
  };
  return ar.fadeAnimationHandler = y, ar;
}
var vh;
function FT() {
  if (vh) return qi;
  vh = 1, Object.defineProperty(qi, "__esModule", {
    value: true
  }), qi.default = void 0;
  var e2 = y($), r = w(Xv()), n = w(Jv()), o = w(em()), a = w(IT()), u = w(Qv()), l = tm(), d = LT();
  function w(W) {
    return W && W.__esModule ? W : { default: W };
  }
  function S() {
    if (typeof WeakMap != "function") return null;
    var W = /* @__PURE__ */ new WeakMap();
    return S = function() {
      return W;
    }, W;
  }
  function y(W) {
    if (W && W.__esModule)
      return W;
    if (W === null || h(W) !== "object" && typeof W != "function")
      return { default: W };
    var L = S();
    if (L && L.has(W))
      return L.get(W);
    var U = {}, H = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var R in W)
      if (Object.prototype.hasOwnProperty.call(W, R)) {
        var X = H ? Object.getOwnPropertyDescriptor(W, R) : null;
        X && (X.get || X.set) ? Object.defineProperty(U, R, X) : U[R] = W[R];
      }
    return U.default = W, L && L.set(W, U), U;
  }
  function h(W) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? h = function(U) {
      return typeof U;
    } : h = function(U) {
      return U && typeof Symbol == "function" && U.constructor === Symbol && U !== Symbol.prototype ? "symbol" : typeof U;
    }, h(W);
  }
  function f() {
    return f = Object.assign || function(W) {
      for (var L = 1; L < arguments.length; L++) {
        var U = arguments[L];
        for (var H in U)
          Object.prototype.hasOwnProperty.call(U, H) && (W[H] = U[H]);
      }
      return W;
    }, f.apply(this, arguments);
  }
  function p(W, L) {
    var U = Object.keys(W);
    if (Object.getOwnPropertySymbols) {
      var H = Object.getOwnPropertySymbols(W);
      L && (H = H.filter(function(R) {
        return Object.getOwnPropertyDescriptor(W, R).enumerable;
      })), U.push.apply(U, H);
    }
    return U;
  }
  function m(W) {
    for (var L = 1; L < arguments.length; L++) {
      var U = arguments[L] != null ? arguments[L] : {};
      L % 2 ? p(Object(U), true).forEach(function(H) {
        k(W, H, U[H]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(W, Object.getOwnPropertyDescriptors(U)) : p(Object(U)).forEach(function(H) {
        Object.defineProperty(W, H, Object.getOwnPropertyDescriptor(U, H));
      });
    }
    return W;
  }
  function c(W, L) {
    if (!(W instanceof L))
      throw new TypeError("Cannot call a class as a function");
  }
  function g(W, L) {
    for (var U = 0; U < L.length; U++) {
      var H = L[U];
      H.enumerable = H.enumerable || false, H.configurable = true, "value" in H && (H.writable = true), Object.defineProperty(W, H.key, H);
    }
  }
  function b(W, L, U) {
    return L && g(W.prototype, L), W;
  }
  function _(W, L) {
    if (typeof L != "function" && L !== null)
      throw new TypeError("Super expression must either be null or a function");
    W.prototype = Object.create(L && L.prototype, { constructor: { value: W, writable: true, configurable: true } }), L && x(W, L);
  }
  function x(W, L) {
    return x = Object.setPrototypeOf || function(H, R) {
      return H.__proto__ = R, H;
    }, x(W, L);
  }
  function P(W) {
    var L = B();
    return function() {
      var H = F(W), R;
      if (L) {
        var X = F(this).constructor;
        R = Reflect.construct(H, arguments, X);
      } else
        R = H.apply(this, arguments);
      return T(this, R);
    };
  }
  function T(W, L) {
    return L && (h(L) === "object" || typeof L == "function") ? L : M(W);
  }
  function M(W) {
    if (W === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return W;
  }
  function B() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
    if (typeof Proxy == "function") return true;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      })), true;
    } catch {
      return false;
    }
  }
  function F(W) {
    return F = Object.setPrototypeOf ? Object.getPrototypeOf : function(U) {
      return U.__proto__ || Object.getPrototypeOf(U);
    }, F(W);
  }
  function k(W, L, U) {
    return L in W ? Object.defineProperty(W, L, { value: U, enumerable: true, configurable: true, writable: true }) : W[L] = U, W;
  }
  var Y = /* @__PURE__ */ (function(W) {
    _(U, W);
    var L = P(U);
    function U(H) {
      var R;
      c(this, U), R = L.call(this, H), k(M(R), "thumbsRef", void 0), k(M(R), "carouselWrapperRef", void 0), k(M(R), "listRef", void 0), k(M(R), "itemsRef", void 0), k(M(R), "timer", void 0), k(M(R), "animationHandler", void 0), k(M(R), "setThumbsRef", function(G) {
        R.thumbsRef = G;
      }), k(M(R), "setCarouselWrapperRef", function(G) {
        R.carouselWrapperRef = G;
      }), k(M(R), "setListRef", function(G) {
        R.listRef = G;
      }), k(M(R), "setItemsRef", function(G, ee) {
        R.itemsRef || (R.itemsRef = []), R.itemsRef[ee] = G;
      }), k(M(R), "autoPlay", function() {
        e2.Children.count(R.props.children) <= 1 || (R.clearAutoPlay(), R.props.autoPlay && (R.timer = setTimeout(function() {
          R.increment();
        }, R.props.interval)));
      }), k(M(R), "clearAutoPlay", function() {
        R.timer && clearTimeout(R.timer);
      }), k(M(R), "resetAutoPlay", function() {
        R.clearAutoPlay(), R.autoPlay();
      }), k(M(R), "stopOnHover", function() {
        R.setState({
          isMouseEntered: true
        }, R.clearAutoPlay);
      }), k(M(R), "startOnLeave", function() {
        R.setState({
          isMouseEntered: false
        }, R.autoPlay);
      }), k(M(R), "isFocusWithinTheCarousel", function() {
        return R.carouselWrapperRef ? !!((0, a.default)().activeElement === R.carouselWrapperRef || R.carouselWrapperRef.contains((0, a.default)().activeElement)) : false;
      }), k(M(R), "navigateWithKeyboard", function(G) {
        if (R.isFocusWithinTheCarousel()) {
          var ee = R.props.axis, ue = ee === "horizontal", j = {
            ArrowUp: 38,
            ArrowRight: 39,
            ArrowDown: 40,
            ArrowLeft: 37
          }, Q = ue ? j.ArrowRight : j.ArrowDown, oe = ue ? j.ArrowLeft : j.ArrowUp;
          Q === G.keyCode ? R.increment() : oe === G.keyCode && R.decrement();
        }
      }), k(M(R), "updateSizes", function() {
        if (!(!R.state.initialized || !R.itemsRef || R.itemsRef.length === 0)) {
          var G = R.props.axis === "horizontal", ee = R.itemsRef[0];
          if (ee) {
            var ue = G ? ee.clientWidth : ee.clientHeight;
            R.setState({
              itemSize: ue
            }), R.thumbsRef && R.thumbsRef.updateSizes();
          }
        }
      }), k(M(R), "setMountState", function() {
        R.setState({
          hasMount: true
        }), R.updateSizes();
      }), k(M(R), "handleClickItem", function(G, ee) {
        if (e2.Children.count(R.props.children) !== 0) {
          if (R.state.cancelClick) {
            R.setState({
              cancelClick: false
            });
            return;
          }
          R.props.onClickItem(G, ee), G !== R.state.selectedItem && R.setState({
            selectedItem: G
          });
        }
      }), k(M(R), "handleOnChange", function(G, ee) {
        e2.Children.count(R.props.children) <= 1 || R.props.onChange(G, ee);
      }), k(M(R), "handleClickThumb", function(G, ee) {
        R.props.onClickThumb(G, ee), R.moveTo(G);
      }), k(M(R), "onSwipeStart", function(G) {
        R.setState({
          swiping: true
        }), R.props.onSwipeStart(G);
      }), k(M(R), "onSwipeEnd", function(G) {
        R.setState({
          swiping: false,
          cancelClick: false,
          swipeMovementStarted: false
        }), R.props.onSwipeEnd(G), R.clearAutoPlay(), R.state.autoPlay && R.autoPlay();
      }), k(M(R), "onSwipeMove", function(G, ee) {
        R.props.onSwipeMove(ee);
        var ue = R.props.swipeAnimationHandler(G, R.props, R.state, R.setState.bind(M(R)));
        return R.setState(m({}, ue)), !!Object.keys(ue).length;
      }), k(M(R), "decrement", function() {
        var G = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        R.moveTo(R.state.selectedItem - (typeof G == "number" ? G : 1));
      }), k(M(R), "increment", function() {
        var G = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        R.moveTo(R.state.selectedItem + (typeof G == "number" ? G : 1));
      }), k(M(R), "moveTo", function(G) {
        if (typeof G == "number") {
          var ee = e2.Children.count(R.props.children) - 1;
          G < 0 && (G = R.props.infiniteLoop ? ee : 0), G > ee && (G = R.props.infiniteLoop ? 0 : ee), R.selectItem({
            // if it's not a slider, we don't need to set position here
            selectedItem: G
          }), R.state.autoPlay && R.state.isMouseEntered === false && R.resetAutoPlay();
        }
      }), k(M(R), "onClickNext", function() {
        R.increment(1);
      }), k(M(R), "onClickPrev", function() {
        R.decrement(1);
      }), k(M(R), "onSwipeForward", function() {
        R.increment(1), R.props.emulateTouch && R.setState({
          cancelClick: true
        });
      }), k(M(R), "onSwipeBackwards", function() {
        R.decrement(1), R.props.emulateTouch && R.setState({
          cancelClick: true
        });
      }), k(M(R), "changeItem", function(G) {
        return function(ee) {
          (!(0, l.isKeyboardEvent)(ee) || ee.key === "Enter") && R.moveTo(G);
        };
      }), k(M(R), "selectItem", function(G) {
        R.setState(m({
          previousItem: R.state.selectedItem
        }, G), function() {
          R.setState(R.animationHandler(R.props, R.state));
        }), R.handleOnChange(G.selectedItem, e2.Children.toArray(R.props.children)[G.selectedItem]);
      }), k(M(R), "getInitialImage", function() {
        var G = R.props.selectedItem, ee = R.itemsRef && R.itemsRef[G], ue = ee && ee.getElementsByTagName("img") || [];
        return ue[0];
      }), k(M(R), "getVariableItemHeight", function(G) {
        var ee = R.itemsRef && R.itemsRef[G];
        if (R.state.hasMount && ee && ee.children.length) {
          var ue = ee.children[0].getElementsByTagName("img") || [];
          if (ue.length > 0) {
            var j = ue[0];
            if (!j.complete) {
              var Q = function ie() {
                R.forceUpdate(), j.removeEventListener("load", ie);
              };
              j.addEventListener("load", Q);
            }
          }
          var oe = ue[0] || ee.children[0], le = oe.clientHeight;
          return le > 0 ? le : null;
        }
        return null;
      });
      var X = {
        initialized: false,
        previousItem: H.selectedItem,
        selectedItem: H.selectedItem,
        hasMount: false,
        isMouseEntered: false,
        autoPlay: H.autoPlay,
        swiping: false,
        swipeMovementStarted: false,
        cancelClick: false,
        itemSize: 1,
        itemListStyle: {},
        slideStyle: {},
        selectedStyle: {},
        prevStyle: {}
      };
      return R.animationHandler = typeof H.animationHandler == "function" && H.animationHandler || H.animationHandler === "fade" && d.fadeAnimationHandler || d.slideAnimationHandler, R.state = m(m({}, X), R.animationHandler(H, X)), R;
    }
    return b(U, [{
      key: "componentDidMount",
      value: function() {
        this.props.children && this.setupCarousel();
      }
    }, {
      key: "componentDidUpdate",
      value: function(R, X) {
        !R.children && this.props.children && !this.state.initialized && this.setupCarousel(), !R.autoFocus && this.props.autoFocus && this.forceFocus(), X.swiping && !this.state.swiping && this.setState(m({}, this.props.stopSwipingHandler(this.props, this.state))), (R.selectedItem !== this.props.selectedItem || R.centerMode !== this.props.centerMode) && (this.updateSizes(), this.moveTo(this.props.selectedItem)), R.autoPlay !== this.props.autoPlay && (this.props.autoPlay ? this.setupAutoPlay() : this.destroyAutoPlay(), this.setState({
          autoPlay: this.props.autoPlay
        }));
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.destroyCarousel();
      }
    }, {
      key: "setupCarousel",
      value: function() {
        var R = this;
        this.bindEvents(), this.state.autoPlay && e2.Children.count(this.props.children) > 1 && this.setupAutoPlay(), this.props.autoFocus && this.forceFocus(), this.setState({
          initialized: true
        }, function() {
          var X = R.getInitialImage();
          X && !X.complete ? X.addEventListener("load", R.setMountState) : R.setMountState();
        });
      }
    }, {
      key: "destroyCarousel",
      value: function() {
        this.state.initialized && (this.unbindEvents(), this.destroyAutoPlay());
      }
    }, {
      key: "setupAutoPlay",
      value: function() {
        this.autoPlay();
        var R = this.carouselWrapperRef;
        this.props.stopOnHover && R && (R.addEventListener("mouseenter", this.stopOnHover), R.addEventListener("mouseleave", this.startOnLeave));
      }
    }, {
      key: "destroyAutoPlay",
      value: function() {
        this.clearAutoPlay();
        var R = this.carouselWrapperRef;
        this.props.stopOnHover && R && (R.removeEventListener("mouseenter", this.stopOnHover), R.removeEventListener("mouseleave", this.startOnLeave));
      }
    }, {
      key: "bindEvents",
      value: function() {
        (0, u.default)().addEventListener("resize", this.updateSizes), (0, u.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.props.useKeyboardArrows && (0, a.default)().addEventListener("keydown", this.navigateWithKeyboard);
      }
    }, {
      key: "unbindEvents",
      value: function() {
        (0, u.default)().removeEventListener("resize", this.updateSizes), (0, u.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
        var R = this.getInitialImage();
        R && R.removeEventListener("load", this.setMountState), this.props.useKeyboardArrows && (0, a.default)().removeEventListener("keydown", this.navigateWithKeyboard);
      }
    }, {
      key: "forceFocus",
      value: function() {
        var R;
        (R = this.carouselWrapperRef) === null || R === void 0 || R.focus();
      }
    }, {
      key: "renderItems",
      value: function(R) {
        var X = this;
        return this.props.children ? e2.Children.map(this.props.children, function(G, ee) {
          var ue = ee === X.state.selectedItem, j = ee === X.state.previousItem, Q = ue && X.state.selectedStyle || j && X.state.prevStyle || X.state.slideStyle || {};
          X.props.centerMode && X.props.axis === "horizontal" && (Q = m(m({}, Q), {}, {
            minWidth: X.props.centerSlidePercentage + "%"
          })), X.state.swiping && X.state.swipeMovementStarted && (Q = m(m({}, Q), {}, {
            pointerEvents: "none"
          }));
          var oe = {
            ref: function(ie) {
              return X.setItemsRef(ie, ee);
            },
            key: "itemKey" + ee + (R ? "clone" : ""),
            className: n.default.ITEM(true, ee === X.state.selectedItem, ee === X.state.previousItem),
            onClick: X.handleClickItem.bind(X, ee, G),
            style: Q
          };
          return /* @__PURE__ */ e2.default.createElement("li", oe, X.props.renderItem(G, {
            isSelected: ee === X.state.selectedItem,
            isPrevious: ee === X.state.previousItem
          }));
        }) : [];
      }
    }, {
      key: "renderControls",
      value: function() {
        var R = this, X = this.props, G = X.showIndicators, ee = X.labels, ue = X.renderIndicator, j = X.children;
        return G ? /* @__PURE__ */ e2.default.createElement("ul", {
          className: "control-dots"
        }, e2.Children.map(j, function(Q, oe) {
          return ue && ue(R.changeItem(oe), oe === R.state.selectedItem, oe, ee.item);
        })) : null;
      }
    }, {
      key: "renderStatus",
      value: function() {
        return this.props.showStatus ? /* @__PURE__ */ e2.default.createElement("p", {
          className: "carousel-status"
        }, this.props.statusFormatter(this.state.selectedItem + 1, e2.Children.count(this.props.children))) : null;
      }
    }, {
      key: "renderThumbs",
      value: function() {
        return !this.props.showThumbs || !this.props.children || e2.Children.count(this.props.children) === 0 ? null : /* @__PURE__ */ e2.default.createElement(o.default, {
          ref: this.setThumbsRef,
          onSelectItem: this.handleClickThumb,
          selectedItem: this.state.selectedItem,
          transitionTime: this.props.transitionTime,
          thumbWidth: this.props.thumbWidth,
          labels: this.props.labels,
          emulateTouch: this.props.emulateTouch
        }, this.props.renderThumbs(this.props.children));
      }
    }, {
      key: "render",
      value: function() {
        var R = this;
        if (!this.props.children || e2.Children.count(this.props.children) === 0)
          return null;
        var X = this.props.swipeable && e2.Children.count(this.props.children) > 1, G = this.props.axis === "horizontal", ee = this.props.showArrows && e2.Children.count(this.props.children) > 1, ue = ee && (this.state.selectedItem > 0 || this.props.infiniteLoop) || false, j = ee && (this.state.selectedItem < e2.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || false, Q = this.renderItems(true), oe = Q.shift(), le = Q.pop(), ie = {
          className: n.default.SLIDER(true, this.state.swiping),
          onSwipeMove: this.onSwipeMove,
          onSwipeStart: this.onSwipeStart,
          onSwipeEnd: this.onSwipeEnd,
          style: this.state.itemListStyle,
          tolerance: this.props.swipeScrollTolerance
        }, fe = {};
        if (G) {
          if (ie.onSwipeLeft = this.onSwipeForward, ie.onSwipeRight = this.onSwipeBackwards, this.props.dynamicHeight) {
            var de = this.getVariableItemHeight(this.state.selectedItem);
            fe.height = de || "auto";
          }
        } else
          ie.onSwipeUp = this.props.verticalSwipe === "natural" ? this.onSwipeBackwards : this.onSwipeForward, ie.onSwipeDown = this.props.verticalSwipe === "natural" ? this.onSwipeForward : this.onSwipeBackwards, ie.style = m(m({}, ie.style), {}, {
            height: this.state.itemSize
          }), fe.height = this.state.itemSize;
        return /* @__PURE__ */ e2.default.createElement("div", {
          "aria-label": this.props.ariaLabel,
          className: n.default.ROOT(this.props.className),
          ref: this.setCarouselWrapperRef,
          tabIndex: this.props.useKeyboardArrows ? 0 : void 0
        }, /* @__PURE__ */ e2.default.createElement("div", {
          className: n.default.CAROUSEL(true),
          style: {
            width: this.props.width
          }
        }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, ue, this.props.labels.leftArrow), /* @__PURE__ */ e2.default.createElement("div", {
          className: n.default.WRAPPER(true, this.props.axis),
          style: fe
        }, X ? /* @__PURE__ */ e2.default.createElement(r.default, f({
          tagName: "ul",
          innerRef: this.setListRef
        }, ie, {
          allowMouseEvents: this.props.emulateTouch
        }), this.props.infiniteLoop && le, this.renderItems(), this.props.infiniteLoop && oe) : /* @__PURE__ */ e2.default.createElement("ul", {
          className: n.default.SLIDER(true, this.state.swiping),
          ref: function(me) {
            return R.setListRef(me);
          },
          style: this.state.itemListStyle || {}
        }, this.props.infiniteLoop && le, this.renderItems(), this.props.infiniteLoop && oe)), this.props.renderArrowNext(this.onClickNext, j, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs());
      }
    }]), U;
  })(e2.default.Component);
  return qi.default = Y, k(Y, "displayName", "Carousel"), k(Y, "defaultProps", {
    ariaLabel: void 0,
    axis: "horizontal",
    centerSlidePercentage: 80,
    interval: 3e3,
    labels: {
      leftArrow: "previous slide / item",
      rightArrow: "next slide / item",
      item: "slide item"
    },
    onClickItem: l.noop,
    onClickThumb: l.noop,
    onChange: l.noop,
    onSwipeStart: function() {
    },
    onSwipeEnd: function() {
    },
    onSwipeMove: function() {
      return false;
    },
    preventMovementUntilSwipeScrollTolerance: false,
    renderArrowPrev: function(L, U, H) {
      return /* @__PURE__ */ e2.default.createElement("button", {
        type: "button",
        "aria-label": H,
        className: n.default.ARROW_PREV(!U),
        onClick: L
      });
    },
    renderArrowNext: function(L, U, H) {
      return /* @__PURE__ */ e2.default.createElement("button", {
        type: "button",
        "aria-label": H,
        className: n.default.ARROW_NEXT(!U),
        onClick: L
      });
    },
    renderIndicator: function(L, U, H, R) {
      return /* @__PURE__ */ e2.default.createElement("li", {
        className: n.default.DOT(U),
        onClick: L,
        onKeyDown: L,
        value: H,
        key: H,
        role: "button",
        tabIndex: 0,
        "aria-label": "".concat(R, " ").concat(H + 1)
      });
    },
    renderItem: function(L) {
      return L;
    },
    renderThumbs: function(L) {
      var U = e2.Children.map(L, function(H) {
        var R = H;
        if (H.type !== "img" && (R = e2.Children.toArray(H.props.children).find(function(X) {
          return X.type === "img";
        })), !!R)
          return R;
      });
      return U.filter(function(H) {
        return H;
      }).length === 0 ? (console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"), []) : U;
    },
    statusFormatter: l.defaultStatusFormatter,
    selectedItem: 0,
    showArrows: true,
    showIndicators: true,
    showStatus: true,
    showThumbs: true,
    stopOnHover: true,
    swipeScrollTolerance: 5,
    swipeable: true,
    transitionTime: 350,
    verticalSwipe: "standard",
    width: "100%",
    animationHandler: "slide",
    swipeAnimationHandler: d.slideSwipeAnimationHandler,
    stopSwipingHandler: d.slideStopSwipingHandler
  }), qi;
}
var mh = {};
function $T() {
  return mh;
}
var yh;
function NT() {
  return yh || (yh = 1, (function(e2) {
    Object.defineProperty(e2, "__esModule", {
      value: true
    }), Object.defineProperty(e2, "Carousel", {
      enumerable: true,
      get: function() {
        return r.default;
      }
    }), Object.defineProperty(e2, "CarouselProps", {
      enumerable: true,
      get: function() {
        return n.CarouselProps;
      }
    }), Object.defineProperty(e2, "Thumbs", {
      enumerable: true,
      get: function() {
        return o.default;
      }
    });
    var r = a(FT()), n = $T(), o = a(em());
    function a(u) {
      return u && u.__esModule ? u : { default: u };
    }
  })(Ku)), Ku;
}
var DT = NT();
const kT = ({ tip: e2 }) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "h-full grid pb-8 px-8 place-content-center", children: rm(e2, true) }), WT = ({ pages: e2 }) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "min-h-[10rem] w-96", children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  DT.Carousel,
  {
    autoPlay: false,
    infiniteLoop: true,
    showThumbs: false,
    showArrows: true,
    showStatus: false,
    children: e2 && e2.map((r) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(kT, { tip: r }, r.key))
  }
) }), UT = ({ body: e2, isInsideCarousel: r }) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "article",
  {
    className: Je([
      "prose prose-sm max-h-[10rem] overflow-auto p-1  px-2 text-left text-[12px] text-grey-100 ",
      {
        "w-60": !r
      }
    ]),
    children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      ka,
      {
        children: e2,
        options: {
          overrides: {
            a: {
              component: ({ children: n, ...o }) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
                "a",
                {
                  ...o,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-start text-primary-dark",
                  children: [
                    n,
                    /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(L2, { className: "ml-1 mt-px h-4 w-4" })
                  ]
                }
              )
            }
          }
        }
      }
    )
  }
), zT = ({
  video: e2,
  body: r,
  title: n,
  isInsideCarousel: o
}) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
  "div",
  {
    className: Je([
      {
        "flex flex-row": !o,
        "flex max-h-[10rem] flex-col overflow-y-auto": o
      }
    ]),
    children: [
      /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "div",
        {
          className: Je([
            {
              "mr-1": !o,
              "mb-1": o
            }
          ]),
          children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "iframe",
            {
              height: o ? "auto" : 90,
              width: o ? "100%" : 160,
              src: e2 == null ? void 0 : e2.link,
              title: n,
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: true
            }
          )
        }
      ),
      /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "article",
        {
          className: Je([
            "prose prose-sm p-1 text-left text-xs text-grey-100",
            {
              "w-60 overflow-auto": !o,
              "-mt-6": o
            }
          ]),
          children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            ka,
            {
              children: r || "",
              options: {
                overrides: {
                  a: {
                    component: ({ children: a, ...u }) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
                      "a",
                      {
                        ...u,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-start",
                        children: [
                          a,
                          /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(L2, { className: "ml-1 mt-px h-4 w-4" })
                        ]
                      }
                    )
                  }
                }
              }
            }
          )
        }
      )
    ]
  }
), rm = (e2, r) => {
  switch (e2.type) {
    case Fa.TEXT:
      return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(UT, { body: e2.body, isInsideCarousel: r });
    case Fa.VIDEO:
      return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        zT,
        {
          video: e2.video,
          body: e2.body,
          title: e2.title,
          isInsideCarousel: r
        }
      );
    case Fa.CAROUSEL:
      return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(WT, { pages: e2.pages });
  }
}, nm = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createContext(void 0);
function wh(e2, r) {
  const n = [];
  return e2.forEach((o) => {
    o.key === r && n.push(o);
  }), n;
}
const SM = ({
  children: e2,
  enabled: r,
  baseUrl: n = "https://raw.githubusercontent.com/4d/Web-studio-TIPS/main"
}) => {
  const [{ tips: o, show: a }, u] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState({
    tips: {},
    show: true
  });
  qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    const d = new AbortController();
    try {
      fetch(
        `${n}/tips.json`,
        // 'tips.json',
        { signal: d.signal }
      ).then((w) => w.json()).then((w) => {
        const S = w.reduce((y, h) => wh(w, h.key).length > 1 ? {
          ...y,
          [h.key]: {
            type: "carousel",
            pages: wh(w, h.key)
          }
        } : {
          ...y,
          [h.key]: h
        }, {});
        u((y) => ({ ...y, tips: S }));
      });
    } catch {
    }
    return () => {
      d.abort();
    };
  }, []);
  const l = () => {
    u((d) => ({ ...d, show: !a }));
  };
  return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(nm.Provider, { value: { tips: o, toggleTips: l, show: a, enabled: r }, children: e2 });
}, BT = (e2) => {
  const r = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useContext(nm);
  if (r === void 0)
    throw new Error("useTip must be used within a TipsContext");
  return {
    tip: e2 ? r.tips[e2] : null,
    toggleTips: r.toggleTips,
    show: r.show,
    enabled: r.enabled
  };
}, HT = Wa(ST)`
  &[data-state='open'] > * {
    display: block !important;
  }
`, EM = ({ tipKey: e2, side: r = "right", alwaysOn: n, asButton: o = false }) => {
  const { tip: a, enabled: u } = BT(e2), [l, d] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(false), w = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(null);
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    if (w.current) {
      const S = new IntersectionObserver((y) => {
        y[0].isIntersecting || d(false);
      });
      return S.observe(w.current), () => {
        w.current && S.unobserve(w.current);
      };
    }
  }, []), a && u ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(bT, { open: l, onOpenChange: d, children: [
    /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      HT,
      {
        ref: w,
        className: Je("focus:outline-none", {
          "rounded p-1 text-gray-100 hover:bg-primary-hover": o
        }),
        onClick: (S) => S.stopPropagation(),
        children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: Je("group-hover:block", { hidden: !n }), children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(a1, { className: "h-4 w-4 text-yellow-300" }) })
      }
    ),
    /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      ET,
      {
        side: r,
        sideOffset: 5,
        onClick: (S) => S.stopPropagation(),
        children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "relative rounded border border-grey-50 bg-grey-900 p-2 text-xs text-white shadow-2xl", children: rm(a) })
      }
    )
  ] }) : null;
};
var jT = Object.defineProperty, qT = (e2, r, n) => r in e2 ? jT(e2, r, { enumerable: true, configurable: true, writable: true, value: n }) : e2[r] = n, el = (e2, r, n) => (qT(e2, typeof r != "symbol" ? r + "" : r, n), n);
let ZT = class {
  constructor() {
    el(this, "current", this.detect()), el(this, "handoffState", "pending"), el(this, "currentId", 0);
  }
  set(r) {
    this.current !== r && (this.handoffState = "pending", this.currentId = 0, this.current = r);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, ii = new ZT(), _r = (e2, r) => {
  ii.isServer ? qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(e2, r) : qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useLayoutEffect(e2, r);
};
function oi(e2) {
  let r = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(e2);
  return _r(() => {
    r.current = e2;
  }, [e2]), r;
}
let yt = function(e2) {
  let r = oi(e2);
  return $.useCallback((...n) => r.current(...n), [r]);
};
function KT(e2, r, n) {
  let [o, a] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(n), u = e2 !== void 0, l = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(u), d = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(false), w = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(false);
  return u && !l.current && !d.current ? (d.current = true, l.current = u, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !u && l.current && !w.current && (w.current = true, l.current = u, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [u ? e2 : o, yt((S) => (u || a(S), r == null ? void 0 : r(S)))];
}
function GT(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((r) => setTimeout(() => {
    throw r;
  }));
}
function yo() {
  let e2 = [], r = { addEventListener(n, o, a, u) {
    return n.addEventListener(o, a, u), r.add(() => n.removeEventListener(o, a, u));
  }, requestAnimationFrame(...n) {
    let o = requestAnimationFrame(...n);
    return r.add(() => cancelAnimationFrame(o));
  }, nextFrame(...n) {
    return r.requestAnimationFrame(() => r.requestAnimationFrame(...n));
  }, setTimeout(...n) {
    let o = setTimeout(...n);
    return r.add(() => clearTimeout(o));
  }, microTask(...n) {
    let o = { current: true };
    return GT(() => {
      o.current && n[0]();
    }), r.add(() => {
      o.current = false;
    });
  }, style(n, o, a) {
    let u = n.style.getPropertyValue(o);
    return Object.assign(n.style, { [o]: a }), this.add(() => {
      Object.assign(n.style, { [o]: u });
    });
  }, group(n) {
    let o = yo();
    return n(o), this.add(() => o.dispose());
  }, add(n) {
    return e2.push(n), () => {
      let o = e2.indexOf(n);
      if (o >= 0) for (let a of e2.splice(o, 1)) a();
    };
  }, dispose() {
    for (let n of e2.splice(0)) n();
  } };
  return r;
}
function Kl() {
  let [e2] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(yo);
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => () => e2.dispose(), [e2]), e2;
}
function VT() {
  let e2 = typeof document > "u";
  return ((r) => r.useSyncExternalStore)(le)(() => () => {
  }, () => false, () => !e2) ;
}
function Gl() {
  let e2 = VT(), [r, n] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(ii.isHandoffComplete);
  return r && ii.isHandoffComplete === false && n(false), qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    r !== true && n(true);
  }, [r]), qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => ii.handoff(), []), e2 ? false : r;
}
var bh;
let Vl = (bh = $.useId) != null ? bh : function() {
  let e2 = Gl(), [r, n] = $.useState(e2 ? () => ii.nextId() : null);
  return _r(() => {
    r === null && n(ii.nextId());
  }, [r]), r != null ? "" + r : void 0;
};
function wr(e2, r, ...n) {
  if (e2 in r) {
    let a = r[e2];
    return typeof a == "function" ? a(...n) : a;
  }
  let o = new Error(`Tried to handle "${e2}" but there is no handler defined. Only defined handlers are: ${Object.keys(r).map((a) => `"${a}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, wr), o;
}
function Sh(e2) {
  var r;
  if (e2.type) return e2.type;
  let n = (r = e2.as) != null ? r : "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function YT(e2, r) {
  let [n, o] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(() => Sh(e2));
  return _r(() => {
    o(Sh(e2));
  }, [e2.type, e2.as]), _r(() => {
    n || r.current && r.current instanceof HTMLButtonElement && !r.current.hasAttribute("type") && o("button");
  }, [n, r]), n;
}
let XT = Symbol();
function wo(...e2) {
  let r = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(e2);
  qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    r.current = e2;
  }, [e2]);
  let n = yt((o) => {
    for (let a of r.current) a != null && (typeof a == "function" ? a(o) : a.current = o);
  });
  return e2.every((o) => o == null || (o == null ? void 0 : o[XT])) ? void 0 : n;
}
function za(...e2) {
  return Array.from(new Set(e2.flatMap((r) => typeof r == "string" ? r.split(" ") : []))).filter(Boolean).join(" ");
}
var im = ((e2) => (e2[e2.None = 0] = "None", e2[e2.RenderStrategy = 1] = "RenderStrategy", e2[e2.Static = 2] = "Static", e2))(im || {}), un = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(un || {});
function Nn({ ourProps: e2, theirProps: r, slot: n, defaultTag: o, features: a, visible: u = true, name: l, mergeRefs: d }) {
  d = d ?? JT;
  let w = om(r, e2);
  if (u) return Oa(w, n, o, l, d);
  let S = a ?? 0;
  if (S & 2) {
    let { static: y = false, ...h } = w;
    if (y) return Oa(h, n, o, l, d);
  }
  if (S & 1) {
    let { unmount: y = true, ...h } = w;
    return wr(y ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Oa({ ...h, hidden: true, style: { display: "none" } }, n, o, l, d);
    } });
  }
  return Oa(w, n, o, l, d);
}
function Oa(e2, r = {}, n, o, a) {
  let { as: u = n, children: l, refName: d = "ref", ...w } = tl(e2, ["unmount", "static"]), S = e2.ref !== void 0 ? { [d]: e2.ref } : {}, y = typeof l == "function" ? l(r) : l;
  "className" in w && w.className && typeof w.className == "function" && (w.className = w.className(r));
  let h = {};
  if (r) {
    let f = false, p = [];
    for (let [m, c] of Object.entries(r)) typeof c == "boolean" && (f = true), c === true && p.push(m);
    f && (h["data-headlessui-state"] = p.join(" "));
  }
  if (u === qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Fragment && Object.keys(xl(w)).length > 0) {
    if (!qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.isValidElement(y) || Array.isArray(y) && y.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${o} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(w).map((c) => `  - ${c}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((c) => `  - ${c}`).join(`
`)].join(`
`));
    let f = y.props, p = typeof (f == null ? void 0 : f.className) == "function" ? (...c) => za(f == null ? void 0 : f.className(...c), w.className) : za(f == null ? void 0 : f.className, w.className), m = p ? { className: p } : {};
    return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.cloneElement(y, Object.assign({}, om(y.props, xl(tl(w, ["ref"]))), h, S, { ref: a(y.ref, S.ref) }, m));
  }
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createElement(u, Object.assign({}, tl(w, ["ref"]), u !== qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Fragment && S, u !== qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Fragment && h), y);
}
function JT(...e2) {
  return e2.every((r) => r == null) ? void 0 : (r) => {
    for (let n of e2) n != null && (typeof n == "function" ? n(r) : n.current = r);
  };
}
function om(...e2) {
  if (e2.length === 0) return {};
  if (e2.length === 1) return e2[0];
  let r = {}, n = {};
  for (let o of e2) for (let a in o) a.startsWith("on") && typeof o[a] == "function" ? (n[a] != null || (n[a] = []), n[a].push(o[a])) : r[a] = o[a];
  if (r.disabled || r["aria-disabled"]) return Object.assign(r, Object.fromEntries(Object.keys(n).map((o) => [o, void 0])));
  for (let o in n) Object.assign(r, { [o](a, ...u) {
    let l = n[o];
    for (let d of l) {
      if ((a instanceof Event || (a == null ? void 0 : a.nativeEvent) instanceof Event) && a.defaultPrevented) return;
      d(a, ...u);
    }
  } });
  return r;
}
function Dn(e2) {
  var r;
  return Object.assign(qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.forwardRef(e2), { displayName: (r = e2.displayName) != null ? r : e2.name });
}
function xl(e2) {
  let r = Object.assign({}, e2);
  for (let n in r) r[n] === void 0 && delete r[n];
  return r;
}
function tl(e2, r = []) {
  let n = Object.assign({}, e2);
  for (let o of r) o in n && delete n[o];
  return n;
}
let QT = "div";
var am = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(am || {});
function eP(e2, r) {
  var n;
  let { features: o = 1, ...a } = e2, u = { ref: r, "aria-hidden": (o & 2) === 2 ? true : (n = a["aria-hidden"]) != null ? n : void 0, hidden: (o & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
  return Nn({ ourProps: u, theirProps: a, slot: {}, defaultTag: QT, name: "Hidden" });
}
let tP = Dn(eP), Yl = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createContext(null);
Yl.displayName = "OpenClosedContext";
var Nr = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(Nr || {});
function sm() {
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useContext(Yl);
}
function rP({ value: e2, children: r }) {
  return $.createElement(Yl.Provider, { value: e2 }, r);
}
function nP(e2) {
  let r = e2.parentElement, n = null;
  for (; r && !(r instanceof HTMLFieldSetElement); ) r instanceof HTMLLegendElement && (n = r), r = r.parentElement;
  let o = (r == null ? void 0 : r.getAttribute("disabled")) === "";
  return o && iP(n) ? false : o;
}
function iP(e2) {
  if (!e2) return false;
  let r = e2.previousElementSibling;
  for (; r !== null; ) {
    if (r instanceof HTMLLegendElement) return false;
    r = r.previousElementSibling;
  }
  return true;
}
function oP(e2) {
  var r, n;
  let o = (r = e2 == null ? void 0 : e2.form) != null ? r : e2.closest("form");
  if (o) {
    for (let a of o.elements) if (a !== e2 && (a.tagName === "INPUT" && a.type === "submit" || a.tagName === "BUTTON" && a.type === "submit" || a.nodeName === "INPUT" && a.type === "image")) {
      a.click();
      return;
    }
    (n = o.requestSubmit) == null || n.call(o);
  }
}
var Ol = ((e2) => (e2.Space = " ", e2.Enter = "Enter", e2.Escape = "Escape", e2.Backspace = "Backspace", e2.Delete = "Delete", e2.ArrowLeft = "ArrowLeft", e2.ArrowUp = "ArrowUp", e2.ArrowRight = "ArrowRight", e2.ArrowDown = "ArrowDown", e2.Home = "Home", e2.End = "End", e2.PageUp = "PageUp", e2.PageDown = "PageDown", e2.Tab = "Tab", e2))(Ol || {});
function Xl() {
  let e2 = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(false);
  return _r(() => (e2.current = true, () => {
    e2.current = false;
  }), []), e2;
}
let um = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createContext(null);
function lm() {
  let e2 = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useContext(um);
  if (e2 === null) {
    let r = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(r, lm), r;
  }
  return e2;
}
function aP() {
  let [e2, r] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState([]);
  return [e2.length > 0 ? e2.join(" ") : void 0, qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useMemo(() => function(n) {
    let o = yt((u) => (r((l) => [...l, u]), () => r((l) => {
      let d = l.slice(), w = d.indexOf(u);
      return w !== -1 && d.splice(w, 1), d;
    }))), a = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useMemo(() => ({ register: o, slot: n.slot, name: n.name, props: n.props }), [o, n.slot, n.name, n.props]);
    return $.createElement(um.Provider, { value: a }, n.children);
  }, [r])];
}
let sP = "p";
function uP(e2, r) {
  let n = Vl(), { id: o = `headlessui-description-${n}`, ...a } = e2, u = lm(), l = wo(r);
  _r(() => u.register(o), [o, u.register]);
  let d = { ref: l, ...u.props, id: o };
  return Nn({ ourProps: d, theirProps: a, slot: u.slot || {}, defaultTag: sP, name: u.name || "Description" });
}
let lP = Dn(uP), fP = Object.assign(lP, {}), fm = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createContext(null);
function cm() {
  let e2 = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useContext(fm);
  if (e2 === null) {
    let r = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(r, cm), r;
  }
  return e2;
}
function cP() {
  let [e2, r] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState([]);
  return [e2.length > 0 ? e2.join(" ") : void 0, qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useMemo(() => function(n) {
    let o = yt((u) => (r((l) => [...l, u]), () => r((l) => {
      let d = l.slice(), w = d.indexOf(u);
      return w !== -1 && d.splice(w, 1), d;
    }))), a = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useMemo(() => ({ register: o, slot: n.slot, name: n.name, props: n.props }), [o, n.slot, n.name, n.props]);
    return $.createElement(fm.Provider, { value: a }, n.children);
  }, [r])];
}
let dP = "label";
function pP(e2, r) {
  let n = Vl(), { id: o = `headlessui-label-${n}`, passive: a = false, ...u } = e2, l = cm(), d = wo(r);
  _r(() => l.register(o), [o, l.register]);
  let w = { ref: d, ...l.props, id: o };
  return a && ("onClick" in w && (delete w.htmlFor, delete w.onClick), "onClick" in u && delete u.onClick), Nn({ ourProps: w, theirProps: u, slot: l.slot || {}, defaultTag: dP, name: l.name || "Label" });
}
let hP = Dn(pP), vP = Object.assign(hP, {});
function mP(e2 = 0) {
  let [r, n] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(e2), o = Xl(), a = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback((w) => {
    o.current && n((S) => S | w);
  }, [r, o]), u = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback((w) => !!(r & w), [r]), l = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback((w) => {
    o.current && n((S) => S & ~w);
  }, [n, o]), d = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback((w) => {
    o.current && n((S) => S ^ w);
  }, [n]);
  return { flags: r, addFlag: a, hasFlag: u, removeFlag: l, toggleFlag: d };
}
let Jl = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createContext(null);
Jl.displayName = "GroupContext";
let gP = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Fragment;
function yP(e2) {
  var r;
  let [n, o] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(null), [a, u] = cP(), [l, d] = aP(), w = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useMemo(() => ({ switch: n, setSwitch: o, labelledby: a, describedby: l }), [n, o, a, l]), S = {}, y = e2;
  return $.createElement(d, { name: "Switch.Description" }, $.createElement(u, { name: "Switch.Label", props: { htmlFor: (r = w.switch) == null ? void 0 : r.id, onClick(h) {
    n && (h.currentTarget.tagName === "LABEL" && h.preventDefault(), n.click(), n.focus({ preventScroll: true }));
  } } }, $.createElement(Jl.Provider, { value: w }, Nn({ ourProps: S, theirProps: y, defaultTag: gP, name: "Switch.Group" }))));
}
let wP = "button";
function bP(e2, r) {
  var n;
  let o = Vl(), { id: a = `headlessui-switch-${o}`, checked: u, defaultChecked: l = false, onChange: d, disabled: w = false, name: S, value: y, form: h, ...f } = e2, p = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useContext(Jl), m = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(null), c = wo(m, r, p === null ? null : p.setSwitch), [g, b] = KT(u, d, l), _ = yt(() => b == null ? void 0 : b(!g)), x = yt((k) => {
    if (nP(k.currentTarget)) return k.preventDefault();
    k.preventDefault(), _();
  }), P = yt((k) => {
    k.key === Ol.Space ? (k.preventDefault(), _()) : k.key === Ol.Enter && oP(k.currentTarget);
  }), T = yt((k) => k.preventDefault()), M = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useMemo(() => ({ checked: g }), [g]), B = { id: a, ref: c, role: "switch", type: YT(e2, m), tabIndex: e2.tabIndex === -1 ? 0 : (n = e2.tabIndex) != null ? n : 0, "aria-checked": g, "aria-labelledby": p == null ? void 0 : p.labelledby, "aria-describedby": p == null ? void 0 : p.describedby, disabled: w, onClick: x, onKeyUp: P, onKeyPress: T }, F = Kl();
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    var k;
    let Y = (k = m.current) == null ? void 0 : k.closest("form");
    Y && l !== void 0 && F.addEventListener(Y, "reset", () => {
      b(l);
    });
  }, [m, b]), $.createElement($.Fragment, null, S != null && g && $.createElement(tP, { features: am.Hidden, ...xl({ as: "input", type: "checkbox", hidden: true, readOnly: true, disabled: w, form: h, checked: g, name: S, value: y }) }), Nn({ ourProps: B, theirProps: f, slot: M, defaultTag: wP, name: "Switch" }));
}
let SP = Dn(bP), EP = yP, _P = Object.assign(SP, { Group: EP, Label: vP, Description: fP });
function xP(e2) {
  let r = { called: false };
  return (...n) => {
    if (!r.called) return r.called = true, e2(...n);
  };
}
function rl(e2, ...r) {
  e2 && r.length > 0 && e2.classList.add(...r);
}
function nl(e2, ...r) {
  e2 && r.length > 0 && e2.classList.remove(...r);
}
function OP(e2, r) {
  let n = yo();
  if (!e2) return n.dispose;
  let { transitionDuration: o, transitionDelay: a } = getComputedStyle(e2), [u, l] = [o, a].map((w) => {
    let [S = 0] = w.split(",").filter(Boolean).map((y) => y.includes("ms") ? parseFloat(y) : parseFloat(y) * 1e3).sort((y, h) => h - y);
    return S;
  }), d = u + l;
  if (d !== 0) {
    n.group((S) => {
      S.setTimeout(() => {
        r(), S.dispose();
      }, d), S.addEventListener(e2, "transitionrun", (y) => {
        y.target === y.currentTarget && S.dispose();
      });
    });
    let w = n.addEventListener(e2, "transitionend", (S) => {
      S.target === S.currentTarget && (r(), w());
    });
  } else r();
  return n.add(() => r()), n.dispose;
}
function AP(e2, r, n, o) {
  let a = n ? "enter" : "leave", u = yo(), l = o !== void 0 ? xP(o) : () => {
  };
  a === "enter" && (e2.removeAttribute("hidden"), e2.style.display = "");
  let d = wr(a, { enter: () => r.enter, leave: () => r.leave }), w = wr(a, { enter: () => r.enterTo, leave: () => r.leaveTo }), S = wr(a, { enter: () => r.enterFrom, leave: () => r.leaveFrom });
  return nl(e2, ...r.base, ...r.enter, ...r.enterTo, ...r.enterFrom, ...r.leave, ...r.leaveFrom, ...r.leaveTo, ...r.entered), rl(e2, ...r.base, ...d, ...S), u.nextFrame(() => {
    nl(e2, ...r.base, ...d, ...S), rl(e2, ...r.base, ...d, ...w), OP(e2, () => (nl(e2, ...r.base, ...d), rl(e2, ...r.base, ...r.entered), l()));
  }), u.dispose;
}
function TP({ immediate: e2, container: r, direction: n, classes: o, onStart: a, onStop: u }) {
  let l = Xl(), d = Kl(), w = oi(n);
  _r(() => {
    e2 && (w.current = "enter");
  }, [e2]), _r(() => {
    let S = yo();
    d.add(S.dispose);
    let y = r.current;
    if (y && w.current !== "idle" && l.current) return S.dispose(), a.current(w.current), S.add(AP(y, o.current, w.current === "enter", () => {
      S.dispose(), u.current(w.current);
    })), S.dispose;
  }, [n]);
}
function on(e2 = "") {
  return e2.split(/\s+/).filter((r) => r.length > 1);
}
let Qa = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createContext(null);
Qa.displayName = "TransitionContext";
var PP = ((e2) => (e2.Visible = "visible", e2.Hidden = "hidden", e2))(PP || {});
function CP() {
  let e2 = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useContext(Qa);
  if (e2 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e2;
}
function RP() {
  let e2 = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useContext(es);
  if (e2 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e2;
}
let es = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createContext(null);
es.displayName = "NestingContext";
function ts(e2) {
  return "children" in e2 ? ts(e2.children) : e2.current.filter(({ el: r }) => r.current !== null).filter(({ state: r }) => r === "visible").length > 0;
}
function dm(e2, r) {
  let n = oi(e2), o = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef([]), a = Xl(), u = Kl(), l = yt((p, m = un.Hidden) => {
    let c = o.current.findIndex(({ el: g }) => g === p);
    c !== -1 && (wr(m, { [un.Unmount]() {
      o.current.splice(c, 1);
    }, [un.Hidden]() {
      o.current[c].state = "hidden";
    } }), u.microTask(() => {
      var g;
      !ts(o) && a.current && ((g = n.current) == null || g.call(n));
    }));
  }), d = yt((p) => {
    let m = o.current.find(({ el: c }) => c === p);
    return m ? m.state !== "visible" && (m.state = "visible") : o.current.push({ el: p, state: "visible" }), () => l(p, un.Unmount);
  }), w = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef([]), S = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(Promise.resolve()), y = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef({ enter: [], leave: [], idle: [] }), h = yt((p, m, c) => {
    w.current.splice(0), r && (r.chains.current[m] = r.chains.current[m].filter(([g]) => g !== p)), r == null || r.chains.current[m].push([p, new Promise((g) => {
      w.current.push(g);
    })]), r == null || r.chains.current[m].push([p, new Promise((g) => {
      Promise.all(y.current[m].map(([b, _]) => _)).then(() => g());
    })]), m === "enter" ? S.current = S.current.then(() => r == null ? void 0 : r.wait.current).then(() => c(m)) : c(m);
  }), f = yt((p, m, c) => {
    Promise.all(y.current[m].splice(0).map(([g, b]) => b)).then(() => {
      var g;
      (g = w.current.shift()) == null || g();
    }).then(() => c(m));
  });
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useMemo(() => ({ children: o, register: d, unregister: l, onStart: h, onStop: f, wait: S, chains: y }), [d, l, o, h, f, y, S]);
}
function MP() {
}
let IP = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Eh(e2) {
  var r;
  let n = {};
  for (let o of IP) n[o] = (r = e2[o]) != null ? r : MP;
  return n;
}
function LP(e2) {
  let r = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(Eh(e2));
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    r.current = Eh(e2);
  }, [e2]), r;
}
let FP = "div", pm = im.RenderStrategy;
function $P(e2, r) {
  var n, o;
  let { beforeEnter: a, afterEnter: u, beforeLeave: l, afterLeave: d, enter: w, enterFrom: S, enterTo: y, entered: h, leave: f, leaveFrom: p, leaveTo: m, ...c } = e2, g = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(null), b = wo(g, r), _ = (n = c.unmount) == null || n ? un.Unmount : un.Hidden, { show: x, appear: P, initial: T } = CP(), [M, B] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(x ? "visible" : "hidden"), F = RP(), { register: k, unregister: Y } = F;
  qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => k(g), [k, g]), qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    if (_ === un.Hidden && g.current) {
      if (x && M !== "visible") {
        B("visible");
        return;
      }
      return wr(M, { hidden: () => Y(g), visible: () => k(g) });
    }
  }, [M, g, k, Y, x, _]);
  let W = oi({ base: on(c.className), enter: on(w), enterFrom: on(S), enterTo: on(y), entered: on(h), leave: on(f), leaveFrom: on(p), leaveTo: on(m) }), L = LP({ beforeEnter: a, afterEnter: u, beforeLeave: l, afterLeave: d }), U = Gl();
  qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    if (U && M === "visible" && g.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [g, M, U]);
  let H = T && !P, R = P && x && T, X = !U || H ? "idle" : x ? "enter" : "leave", G = mP(0), ee = yt((ie) => wr(ie, { enter: () => {
    G.addFlag(Nr.Opening), L.current.beforeEnter();
  }, leave: () => {
    G.addFlag(Nr.Closing), L.current.beforeLeave();
  }, idle: () => {
  } })), ue = yt((ie) => wr(ie, { enter: () => {
    G.removeFlag(Nr.Opening), L.current.afterEnter();
  }, leave: () => {
    G.removeFlag(Nr.Closing), L.current.afterLeave();
  }, idle: () => {
  } })), j = dm(() => {
    B("hidden"), Y(g);
  }, F), Q = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(false);
  TP({ immediate: R, container: g, classes: W, direction: X, onStart: oi((ie) => {
    Q.current = true, j.onStart(g, ie, ee);
  }), onStop: oi((ie) => {
    Q.current = false, j.onStop(g, ie, ue), ie === "leave" && !ts(j) && (B("hidden"), Y(g));
  }) });
  let oe = c, le = { ref: b };
  return R ? oe = { ...oe, className: za(c.className, ...W.current.enter, ...W.current.enterFrom) } : Q.current && (oe.className = za(c.className, (o = g.current) == null ? void 0 : o.className), oe.className === "" && delete oe.className), $.createElement(es.Provider, { value: j }, $.createElement(rP, { value: wr(M, { visible: Nr.Open, hidden: Nr.Closed }) | G.flags }, Nn({ ourProps: le, theirProps: oe, defaultTag: FP, features: pm, visible: M === "visible", name: "Transition.Child" })));
}
function NP(e2, r) {
  let { show: n, appear: o = false, unmount: a = true, ...u } = e2, l = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(null), d = wo(l, r);
  Gl();
  let w = sm();
  if (n === void 0 && w !== null && (n = (w & Nr.Open) === Nr.Open), ![true, false].includes(n)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [S, y] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(n ? "visible" : "hidden"), h = dm(() => {
    y("hidden");
  }), [f, p] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(true), m = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef([n]);
  _r(() => {
    f !== false && m.current[m.current.length - 1] !== n && (m.current.push(n), p(false));
  }, [m, n]);
  let c = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useMemo(() => ({ show: n, appear: o, initial: f }), [n, o, f]);
  qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    if (n) y("visible");
    else if (!ts(h)) y("hidden");
    else {
      let x = l.current;
      if (!x) return;
      let P = x.getBoundingClientRect();
      P.x === 0 && P.y === 0 && P.width === 0 && P.height === 0 && y("hidden");
    }
  }, [n, h]);
  let g = { unmount: a }, b = yt(() => {
    var x;
    f && p(false), (x = e2.beforeEnter) == null || x.call(e2);
  }), _ = yt(() => {
    var x;
    f && p(false), (x = e2.beforeLeave) == null || x.call(e2);
  });
  return $.createElement(es.Provider, { value: h }, $.createElement(Qa.Provider, { value: c }, Nn({ ourProps: { ...g, as: qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Fragment, children: $.createElement(hm, { ref: d, ...g, ...u, beforeEnter: b, beforeLeave: _ }) }, theirProps: {}, defaultTag: qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Fragment, features: pm, visible: S === "visible", name: "Transition" })));
}
function DP(e2, r) {
  let n = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useContext(Qa) !== null, o = sm() !== null;
  return $.createElement($.Fragment, null, !n && o ? $.createElement(Al, { ref: r, ...e2 }) : $.createElement(hm, { ref: r, ...e2 }));
}
let Al = Dn(NP), hm = Dn($P), kP = Dn(DP), Ba = Object.assign(Al, { Child: kP, Root: Al });
const il = {
  xs: {
    switch: "h-2.5 w-2.5",
    translate: "translate-x-2.5",
    container: "w-6 h-3.5"
  },
  sm: {
    switch: "h-3.5 w-3.5",
    translate: "translate-x-[0.85rem]",
    container: "h-4.5 w-8"
  },
  md: {
    switch: "h-4 w-4",
    translate: "translate-x-3",
    container: "h-5 w-8"
  },
  lg: {
    switch: "h-4 w-4",
    translate: "translate-x-3",
    container: "h-5 w-8"
  }
}, WP = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.forwardRef(({ onChange: e2, value: r, size: n = "md", className: o = "ml-auto" }, a) => {
  const u = (l) => {
    e2(l);
  };
  return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: Je("flex items-center", o), children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    _P,
    {
      as: "span",
      ref: a,
      checked: r,
      onChange: u,
      onKeyDown: (l) => {
        l.key === "Enter" && u(!r);
      },
      className: `${r ? "bg-primary-dark" : "bg-grey-200"}
relative inline-flex shrink-0 ${il[n].container} cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`,
      children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "span",
        {
          "aria-hidden": "true",
          className: `${r ? il[n].translate : "translate-x-0"}
pointer-events-none inline-block ${il[n].switch} transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`
        }
      )
    }
  ) });
}), xM = ({
  children: e2,
  label: r,
  placement: n = "top",
  className: o
}) => {
  const [a, u] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(
    null
  ), [l, d] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(null), [w, S] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(false), { styles: y, attributes: h } = nv(a, l, {
    placement: n,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8]
        }
      },
      {
        name: "preventOverflow",
        options: {
          rootBoundary: "viewport",
          padding: 8
        }
      }
    ]
  }), f = $.Children.map(e2, (p) => $.isValidElement(p) ? $.cloneElement(p, {
    ref: u,
    onMouseEnter: () => S(true),
    onMouseLeave: () => S(false)
  }) : p);
  return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
    f,
    w && Si.createPortal(
      /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "div",
        {
          ref: d,
          style: y.popper,
          ...h.popper,
          className: Je(
            "z-10 select-none rounded bg-gray-50 px-2 py-1 text-xs text-gray-800",
            o
          ),
          children: r
        }
      ),
      document.querySelector("body")
    )
  ] });
}, UP = keyframes`
  to {
    fill: url(#d);
    stroke-dashoffset: 0;
  }
`, zP = Wa.svg`
  & .e {
    fill: url(#d);
  }

  & #tail {
    stroke: url(#d);
    stroke-width: 2;
    fill: transparent;
    stroke-dasharray: 700;
    stroke-dashoffset: 700;
    animation: ${UP} 1.5s ease-in-out infinite alternate-reverse;
  }

  & #circle {
    stroke: #fff;
    stroke-width: 2;
    fill: #fff;
    stroke-dasharray: 700;
    stroke-dashoffset: 700;
  }
`, OM = ({
  message: e2,
  version: r
}) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "absolute inset-0 flex h-screen w-screen flex-col items-center justify-center bg-fd-gray-default text-white", children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-col text-center", children: [
  /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "relative mr-4 self-center", children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex items-center justify-center rounded", children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(zP, { className: "h-60 w-60", viewBox: "0 0 143.14 136.27", children: [
    /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("defs", { children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("linearGradient", { id: "d", x1: "50%", y1: "0%", x2: "50%", y2: "100%", children: [
      /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("stop", { offset: "0%", stopColor: "#2743a6", children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "animate",
        {
          attributeName: "stop-color",
          values: "#ffa4c0; #2743a6;",
          dur: "6s",
          repeatCount: "indefinite"
        }
      ) }),
      /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("stop", { offset: "100%", stopColor: "#ffa4c0", children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "animate",
        {
          attributeName: "stop-color",
          values: "#2743a6; #ffa4c0;",
          dur: "2ds",
          repeatCount: "indefinite"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("g", { id: "a" }),
    /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("g", { id: "b", children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("g", { id: "c", children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("g", { children: [
      /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "path",
        {
          id: "tail",
          className: "e",
          d: "M134.13,79.9l.25-1.2h-21.87l-.21,.7c-.03,.08-2.41,7.72-7.11,14.56-5.87,8.54-12.57,12.63-12.63,12.67l-1,.6,24.25,28.96h27.33l-22.61-26.46c2.2-2.67,10.06-13.09,13.6-29.83Z"
        }
      ),
      /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "path",
        {
          id: "circle",
          className: "f",
          d: "M83.08,113.64l18.93,22.6-33.68,.03-11.17-.03c-9.38,.01-18.55-2.45-26.56-7.11-2.94-1.71-5.72-3.71-8.29-6-8.79-7.8-17.6-19.72-20.92-37.37-.01-.02-.02-.03-.03-.05v-.09c-1.68-9.04-1.93-19.58,0-31.84C8.57,21.67,36.68-.66,69.93,.02c12.81,.27,25.06,4.28,35.59,11.48,.31,.2,.62,.41,.92,.62,.25,.18,.5,.35,.74,.53,8.82,6.31,16.06,14.69,21.02,24.42,.17,.33,.34,.65,.5,.98,.1,.21,.2,.41,.3,.61,4.35,8.92,6.63,18.54,6.54,28.06,0,.36,.02,.71,.02,1.06,0,.82-.03,1.62-.06,2.43h-22c.04-.81,.06-1.61,.06-2.43,0-1.52-.08-3.02-.23-4.5-2.68-22.17-21.26-39.86-43.98-40.63-4.43-.15-8.75,.29-12.88,1.28-.02,0-.04,.01-.05,.01-.48,.12-.95,.24-1.42,.38-.97,.26-1.94,.56-2.89,.9-.23,.07-.46,.15-.69,.24-6.2,2.27-11.84,5.87-16.59,10.67-8.99,9.09-13.84,21.44-13.3,33.9,0,19.98,17.86,39.48,35.59,42.56,6.4,1.37,24.04,1.24,25.96,1.05Z"
        }
      )
    ] }) }) })
  ] }) }) }),
  /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { children: [
    /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: "text-xs text-grey-200", children: r }),
    /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("h2", { className: "text-lg text-grey-100", children: e2 })
  ] })
] }) });
var eo = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var BP = eo.exports, _h;
function HP() {
  return _h || (_h = 1, (function(e2, r) {
    (function() {
      var n, o = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", d = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", S = 500, y = "__lodash_placeholder__", h = 1, f = 2, p = 4, m = 1, c = 2, g = 1, b = 2, _ = 4, x = 8, P = 16, T = 32, M = 64, B = 128, F = 256, k = 512, Y = 30, W = "...", L = 800, U = 16, H = 1, R = 2, X = 3, G = 1 / 0, ee = 9007199254740991, ue = 17976931348623157e292, j = NaN, Q = 4294967295, oe = Q - 1, le = Q >>> 1, ie = [
        ["ary", B],
        ["bind", g],
        ["bindKey", b],
        ["curry", x],
        ["curryRight", P],
        ["flip", k],
        ["partial", T],
        ["partialRight", M],
        ["rearg", F]
      ], fe = "[object Arguments]", de = "[object Array]", ge = "[object AsyncFunction]", me = "[object Boolean]", Ee = "[object Date]", Oe = "[object DOMException]", Be = "[object Error]", re = "[object Function]", ht = "[object GeneratorFunction]", at = "[object Map]", cr = "[object Number]", bo = "[object Null]", Ut = "[object Object]", So = "[object Promise]", as = "[object Proxy]", Mt = "[object RegExp]", vt = "[object Set]", Br = "[object String]", dn = "[object Symbol]", hi = "[object Undefined]", Hr = "[object WeakMap]", Eo = "[object WeakSet]", jr = "[object ArrayBuffer]", xr = "[object DataView]", ss = "[object Float32Array]", us = "[object Float64Array]", ls = "[object Int8Array]", fs = "[object Int16Array]", cs = "[object Int32Array]", ds = "[object Uint8Array]", ps = "[object Uint8ClampedArray]", hs = "[object Uint16Array]", vs = "[object Uint32Array]", Vm = /\b__p \+= '';/g, Ym = /\b(__p \+=) '' \+/g, Xm = /(__e\(.*?\)|\b__t\)) \+\n'';/g, nf = /&(?:amp|lt|gt|quot|#39);/g, of = /[&<>"']/g, Jm = RegExp(nf.source), Qm = RegExp(of.source), eg = /<%-([\s\S]+?)%>/g, tg = /<%([\s\S]+?)%>/g, af = /<%=([\s\S]+?)%>/g, rg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ng = /^\w*$/, ig = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ms = /[\\^$.*+?()[\]{}|]/g, og = RegExp(ms.source), gs = /^\s+/, ag = /\s/, sg = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ug = /\{\n\/\* \[wrapped with (.+)\] \*/, lg = /,? & /, fg = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, cg = /[()=,{}\[\]\/\s]/, dg = /\\(\\)?/g, pg = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, sf = /\w*$/, hg = /^[-+]0x[0-9a-f]+$/i, vg = /^0b[01]+$/i, mg = /^\[object .+?Constructor\]$/, gg = /^0o[0-7]+$/i, yg = /^(?:0|[1-9]\d*)$/, wg = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, _o = /($^)/, bg = /['\n\r\u2028\u2029\\]/g, xo = "\\ud800-\\udfff", Sg = "\\u0300-\\u036f", Eg = "\\ufe20-\\ufe2f", _g = "\\u20d0-\\u20ff", uf = Sg + Eg + _g, lf = "\\u2700-\\u27bf", ff = "a-z\\xdf-\\xf6\\xf8-\\xff", xg = "\\xac\\xb1\\xd7\\xf7", Og = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Ag = "\\u2000-\\u206f", Tg = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", cf = "A-Z\\xc0-\\xd6\\xd8-\\xde", df = "\\ufe0e\\ufe0f", pf = xg + Og + Ag + Tg, ys = "['’]", Pg = "[" + xo + "]", hf = "[" + pf + "]", Oo = "[" + uf + "]", vf = "\\d+", Cg = "[" + lf + "]", mf = "[" + ff + "]", gf = "[^" + xo + pf + vf + lf + ff + cf + "]", ws = "\\ud83c[\\udffb-\\udfff]", Rg = "(?:" + Oo + "|" + ws + ")", yf = "[^" + xo + "]", bs = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ss = "[\\ud800-\\udbff][\\udc00-\\udfff]", Wn = "[" + cf + "]", wf = "\\u200d", bf = "(?:" + mf + "|" + gf + ")", Mg = "(?:" + Wn + "|" + gf + ")", Sf = "(?:" + ys + "(?:d|ll|m|re|s|t|ve))?", Ef = "(?:" + ys + "(?:D|LL|M|RE|S|T|VE))?", _f = Rg + "?", xf = "[" + df + "]?", Ig = "(?:" + wf + "(?:" + [yf, bs, Ss].join("|") + ")" + xf + _f + ")*", Lg = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Fg = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Of = xf + _f + Ig, $g = "(?:" + [Cg, bs, Ss].join("|") + ")" + Of, Ng = "(?:" + [yf + Oo + "?", Oo, bs, Ss, Pg].join("|") + ")", Dg = RegExp(ys, "g"), kg = RegExp(Oo, "g"), Es = RegExp(ws + "(?=" + ws + ")|" + Ng + Of, "g"), Wg = RegExp([
        Wn + "?" + mf + "+" + Sf + "(?=" + [hf, Wn, "$"].join("|") + ")",
        Mg + "+" + Ef + "(?=" + [hf, Wn + bf, "$"].join("|") + ")",
        Wn + "?" + bf + "+" + Sf,
        Wn + "+" + Ef,
        Fg,
        Lg,
        vf,
        $g
      ].join("|"), "g"), Ug = RegExp("[" + wf + xo + uf + df + "]"), zg = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Bg = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ], Hg = -1, ke = {};
      ke[ss] = ke[us] = ke[ls] = ke[fs] = ke[cs] = ke[ds] = ke[ps] = ke[hs] = ke[vs] = true, ke[fe] = ke[de] = ke[jr] = ke[me] = ke[xr] = ke[Ee] = ke[Be] = ke[re] = ke[at] = ke[cr] = ke[Ut] = ke[Mt] = ke[vt] = ke[Br] = ke[Hr] = false;
      var De = {};
      De[fe] = De[de] = De[jr] = De[xr] = De[me] = De[Ee] = De[ss] = De[us] = De[ls] = De[fs] = De[cs] = De[at] = De[cr] = De[Ut] = De[Mt] = De[vt] = De[Br] = De[dn] = De[ds] = De[ps] = De[hs] = De[vs] = true, De[Be] = De[re] = De[Hr] = false;
      var jg = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, qg = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Zg = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, Kg = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Gg = parseFloat, Vg = parseInt, Af = typeof da == "object" && da && da.Object === Object && da, Yg = typeof self == "object" && self && self.Object === Object && self, ft = Af || Yg || Function("return this")(), _s = r && !r.nodeType && r, pn = _s && true && e2 && !e2.nodeType && e2, Tf = pn && pn.exports === _s, xs = Tf && Af.process, zt = (function() {
        try {
          var $ = pn && pn.require && pn.require("util").types;
          return $ || xs && xs.binding && xs.binding("util");
        } catch {
        }
      })(), Pf = zt && zt.isArrayBuffer, Cf = zt && zt.isDate, Rf = zt && zt.isMap, Mf = zt && zt.isRegExp, If = zt && zt.isSet, Lf = zt && zt.isTypedArray;
      function It($, q, z) {
        switch (z.length) {
          case 0:
            return $.call(q);
          case 1:
            return $.call(q, z[0]);
          case 2:
            return $.call(q, z[0], z[1]);
          case 3:
            return $.call(q, z[0], z[1], z[2]);
        }
        return $.apply(q, z);
      }
      function Xg($, q, z, ae) {
        for (var ye = -1, Pe = $ == null ? 0 : $.length; ++ye < Pe; ) {
          var Qe = $[ye];
          q(ae, Qe, z(Qe), $);
        }
        return ae;
      }
      function Bt($, q) {
        for (var z = -1, ae = $ == null ? 0 : $.length; ++z < ae && q($[z], z, $) !== false; )
          ;
        return $;
      }
      function Jg($, q) {
        for (var z = $ == null ? 0 : $.length; z-- && q($[z], z, $) !== false; )
          ;
        return $;
      }
      function Ff($, q) {
        for (var z = -1, ae = $ == null ? 0 : $.length; ++z < ae; )
          if (!q($[z], z, $))
            return false;
        return true;
      }
      function qr($, q) {
        for (var z = -1, ae = $ == null ? 0 : $.length, ye = 0, Pe = []; ++z < ae; ) {
          var Qe = $[z];
          q(Qe, z, $) && (Pe[ye++] = Qe);
        }
        return Pe;
      }
      function Ao($, q) {
        var z = $ == null ? 0 : $.length;
        return !!z && Un($, q, 0) > -1;
      }
      function Os($, q, z) {
        for (var ae = -1, ye = $ == null ? 0 : $.length; ++ae < ye; )
          if (z(q, $[ae]))
            return true;
        return false;
      }
      function We($, q) {
        for (var z = -1, ae = $ == null ? 0 : $.length, ye = Array(ae); ++z < ae; )
          ye[z] = q($[z], z, $);
        return ye;
      }
      function Zr($, q) {
        for (var z = -1, ae = q.length, ye = $.length; ++z < ae; )
          $[ye + z] = q[z];
        return $;
      }
      function As($, q, z, ae) {
        var ye = -1, Pe = $ == null ? 0 : $.length;
        for (ae && Pe && (z = $[++ye]); ++ye < Pe; )
          z = q(z, $[ye], ye, $);
        return z;
      }
      function Qg($, q, z, ae) {
        var ye = $ == null ? 0 : $.length;
        for (ae && ye && (z = $[--ye]); ye--; )
          z = q(z, $[ye], ye, $);
        return z;
      }
      function Ts($, q) {
        for (var z = -1, ae = $ == null ? 0 : $.length; ++z < ae; )
          if (q($[z], z, $))
            return true;
        return false;
      }
      var ey = Ps("length");
      function ty($) {
        return $.split("");
      }
      function ry($) {
        return $.match(fg) || [];
      }
      function $f($, q, z) {
        var ae;
        return z($, function(ye, Pe, Qe) {
          if (q(ye, Pe, Qe))
            return ae = Pe, false;
        }), ae;
      }
      function To($, q, z, ae) {
        for (var ye = $.length, Pe = z + (ae ? 1 : -1); ae ? Pe-- : ++Pe < ye; )
          if (q($[Pe], Pe, $))
            return Pe;
        return -1;
      }
      function Un($, q, z) {
        return q === q ? hy($, q, z) : To($, Nf, z);
      }
      function ny($, q, z, ae) {
        for (var ye = z - 1, Pe = $.length; ++ye < Pe; )
          if (ae($[ye], q))
            return ye;
        return -1;
      }
      function Nf($) {
        return $ !== $;
      }
      function Df($, q) {
        var z = $ == null ? 0 : $.length;
        return z ? Rs($, q) / z : j;
      }
      function Ps($) {
        return function(q) {
          return q == null ? n : q[$];
        };
      }
      function Cs($) {
        return function(q) {
          return $ == null ? n : $[q];
        };
      }
      function kf($, q, z, ae, ye) {
        return ye($, function(Pe, Qe, $e) {
          z = ae ? (ae = false, Pe) : q(z, Pe, Qe, $e);
        }), z;
      }
      function iy($, q) {
        var z = $.length;
        for ($.sort(q); z--; )
          $[z] = $[z].value;
        return $;
      }
      function Rs($, q) {
        for (var z, ae = -1, ye = $.length; ++ae < ye; ) {
          var Pe = q($[ae]);
          Pe !== n && (z = z === n ? Pe : z + Pe);
        }
        return z;
      }
      function Ms($, q) {
        for (var z = -1, ae = Array($); ++z < $; )
          ae[z] = q(z);
        return ae;
      }
      function oy($, q) {
        return We(q, function(z) {
          return [z, $[z]];
        });
      }
      function Wf($) {
        return $ && $.slice(0, Hf($) + 1).replace(gs, "");
      }
      function Lt($) {
        return function(q) {
          return $(q);
        };
      }
      function Is($, q) {
        return We(q, function(z) {
          return $[z];
        });
      }
      function vi($, q) {
        return $.has(q);
      }
      function Uf($, q) {
        for (var z = -1, ae = $.length; ++z < ae && Un(q, $[z], 0) > -1; )
          ;
        return z;
      }
      function zf($, q) {
        for (var z = $.length; z-- && Un(q, $[z], 0) > -1; )
          ;
        return z;
      }
      function ay($, q) {
        for (var z = $.length, ae = 0; z--; )
          $[z] === q && ++ae;
        return ae;
      }
      var sy = Cs(jg), uy = Cs(qg);
      function ly($) {
        return "\\" + Kg[$];
      }
      function fy($, q) {
        return $ == null ? n : $[q];
      }
      function zn($) {
        return Ug.test($);
      }
      function cy($) {
        return zg.test($);
      }
      function dy($) {
        for (var q, z = []; !(q = $.next()).done; )
          z.push(q.value);
        return z;
      }
      function Ls($) {
        var q = -1, z = Array($.size);
        return $.forEach(function(ae, ye) {
          z[++q] = [ye, ae];
        }), z;
      }
      function Bf($, q) {
        return function(z) {
          return $(q(z));
        };
      }
      function Kr($, q) {
        for (var z = -1, ae = $.length, ye = 0, Pe = []; ++z < ae; ) {
          var Qe = $[z];
          (Qe === q || Qe === y) && ($[z] = y, Pe[ye++] = z);
        }
        return Pe;
      }
      function Po($) {
        var q = -1, z = Array($.size);
        return $.forEach(function(ae) {
          z[++q] = ae;
        }), z;
      }
      function py($) {
        var q = -1, z = Array($.size);
        return $.forEach(function(ae) {
          z[++q] = [ae, ae];
        }), z;
      }
      function hy($, q, z) {
        for (var ae = z - 1, ye = $.length; ++ae < ye; )
          if ($[ae] === q)
            return ae;
        return -1;
      }
      function vy($, q, z) {
        for (var ae = z + 1; ae--; )
          if ($[ae] === q)
            return ae;
        return ae;
      }
      function Bn($) {
        return zn($) ? gy($) : ey($);
      }
      function rr($) {
        return zn($) ? yy($) : ty($);
      }
      function Hf($) {
        for (var q = $.length; q-- && ag.test($.charAt(q)); )
          ;
        return q;
      }
      var my = Cs(Zg);
      function gy($) {
        for (var q = Es.lastIndex = 0; Es.test($); )
          ++q;
        return q;
      }
      function yy($) {
        return $.match(Es) || [];
      }
      function wy($) {
        return $.match(Wg) || [];
      }
      var by = function $(q) {
        q = q == null ? ft : Hn.defaults(ft.Object(), q, Hn.pick(ft, Bg));
        var z = q.Array, ae = q.Date, ye = q.Error, Pe = q.Function, Qe = q.Math, $e = q.Object, Fs = q.RegExp, Sy = q.String, Ht = q.TypeError, Co = z.prototype, Ey = Pe.prototype, jn = $e.prototype, Ro = q["__core-js_shared__"], Mo = Ey.toString, Le = jn.hasOwnProperty, _y = 0, jf = (function() {
          var t = /[^.]+$/.exec(Ro && Ro.keys && Ro.keys.IE_PROTO || "");
          return t ? "Symbol(src)_1." + t : "";
        })(), Io = jn.toString, xy = Mo.call($e), Oy = ft._, Ay = Fs(
          "^" + Mo.call(Le).replace(ms, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Lo = Tf ? q.Buffer : n, Gr = q.Symbol, Fo = q.Uint8Array, qf = Lo ? Lo.allocUnsafe : n, $o = Bf($e.getPrototypeOf, $e), Zf = $e.create, Kf = jn.propertyIsEnumerable, No = Co.splice, Gf = Gr ? Gr.isConcatSpreadable : n, mi = Gr ? Gr.iterator : n, hn = Gr ? Gr.toStringTag : n, Do = (function() {
          try {
            var t = wn($e, "defineProperty");
            return t({}, "", {}), t;
          } catch {
          }
        })(), Ty = q.clearTimeout !== ft.clearTimeout && q.clearTimeout, Py = ae && ae.now !== ft.Date.now && ae.now, Cy = q.setTimeout !== ft.setTimeout && q.setTimeout, ko = Qe.ceil, Wo = Qe.floor, $s = $e.getOwnPropertySymbols, Ry = Lo ? Lo.isBuffer : n, Vf = q.isFinite, My = Co.join, Iy = Bf($e.keys, $e), et = Qe.max, mt = Qe.min, Ly = ae.now, Fy = q.parseInt, Yf = Qe.random, $y = Co.reverse, Ns = wn(q, "DataView"), gi = wn(q, "Map"), Ds = wn(q, "Promise"), qn = wn(q, "Set"), yi = wn(q, "WeakMap"), wi = wn($e, "create"), Uo = yi && new yi(), Zn = {}, Ny = bn(Ns), Dy = bn(gi), ky = bn(Ds), Wy = bn(qn), Uy = bn(yi), zo = Gr ? Gr.prototype : n, bi = zo ? zo.valueOf : n, Xf = zo ? zo.toString : n;
        function O(t) {
          if (Ze(t) && !we(t) && !(t instanceof Ae)) {
            if (t instanceof jt)
              return t;
            if (Le.call(t, "__wrapped__"))
              return Jc(t);
          }
          return new jt(t);
        }
        var Kn = /* @__PURE__ */ (function() {
          function t() {
          }
          return function(i) {
            if (!He(i))
              return {};
            if (Zf)
              return Zf(i);
            t.prototype = i;
            var s = new t();
            return t.prototype = n, s;
          };
        })();
        function Bo() {
        }
        function jt(t, i) {
          this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = n;
        }
        O.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: eg,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: tg,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: af,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: O
          }
        }, O.prototype = Bo.prototype, O.prototype.constructor = O, jt.prototype = Kn(Bo.prototype), jt.prototype.constructor = jt;
        function Ae(t) {
          this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Q, this.__views__ = [];
        }
        function zy() {
          var t = new Ae(this.__wrapped__);
          return t.__actions__ = xt(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = xt(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = xt(this.__views__), t;
        }
        function By() {
          if (this.__filtered__) {
            var t = new Ae(this);
            t.__dir__ = -1, t.__filtered__ = true;
          } else
            t = this.clone(), t.__dir__ *= -1;
          return t;
        }
        function Hy() {
          var t = this.__wrapped__.value(), i = this.__dir__, s = we(t), v = i < 0, E = s ? t.length : 0, A = t1(0, E, this.__views__), C = A.start, I = A.end, D = I - C, Z = v ? I : C - 1, V = this.__iteratees__, J = V.length, ne = 0, se = mt(D, this.__takeCount__);
          if (!s || !v && E == D && se == D)
            return Sc(t, this.__actions__);
          var pe = [];
          e:
            for (; D-- && ne < se; ) {
              Z += i;
              for (var Se = -1, he = t[Z]; ++Se < J; ) {
                var xe = V[Se], Te = xe.iteratee, Nt = xe.type, Et = Te(he);
                if (Nt == R)
                  he = Et;
                else if (!Et) {
                  if (Nt == H)
                    continue e;
                  break e;
                }
              }
              pe[ne++] = he;
            }
          return pe;
        }
        Ae.prototype = Kn(Bo.prototype), Ae.prototype.constructor = Ae;
        function vn(t) {
          var i = -1, s = t == null ? 0 : t.length;
          for (this.clear(); ++i < s; ) {
            var v = t[i];
            this.set(v[0], v[1]);
          }
        }
        function jy() {
          this.__data__ = wi ? wi(null) : {}, this.size = 0;
        }
        function qy(t) {
          var i = this.has(t) && delete this.__data__[t];
          return this.size -= i ? 1 : 0, i;
        }
        function Zy(t) {
          var i = this.__data__;
          if (wi) {
            var s = i[t];
            return s === w ? n : s;
          }
          return Le.call(i, t) ? i[t] : n;
        }
        function Ky(t) {
          var i = this.__data__;
          return wi ? i[t] !== n : Le.call(i, t);
        }
        function Gy(t, i) {
          var s = this.__data__;
          return this.size += this.has(t) ? 0 : 1, s[t] = wi && i === n ? w : i, this;
        }
        vn.prototype.clear = jy, vn.prototype.delete = qy, vn.prototype.get = Zy, vn.prototype.has = Ky, vn.prototype.set = Gy;
        function Or(t) {
          var i = -1, s = t == null ? 0 : t.length;
          for (this.clear(); ++i < s; ) {
            var v = t[i];
            this.set(v[0], v[1]);
          }
        }
        function Vy() {
          this.__data__ = [], this.size = 0;
        }
        function Yy(t) {
          var i = this.__data__, s = Ho(i, t);
          if (s < 0)
            return false;
          var v = i.length - 1;
          return s == v ? i.pop() : No.call(i, s, 1), --this.size, true;
        }
        function Xy(t) {
          var i = this.__data__, s = Ho(i, t);
          return s < 0 ? n : i[s][1];
        }
        function Jy(t) {
          return Ho(this.__data__, t) > -1;
        }
        function Qy(t, i) {
          var s = this.__data__, v = Ho(s, t);
          return v < 0 ? (++this.size, s.push([t, i])) : s[v][1] = i, this;
        }
        Or.prototype.clear = Vy, Or.prototype.delete = Yy, Or.prototype.get = Xy, Or.prototype.has = Jy, Or.prototype.set = Qy;
        function Ar(t) {
          var i = -1, s = t == null ? 0 : t.length;
          for (this.clear(); ++i < s; ) {
            var v = t[i];
            this.set(v[0], v[1]);
          }
        }
        function e0() {
          this.size = 0, this.__data__ = {
            hash: new vn(),
            map: new (gi || Or)(),
            string: new vn()
          };
        }
        function t0(t) {
          var i = ta(this, t).delete(t);
          return this.size -= i ? 1 : 0, i;
        }
        function r0(t) {
          return ta(this, t).get(t);
        }
        function n0(t) {
          return ta(this, t).has(t);
        }
        function i0(t, i) {
          var s = ta(this, t), v = s.size;
          return s.set(t, i), this.size += s.size == v ? 0 : 1, this;
        }
        Ar.prototype.clear = e0, Ar.prototype.delete = t0, Ar.prototype.get = r0, Ar.prototype.has = n0, Ar.prototype.set = i0;
        function mn(t) {
          var i = -1, s = t == null ? 0 : t.length;
          for (this.__data__ = new Ar(); ++i < s; )
            this.add(t[i]);
        }
        function o0(t) {
          return this.__data__.set(t, w), this;
        }
        function a0(t) {
          return this.__data__.has(t);
        }
        mn.prototype.add = mn.prototype.push = o0, mn.prototype.has = a0;
        function nr(t) {
          var i = this.__data__ = new Or(t);
          this.size = i.size;
        }
        function s0() {
          this.__data__ = new Or(), this.size = 0;
        }
        function u0(t) {
          var i = this.__data__, s = i.delete(t);
          return this.size = i.size, s;
        }
        function l0(t) {
          return this.__data__.get(t);
        }
        function f0(t) {
          return this.__data__.has(t);
        }
        function c0(t, i) {
          var s = this.__data__;
          if (s instanceof Or) {
            var v = s.__data__;
            if (!gi || v.length < a - 1)
              return v.push([t, i]), this.size = ++s.size, this;
            s = this.__data__ = new Ar(v);
          }
          return s.set(t, i), this.size = s.size, this;
        }
        nr.prototype.clear = s0, nr.prototype.delete = u0, nr.prototype.get = l0, nr.prototype.has = f0, nr.prototype.set = c0;
        function Jf(t, i) {
          var s = we(t), v = !s && Sn(t), E = !s && !v && Qr(t), A = !s && !v && !E && Xn(t), C = s || v || E || A, I = C ? Ms(t.length, Sy) : [], D = I.length;
          for (var Z in t)
            (i || Le.call(t, Z)) && !(C && // Safari 9 has enumerable `arguments.length` in strict mode.
            (Z == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            E && (Z == "offset" || Z == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            A && (Z == "buffer" || Z == "byteLength" || Z == "byteOffset") || // Skip index properties.
            Rr(Z, D))) && I.push(Z);
          return I;
        }
        function Qf(t) {
          var i = t.length;
          return i ? t[Gs(0, i - 1)] : n;
        }
        function d0(t, i) {
          return ra(xt(t), gn(i, 0, t.length));
        }
        function p0(t) {
          return ra(xt(t));
        }
        function ks(t, i, s) {
          (s !== n && !ir(t[i], s) || s === n && !(i in t)) && Tr(t, i, s);
        }
        function Si(t, i, s) {
          var v = t[i];
          (!(Le.call(t, i) && ir(v, s)) || s === n && !(i in t)) && Tr(t, i, s);
        }
        function Ho(t, i) {
          for (var s = t.length; s--; )
            if (ir(t[s][0], i))
              return s;
          return -1;
        }
        function h0(t, i, s, v) {
          return Vr(t, function(E, A, C) {
            i(v, E, s(E), C);
          }), v;
        }
        function ec(t, i) {
          return t && pr(i, st(i), t);
        }
        function v0(t, i) {
          return t && pr(i, At(i), t);
        }
        function Tr(t, i, s) {
          i == "__proto__" && Do ? Do(t, i, {
            configurable: true,
            enumerable: true,
            value: s,
            writable: true
          }) : t[i] = s;
        }
        function Ws(t, i) {
          for (var s = -1, v = i.length, E = z(v), A = t == null; ++s < v; )
            E[s] = A ? n : wu(t, i[s]);
          return E;
        }
        function gn(t, i, s) {
          return t === t && (s !== n && (t = t <= s ? t : s), i !== n && (t = t >= i ? t : i)), t;
        }
        function qt(t, i, s, v, E, A) {
          var C, I = i & h, D = i & f, Z = i & p;
          if (s && (C = E ? s(t, v, E, A) : s(t)), C !== n)
            return C;
          if (!He(t))
            return t;
          var V = we(t);
          if (V) {
            if (C = n1(t), !I)
              return xt(t, C);
          } else {
            var J = gt(t), ne = J == re || J == ht;
            if (Qr(t))
              return xc(t, I);
            if (J == Ut || J == fe || ne && !E) {
              if (C = D || ne ? {} : Hc(t), !I)
                return D ? Z0(t, v0(C, t)) : q0(t, ec(C, t));
            } else {
              if (!De[J])
                return E ? t : {};
              C = i1(t, J, I);
            }
          }
          A || (A = new nr());
          var se = A.get(t);
          if (se)
            return se;
          A.set(t, C), yd(t) ? t.forEach(function(he) {
            C.add(qt(he, i, s, he, t, A));
          }) : md(t) && t.forEach(function(he, xe) {
            C.set(xe, qt(he, i, s, xe, t, A));
          });
          var pe = Z ? D ? ou : iu : D ? At : st, Se = V ? n : pe(t);
          return Bt(Se || t, function(he, xe) {
            Se && (xe = he, he = t[xe]), Si(C, xe, qt(he, i, s, xe, t, A));
          }), C;
        }
        function m0(t) {
          var i = st(t);
          return function(s) {
            return tc(s, t, i);
          };
        }
        function tc(t, i, s) {
          var v = s.length;
          if (t == null)
            return !v;
          for (t = $e(t); v--; ) {
            var E = s[v], A = i[E], C = t[E];
            if (C === n && !(E in t) || !A(C))
              return false;
          }
          return true;
        }
        function rc(t, i, s) {
          if (typeof t != "function")
            throw new Ht(l);
          return Pi(function() {
            t.apply(n, s);
          }, i);
        }
        function Ei(t, i, s, v) {
          var E = -1, A = Ao, C = true, I = t.length, D = [], Z = i.length;
          if (!I)
            return D;
          s && (i = We(i, Lt(s))), v ? (A = Os, C = false) : i.length >= a && (A = vi, C = false, i = new mn(i));
          e:
            for (; ++E < I; ) {
              var V = t[E], J = s == null ? V : s(V);
              if (V = v || V !== 0 ? V : 0, C && J === J) {
                for (var ne = Z; ne--; )
                  if (i[ne] === J)
                    continue e;
                D.push(V);
              } else A(i, J, v) || D.push(V);
            }
          return D;
        }
        var Vr = Cc(dr), nc = Cc(zs, true);
        function g0(t, i) {
          var s = true;
          return Vr(t, function(v, E, A) {
            return s = !!i(v, E, A), s;
          }), s;
        }
        function jo(t, i, s) {
          for (var v = -1, E = t.length; ++v < E; ) {
            var A = t[v], C = i(A);
            if (C != null && (I === n ? C === C && !$t(C) : s(C, I)))
              var I = C, D = A;
          }
          return D;
        }
        function y0(t, i, s, v) {
          var E = t.length;
          for (s = be(s), s < 0 && (s = -s > E ? 0 : E + s), v = v === n || v > E ? E : be(v), v < 0 && (v += E), v = s > v ? 0 : bd(v); s < v; )
            t[s++] = i;
          return t;
        }
        function ic(t, i) {
          var s = [];
          return Vr(t, function(v, E, A) {
            i(v, E, A) && s.push(v);
          }), s;
        }
        function ct(t, i, s, v, E) {
          var A = -1, C = t.length;
          for (s || (s = a1), E || (E = []); ++A < C; ) {
            var I = t[A];
            i > 0 && s(I) ? i > 1 ? ct(I, i - 1, s, v, E) : Zr(E, I) : v || (E[E.length] = I);
          }
          return E;
        }
        var Us = Rc(), oc = Rc(true);
        function dr(t, i) {
          return t && Us(t, i, st);
        }
        function zs(t, i) {
          return t && oc(t, i, st);
        }
        function qo(t, i) {
          return qr(i, function(s) {
            return Mr(t[s]);
          });
        }
        function yn(t, i) {
          i = Xr(i, t);
          for (var s = 0, v = i.length; t != null && s < v; )
            t = t[hr(i[s++])];
          return s && s == v ? t : n;
        }
        function ac(t, i, s) {
          var v = i(t);
          return we(t) ? v : Zr(v, s(t));
        }
        function bt(t) {
          return t == null ? t === n ? hi : bo : hn && hn in $e(t) ? e1(t) : p1(t);
        }
        function Bs(t, i) {
          return t > i;
        }
        function w0(t, i) {
          return t != null && Le.call(t, i);
        }
        function b0(t, i) {
          return t != null && i in $e(t);
        }
        function S0(t, i, s) {
          return t >= mt(i, s) && t < et(i, s);
        }
        function Hs(t, i, s) {
          for (var v = s ? Os : Ao, E = t[0].length, A = t.length, C = A, I = z(A), D = 1 / 0, Z = []; C--; ) {
            var V = t[C];
            C && i && (V = We(V, Lt(i))), D = mt(V.length, D), I[C] = !s && (i || E >= 120 && V.length >= 120) ? new mn(C && V) : n;
          }
          V = t[0];
          var J = -1, ne = I[0];
          e:
            for (; ++J < E && Z.length < D; ) {
              var se = V[J], pe = i ? i(se) : se;
              if (se = s || se !== 0 ? se : 0, !(ne ? vi(ne, pe) : v(Z, pe, s))) {
                for (C = A; --C; ) {
                  var Se = I[C];
                  if (!(Se ? vi(Se, pe) : v(t[C], pe, s)))
                    continue e;
                }
                ne && ne.push(pe), Z.push(se);
              }
            }
          return Z;
        }
        function E0(t, i, s, v) {
          return dr(t, function(E, A, C) {
            i(v, s(E), A, C);
          }), v;
        }
        function _i(t, i, s) {
          i = Xr(i, t), t = Kc(t, i);
          var v = t == null ? t : t[hr(Kt(i))];
          return v == null ? n : It(v, t, s);
        }
        function sc(t) {
          return Ze(t) && bt(t) == fe;
        }
        function _0(t) {
          return Ze(t) && bt(t) == jr;
        }
        function x0(t) {
          return Ze(t) && bt(t) == Ee;
        }
        function xi(t, i, s, v, E) {
          return t === i ? true : t == null || i == null || !Ze(t) && !Ze(i) ? t !== t && i !== i : O0(t, i, s, v, xi, E);
        }
        function O0(t, i, s, v, E, A) {
          var C = we(t), I = we(i), D = C ? de : gt(t), Z = I ? de : gt(i);
          D = D == fe ? Ut : D, Z = Z == fe ? Ut : Z;
          var V = D == Ut, J = Z == Ut, ne = D == Z;
          if (ne && Qr(t)) {
            if (!Qr(i))
              return false;
            C = true, V = false;
          }
          if (ne && !V)
            return A || (A = new nr()), C || Xn(t) ? Uc(t, i, s, v, E, A) : J0(t, i, D, s, v, E, A);
          if (!(s & m)) {
            var se = V && Le.call(t, "__wrapped__"), pe = J && Le.call(i, "__wrapped__");
            if (se || pe) {
              var Se = se ? t.value() : t, he = pe ? i.value() : i;
              return A || (A = new nr()), E(Se, he, s, v, A);
            }
          }
          return ne ? (A || (A = new nr()), Q0(t, i, s, v, E, A)) : false;
        }
        function A0(t) {
          return Ze(t) && gt(t) == at;
        }
        function js(t, i, s, v) {
          var E = s.length, A = E, C = !v;
          if (t == null)
            return !A;
          for (t = $e(t); E--; ) {
            var I = s[E];
            if (C && I[2] ? I[1] !== t[I[0]] : !(I[0] in t))
              return false;
          }
          for (; ++E < A; ) {
            I = s[E];
            var D = I[0], Z = t[D], V = I[1];
            if (C && I[2]) {
              if (Z === n && !(D in t))
                return false;
            } else {
              var J = new nr();
              if (v)
                var ne = v(Z, V, D, t, i, J);
              if (!(ne === n ? xi(V, Z, m | c, v, J) : ne))
                return false;
            }
          }
          return true;
        }
        function uc(t) {
          if (!He(t) || u1(t))
            return false;
          var i = Mr(t) ? Ay : mg;
          return i.test(bn(t));
        }
        function T0(t) {
          return Ze(t) && bt(t) == Mt;
        }
        function P0(t) {
          return Ze(t) && gt(t) == vt;
        }
        function C0(t) {
          return Ze(t) && ua(t.length) && !!ke[bt(t)];
        }
        function lc(t) {
          return typeof t == "function" ? t : t == null ? Tt : typeof t == "object" ? we(t) ? dc(t[0], t[1]) : cc(t) : Md(t);
        }
        function qs(t) {
          if (!Ti(t))
            return Iy(t);
          var i = [];
          for (var s in $e(t))
            Le.call(t, s) && s != "constructor" && i.push(s);
          return i;
        }
        function R0(t) {
          if (!He(t))
            return d1(t);
          var i = Ti(t), s = [];
          for (var v in t)
            v == "constructor" && (i || !Le.call(t, v)) || s.push(v);
          return s;
        }
        function Zs(t, i) {
          return t < i;
        }
        function fc(t, i) {
          var s = -1, v = Ot(t) ? z(t.length) : [];
          return Vr(t, function(E, A, C) {
            v[++s] = i(E, A, C);
          }), v;
        }
        function cc(t) {
          var i = su(t);
          return i.length == 1 && i[0][2] ? qc(i[0][0], i[0][1]) : function(s) {
            return s === t || js(s, t, i);
          };
        }
        function dc(t, i) {
          return lu(t) && jc(i) ? qc(hr(t), i) : function(s) {
            var v = wu(s, t);
            return v === n && v === i ? bu(s, t) : xi(i, v, m | c);
          };
        }
        function Zo(t, i, s, v, E) {
          t !== i && Us(i, function(A, C) {
            if (E || (E = new nr()), He(A))
              M0(t, i, C, s, Zo, v, E);
            else {
              var I = v ? v(cu(t, C), A, C + "", t, i, E) : n;
              I === n && (I = A), ks(t, C, I);
            }
          }, At);
        }
        function M0(t, i, s, v, E, A, C) {
          var I = cu(t, s), D = cu(i, s), Z = C.get(D);
          if (Z) {
            ks(t, s, Z);
            return;
          }
          var V = A ? A(I, D, s + "", t, i, C) : n, J = V === n;
          if (J) {
            var ne = we(D), se = !ne && Qr(D), pe = !ne && !se && Xn(D);
            V = D, ne || se || pe ? we(I) ? V = I : Ke(I) ? V = xt(I) : se ? (J = false, V = xc(D, true)) : pe ? (J = false, V = Oc(D, true)) : V = [] : Ci(D) || Sn(D) ? (V = I, Sn(I) ? V = Sd(I) : (!He(I) || Mr(I)) && (V = Hc(D))) : J = false;
          }
          J && (C.set(D, V), E(V, D, v, A, C), C.delete(D)), ks(t, s, V);
        }
        function pc(t, i) {
          var s = t.length;
          if (s)
            return i += i < 0 ? s : 0, Rr(i, s) ? t[i] : n;
        }
        function hc(t, i, s) {
          i.length ? i = We(i, function(A) {
            return we(A) ? function(C) {
              return yn(C, A.length === 1 ? A[0] : A);
            } : A;
          }) : i = [Tt];
          var v = -1;
          i = We(i, Lt(ce()));
          var E = fc(t, function(A, C, I) {
            var D = We(i, function(Z) {
              return Z(A);
            });
            return { criteria: D, index: ++v, value: A };
          });
          return iy(E, function(A, C) {
            return j0(A, C, s);
          });
        }
        function I0(t, i) {
          return vc(t, i, function(s, v) {
            return bu(t, v);
          });
        }
        function vc(t, i, s) {
          for (var v = -1, E = i.length, A = {}; ++v < E; ) {
            var C = i[v], I = yn(t, C);
            s(I, C) && Oi(A, Xr(C, t), I);
          }
          return A;
        }
        function L0(t) {
          return function(i) {
            return yn(i, t);
          };
        }
        function Ks(t, i, s, v) {
          var E = v ? ny : Un, A = -1, C = i.length, I = t;
          for (t === i && (i = xt(i)), s && (I = We(t, Lt(s))); ++A < C; )
            for (var D = 0, Z = i[A], V = s ? s(Z) : Z; (D = E(I, V, D, v)) > -1; )
              I !== t && No.call(I, D, 1), No.call(t, D, 1);
          return t;
        }
        function mc(t, i) {
          for (var s = t ? i.length : 0, v = s - 1; s--; ) {
            var E = i[s];
            if (s == v || E !== A) {
              var A = E;
              Rr(E) ? No.call(t, E, 1) : Xs(t, E);
            }
          }
          return t;
        }
        function Gs(t, i) {
          return t + Wo(Yf() * (i - t + 1));
        }
        function F0(t, i, s, v) {
          for (var E = -1, A = et(ko((i - t) / (s || 1)), 0), C = z(A); A--; )
            C[v ? A : ++E] = t, t += s;
          return C;
        }
        function Vs(t, i) {
          var s = "";
          if (!t || i < 1 || i > ee)
            return s;
          do
            i % 2 && (s += t), i = Wo(i / 2), i && (t += t);
          while (i);
          return s;
        }
        function _e(t, i) {
          return du(Zc(t, i, Tt), t + "");
        }
        function $0(t) {
          return Qf(Jn(t));
        }
        function N0(t, i) {
          var s = Jn(t);
          return ra(s, gn(i, 0, s.length));
        }
        function Oi(t, i, s, v) {
          if (!He(t))
            return t;
          i = Xr(i, t);
          for (var E = -1, A = i.length, C = A - 1, I = t; I != null && ++E < A; ) {
            var D = hr(i[E]), Z = s;
            if (D === "__proto__" || D === "constructor" || D === "prototype")
              return t;
            if (E != C) {
              var V = I[D];
              Z = v ? v(V, D, I) : n, Z === n && (Z = He(V) ? V : Rr(i[E + 1]) ? [] : {});
            }
            Si(I, D, Z), I = I[D];
          }
          return t;
        }
        var gc = Uo ? function(t, i) {
          return Uo.set(t, i), t;
        } : Tt, D0 = Do ? function(t, i) {
          return Do(t, "toString", {
            configurable: true,
            enumerable: false,
            value: Eu(i),
            writable: true
          });
        } : Tt;
        function k0(t) {
          return ra(Jn(t));
        }
        function Zt(t, i, s) {
          var v = -1, E = t.length;
          i < 0 && (i = -i > E ? 0 : E + i), s = s > E ? E : s, s < 0 && (s += E), E = i > s ? 0 : s - i >>> 0, i >>>= 0;
          for (var A = z(E); ++v < E; )
            A[v] = t[v + i];
          return A;
        }
        function W0(t, i) {
          var s;
          return Vr(t, function(v, E, A) {
            return s = i(v, E, A), !s;
          }), !!s;
        }
        function Ko(t, i, s) {
          var v = 0, E = t == null ? v : t.length;
          if (typeof i == "number" && i === i && E <= le) {
            for (; v < E; ) {
              var A = v + E >>> 1, C = t[A];
              C !== null && !$t(C) && (s ? C <= i : C < i) ? v = A + 1 : E = A;
            }
            return E;
          }
          return Ys(t, i, Tt, s);
        }
        function Ys(t, i, s, v) {
          var E = 0, A = t == null ? 0 : t.length;
          if (A === 0)
            return 0;
          i = s(i);
          for (var C = i !== i, I = i === null, D = $t(i), Z = i === n; E < A; ) {
            var V = Wo((E + A) / 2), J = s(t[V]), ne = J !== n, se = J === null, pe = J === J, Se = $t(J);
            if (C)
              var he = v || pe;
            else Z ? he = pe && (v || ne) : I ? he = pe && ne && (v || !se) : D ? he = pe && ne && !se && (v || !Se) : se || Se ? he = false : he = v ? J <= i : J < i;
            he ? E = V + 1 : A = V;
          }
          return mt(A, oe);
        }
        function yc(t, i) {
          for (var s = -1, v = t.length, E = 0, A = []; ++s < v; ) {
            var C = t[s], I = i ? i(C) : C;
            if (!s || !ir(I, D)) {
              var D = I;
              A[E++] = C === 0 ? 0 : C;
            }
          }
          return A;
        }
        function wc(t) {
          return typeof t == "number" ? t : $t(t) ? j : +t;
        }
        function Ft(t) {
          if (typeof t == "string")
            return t;
          if (we(t))
            return We(t, Ft) + "";
          if ($t(t))
            return Xf ? Xf.call(t) : "";
          var i = t + "";
          return i == "0" && 1 / t == -G ? "-0" : i;
        }
        function Yr(t, i, s) {
          var v = -1, E = Ao, A = t.length, C = true, I = [], D = I;
          if (s)
            C = false, E = Os;
          else if (A >= a) {
            var Z = i ? null : Y0(t);
            if (Z)
              return Po(Z);
            C = false, E = vi, D = new mn();
          } else
            D = i ? [] : I;
          e:
            for (; ++v < A; ) {
              var V = t[v], J = i ? i(V) : V;
              if (V = s || V !== 0 ? V : 0, C && J === J) {
                for (var ne = D.length; ne--; )
                  if (D[ne] === J)
                    continue e;
                i && D.push(J), I.push(V);
              } else E(D, J, s) || (D !== I && D.push(J), I.push(V));
            }
          return I;
        }
        function Xs(t, i) {
          return i = Xr(i, t), t = Kc(t, i), t == null || delete t[hr(Kt(i))];
        }
        function bc(t, i, s, v) {
          return Oi(t, i, s(yn(t, i)), v);
        }
        function Go(t, i, s, v) {
          for (var E = t.length, A = v ? E : -1; (v ? A-- : ++A < E) && i(t[A], A, t); )
            ;
          return s ? Zt(t, v ? 0 : A, v ? A + 1 : E) : Zt(t, v ? A + 1 : 0, v ? E : A);
        }
        function Sc(t, i) {
          var s = t;
          return s instanceof Ae && (s = s.value()), As(i, function(v, E) {
            return E.func.apply(E.thisArg, Zr([v], E.args));
          }, s);
        }
        function Js(t, i, s) {
          var v = t.length;
          if (v < 2)
            return v ? Yr(t[0]) : [];
          for (var E = -1, A = z(v); ++E < v; )
            for (var C = t[E], I = -1; ++I < v; )
              I != E && (A[E] = Ei(A[E] || C, t[I], i, s));
          return Yr(ct(A, 1), i, s);
        }
        function Ec(t, i, s) {
          for (var v = -1, E = t.length, A = i.length, C = {}; ++v < E; ) {
            var I = v < A ? i[v] : n;
            s(C, t[v], I);
          }
          return C;
        }
        function Qs(t) {
          return Ke(t) ? t : [];
        }
        function eu(t) {
          return typeof t == "function" ? t : Tt;
        }
        function Xr(t, i) {
          return we(t) ? t : lu(t, i) ? [t] : Xc(Re(t));
        }
        var U0 = _e;
        function Jr(t, i, s) {
          var v = t.length;
          return s = s === n ? v : s, !i && s >= v ? t : Zt(t, i, s);
        }
        var _c = Ty || function(t) {
          return ft.clearTimeout(t);
        };
        function xc(t, i) {
          if (i)
            return t.slice();
          var s = t.length, v = qf ? qf(s) : new t.constructor(s);
          return t.copy(v), v;
        }
        function tu(t) {
          var i = new t.constructor(t.byteLength);
          return new Fo(i).set(new Fo(t)), i;
        }
        function z0(t, i) {
          var s = i ? tu(t.buffer) : t.buffer;
          return new t.constructor(s, t.byteOffset, t.byteLength);
        }
        function B0(t) {
          var i = new t.constructor(t.source, sf.exec(t));
          return i.lastIndex = t.lastIndex, i;
        }
        function H0(t) {
          return bi ? $e(bi.call(t)) : {};
        }
        function Oc(t, i) {
          var s = i ? tu(t.buffer) : t.buffer;
          return new t.constructor(s, t.byteOffset, t.length);
        }
        function Ac(t, i) {
          if (t !== i) {
            var s = t !== n, v = t === null, E = t === t, A = $t(t), C = i !== n, I = i === null, D = i === i, Z = $t(i);
            if (!I && !Z && !A && t > i || A && C && D && !I && !Z || v && C && D || !s && D || !E)
              return 1;
            if (!v && !A && !Z && t < i || Z && s && E && !v && !A || I && s && E || !C && E || !D)
              return -1;
          }
          return 0;
        }
        function j0(t, i, s) {
          for (var v = -1, E = t.criteria, A = i.criteria, C = E.length, I = s.length; ++v < C; ) {
            var D = Ac(E[v], A[v]);
            if (D) {
              if (v >= I)
                return D;
              var Z = s[v];
              return D * (Z == "desc" ? -1 : 1);
            }
          }
          return t.index - i.index;
        }
        function Tc(t, i, s, v) {
          for (var E = -1, A = t.length, C = s.length, I = -1, D = i.length, Z = et(A - C, 0), V = z(D + Z), J = !v; ++I < D; )
            V[I] = i[I];
          for (; ++E < C; )
            (J || E < A) && (V[s[E]] = t[E]);
          for (; Z--; )
            V[I++] = t[E++];
          return V;
        }
        function Pc(t, i, s, v) {
          for (var E = -1, A = t.length, C = -1, I = s.length, D = -1, Z = i.length, V = et(A - I, 0), J = z(V + Z), ne = !v; ++E < V; )
            J[E] = t[E];
          for (var se = E; ++D < Z; )
            J[se + D] = i[D];
          for (; ++C < I; )
            (ne || E < A) && (J[se + s[C]] = t[E++]);
          return J;
        }
        function xt(t, i) {
          var s = -1, v = t.length;
          for (i || (i = z(v)); ++s < v; )
            i[s] = t[s];
          return i;
        }
        function pr(t, i, s, v) {
          var E = !s;
          s || (s = {});
          for (var A = -1, C = i.length; ++A < C; ) {
            var I = i[A], D = v ? v(s[I], t[I], I, s, t) : n;
            D === n && (D = t[I]), E ? Tr(s, I, D) : Si(s, I, D);
          }
          return s;
        }
        function q0(t, i) {
          return pr(t, uu(t), i);
        }
        function Z0(t, i) {
          return pr(t, zc(t), i);
        }
        function Vo(t, i) {
          return function(s, v) {
            var E = we(s) ? Xg : h0, A = i ? i() : {};
            return E(s, t, ce(v, 2), A);
          };
        }
        function Gn(t) {
          return _e(function(i, s) {
            var v = -1, E = s.length, A = E > 1 ? s[E - 1] : n, C = E > 2 ? s[2] : n;
            for (A = t.length > 3 && typeof A == "function" ? (E--, A) : n, C && St(s[0], s[1], C) && (A = E < 3 ? n : A, E = 1), i = $e(i); ++v < E; ) {
              var I = s[v];
              I && t(i, I, v, A);
            }
            return i;
          });
        }
        function Cc(t, i) {
          return function(s, v) {
            if (s == null)
              return s;
            if (!Ot(s))
              return t(s, v);
            for (var E = s.length, A = i ? E : -1, C = $e(s); (i ? A-- : ++A < E) && v(C[A], A, C) !== false; )
              ;
            return s;
          };
        }
        function Rc(t) {
          return function(i, s, v) {
            for (var E = -1, A = $e(i), C = v(i), I = C.length; I--; ) {
              var D = C[t ? I : ++E];
              if (s(A[D], D, A) === false)
                break;
            }
            return i;
          };
        }
        function K0(t, i, s) {
          var v = i & g, E = Ai(t);
          function A() {
            var C = this && this !== ft && this instanceof A ? E : t;
            return C.apply(v ? s : this, arguments);
          }
          return A;
        }
        function Mc(t) {
          return function(i) {
            i = Re(i);
            var s = zn(i) ? rr(i) : n, v = s ? s[0] : i.charAt(0), E = s ? Jr(s, 1).join("") : i.slice(1);
            return v[t]() + E;
          };
        }
        function Vn(t) {
          return function(i) {
            return As(Cd(Pd(i).replace(Dg, "")), t, "");
          };
        }
        function Ai(t) {
          return function() {
            var i = arguments;
            switch (i.length) {
              case 0:
                return new t();
              case 1:
                return new t(i[0]);
              case 2:
                return new t(i[0], i[1]);
              case 3:
                return new t(i[0], i[1], i[2]);
              case 4:
                return new t(i[0], i[1], i[2], i[3]);
              case 5:
                return new t(i[0], i[1], i[2], i[3], i[4]);
              case 6:
                return new t(i[0], i[1], i[2], i[3], i[4], i[5]);
              case 7:
                return new t(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
            }
            var s = Kn(t.prototype), v = t.apply(s, i);
            return He(v) ? v : s;
          };
        }
        function G0(t, i, s) {
          var v = Ai(t);
          function E() {
            for (var A = arguments.length, C = z(A), I = A, D = Yn(E); I--; )
              C[I] = arguments[I];
            var Z = A < 3 && C[0] !== D && C[A - 1] !== D ? [] : Kr(C, D);
            if (A -= Z.length, A < s)
              return Nc(
                t,
                i,
                Yo,
                E.placeholder,
                n,
                C,
                Z,
                n,
                n,
                s - A
              );
            var V = this && this !== ft && this instanceof E ? v : t;
            return It(V, this, C);
          }
          return E;
        }
        function Ic(t) {
          return function(i, s, v) {
            var E = $e(i);
            if (!Ot(i)) {
              var A = ce(s, 3);
              i = st(i), s = function(I) {
                return A(E[I], I, E);
              };
            }
            var C = t(i, s, v);
            return C > -1 ? E[A ? i[C] : C] : n;
          };
        }
        function Lc(t) {
          return Cr(function(i) {
            var s = i.length, v = s, E = jt.prototype.thru;
            for (t && i.reverse(); v--; ) {
              var A = i[v];
              if (typeof A != "function")
                throw new Ht(l);
              if (E && !C && ea(A) == "wrapper")
                var C = new jt([], true);
            }
            for (v = C ? v : s; ++v < s; ) {
              A = i[v];
              var I = ea(A), D = I == "wrapper" ? au(A) : n;
              D && fu(D[0]) && D[1] == (B | x | T | F) && !D[4].length && D[9] == 1 ? C = C[ea(D[0])].apply(C, D[3]) : C = A.length == 1 && fu(A) ? C[I]() : C.thru(A);
            }
            return function() {
              var Z = arguments, V = Z[0];
              if (C && Z.length == 1 && we(V))
                return C.plant(V).value();
              for (var J = 0, ne = s ? i[J].apply(this, Z) : V; ++J < s; )
                ne = i[J].call(this, ne);
              return ne;
            };
          });
        }
        function Yo(t, i, s, v, E, A, C, I, D, Z) {
          var V = i & B, J = i & g, ne = i & b, se = i & (x | P), pe = i & k, Se = ne ? n : Ai(t);
          function he() {
            for (var xe = arguments.length, Te = z(xe), Nt = xe; Nt--; )
              Te[Nt] = arguments[Nt];
            if (se)
              var Et = Yn(he), Dt = ay(Te, Et);
            if (v && (Te = Tc(Te, v, E, se)), A && (Te = Pc(Te, A, C, se)), xe -= Dt, se && xe < Z) {
              var Ge = Kr(Te, Et);
              return Nc(
                t,
                i,
                Yo,
                he.placeholder,
                s,
                Te,
                Ge,
                I,
                D,
                Z - xe
              );
            }
            var or = J ? s : this, Lr = ne ? or[t] : t;
            return xe = Te.length, I ? Te = h1(Te, I) : pe && xe > 1 && Te.reverse(), V && D < xe && (Te.length = D), this && this !== ft && this instanceof he && (Lr = Se || Ai(Lr)), Lr.apply(or, Te);
          }
          return he;
        }
        function Fc(t, i) {
          return function(s, v) {
            return E0(s, t, i(v), {});
          };
        }
        function Xo(t, i) {
          return function(s, v) {
            var E;
            if (s === n && v === n)
              return i;
            if (s !== n && (E = s), v !== n) {
              if (E === n)
                return v;
              typeof s == "string" || typeof v == "string" ? (s = Ft(s), v = Ft(v)) : (s = wc(s), v = wc(v)), E = t(s, v);
            }
            return E;
          };
        }
        function ru(t) {
          return Cr(function(i) {
            return i = We(i, Lt(ce())), _e(function(s) {
              var v = this;
              return t(i, function(E) {
                return It(E, v, s);
              });
            });
          });
        }
        function Jo(t, i) {
          i = i === n ? " " : Ft(i);
          var s = i.length;
          if (s < 2)
            return s ? Vs(i, t) : i;
          var v = Vs(i, ko(t / Bn(i)));
          return zn(i) ? Jr(rr(v), 0, t).join("") : v.slice(0, t);
        }
        function V0(t, i, s, v) {
          var E = i & g, A = Ai(t);
          function C() {
            for (var I = -1, D = arguments.length, Z = -1, V = v.length, J = z(V + D), ne = this && this !== ft && this instanceof C ? A : t; ++Z < V; )
              J[Z] = v[Z];
            for (; D--; )
              J[Z++] = arguments[++I];
            return It(ne, E ? s : this, J);
          }
          return C;
        }
        function $c(t) {
          return function(i, s, v) {
            return v && typeof v != "number" && St(i, s, v) && (s = v = n), i = Ir(i), s === n ? (s = i, i = 0) : s = Ir(s), v = v === n ? i < s ? 1 : -1 : Ir(v), F0(i, s, v, t);
          };
        }
        function Qo(t) {
          return function(i, s) {
            return typeof i == "string" && typeof s == "string" || (i = Gt(i), s = Gt(s)), t(i, s);
          };
        }
        function Nc(t, i, s, v, E, A, C, I, D, Z) {
          var V = i & x, J = V ? C : n, ne = V ? n : C, se = V ? A : n, pe = V ? n : A;
          i |= V ? T : M, i &= ~(V ? M : T), i & _ || (i &= -4);
          var Se = [
            t,
            i,
            E,
            se,
            J,
            pe,
            ne,
            I,
            D,
            Z
          ], he = s.apply(n, Se);
          return fu(t) && Gc(he, Se), he.placeholder = v, Vc(he, t, i);
        }
        function nu(t) {
          var i = Qe[t];
          return function(s, v) {
            if (s = Gt(s), v = v == null ? 0 : mt(be(v), 292), v && Vf(s)) {
              var E = (Re(s) + "e").split("e"), A = i(E[0] + "e" + (+E[1] + v));
              return E = (Re(A) + "e").split("e"), +(E[0] + "e" + (+E[1] - v));
            }
            return i(s);
          };
        }
        var Y0 = qn && 1 / Po(new qn([, -0]))[1] == G ? function(t) {
          return new qn(t);
        } : Ou;
        function Dc(t) {
          return function(i) {
            var s = gt(i);
            return s == at ? Ls(i) : s == vt ? py(i) : oy(i, t(i));
          };
        }
        function Pr(t, i, s, v, E, A, C, I) {
          var D = i & b;
          if (!D && typeof t != "function")
            throw new Ht(l);
          var Z = v ? v.length : 0;
          if (Z || (i &= -97, v = E = n), C = C === n ? C : et(be(C), 0), I = I === n ? I : be(I), Z -= E ? E.length : 0, i & M) {
            var V = v, J = E;
            v = E = n;
          }
          var ne = D ? n : au(t), se = [
            t,
            i,
            s,
            v,
            E,
            V,
            J,
            A,
            C,
            I
          ];
          if (ne && c1(se, ne), t = se[0], i = se[1], s = se[2], v = se[3], E = se[4], I = se[9] = se[9] === n ? D ? 0 : t.length : et(se[9] - Z, 0), !I && i & (x | P) && (i &= -25), !i || i == g)
            var pe = K0(t, i, s);
          else i == x || i == P ? pe = G0(t, i, I) : (i == T || i == (g | T)) && !E.length ? pe = V0(t, i, s, v) : pe = Yo.apply(n, se);
          var Se = ne ? gc : Gc;
          return Vc(Se(pe, se), t, i);
        }
        function kc(t, i, s, v) {
          return t === n || ir(t, jn[s]) && !Le.call(v, s) ? i : t;
        }
        function Wc(t, i, s, v, E, A) {
          return He(t) && He(i) && (A.set(i, t), Zo(t, i, n, Wc, A), A.delete(i)), t;
        }
        function X0(t) {
          return Ci(t) ? n : t;
        }
        function Uc(t, i, s, v, E, A) {
          var C = s & m, I = t.length, D = i.length;
          if (I != D && !(C && D > I))
            return false;
          var Z = A.get(t), V = A.get(i);
          if (Z && V)
            return Z == i && V == t;
          var J = -1, ne = true, se = s & c ? new mn() : n;
          for (A.set(t, i), A.set(i, t); ++J < I; ) {
            var pe = t[J], Se = i[J];
            if (v)
              var he = C ? v(Se, pe, J, i, t, A) : v(pe, Se, J, t, i, A);
            if (he !== n) {
              if (he)
                continue;
              ne = false;
              break;
            }
            if (se) {
              if (!Ts(i, function(xe, Te) {
                if (!vi(se, Te) && (pe === xe || E(pe, xe, s, v, A)))
                  return se.push(Te);
              })) {
                ne = false;
                break;
              }
            } else if (!(pe === Se || E(pe, Se, s, v, A))) {
              ne = false;
              break;
            }
          }
          return A.delete(t), A.delete(i), ne;
        }
        function J0(t, i, s, v, E, A, C) {
          switch (s) {
            case xr:
              if (t.byteLength != i.byteLength || t.byteOffset != i.byteOffset)
                return false;
              t = t.buffer, i = i.buffer;
            case jr:
              return !(t.byteLength != i.byteLength || !A(new Fo(t), new Fo(i)));
            case me:
            case Ee:
            case cr:
              return ir(+t, +i);
            case Be:
              return t.name == i.name && t.message == i.message;
            case Mt:
            case Br:
              return t == i + "";
            case at:
              var I = Ls;
            case vt:
              var D = v & m;
              if (I || (I = Po), t.size != i.size && !D)
                return false;
              var Z = C.get(t);
              if (Z)
                return Z == i;
              v |= c, C.set(t, i);
              var V = Uc(I(t), I(i), v, E, A, C);
              return C.delete(t), V;
            case dn:
              if (bi)
                return bi.call(t) == bi.call(i);
          }
          return false;
        }
        function Q0(t, i, s, v, E, A) {
          var C = s & m, I = iu(t), D = I.length, Z = iu(i), V = Z.length;
          if (D != V && !C)
            return false;
          for (var J = D; J--; ) {
            var ne = I[J];
            if (!(C ? ne in i : Le.call(i, ne)))
              return false;
          }
          var se = A.get(t), pe = A.get(i);
          if (se && pe)
            return se == i && pe == t;
          var Se = true;
          A.set(t, i), A.set(i, t);
          for (var he = C; ++J < D; ) {
            ne = I[J];
            var xe = t[ne], Te = i[ne];
            if (v)
              var Nt = C ? v(Te, xe, ne, i, t, A) : v(xe, Te, ne, t, i, A);
            if (!(Nt === n ? xe === Te || E(xe, Te, s, v, A) : Nt)) {
              Se = false;
              break;
            }
            he || (he = ne == "constructor");
          }
          if (Se && !he) {
            var Et = t.constructor, Dt = i.constructor;
            Et != Dt && "constructor" in t && "constructor" in i && !(typeof Et == "function" && Et instanceof Et && typeof Dt == "function" && Dt instanceof Dt) && (Se = false);
          }
          return A.delete(t), A.delete(i), Se;
        }
        function Cr(t) {
          return du(Zc(t, n, td), t + "");
        }
        function iu(t) {
          return ac(t, st, uu);
        }
        function ou(t) {
          return ac(t, At, zc);
        }
        var au = Uo ? function(t) {
          return Uo.get(t);
        } : Ou;
        function ea(t) {
          for (var i = t.name + "", s = Zn[i], v = Le.call(Zn, i) ? s.length : 0; v--; ) {
            var E = s[v], A = E.func;
            if (A == null || A == t)
              return E.name;
          }
          return i;
        }
        function Yn(t) {
          var i = Le.call(O, "placeholder") ? O : t;
          return i.placeholder;
        }
        function ce() {
          var t = O.iteratee || _u;
          return t = t === _u ? lc : t, arguments.length ? t(arguments[0], arguments[1]) : t;
        }
        function ta(t, i) {
          var s = t.__data__;
          return s1(i) ? s[typeof i == "string" ? "string" : "hash"] : s.map;
        }
        function su(t) {
          for (var i = st(t), s = i.length; s--; ) {
            var v = i[s], E = t[v];
            i[s] = [v, E, jc(E)];
          }
          return i;
        }
        function wn(t, i) {
          var s = fy(t, i);
          return uc(s) ? s : n;
        }
        function e1(t) {
          var i = Le.call(t, hn), s = t[hn];
          try {
            t[hn] = n;
            var v = true;
          } catch {
          }
          var E = Io.call(t);
          return v && (i ? t[hn] = s : delete t[hn]), E;
        }
        var uu = $s ? function(t) {
          return t == null ? [] : (t = $e(t), qr($s(t), function(i) {
            return Kf.call(t, i);
          }));
        } : Au, zc = $s ? function(t) {
          for (var i = []; t; )
            Zr(i, uu(t)), t = $o(t);
          return i;
        } : Au, gt = bt;
        (Ns && gt(new Ns(new ArrayBuffer(1))) != xr || gi && gt(new gi()) != at || Ds && gt(Ds.resolve()) != So || qn && gt(new qn()) != vt || yi && gt(new yi()) != Hr) && (gt = function(t) {
          var i = bt(t), s = i == Ut ? t.constructor : n, v = s ? bn(s) : "";
          if (v)
            switch (v) {
              case Ny:
                return xr;
              case Dy:
                return at;
              case ky:
                return So;
              case Wy:
                return vt;
              case Uy:
                return Hr;
            }
          return i;
        });
        function t1(t, i, s) {
          for (var v = -1, E = s.length; ++v < E; ) {
            var A = s[v], C = A.size;
            switch (A.type) {
              case "drop":
                t += C;
                break;
              case "dropRight":
                i -= C;
                break;
              case "take":
                i = mt(i, t + C);
                break;
              case "takeRight":
                t = et(t, i - C);
                break;
            }
          }
          return { start: t, end: i };
        }
        function r1(t) {
          var i = t.match(ug);
          return i ? i[1].split(lg) : [];
        }
        function Bc(t, i, s) {
          i = Xr(i, t);
          for (var v = -1, E = i.length, A = false; ++v < E; ) {
            var C = hr(i[v]);
            if (!(A = t != null && s(t, C)))
              break;
            t = t[C];
          }
          return A || ++v != E ? A : (E = t == null ? 0 : t.length, !!E && ua(E) && Rr(C, E) && (we(t) || Sn(t)));
        }
        function n1(t) {
          var i = t.length, s = new t.constructor(i);
          return i && typeof t[0] == "string" && Le.call(t, "index") && (s.index = t.index, s.input = t.input), s;
        }
        function Hc(t) {
          return typeof t.constructor == "function" && !Ti(t) ? Kn($o(t)) : {};
        }
        function i1(t, i, s) {
          var v = t.constructor;
          switch (i) {
            case jr:
              return tu(t);
            case me:
            case Ee:
              return new v(+t);
            case xr:
              return z0(t, s);
            case ss:
            case us:
            case ls:
            case fs:
            case cs:
            case ds:
            case ps:
            case hs:
            case vs:
              return Oc(t, s);
            case at:
              return new v();
            case cr:
            case Br:
              return new v(t);
            case Mt:
              return B0(t);
            case vt:
              return new v();
            case dn:
              return H0(t);
          }
        }
        function o1(t, i) {
          var s = i.length;
          if (!s)
            return t;
          var v = s - 1;
          return i[v] = (s > 1 ? "& " : "") + i[v], i = i.join(s > 2 ? ", " : " "), t.replace(sg, `{
/* [wrapped with ` + i + `] */
`);
        }
        function a1(t) {
          return we(t) || Sn(t) || !!(Gf && t && t[Gf]);
        }
        function Rr(t, i) {
          var s = typeof t;
          return i = i ?? ee, !!i && (s == "number" || s != "symbol" && yg.test(t)) && t > -1 && t % 1 == 0 && t < i;
        }
        function St(t, i, s) {
          if (!He(s))
            return false;
          var v = typeof i;
          return (v == "number" ? Ot(s) && Rr(i, s.length) : v == "string" && i in s) ? ir(s[i], t) : false;
        }
        function lu(t, i) {
          if (we(t))
            return false;
          var s = typeof t;
          return s == "number" || s == "symbol" || s == "boolean" || t == null || $t(t) ? true : ng.test(t) || !rg.test(t) || i != null && t in $e(i);
        }
        function s1(t) {
          var i = typeof t;
          return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? t !== "__proto__" : t === null;
        }
        function fu(t) {
          var i = ea(t), s = O[i];
          if (typeof s != "function" || !(i in Ae.prototype))
            return false;
          if (t === s)
            return true;
          var v = au(s);
          return !!v && t === v[0];
        }
        function u1(t) {
          return !!jf && jf in t;
        }
        var l1 = Ro ? Mr : Tu;
        function Ti(t) {
          var i = t && t.constructor, s = typeof i == "function" && i.prototype || jn;
          return t === s;
        }
        function jc(t) {
          return t === t && !He(t);
        }
        function qc(t, i) {
          return function(s) {
            return s == null ? false : s[t] === i && (i !== n || t in $e(s));
          };
        }
        function f1(t) {
          var i = aa(t, function(v) {
            return s.size === S && s.clear(), v;
          }), s = i.cache;
          return i;
        }
        function c1(t, i) {
          var s = t[1], v = i[1], E = s | v, A = E < (g | b | B), C = v == B && s == x || v == B && s == F && t[7].length <= i[8] || v == (B | F) && i[7].length <= i[8] && s == x;
          if (!(A || C))
            return t;
          v & g && (t[2] = i[2], E |= s & g ? 0 : _);
          var I = i[3];
          if (I) {
            var D = t[3];
            t[3] = D ? Tc(D, I, i[4]) : I, t[4] = D ? Kr(t[3], y) : i[4];
          }
          return I = i[5], I && (D = t[5], t[5] = D ? Pc(D, I, i[6]) : I, t[6] = D ? Kr(t[5], y) : i[6]), I = i[7], I && (t[7] = I), v & B && (t[8] = t[8] == null ? i[8] : mt(t[8], i[8])), t[9] == null && (t[9] = i[9]), t[0] = i[0], t[1] = E, t;
        }
        function d1(t) {
          var i = [];
          if (t != null)
            for (var s in $e(t))
              i.push(s);
          return i;
        }
        function p1(t) {
          return Io.call(t);
        }
        function Zc(t, i, s) {
          return i = et(i === n ? t.length - 1 : i, 0), function() {
            for (var v = arguments, E = -1, A = et(v.length - i, 0), C = z(A); ++E < A; )
              C[E] = v[i + E];
            E = -1;
            for (var I = z(i + 1); ++E < i; )
              I[E] = v[E];
            return I[i] = s(C), It(t, this, I);
          };
        }
        function Kc(t, i) {
          return i.length < 2 ? t : yn(t, Zt(i, 0, -1));
        }
        function h1(t, i) {
          for (var s = t.length, v = mt(i.length, s), E = xt(t); v--; ) {
            var A = i[v];
            t[v] = Rr(A, s) ? E[A] : n;
          }
          return t;
        }
        function cu(t, i) {
          if (!(i === "constructor" && typeof t[i] == "function") && i != "__proto__")
            return t[i];
        }
        var Gc = Yc(gc), Pi = Cy || function(t, i) {
          return ft.setTimeout(t, i);
        }, du = Yc(D0);
        function Vc(t, i, s) {
          var v = i + "";
          return du(t, o1(v, v1(r1(v), s)));
        }
        function Yc(t) {
          var i = 0, s = 0;
          return function() {
            var v = Ly(), E = U - (v - s);
            if (s = v, E > 0) {
              if (++i >= L)
                return arguments[0];
            } else
              i = 0;
            return t.apply(n, arguments);
          };
        }
        function ra(t, i) {
          var s = -1, v = t.length, E = v - 1;
          for (i = i === n ? v : i; ++s < i; ) {
            var A = Gs(s, E), C = t[A];
            t[A] = t[s], t[s] = C;
          }
          return t.length = i, t;
        }
        var Xc = f1(function(t) {
          var i = [];
          return t.charCodeAt(0) === 46 && i.push(""), t.replace(ig, function(s, v, E, A) {
            i.push(E ? A.replace(dg, "$1") : v || s);
          }), i;
        });
        function hr(t) {
          if (typeof t == "string" || $t(t))
            return t;
          var i = t + "";
          return i == "0" && 1 / t == -G ? "-0" : i;
        }
        function bn(t) {
          if (t != null) {
            try {
              return Mo.call(t);
            } catch {
            }
            try {
              return t + "";
            } catch {
            }
          }
          return "";
        }
        function v1(t, i) {
          return Bt(ie, function(s) {
            var v = "_." + s[0];
            i & s[1] && !Ao(t, v) && t.push(v);
          }), t.sort();
        }
        function Jc(t) {
          if (t instanceof Ae)
            return t.clone();
          var i = new jt(t.__wrapped__, t.__chain__);
          return i.__actions__ = xt(t.__actions__), i.__index__ = t.__index__, i.__values__ = t.__values__, i;
        }
        function m1(t, i, s) {
          (s ? St(t, i, s) : i === n) ? i = 1 : i = et(be(i), 0);
          var v = t == null ? 0 : t.length;
          if (!v || i < 1)
            return [];
          for (var E = 0, A = 0, C = z(ko(v / i)); E < v; )
            C[A++] = Zt(t, E, E += i);
          return C;
        }
        function g1(t) {
          for (var i = -1, s = t == null ? 0 : t.length, v = 0, E = []; ++i < s; ) {
            var A = t[i];
            A && (E[v++] = A);
          }
          return E;
        }
        function y1() {
          var t = arguments.length;
          if (!t)
            return [];
          for (var i = z(t - 1), s = arguments[0], v = t; v--; )
            i[v - 1] = arguments[v];
          return Zr(we(s) ? xt(s) : [s], ct(i, 1));
        }
        var w1 = _e(function(t, i) {
          return Ke(t) ? Ei(t, ct(i, 1, Ke, true)) : [];
        }), b1 = _e(function(t, i) {
          var s = Kt(i);
          return Ke(s) && (s = n), Ke(t) ? Ei(t, ct(i, 1, Ke, true), ce(s, 2)) : [];
        }), S1 = _e(function(t, i) {
          var s = Kt(i);
          return Ke(s) && (s = n), Ke(t) ? Ei(t, ct(i, 1, Ke, true), n, s) : [];
        });
        function E1(t, i, s) {
          var v = t == null ? 0 : t.length;
          return v ? (i = s || i === n ? 1 : be(i), Zt(t, i < 0 ? 0 : i, v)) : [];
        }
        function _1(t, i, s) {
          var v = t == null ? 0 : t.length;
          return v ? (i = s || i === n ? 1 : be(i), i = v - i, Zt(t, 0, i < 0 ? 0 : i)) : [];
        }
        function x1(t, i) {
          return t && t.length ? Go(t, ce(i, 3), true, true) : [];
        }
        function O1(t, i) {
          return t && t.length ? Go(t, ce(i, 3), true) : [];
        }
        function A1(t, i, s, v) {
          var E = t == null ? 0 : t.length;
          return E ? (s && typeof s != "number" && St(t, i, s) && (s = 0, v = E), y0(t, i, s, v)) : [];
        }
        function Qc(t, i, s) {
          var v = t == null ? 0 : t.length;
          if (!v)
            return -1;
          var E = s == null ? 0 : be(s);
          return E < 0 && (E = et(v + E, 0)), To(t, ce(i, 3), E);
        }
        function ed(t, i, s) {
          var v = t == null ? 0 : t.length;
          if (!v)
            return -1;
          var E = v - 1;
          return s !== n && (E = be(s), E = s < 0 ? et(v + E, 0) : mt(E, v - 1)), To(t, ce(i, 3), E, true);
        }
        function td(t) {
          var i = t == null ? 0 : t.length;
          return i ? ct(t, 1) : [];
        }
        function T1(t) {
          var i = t == null ? 0 : t.length;
          return i ? ct(t, G) : [];
        }
        function P1(t, i) {
          var s = t == null ? 0 : t.length;
          return s ? (i = i === n ? 1 : be(i), ct(t, i)) : [];
        }
        function C1(t) {
          for (var i = -1, s = t == null ? 0 : t.length, v = {}; ++i < s; ) {
            var E = t[i];
            v[E[0]] = E[1];
          }
          return v;
        }
        function rd(t) {
          return t && t.length ? t[0] : n;
        }
        function R1(t, i, s) {
          var v = t == null ? 0 : t.length;
          if (!v)
            return -1;
          var E = s == null ? 0 : be(s);
          return E < 0 && (E = et(v + E, 0)), Un(t, i, E);
        }
        function M1(t) {
          var i = t == null ? 0 : t.length;
          return i ? Zt(t, 0, -1) : [];
        }
        var I1 = _e(function(t) {
          var i = We(t, Qs);
          return i.length && i[0] === t[0] ? Hs(i) : [];
        }), L1 = _e(function(t) {
          var i = Kt(t), s = We(t, Qs);
          return i === Kt(s) ? i = n : s.pop(), s.length && s[0] === t[0] ? Hs(s, ce(i, 2)) : [];
        }), F1 = _e(function(t) {
          var i = Kt(t), s = We(t, Qs);
          return i = typeof i == "function" ? i : n, i && s.pop(), s.length && s[0] === t[0] ? Hs(s, n, i) : [];
        });
        function $1(t, i) {
          return t == null ? "" : My.call(t, i);
        }
        function Kt(t) {
          var i = t == null ? 0 : t.length;
          return i ? t[i - 1] : n;
        }
        function N1(t, i, s) {
          var v = t == null ? 0 : t.length;
          if (!v)
            return -1;
          var E = v;
          return s !== n && (E = be(s), E = E < 0 ? et(v + E, 0) : mt(E, v - 1)), i === i ? vy(t, i, E) : To(t, Nf, E, true);
        }
        function D1(t, i) {
          return t && t.length ? pc(t, be(i)) : n;
        }
        var k1 = _e(nd);
        function nd(t, i) {
          return t && t.length && i && i.length ? Ks(t, i) : t;
        }
        function W1(t, i, s) {
          return t && t.length && i && i.length ? Ks(t, i, ce(s, 2)) : t;
        }
        function U1(t, i, s) {
          return t && t.length && i && i.length ? Ks(t, i, n, s) : t;
        }
        var z1 = Cr(function(t, i) {
          var s = t == null ? 0 : t.length, v = Ws(t, i);
          return mc(t, We(i, function(E) {
            return Rr(E, s) ? +E : E;
          }).sort(Ac)), v;
        });
        function B1(t, i) {
          var s = [];
          if (!(t && t.length))
            return s;
          var v = -1, E = [], A = t.length;
          for (i = ce(i, 3); ++v < A; ) {
            var C = t[v];
            i(C, v, t) && (s.push(C), E.push(v));
          }
          return mc(t, E), s;
        }
        function pu(t) {
          return t == null ? t : $y.call(t);
        }
        function H1(t, i, s) {
          var v = t == null ? 0 : t.length;
          return v ? (s && typeof s != "number" && St(t, i, s) ? (i = 0, s = v) : (i = i == null ? 0 : be(i), s = s === n ? v : be(s)), Zt(t, i, s)) : [];
        }
        function j1(t, i) {
          return Ko(t, i);
        }
        function q1(t, i, s) {
          return Ys(t, i, ce(s, 2));
        }
        function Z1(t, i) {
          var s = t == null ? 0 : t.length;
          if (s) {
            var v = Ko(t, i);
            if (v < s && ir(t[v], i))
              return v;
          }
          return -1;
        }
        function K1(t, i) {
          return Ko(t, i, true);
        }
        function G1(t, i, s) {
          return Ys(t, i, ce(s, 2), true);
        }
        function V1(t, i) {
          var s = t == null ? 0 : t.length;
          if (s) {
            var v = Ko(t, i, true) - 1;
            if (ir(t[v], i))
              return v;
          }
          return -1;
        }
        function Y1(t) {
          return t && t.length ? yc(t) : [];
        }
        function X1(t, i) {
          return t && t.length ? yc(t, ce(i, 2)) : [];
        }
        function J1(t) {
          var i = t == null ? 0 : t.length;
          return i ? Zt(t, 1, i) : [];
        }
        function Q1(t, i, s) {
          return t && t.length ? (i = s || i === n ? 1 : be(i), Zt(t, 0, i < 0 ? 0 : i)) : [];
        }
        function ew(t, i, s) {
          var v = t == null ? 0 : t.length;
          return v ? (i = s || i === n ? 1 : be(i), i = v - i, Zt(t, i < 0 ? 0 : i, v)) : [];
        }
        function tw(t, i) {
          return t && t.length ? Go(t, ce(i, 3), false, true) : [];
        }
        function rw(t, i) {
          return t && t.length ? Go(t, ce(i, 3)) : [];
        }
        var nw = _e(function(t) {
          return Yr(ct(t, 1, Ke, true));
        }), iw = _e(function(t) {
          var i = Kt(t);
          return Ke(i) && (i = n), Yr(ct(t, 1, Ke, true), ce(i, 2));
        }), ow = _e(function(t) {
          var i = Kt(t);
          return i = typeof i == "function" ? i : n, Yr(ct(t, 1, Ke, true), n, i);
        });
        function aw(t) {
          return t && t.length ? Yr(t) : [];
        }
        function sw(t, i) {
          return t && t.length ? Yr(t, ce(i, 2)) : [];
        }
        function uw(t, i) {
          return i = typeof i == "function" ? i : n, t && t.length ? Yr(t, n, i) : [];
        }
        function hu(t) {
          if (!(t && t.length))
            return [];
          var i = 0;
          return t = qr(t, function(s) {
            if (Ke(s))
              return i = et(s.length, i), true;
          }), Ms(i, function(s) {
            return We(t, Ps(s));
          });
        }
        function id(t, i) {
          if (!(t && t.length))
            return [];
          var s = hu(t);
          return i == null ? s : We(s, function(v) {
            return It(i, n, v);
          });
        }
        var lw = _e(function(t, i) {
          return Ke(t) ? Ei(t, i) : [];
        }), fw = _e(function(t) {
          return Js(qr(t, Ke));
        }), cw = _e(function(t) {
          var i = Kt(t);
          return Ke(i) && (i = n), Js(qr(t, Ke), ce(i, 2));
        }), dw = _e(function(t) {
          var i = Kt(t);
          return i = typeof i == "function" ? i : n, Js(qr(t, Ke), n, i);
        }), pw = _e(hu);
        function hw(t, i) {
          return Ec(t || [], i || [], Si);
        }
        function vw(t, i) {
          return Ec(t || [], i || [], Oi);
        }
        var mw = _e(function(t) {
          var i = t.length, s = i > 1 ? t[i - 1] : n;
          return s = typeof s == "function" ? (t.pop(), s) : n, id(t, s);
        });
        function od(t) {
          var i = O(t);
          return i.__chain__ = true, i;
        }
        function gw(t, i) {
          return i(t), t;
        }
        function na(t, i) {
          return i(t);
        }
        var yw = Cr(function(t) {
          var i = t.length, s = i ? t[0] : 0, v = this.__wrapped__, E = function(A) {
            return Ws(A, t);
          };
          return i > 1 || this.__actions__.length || !(v instanceof Ae) || !Rr(s) ? this.thru(E) : (v = v.slice(s, +s + (i ? 1 : 0)), v.__actions__.push({
            func: na,
            args: [E],
            thisArg: n
          }), new jt(v, this.__chain__).thru(function(A) {
            return i && !A.length && A.push(n), A;
          }));
        });
        function ww() {
          return od(this);
        }
        function bw() {
          return new jt(this.value(), this.__chain__);
        }
        function Sw() {
          this.__values__ === n && (this.__values__ = wd(this.value()));
          var t = this.__index__ >= this.__values__.length, i = t ? n : this.__values__[this.__index__++];
          return { done: t, value: i };
        }
        function Ew() {
          return this;
        }
        function _w(t) {
          for (var i, s = this; s instanceof Bo; ) {
            var v = Jc(s);
            v.__index__ = 0, v.__values__ = n, i ? E.__wrapped__ = v : i = v;
            var E = v;
            s = s.__wrapped__;
          }
          return E.__wrapped__ = t, i;
        }
        function xw() {
          var t = this.__wrapped__;
          if (t instanceof Ae) {
            var i = t;
            return this.__actions__.length && (i = new Ae(this)), i = i.reverse(), i.__actions__.push({
              func: na,
              args: [pu],
              thisArg: n
            }), new jt(i, this.__chain__);
          }
          return this.thru(pu);
        }
        function Ow() {
          return Sc(this.__wrapped__, this.__actions__);
        }
        var Aw = Vo(function(t, i, s) {
          Le.call(t, s) ? ++t[s] : Tr(t, s, 1);
        });
        function Tw(t, i, s) {
          var v = we(t) ? Ff : g0;
          return s && St(t, i, s) && (i = n), v(t, ce(i, 3));
        }
        function Pw(t, i) {
          var s = we(t) ? qr : ic;
          return s(t, ce(i, 3));
        }
        var Cw = Ic(Qc), Rw = Ic(ed);
        function Mw(t, i) {
          return ct(ia(t, i), 1);
        }
        function Iw(t, i) {
          return ct(ia(t, i), G);
        }
        function Lw(t, i, s) {
          return s = s === n ? 1 : be(s), ct(ia(t, i), s);
        }
        function ad(t, i) {
          var s = we(t) ? Bt : Vr;
          return s(t, ce(i, 3));
        }
        function sd(t, i) {
          var s = we(t) ? Jg : nc;
          return s(t, ce(i, 3));
        }
        var Fw = Vo(function(t, i, s) {
          Le.call(t, s) ? t[s].push(i) : Tr(t, s, [i]);
        });
        function $w(t, i, s, v) {
          t = Ot(t) ? t : Jn(t), s = s && !v ? be(s) : 0;
          var E = t.length;
          return s < 0 && (s = et(E + s, 0)), la(t) ? s <= E && t.indexOf(i, s) > -1 : !!E && Un(t, i, s) > -1;
        }
        var Nw = _e(function(t, i, s) {
          var v = -1, E = typeof i == "function", A = Ot(t) ? z(t.length) : [];
          return Vr(t, function(C) {
            A[++v] = E ? It(i, C, s) : _i(C, i, s);
          }), A;
        }), Dw = Vo(function(t, i, s) {
          Tr(t, s, i);
        });
        function ia(t, i) {
          var s = we(t) ? We : fc;
          return s(t, ce(i, 3));
        }
        function kw(t, i, s, v) {
          return t == null ? [] : (we(i) || (i = i == null ? [] : [i]), s = v ? n : s, we(s) || (s = s == null ? [] : [s]), hc(t, i, s));
        }
        var Ww = Vo(function(t, i, s) {
          t[s ? 0 : 1].push(i);
        }, function() {
          return [[], []];
        });
        function Uw(t, i, s) {
          var v = we(t) ? As : kf, E = arguments.length < 3;
          return v(t, ce(i, 4), s, E, Vr);
        }
        function zw(t, i, s) {
          var v = we(t) ? Qg : kf, E = arguments.length < 3;
          return v(t, ce(i, 4), s, E, nc);
        }
        function Bw(t, i) {
          var s = we(t) ? qr : ic;
          return s(t, sa(ce(i, 3)));
        }
        function Hw(t) {
          var i = we(t) ? Qf : $0;
          return i(t);
        }
        function jw(t, i, s) {
          (s ? St(t, i, s) : i === n) ? i = 1 : i = be(i);
          var v = we(t) ? d0 : N0;
          return v(t, i);
        }
        function qw(t) {
          var i = we(t) ? p0 : k0;
          return i(t);
        }
        function Zw(t) {
          if (t == null)
            return 0;
          if (Ot(t))
            return la(t) ? Bn(t) : t.length;
          var i = gt(t);
          return i == at || i == vt ? t.size : qs(t).length;
        }
        function Kw(t, i, s) {
          var v = we(t) ? Ts : W0;
          return s && St(t, i, s) && (i = n), v(t, ce(i, 3));
        }
        var Gw = _e(function(t, i) {
          if (t == null)
            return [];
          var s = i.length;
          return s > 1 && St(t, i[0], i[1]) ? i = [] : s > 2 && St(i[0], i[1], i[2]) && (i = [i[0]]), hc(t, ct(i, 1), []);
        }), oa = Py || function() {
          return ft.Date.now();
        };
        function Vw(t, i) {
          if (typeof i != "function")
            throw new Ht(l);
          return t = be(t), function() {
            if (--t < 1)
              return i.apply(this, arguments);
          };
        }
        function ud(t, i, s) {
          return i = s ? n : i, i = t && i == null ? t.length : i, Pr(t, B, n, n, n, n, i);
        }
        function ld(t, i) {
          var s;
          if (typeof i != "function")
            throw new Ht(l);
          return t = be(t), function() {
            return --t > 0 && (s = i.apply(this, arguments)), t <= 1 && (i = n), s;
          };
        }
        var vu = _e(function(t, i, s) {
          var v = g;
          if (s.length) {
            var E = Kr(s, Yn(vu));
            v |= T;
          }
          return Pr(t, v, i, s, E);
        }), fd = _e(function(t, i, s) {
          var v = g | b;
          if (s.length) {
            var E = Kr(s, Yn(fd));
            v |= T;
          }
          return Pr(i, v, t, s, E);
        });
        function cd(t, i, s) {
          i = s ? n : i;
          var v = Pr(t, x, n, n, n, n, n, i);
          return v.placeholder = cd.placeholder, v;
        }
        function dd(t, i, s) {
          i = s ? n : i;
          var v = Pr(t, P, n, n, n, n, n, i);
          return v.placeholder = dd.placeholder, v;
        }
        function pd(t, i, s) {
          var v, E, A, C, I, D, Z = 0, V = false, J = false, ne = true;
          if (typeof t != "function")
            throw new Ht(l);
          i = Gt(i) || 0, He(s) && (V = !!s.leading, J = "maxWait" in s, A = J ? et(Gt(s.maxWait) || 0, i) : A, ne = "trailing" in s ? !!s.trailing : ne);
          function se(Ge) {
            var or = v, Lr = E;
            return v = E = n, Z = Ge, C = t.apply(Lr, or), C;
          }
          function pe(Ge) {
            return Z = Ge, I = Pi(xe, i), V ? se(Ge) : C;
          }
          function Se(Ge) {
            var or = Ge - D, Lr = Ge - Z, Id = i - or;
            return J ? mt(Id, A - Lr) : Id;
          }
          function he(Ge) {
            var or = Ge - D, Lr = Ge - Z;
            return D === n || or >= i || or < 0 || J && Lr >= A;
          }
          function xe() {
            var Ge = oa();
            if (he(Ge))
              return Te(Ge);
            I = Pi(xe, Se(Ge));
          }
          function Te(Ge) {
            return I = n, ne && v ? se(Ge) : (v = E = n, C);
          }
          function Nt() {
            I !== n && _c(I), Z = 0, v = D = E = I = n;
          }
          function Et() {
            return I === n ? C : Te(oa());
          }
          function Dt() {
            var Ge = oa(), or = he(Ge);
            if (v = arguments, E = this, D = Ge, or) {
              if (I === n)
                return pe(D);
              if (J)
                return _c(I), I = Pi(xe, i), se(D);
            }
            return I === n && (I = Pi(xe, i)), C;
          }
          return Dt.cancel = Nt, Dt.flush = Et, Dt;
        }
        var Yw = _e(function(t, i) {
          return rc(t, 1, i);
        }), Xw = _e(function(t, i, s) {
          return rc(t, Gt(i) || 0, s);
        });
        function Jw(t) {
          return Pr(t, k);
        }
        function aa(t, i) {
          if (typeof t != "function" || i != null && typeof i != "function")
            throw new Ht(l);
          var s = function() {
            var v = arguments, E = i ? i.apply(this, v) : v[0], A = s.cache;
            if (A.has(E))
              return A.get(E);
            var C = t.apply(this, v);
            return s.cache = A.set(E, C) || A, C;
          };
          return s.cache = new (aa.Cache || Ar)(), s;
        }
        aa.Cache = Ar;
        function sa(t) {
          if (typeof t != "function")
            throw new Ht(l);
          return function() {
            var i = arguments;
            switch (i.length) {
              case 0:
                return !t.call(this);
              case 1:
                return !t.call(this, i[0]);
              case 2:
                return !t.call(this, i[0], i[1]);
              case 3:
                return !t.call(this, i[0], i[1], i[2]);
            }
            return !t.apply(this, i);
          };
        }
        function Qw(t) {
          return ld(2, t);
        }
        var eb = U0(function(t, i) {
          i = i.length == 1 && we(i[0]) ? We(i[0], Lt(ce())) : We(ct(i, 1), Lt(ce()));
          var s = i.length;
          return _e(function(v) {
            for (var E = -1, A = mt(v.length, s); ++E < A; )
              v[E] = i[E].call(this, v[E]);
            return It(t, this, v);
          });
        }), mu = _e(function(t, i) {
          var s = Kr(i, Yn(mu));
          return Pr(t, T, n, i, s);
        }), hd = _e(function(t, i) {
          var s = Kr(i, Yn(hd));
          return Pr(t, M, n, i, s);
        }), tb = Cr(function(t, i) {
          return Pr(t, F, n, n, n, i);
        });
        function rb(t, i) {
          if (typeof t != "function")
            throw new Ht(l);
          return i = i === n ? i : be(i), _e(t, i);
        }
        function nb(t, i) {
          if (typeof t != "function")
            throw new Ht(l);
          return i = i == null ? 0 : et(be(i), 0), _e(function(s) {
            var v = s[i], E = Jr(s, 0, i);
            return v && Zr(E, v), It(t, this, E);
          });
        }
        function ib(t, i, s) {
          var v = true, E = true;
          if (typeof t != "function")
            throw new Ht(l);
          return He(s) && (v = "leading" in s ? !!s.leading : v, E = "trailing" in s ? !!s.trailing : E), pd(t, i, {
            leading: v,
            maxWait: i,
            trailing: E
          });
        }
        function ob(t) {
          return ud(t, 1);
        }
        function ab(t, i) {
          return mu(eu(i), t);
        }
        function sb() {
          if (!arguments.length)
            return [];
          var t = arguments[0];
          return we(t) ? t : [t];
        }
        function ub(t) {
          return qt(t, p);
        }
        function lb(t, i) {
          return i = typeof i == "function" ? i : n, qt(t, p, i);
        }
        function fb(t) {
          return qt(t, h | p);
        }
        function cb(t, i) {
          return i = typeof i == "function" ? i : n, qt(t, h | p, i);
        }
        function db(t, i) {
          return i == null || tc(t, i, st(i));
        }
        function ir(t, i) {
          return t === i || t !== t && i !== i;
        }
        var pb = Qo(Bs), hb = Qo(function(t, i) {
          return t >= i;
        }), Sn = sc(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? sc : function(t) {
          return Ze(t) && Le.call(t, "callee") && !Kf.call(t, "callee");
        }, we = z.isArray, vb = Pf ? Lt(Pf) : _0;
        function Ot(t) {
          return t != null && ua(t.length) && !Mr(t);
        }
        function Ke(t) {
          return Ze(t) && Ot(t);
        }
        function mb(t) {
          return t === true || t === false || Ze(t) && bt(t) == me;
        }
        var Qr = Ry || Tu, gb = Cf ? Lt(Cf) : x0;
        function yb(t) {
          return Ze(t) && t.nodeType === 1 && !Ci(t);
        }
        function wb(t) {
          if (t == null)
            return true;
          if (Ot(t) && (we(t) || typeof t == "string" || typeof t.splice == "function" || Qr(t) || Xn(t) || Sn(t)))
            return !t.length;
          var i = gt(t);
          if (i == at || i == vt)
            return !t.size;
          if (Ti(t))
            return !qs(t).length;
          for (var s in t)
            if (Le.call(t, s))
              return false;
          return true;
        }
        function bb(t, i) {
          return xi(t, i);
        }
        function Sb(t, i, s) {
          s = typeof s == "function" ? s : n;
          var v = s ? s(t, i) : n;
          return v === n ? xi(t, i, n, s) : !!v;
        }
        function gu(t) {
          if (!Ze(t))
            return false;
          var i = bt(t);
          return i == Be || i == Oe || typeof t.message == "string" && typeof t.name == "string" && !Ci(t);
        }
        function Eb(t) {
          return typeof t == "number" && Vf(t);
        }
        function Mr(t) {
          if (!He(t))
            return false;
          var i = bt(t);
          return i == re || i == ht || i == ge || i == as;
        }
        function vd(t) {
          return typeof t == "number" && t == be(t);
        }
        function ua(t) {
          return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ee;
        }
        function He(t) {
          var i = typeof t;
          return t != null && (i == "object" || i == "function");
        }
        function Ze(t) {
          return t != null && typeof t == "object";
        }
        var md = Rf ? Lt(Rf) : A0;
        function _b(t, i) {
          return t === i || js(t, i, su(i));
        }
        function xb(t, i, s) {
          return s = typeof s == "function" ? s : n, js(t, i, su(i), s);
        }
        function Ob(t) {
          return gd(t) && t != +t;
        }
        function Ab(t) {
          if (l1(t))
            throw new ye(u);
          return uc(t);
        }
        function Tb(t) {
          return t === null;
        }
        function Pb(t) {
          return t == null;
        }
        function gd(t) {
          return typeof t == "number" || Ze(t) && bt(t) == cr;
        }
        function Ci(t) {
          if (!Ze(t) || bt(t) != Ut)
            return false;
          var i = $o(t);
          if (i === null)
            return true;
          var s = Le.call(i, "constructor") && i.constructor;
          return typeof s == "function" && s instanceof s && Mo.call(s) == xy;
        }
        var yu = Mf ? Lt(Mf) : T0;
        function Cb(t) {
          return vd(t) && t >= -ee && t <= ee;
        }
        var yd = If ? Lt(If) : P0;
        function la(t) {
          return typeof t == "string" || !we(t) && Ze(t) && bt(t) == Br;
        }
        function $t(t) {
          return typeof t == "symbol" || Ze(t) && bt(t) == dn;
        }
        var Xn = Lf ? Lt(Lf) : C0;
        function Rb(t) {
          return t === n;
        }
        function Mb(t) {
          return Ze(t) && gt(t) == Hr;
        }
        function Ib(t) {
          return Ze(t) && bt(t) == Eo;
        }
        var Lb = Qo(Zs), Fb = Qo(function(t, i) {
          return t <= i;
        });
        function wd(t) {
          if (!t)
            return [];
          if (Ot(t))
            return la(t) ? rr(t) : xt(t);
          if (mi && t[mi])
            return dy(t[mi]());
          var i = gt(t), s = i == at ? Ls : i == vt ? Po : Jn;
          return s(t);
        }
        function Ir(t) {
          if (!t)
            return t === 0 ? t : 0;
          if (t = Gt(t), t === G || t === -G) {
            var i = t < 0 ? -1 : 1;
            return i * ue;
          }
          return t === t ? t : 0;
        }
        function be(t) {
          var i = Ir(t), s = i % 1;
          return i === i ? s ? i - s : i : 0;
        }
        function bd(t) {
          return t ? gn(be(t), 0, Q) : 0;
        }
        function Gt(t) {
          if (typeof t == "number")
            return t;
          if ($t(t))
            return j;
          if (He(t)) {
            var i = typeof t.valueOf == "function" ? t.valueOf() : t;
            t = He(i) ? i + "" : i;
          }
          if (typeof t != "string")
            return t === 0 ? t : +t;
          t = Wf(t);
          var s = vg.test(t);
          return s || gg.test(t) ? Vg(t.slice(2), s ? 2 : 8) : hg.test(t) ? j : +t;
        }
        function Sd(t) {
          return pr(t, At(t));
        }
        function $b(t) {
          return t ? gn(be(t), -ee, ee) : t === 0 ? t : 0;
        }
        function Re(t) {
          return t == null ? "" : Ft(t);
        }
        var Nb = Gn(function(t, i) {
          if (Ti(i) || Ot(i)) {
            pr(i, st(i), t);
            return;
          }
          for (var s in i)
            Le.call(i, s) && Si(t, s, i[s]);
        }), Ed = Gn(function(t, i) {
          pr(i, At(i), t);
        }), fa = Gn(function(t, i, s, v) {
          pr(i, At(i), t, v);
        }), Db = Gn(function(t, i, s, v) {
          pr(i, st(i), t, v);
        }), kb = Cr(Ws);
        function Wb(t, i) {
          var s = Kn(t);
          return i == null ? s : ec(s, i);
        }
        var Ub = _e(function(t, i) {
          t = $e(t);
          var s = -1, v = i.length, E = v > 2 ? i[2] : n;
          for (E && St(i[0], i[1], E) && (v = 1); ++s < v; )
            for (var A = i[s], C = At(A), I = -1, D = C.length; ++I < D; ) {
              var Z = C[I], V = t[Z];
              (V === n || ir(V, jn[Z]) && !Le.call(t, Z)) && (t[Z] = A[Z]);
            }
          return t;
        }), zb = _e(function(t) {
          return t.push(n, Wc), It(_d, n, t);
        });
        function Bb(t, i) {
          return $f(t, ce(i, 3), dr);
        }
        function Hb(t, i) {
          return $f(t, ce(i, 3), zs);
        }
        function jb(t, i) {
          return t == null ? t : Us(t, ce(i, 3), At);
        }
        function qb(t, i) {
          return t == null ? t : oc(t, ce(i, 3), At);
        }
        function Zb(t, i) {
          return t && dr(t, ce(i, 3));
        }
        function Kb(t, i) {
          return t && zs(t, ce(i, 3));
        }
        function Gb(t) {
          return t == null ? [] : qo(t, st(t));
        }
        function Vb(t) {
          return t == null ? [] : qo(t, At(t));
        }
        function wu(t, i, s) {
          var v = t == null ? n : yn(t, i);
          return v === n ? s : v;
        }
        function Yb(t, i) {
          return t != null && Bc(t, i, w0);
        }
        function bu(t, i) {
          return t != null && Bc(t, i, b0);
        }
        var Xb = Fc(function(t, i, s) {
          i != null && typeof i.toString != "function" && (i = Io.call(i)), t[i] = s;
        }, Eu(Tt)), Jb = Fc(function(t, i, s) {
          i != null && typeof i.toString != "function" && (i = Io.call(i)), Le.call(t, i) ? t[i].push(s) : t[i] = [s];
        }, ce), Qb = _e(_i);
        function st(t) {
          return Ot(t) ? Jf(t) : qs(t);
        }
        function At(t) {
          return Ot(t) ? Jf(t, true) : R0(t);
        }
        function eS(t, i) {
          var s = {};
          return i = ce(i, 3), dr(t, function(v, E, A) {
            Tr(s, i(v, E, A), v);
          }), s;
        }
        function tS(t, i) {
          var s = {};
          return i = ce(i, 3), dr(t, function(v, E, A) {
            Tr(s, E, i(v, E, A));
          }), s;
        }
        var rS = Gn(function(t, i, s) {
          Zo(t, i, s);
        }), _d = Gn(function(t, i, s, v) {
          Zo(t, i, s, v);
        }), nS = Cr(function(t, i) {
          var s = {};
          if (t == null)
            return s;
          var v = false;
          i = We(i, function(A) {
            return A = Xr(A, t), v || (v = A.length > 1), A;
          }), pr(t, ou(t), s), v && (s = qt(s, h | f | p, X0));
          for (var E = i.length; E--; )
            Xs(s, i[E]);
          return s;
        });
        function iS(t, i) {
          return xd(t, sa(ce(i)));
        }
        var oS = Cr(function(t, i) {
          return t == null ? {} : I0(t, i);
        });
        function xd(t, i) {
          if (t == null)
            return {};
          var s = We(ou(t), function(v) {
            return [v];
          });
          return i = ce(i), vc(t, s, function(v, E) {
            return i(v, E[0]);
          });
        }
        function aS(t, i, s) {
          i = Xr(i, t);
          var v = -1, E = i.length;
          for (E || (E = 1, t = n); ++v < E; ) {
            var A = t == null ? n : t[hr(i[v])];
            A === n && (v = E, A = s), t = Mr(A) ? A.call(t) : A;
          }
          return t;
        }
        function sS(t, i, s) {
          return t == null ? t : Oi(t, i, s);
        }
        function uS(t, i, s, v) {
          return v = typeof v == "function" ? v : n, t == null ? t : Oi(t, i, s, v);
        }
        var Od = Dc(st), Ad = Dc(At);
        function lS(t, i, s) {
          var v = we(t), E = v || Qr(t) || Xn(t);
          if (i = ce(i, 4), s == null) {
            var A = t && t.constructor;
            E ? s = v ? new A() : [] : He(t) ? s = Mr(A) ? Kn($o(t)) : {} : s = {};
          }
          return (E ? Bt : dr)(t, function(C, I, D) {
            return i(s, C, I, D);
          }), s;
        }
        function fS(t, i) {
          return t == null ? true : Xs(t, i);
        }
        function cS(t, i, s) {
          return t == null ? t : bc(t, i, eu(s));
        }
        function dS(t, i, s, v) {
          return v = typeof v == "function" ? v : n, t == null ? t : bc(t, i, eu(s), v);
        }
        function Jn(t) {
          return t == null ? [] : Is(t, st(t));
        }
        function pS(t) {
          return t == null ? [] : Is(t, At(t));
        }
        function hS(t, i, s) {
          return s === n && (s = i, i = n), s !== n && (s = Gt(s), s = s === s ? s : 0), i !== n && (i = Gt(i), i = i === i ? i : 0), gn(Gt(t), i, s);
        }
        function vS(t, i, s) {
          return i = Ir(i), s === n ? (s = i, i = 0) : s = Ir(s), t = Gt(t), S0(t, i, s);
        }
        function mS(t, i, s) {
          if (s && typeof s != "boolean" && St(t, i, s) && (i = s = n), s === n && (typeof i == "boolean" ? (s = i, i = n) : typeof t == "boolean" && (s = t, t = n)), t === n && i === n ? (t = 0, i = 1) : (t = Ir(t), i === n ? (i = t, t = 0) : i = Ir(i)), t > i) {
            var v = t;
            t = i, i = v;
          }
          if (s || t % 1 || i % 1) {
            var E = Yf();
            return mt(t + E * (i - t + Gg("1e-" + ((E + "").length - 1))), i);
          }
          return Gs(t, i);
        }
        var gS = Vn(function(t, i, s) {
          return i = i.toLowerCase(), t + (s ? Td(i) : i);
        });
        function Td(t) {
          return Su(Re(t).toLowerCase());
        }
        function Pd(t) {
          return t = Re(t), t && t.replace(wg, sy).replace(kg, "");
        }
        function yS(t, i, s) {
          t = Re(t), i = Ft(i);
          var v = t.length;
          s = s === n ? v : gn(be(s), 0, v);
          var E = s;
          return s -= i.length, s >= 0 && t.slice(s, E) == i;
        }
        function wS(t) {
          return t = Re(t), t && Qm.test(t) ? t.replace(of, uy) : t;
        }
        function bS(t) {
          return t = Re(t), t && og.test(t) ? t.replace(ms, "\\$&") : t;
        }
        var SS = Vn(function(t, i, s) {
          return t + (s ? "-" : "") + i.toLowerCase();
        }), ES = Vn(function(t, i, s) {
          return t + (s ? " " : "") + i.toLowerCase();
        }), _S = Mc("toLowerCase");
        function xS(t, i, s) {
          t = Re(t), i = be(i);
          var v = i ? Bn(t) : 0;
          if (!i || v >= i)
            return t;
          var E = (i - v) / 2;
          return Jo(Wo(E), s) + t + Jo(ko(E), s);
        }
        function OS(t, i, s) {
          t = Re(t), i = be(i);
          var v = i ? Bn(t) : 0;
          return i && v < i ? t + Jo(i - v, s) : t;
        }
        function AS(t, i, s) {
          t = Re(t), i = be(i);
          var v = i ? Bn(t) : 0;
          return i && v < i ? Jo(i - v, s) + t : t;
        }
        function TS(t, i, s) {
          return s || i == null ? i = 0 : i && (i = +i), Fy(Re(t).replace(gs, ""), i || 0);
        }
        function PS(t, i, s) {
          return (s ? St(t, i, s) : i === n) ? i = 1 : i = be(i), Vs(Re(t), i);
        }
        function CS() {
          var t = arguments, i = Re(t[0]);
          return t.length < 3 ? i : i.replace(t[1], t[2]);
        }
        var RS = Vn(function(t, i, s) {
          return t + (s ? "_" : "") + i.toLowerCase();
        });
        function MS(t, i, s) {
          return s && typeof s != "number" && St(t, i, s) && (i = s = n), s = s === n ? Q : s >>> 0, s ? (t = Re(t), t && (typeof i == "string" || i != null && !yu(i)) && (i = Ft(i), !i && zn(t)) ? Jr(rr(t), 0, s) : t.split(i, s)) : [];
        }
        var IS = Vn(function(t, i, s) {
          return t + (s ? " " : "") + Su(i);
        });
        function LS(t, i, s) {
          return t = Re(t), s = s == null ? 0 : gn(be(s), 0, t.length), i = Ft(i), t.slice(s, s + i.length) == i;
        }
        function FS(t, i, s) {
          var v = O.templateSettings;
          s && St(t, i, s) && (i = n), t = Re(t), i = fa({}, i, v, kc);
          var E = fa({}, i.imports, v.imports, kc), A = st(E), C = Is(E, A), I, D, Z = 0, V = i.interpolate || _o, J = "__p += '", ne = Fs(
            (i.escape || _o).source + "|" + V.source + "|" + (V === af ? pg : _o).source + "|" + (i.evaluate || _o).source + "|$",
            "g"
          ), se = "//# sourceURL=" + (Le.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Hg + "]") + `
`;
          t.replace(ne, function(he, xe, Te, Nt, Et, Dt) {
            return Te || (Te = Nt), J += t.slice(Z, Dt).replace(bg, ly), xe && (I = true, J += `' +
__e(` + xe + `) +
'`), Et && (D = true, J += `';
` + Et + `;
__p += '`), Te && (J += `' +
((__t = (` + Te + `)) == null ? '' : __t) +
'`), Z = Dt + he.length, he;
          }), J += `';
`;
          var pe = Le.call(i, "variable") && i.variable;
          if (!pe)
            J = `with (obj) {
` + J + `
}
`;
          else if (cg.test(pe))
            throw new ye(d);
          J = (D ? J.replace(Vm, "") : J).replace(Ym, "$1").replace(Xm, "$1;"), J = "function(" + (pe || "obj") + `) {
` + (pe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (I ? ", __e = _.escape" : "") + (D ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + J + `return __p
}`;
          var Se = Rd(function() {
            return Pe(A, se + "return " + J).apply(n, C);
          });
          if (Se.source = J, gu(Se))
            throw Se;
          return Se;
        }
        function $S(t) {
          return Re(t).toLowerCase();
        }
        function NS(t) {
          return Re(t).toUpperCase();
        }
        function DS(t, i, s) {
          if (t = Re(t), t && (s || i === n))
            return Wf(t);
          if (!t || !(i = Ft(i)))
            return t;
          var v = rr(t), E = rr(i), A = Uf(v, E), C = zf(v, E) + 1;
          return Jr(v, A, C).join("");
        }
        function kS(t, i, s) {
          if (t = Re(t), t && (s || i === n))
            return t.slice(0, Hf(t) + 1);
          if (!t || !(i = Ft(i)))
            return t;
          var v = rr(t), E = zf(v, rr(i)) + 1;
          return Jr(v, 0, E).join("");
        }
        function WS(t, i, s) {
          if (t = Re(t), t && (s || i === n))
            return t.replace(gs, "");
          if (!t || !(i = Ft(i)))
            return t;
          var v = rr(t), E = Uf(v, rr(i));
          return Jr(v, E).join("");
        }
        function US(t, i) {
          var s = Y, v = W;
          if (He(i)) {
            var E = "separator" in i ? i.separator : E;
            s = "length" in i ? be(i.length) : s, v = "omission" in i ? Ft(i.omission) : v;
          }
          t = Re(t);
          var A = t.length;
          if (zn(t)) {
            var C = rr(t);
            A = C.length;
          }
          if (s >= A)
            return t;
          var I = s - Bn(v);
          if (I < 1)
            return v;
          var D = C ? Jr(C, 0, I).join("") : t.slice(0, I);
          if (E === n)
            return D + v;
          if (C && (I += D.length - I), yu(E)) {
            if (t.slice(I).search(E)) {
              var Z, V = D;
              for (E.global || (E = Fs(E.source, Re(sf.exec(E)) + "g")), E.lastIndex = 0; Z = E.exec(V); )
                var J = Z.index;
              D = D.slice(0, J === n ? I : J);
            }
          } else if (t.indexOf(Ft(E), I) != I) {
            var ne = D.lastIndexOf(E);
            ne > -1 && (D = D.slice(0, ne));
          }
          return D + v;
        }
        function zS(t) {
          return t = Re(t), t && Jm.test(t) ? t.replace(nf, my) : t;
        }
        var BS = Vn(function(t, i, s) {
          return t + (s ? " " : "") + i.toUpperCase();
        }), Su = Mc("toUpperCase");
        function Cd(t, i, s) {
          return t = Re(t), i = s ? n : i, i === n ? cy(t) ? wy(t) : ry(t) : t.match(i) || [];
        }
        var Rd = _e(function(t, i) {
          try {
            return It(t, n, i);
          } catch (s) {
            return gu(s) ? s : new ye(s);
          }
        }), HS = Cr(function(t, i) {
          return Bt(i, function(s) {
            s = hr(s), Tr(t, s, vu(t[s], t));
          }), t;
        });
        function jS(t) {
          var i = t == null ? 0 : t.length, s = ce();
          return t = i ? We(t, function(v) {
            if (typeof v[1] != "function")
              throw new Ht(l);
            return [s(v[0]), v[1]];
          }) : [], _e(function(v) {
            for (var E = -1; ++E < i; ) {
              var A = t[E];
              if (It(A[0], this, v))
                return It(A[1], this, v);
            }
          });
        }
        function qS(t) {
          return m0(qt(t, h));
        }
        function Eu(t) {
          return function() {
            return t;
          };
        }
        function ZS(t, i) {
          return t == null || t !== t ? i : t;
        }
        var KS = Lc(), GS = Lc(true);
        function Tt(t) {
          return t;
        }
        function _u(t) {
          return lc(typeof t == "function" ? t : qt(t, h));
        }
        function VS(t) {
          return cc(qt(t, h));
        }
        function YS(t, i) {
          return dc(t, qt(i, h));
        }
        var XS = _e(function(t, i) {
          return function(s) {
            return _i(s, t, i);
          };
        }), JS = _e(function(t, i) {
          return function(s) {
            return _i(t, s, i);
          };
        });
        function xu(t, i, s) {
          var v = st(i), E = qo(i, v);
          s == null && !(He(i) && (E.length || !v.length)) && (s = i, i = t, t = this, E = qo(i, st(i)));
          var A = !(He(s) && "chain" in s) || !!s.chain, C = Mr(t);
          return Bt(E, function(I) {
            var D = i[I];
            t[I] = D, C && (t.prototype[I] = function() {
              var Z = this.__chain__;
              if (A || Z) {
                var V = t(this.__wrapped__), J = V.__actions__ = xt(this.__actions__);
                return J.push({ func: D, args: arguments, thisArg: t }), V.__chain__ = Z, V;
              }
              return D.apply(t, Zr([this.value()], arguments));
            });
          }), t;
        }
        function QS() {
          return ft._ === this && (ft._ = Oy), this;
        }
        function Ou() {
        }
        function eE(t) {
          return t = be(t), _e(function(i) {
            return pc(i, t);
          });
        }
        var tE = ru(We), rE = ru(Ff), nE = ru(Ts);
        function Md(t) {
          return lu(t) ? Ps(hr(t)) : L0(t);
        }
        function iE(t) {
          return function(i) {
            return t == null ? n : yn(t, i);
          };
        }
        var oE = $c(), aE = $c(true);
        function Au() {
          return [];
        }
        function Tu() {
          return false;
        }
        function sE() {
          return {};
        }
        function uE() {
          return "";
        }
        function lE() {
          return true;
        }
        function fE(t, i) {
          if (t = be(t), t < 1 || t > ee)
            return [];
          var s = Q, v = mt(t, Q);
          i = ce(i), t -= Q;
          for (var E = Ms(v, i); ++s < t; )
            i(s);
          return E;
        }
        function cE(t) {
          return we(t) ? We(t, hr) : $t(t) ? [t] : xt(Xc(Re(t)));
        }
        function dE(t) {
          var i = ++_y;
          return Re(t) + i;
        }
        var pE = Xo(function(t, i) {
          return t + i;
        }, 0), hE = nu("ceil"), vE = Xo(function(t, i) {
          return t / i;
        }, 1), mE = nu("floor");
        function gE(t) {
          return t && t.length ? jo(t, Tt, Bs) : n;
        }
        function yE(t, i) {
          return t && t.length ? jo(t, ce(i, 2), Bs) : n;
        }
        function wE(t) {
          return Df(t, Tt);
        }
        function bE(t, i) {
          return Df(t, ce(i, 2));
        }
        function SE(t) {
          return t && t.length ? jo(t, Tt, Zs) : n;
        }
        function EE(t, i) {
          return t && t.length ? jo(t, ce(i, 2), Zs) : n;
        }
        var _E = Xo(function(t, i) {
          return t * i;
        }, 1), xE = nu("round"), OE = Xo(function(t, i) {
          return t - i;
        }, 0);
        function AE(t) {
          return t && t.length ? Rs(t, Tt) : 0;
        }
        function TE(t, i) {
          return t && t.length ? Rs(t, ce(i, 2)) : 0;
        }
        return O.after = Vw, O.ary = ud, O.assign = Nb, O.assignIn = Ed, O.assignInWith = fa, O.assignWith = Db, O.at = kb, O.before = ld, O.bind = vu, O.bindAll = HS, O.bindKey = fd, O.castArray = sb, O.chain = od, O.chunk = m1, O.compact = g1, O.concat = y1, O.cond = jS, O.conforms = qS, O.constant = Eu, O.countBy = Aw, O.create = Wb, O.curry = cd, O.curryRight = dd, O.debounce = pd, O.defaults = Ub, O.defaultsDeep = zb, O.defer = Yw, O.delay = Xw, O.difference = w1, O.differenceBy = b1, O.differenceWith = S1, O.drop = E1, O.dropRight = _1, O.dropRightWhile = x1, O.dropWhile = O1, O.fill = A1, O.filter = Pw, O.flatMap = Mw, O.flatMapDeep = Iw, O.flatMapDepth = Lw, O.flatten = td, O.flattenDeep = T1, O.flattenDepth = P1, O.flip = Jw, O.flow = KS, O.flowRight = GS, O.fromPairs = C1, O.functions = Gb, O.functionsIn = Vb, O.groupBy = Fw, O.initial = M1, O.intersection = I1, O.intersectionBy = L1, O.intersectionWith = F1, O.invert = Xb, O.invertBy = Jb, O.invokeMap = Nw, O.iteratee = _u, O.keyBy = Dw, O.keys = st, O.keysIn = At, O.map = ia, O.mapKeys = eS, O.mapValues = tS, O.matches = VS, O.matchesProperty = YS, O.memoize = aa, O.merge = rS, O.mergeWith = _d, O.method = XS, O.methodOf = JS, O.mixin = xu, O.negate = sa, O.nthArg = eE, O.omit = nS, O.omitBy = iS, O.once = Qw, O.orderBy = kw, O.over = tE, O.overArgs = eb, O.overEvery = rE, O.overSome = nE, O.partial = mu, O.partialRight = hd, O.partition = Ww, O.pick = oS, O.pickBy = xd, O.property = Md, O.propertyOf = iE, O.pull = k1, O.pullAll = nd, O.pullAllBy = W1, O.pullAllWith = U1, O.pullAt = z1, O.range = oE, O.rangeRight = aE, O.rearg = tb, O.reject = Bw, O.remove = B1, O.rest = rb, O.reverse = pu, O.sampleSize = jw, O.set = sS, O.setWith = uS, O.shuffle = qw, O.slice = H1, O.sortBy = Gw, O.sortedUniq = Y1, O.sortedUniqBy = X1, O.split = MS, O.spread = nb, O.tail = J1, O.take = Q1, O.takeRight = ew, O.takeRightWhile = tw, O.takeWhile = rw, O.tap = gw, O.throttle = ib, O.thru = na, O.toArray = wd, O.toPairs = Od, O.toPairsIn = Ad, O.toPath = cE, O.toPlainObject = Sd, O.transform = lS, O.unary = ob, O.union = nw, O.unionBy = iw, O.unionWith = ow, O.uniq = aw, O.uniqBy = sw, O.uniqWith = uw, O.unset = fS, O.unzip = hu, O.unzipWith = id, O.update = cS, O.updateWith = dS, O.values = Jn, O.valuesIn = pS, O.without = lw, O.words = Cd, O.wrap = ab, O.xor = fw, O.xorBy = cw, O.xorWith = dw, O.zip = pw, O.zipObject = hw, O.zipObjectDeep = vw, O.zipWith = mw, O.entries = Od, O.entriesIn = Ad, O.extend = Ed, O.extendWith = fa, xu(O, O), O.add = pE, O.attempt = Rd, O.camelCase = gS, O.capitalize = Td, O.ceil = hE, O.clamp = hS, O.clone = ub, O.cloneDeep = fb, O.cloneDeepWith = cb, O.cloneWith = lb, O.conformsTo = db, O.deburr = Pd, O.defaultTo = ZS, O.divide = vE, O.endsWith = yS, O.eq = ir, O.escape = wS, O.escapeRegExp = bS, O.every = Tw, O.find = Cw, O.findIndex = Qc, O.findKey = Bb, O.findLast = Rw, O.findLastIndex = ed, O.findLastKey = Hb, O.floor = mE, O.forEach = ad, O.forEachRight = sd, O.forIn = jb, O.forInRight = qb, O.forOwn = Zb, O.forOwnRight = Kb, O.get = wu, O.gt = pb, O.gte = hb, O.has = Yb, O.hasIn = bu, O.head = rd, O.identity = Tt, O.includes = $w, O.indexOf = R1, O.inRange = vS, O.invoke = Qb, O.isArguments = Sn, O.isArray = we, O.isArrayBuffer = vb, O.isArrayLike = Ot, O.isArrayLikeObject = Ke, O.isBoolean = mb, O.isBuffer = Qr, O.isDate = gb, O.isElement = yb, O.isEmpty = wb, O.isEqual = bb, O.isEqualWith = Sb, O.isError = gu, O.isFinite = Eb, O.isFunction = Mr, O.isInteger = vd, O.isLength = ua, O.isMap = md, O.isMatch = _b, O.isMatchWith = xb, O.isNaN = Ob, O.isNative = Ab, O.isNil = Pb, O.isNull = Tb, O.isNumber = gd, O.isObject = He, O.isObjectLike = Ze, O.isPlainObject = Ci, O.isRegExp = yu, O.isSafeInteger = Cb, O.isSet = yd, O.isString = la, O.isSymbol = $t, O.isTypedArray = Xn, O.isUndefined = Rb, O.isWeakMap = Mb, O.isWeakSet = Ib, O.join = $1, O.kebabCase = SS, O.last = Kt, O.lastIndexOf = N1, O.lowerCase = ES, O.lowerFirst = _S, O.lt = Lb, O.lte = Fb, O.max = gE, O.maxBy = yE, O.mean = wE, O.meanBy = bE, O.min = SE, O.minBy = EE, O.stubArray = Au, O.stubFalse = Tu, O.stubObject = sE, O.stubString = uE, O.stubTrue = lE, O.multiply = _E, O.nth = D1, O.noConflict = QS, O.noop = Ou, O.now = oa, O.pad = xS, O.padEnd = OS, O.padStart = AS, O.parseInt = TS, O.random = mS, O.reduce = Uw, O.reduceRight = zw, O.repeat = PS, O.replace = CS, O.result = aS, O.round = xE, O.runInContext = $, O.sample = Hw, O.size = Zw, O.snakeCase = RS, O.some = Kw, O.sortedIndex = j1, O.sortedIndexBy = q1, O.sortedIndexOf = Z1, O.sortedLastIndex = K1, O.sortedLastIndexBy = G1, O.sortedLastIndexOf = V1, O.startCase = IS, O.startsWith = LS, O.subtract = OE, O.sum = AE, O.sumBy = TE, O.template = FS, O.times = fE, O.toFinite = Ir, O.toInteger = be, O.toLength = bd, O.toLower = $S, O.toNumber = Gt, O.toSafeInteger = $b, O.toString = Re, O.toUpper = NS, O.trim = DS, O.trimEnd = kS, O.trimStart = WS, O.truncate = US, O.unescape = zS, O.uniqueId = dE, O.upperCase = BS, O.upperFirst = Su, O.each = ad, O.eachRight = sd, O.first = rd, xu(O, (function() {
          var t = {};
          return dr(O, function(i, s) {
            Le.call(O.prototype, s) || (t[s] = i);
          }), t;
        })(), { chain: false }), O.VERSION = o, Bt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
          O[t].placeholder = O;
        }), Bt(["drop", "take"], function(t, i) {
          Ae.prototype[t] = function(s) {
            s = s === n ? 1 : et(be(s), 0);
            var v = this.__filtered__ && !i ? new Ae(this) : this.clone();
            return v.__filtered__ ? v.__takeCount__ = mt(s, v.__takeCount__) : v.__views__.push({
              size: mt(s, Q),
              type: t + (v.__dir__ < 0 ? "Right" : "")
            }), v;
          }, Ae.prototype[t + "Right"] = function(s) {
            return this.reverse()[t](s).reverse();
          };
        }), Bt(["filter", "map", "takeWhile"], function(t, i) {
          var s = i + 1, v = s == H || s == X;
          Ae.prototype[t] = function(E) {
            var A = this.clone();
            return A.__iteratees__.push({
              iteratee: ce(E, 3),
              type: s
            }), A.__filtered__ = A.__filtered__ || v, A;
          };
        }), Bt(["head", "last"], function(t, i) {
          var s = "take" + (i ? "Right" : "");
          Ae.prototype[t] = function() {
            return this[s](1).value()[0];
          };
        }), Bt(["initial", "tail"], function(t, i) {
          var s = "drop" + (i ? "" : "Right");
          Ae.prototype[t] = function() {
            return this.__filtered__ ? new Ae(this) : this[s](1);
          };
        }), Ae.prototype.compact = function() {
          return this.filter(Tt);
        }, Ae.prototype.find = function(t) {
          return this.filter(t).head();
        }, Ae.prototype.findLast = function(t) {
          return this.reverse().find(t);
        }, Ae.prototype.invokeMap = _e(function(t, i) {
          return typeof t == "function" ? new Ae(this) : this.map(function(s) {
            return _i(s, t, i);
          });
        }), Ae.prototype.reject = function(t) {
          return this.filter(sa(ce(t)));
        }, Ae.prototype.slice = function(t, i) {
          t = be(t);
          var s = this;
          return s.__filtered__ && (t > 0 || i < 0) ? new Ae(s) : (t < 0 ? s = s.takeRight(-t) : t && (s = s.drop(t)), i !== n && (i = be(i), s = i < 0 ? s.dropRight(-i) : s.take(i - t)), s);
        }, Ae.prototype.takeRightWhile = function(t) {
          return this.reverse().takeWhile(t).reverse();
        }, Ae.prototype.toArray = function() {
          return this.take(Q);
        }, dr(Ae.prototype, function(t, i) {
          var s = /^(?:filter|find|map|reject)|While$/.test(i), v = /^(?:head|last)$/.test(i), E = O[v ? "take" + (i == "last" ? "Right" : "") : i], A = v || /^find/.test(i);
          E && (O.prototype[i] = function() {
            var C = this.__wrapped__, I = v ? [1] : arguments, D = C instanceof Ae, Z = I[0], V = D || we(C), J = function(xe) {
              var Te = E.apply(O, Zr([xe], I));
              return v && ne ? Te[0] : Te;
            };
            V && s && typeof Z == "function" && Z.length != 1 && (D = V = false);
            var ne = this.__chain__, se = !!this.__actions__.length, pe = A && !ne, Se = D && !se;
            if (!A && V) {
              C = Se ? C : new Ae(this);
              var he = t.apply(C, I);
              return he.__actions__.push({ func: na, args: [J], thisArg: n }), new jt(he, ne);
            }
            return pe && Se ? t.apply(this, I) : (he = this.thru(J), pe ? v ? he.value()[0] : he.value() : he);
          });
        }), Bt(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
          var i = Co[t], s = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", v = /^(?:pop|shift)$/.test(t);
          O.prototype[t] = function() {
            var E = arguments;
            if (v && !this.__chain__) {
              var A = this.value();
              return i.apply(we(A) ? A : [], E);
            }
            return this[s](function(C) {
              return i.apply(we(C) ? C : [], E);
            });
          };
        }), dr(Ae.prototype, function(t, i) {
          var s = O[i];
          if (s) {
            var v = s.name + "";
            Le.call(Zn, v) || (Zn[v] = []), Zn[v].push({ name: i, func: s });
          }
        }), Zn[Yo(n, b).name] = [{
          name: "wrapper",
          func: n
        }], Ae.prototype.clone = zy, Ae.prototype.reverse = By, Ae.prototype.value = Hy, O.prototype.at = yw, O.prototype.chain = ww, O.prototype.commit = bw, O.prototype.next = Sw, O.prototype.plant = _w, O.prototype.reverse = xw, O.prototype.toJSON = O.prototype.valueOf = O.prototype.value = Ow, O.prototype.first = O.prototype.head, mi && (O.prototype[mi] = Ew), O;
      }, Hn = by();
      pn ? ((pn.exports = Hn)._ = Hn, _s._ = Hn) : ft._ = Hn;
    }).call(BP);
  })(eo, eo.exports)), eo.exports;
}
var Xe = HP();
const xh = {
  FdSave: Z4,
  FdWarningDanger: x3,
  FdInfoCircle: F5,
  FdInfoBold: R5
};
var vm = /* @__PURE__ */ ((e2) => (e2.ALERT = "alert", e2.CONFIRM = "confirm", e2))(vm || {}), ai = /* @__PURE__ */ ((e2) => (e2.PRIMARY = "primary", e2.WARNING = "warning", e2.DANGER = "danger", e2))(ai || {}), to = /* @__PURE__ */ ((e2) => (e2.CONFIRMED = "confirmed", e2.CANCELED = "canceled", e2))(to || {});
const mm = {
  [ai.PRIMARY]: {
    icon: "blue-500",
    button: "primary-dark"
  },
  [ai.DANGER]: {
    icon: "red-500",
    button: "primary-dark"
  },
  [ai.WARNING]: {
    icon: "yellow-400",
    button: "primary-dark"
  }
}, ol = ({
  color: e2 = ai.PRIMARY,
  variant: r = "solid",
  children: n,
  autoFocus: o,
  ...a
}) => {
  const u = mm[e2].button, l = r === "outlined" ? `bg-transparent text-white border border-white hover:border-white hover:bg-white hover:text-${u}` : `text-white bg-${u} border border-${u} hover:border-white hover:bg-primary-hover hover:text-white`;
  return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "button",
    {
      autoFocus: o,
      className: Je(
        "w-16 rounded px-2 py-1 text-xs font-medium hover:font-bold focus:outline-none",
        l
      ),
      ...a,
      children: n
    }
  );
}, jP = ({
  name: e2,
  color: r = ai.PRIMARY,
  className: n = "w-8 h-8"
}) => {
  const o = xh[e2] || xh.FdInfoCircle, a = `text-${mm[r].icon}`;
  return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(o, { className: Je(n, a) });
}, AM = ({
  id: e2,
  title: r,
  message: n,
  icon: o,
  type: a,
  color: u,
  zIndex: l = 3e3,
  views: d,
  width: w = 520,
  hasOverlay: S = true,
  onClose: y,
  onEdit: h
}) => {
  const f = (c) => {
    y({
      id: e2,
      reason: c
    });
  };
  qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    function c(g) {
      g.key === "Escape" && f(to.CANCELED);
    }
    return window.addEventListener("keyup", c), () => {
      window.removeEventListener("keyup", c);
    };
  }, []);
  const p = Xe.merge(
    Xe.values(d == null ? void 0 : d.toggles).flatMap((c) => c.value ? c.warnings || [] : []),
    d == null ? void 0 : d.tips
  ), m = (c, g) => {
    var _;
    if (!(d != null && d.toggles)) return;
    const b = Xe.cloneDeep(d);
    (_ = b.toggles) != null && _[c] && (b.toggles[c].value = g), h({
      id: e2,
      views: b
    });
  };
  return Si.createPortal(
    /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Ba, { appear: true, show: true, as: qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Fragment, children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      "div",
      {
        className: Je(
          "absolute inset-0 flex h-full w-full items-center justify-center overflow-y-auto",
          { "bg-black bg-opacity-80": S }
        ),
        style: { zIndex: l },
        onClick: () => f(to.CANCELED),
        children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          Ba.Child,
          {
            as: qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "div",
              {
                "data-cy": "confirmation-modal-cy",
                className: "relative rounded-md border border-grey-50 bg-grey-900",
                style: { width: w },
                onClick: (c) => c.stopPropagation(),
                children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-col items-center gap-3 p-6 px-12", children: [
                  o ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(jP, { name: o, color: u, className: "w-6 h-6" }) }) : null,
                  /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qP, { condition: r, children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("h4", { className: "w-full text-wrap text-lg font-bold leading-6 text-white text-center", children: r }) }),
                  /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("p", { className: "w-full text-wrap text-center text-sm font-medium text-white", children: n }),
                  /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "text-xs text-white", children: Xe.values(d == null ? void 0 : d.toggles).map((c) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("label", { htmlFor: c.key, className: "flex items-center", children: [
                    /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                      WP,
                      {
                        size: "xs",
                        value: c.value,
                        onChange: (g) => m(c.key, g)
                      }
                    ),
                    /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: "ml-1", children: c.title })
                  ] }) }, c.key)) }),
                  /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(ZP, { warnings: p }),
                  /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex items-center gap-4", children: a === vm.CONFIRM ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
                    /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                      ol,
                      {
                        autoFocus: true,
                        color: u,
                        onClick: () => f(to.CONFIRMED),
                        children: "Confirm"
                      }
                    ),
                    /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                      ol,
                      {
                        color: u,
                        variant: "outlined",
                        onClick: () => f(to.CANCELED),
                        children: "Cancel"
                      }
                    )
                  ] }) : /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(ol, { autoFocus: true, onClick: () => f(), children: "OK" }) })
                ] })
              }
            )
          }
        )
      }
    ) }),
    document.querySelector("body")
  );
}, qP = (e2) => e2.condition ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: e2.children }) : null, ZP = (e2) => e2.warnings ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Ba, { appear: true, show: !!e2.warnings.length, as: qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Fragment, children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex flex-col gap-1 rounded-sm bg-grey-600 p-2 text-xs text-white", children: e2.warnings.map((r, n) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  Ba.Child,
  {
    as: qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 scale-95",
    enterTo: "opacity-100 scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-95",
    children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-1 items-center gap-1 rounded-sm px-2 py-1", children: [
      /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        x3,
        {
          className: Je(
            {
              "h-3 w-3": true,
              "text-yellow-500": r.type === "warning",
              "text-red-400": r.type === "error",
              "text-primary-dark": r.type === "info"
            },
            "mr-3"
          )
        }
      ),
      /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex-1", children: r.message })
    ] })
  },
  `modal-warnings-${n}`
)) }) }) : null;
var KP = /* @__PURE__ */ ((e2) => (e2[e2.MIN = 1] = "MIN", e2[e2.MAX = 10] = "MAX", e2[e2.STEP = 0.5] = "STEP", e2[e2.INIT = 1] = "INIT", e2[e2.TRANSITION = 200] = "TRANSITION", e2))(KP || {});
const TM = ({
  zoom: e2,
  minZoom: r = 1,
  maxZoom: n = 10,
  handleZoomIn: o,
  handleZoomOut: a
}) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex items-center rounded bg-grey-300 p-1", children: [
  /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    o2,
    {
      onClick: a,
      className: Je("h-5 w-5 p-1", {
        "text-grey-200": e2 <= r,
        "cursor-pointer rounded hover:bg-purple-800": e2 > r
      })
    }
  ),
  /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("span", { className: "mx-1 w-10 select-none text-center text-xs", children: [
    (e2 * 100).toFixed(0),
    "%"
  ] }),
  /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    J2,
    {
      onClick: o,
      className: Je("h-5 w-5 p-1", {
        "text-grey-200": e2 >= n,
        "cursor-pointer rounded hover:bg-purple-800": e2 < n
      })
    }
  )
] });
function PM(e2, r) {
  const n = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(false);
  qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    if (n.current) return e2();
    n.current = true;
  }, r);
}
const al = typeof navigator < "u" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : false;
function sl(e2, r, n, o) {
  e2.addEventListener ? e2.addEventListener(r, n, o) : e2.attachEvent && e2.attachEvent("on".concat(r), n);
}
function Ji(e2, r, n, o) {
  e2.removeEventListener ? e2.removeEventListener(r, n, o) : e2.detachEvent && e2.detachEvent("on".concat(r), n);
}
function gm(e2, r) {
  const n = r.slice(0, r.length - 1);
  for (let o = 0; o < n.length; o++) n[o] = e2[n[o].toLowerCase()];
  return n;
}
function ym(e2) {
  typeof e2 != "string" && (e2 = ""), e2 = e2.replace(/\s/g, "");
  const r = e2.split(",");
  let n = r.lastIndexOf("");
  for (; n >= 0; )
    r[n - 1] += ",", r.splice(n, 1), n = r.lastIndexOf("");
  return r;
}
function GP(e2, r) {
  const n = e2.length >= r.length ? e2 : r, o = e2.length >= r.length ? r : e2;
  let a = true;
  for (let u = 0; u < n.length; u++)
    o.indexOf(n[u]) === -1 && (a = false);
  return a;
}
const di = {
  backspace: 8,
  "⌫": 8,
  tab: 9,
  clear: 12,
  enter: 13,
  "↩": 13,
  return: 13,
  esc: 27,
  escape: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  del: 46,
  delete: 46,
  ins: 45,
  insert: 45,
  home: 36,
  end: 35,
  pageup: 33,
  pagedown: 34,
  capslock: 20,
  num_0: 96,
  num_1: 97,
  num_2: 98,
  num_3: 99,
  num_4: 100,
  num_5: 101,
  num_6: 102,
  num_7: 103,
  num_8: 104,
  num_9: 105,
  num_multiply: 106,
  num_add: 107,
  num_enter: 108,
  num_subtract: 109,
  num_decimal: 110,
  num_divide: 111,
  "⇪": 20,
  ",": 188,
  ".": 190,
  "/": 191,
  "`": 192,
  "-": al ? 173 : 189,
  "=": al ? 61 : 187,
  ";": al ? 59 : 186,
  "'": 222,
  "[": 219,
  "]": 221,
  "\\": 220
}, lr = {
  // shiftKey
  "⇧": 16,
  shift: 16,
  // altKey
  "⌥": 18,
  alt: 18,
  option: 18,
  // ctrlKey
  "⌃": 17,
  ctrl: 17,
  control: 17,
  // metaKey
  "⌘": 91,
  cmd: 91,
  command: 91
}, ro = {
  16: "shiftKey",
  18: "altKey",
  17: "ctrlKey",
  91: "metaKey",
  shiftKey: 16,
  ctrlKey: 17,
  altKey: 18,
  metaKey: 91
}, pt = {
  16: false,
  18: false,
  17: false,
  91: false
}, qe = {};
for (let e2 = 1; e2 < 20; e2++)
  di["f".concat(e2)] = 111 + e2;
let ze = [], so = null, wm = "all";
const $r = /* @__PURE__ */ new Map(), Ln = (e2) => di[e2.toLowerCase()] || lr[e2.toLowerCase()] || e2.toUpperCase().charCodeAt(0), VP = (e2) => Object.keys(di).find((r) => di[r] === e2), YP = (e2) => Object.keys(lr).find((r) => lr[r] === e2);
function bm(e2) {
  wm = e2 || "all";
}
function po() {
  return wm || "all";
}
function XP() {
  return ze.slice(0);
}
function JP() {
  return ze.map((e2) => VP(e2) || YP(e2) || String.fromCharCode(e2));
}
function QP() {
  const e2 = [];
  return Object.keys(qe).forEach((r) => {
    qe[r].forEach((n) => {
      let {
        key: o,
        scope: a,
        mods: u,
        shortcut: l
      } = n;
      e2.push({
        scope: a,
        shortcut: l,
        mods: u,
        keys: o.split("+").map((d) => Ln(d))
      });
    });
  }), e2;
}
function eC(e2) {
  const r = e2.target || e2.srcElement, {
    tagName: n
  } = r;
  let o = true;
  const a = n === "INPUT" && !["checkbox", "radio", "range", "button", "file", "reset", "submit", "color"].includes(r.type);
  return (r.isContentEditable || (a || n === "TEXTAREA" || n === "SELECT") && !r.readOnly) && (o = false), o;
}
function tC(e2) {
  return typeof e2 == "string" && (e2 = Ln(e2)), ze.indexOf(e2) !== -1;
}
function rC(e2, r) {
  let n, o;
  e2 || (e2 = po());
  for (const a in qe)
    if (Object.prototype.hasOwnProperty.call(qe, a))
      for (n = qe[a], o = 0; o < n.length; )
        n[o].scope === e2 ? n.splice(o, 1).forEach((l) => {
          let {
            element: d
          } = l;
          return Ql(d);
        }) : o++;
  po() === e2 && bm(r || "all");
}
function nC(e2) {
  let r = e2.keyCode || e2.which || e2.charCode;
  e2.key && (r = Ln(e2.key));
  const n = ze.indexOf(r);
  if (n >= 0 && ze.splice(n, 1), e2.key && e2.key.toLowerCase() === "meta" && ze.splice(0, ze.length), (r === 93 || r === 224) && (r = 91), r in pt) {
    pt[r] = false;
    for (const o in lr) lr[o] === r && (ur[o] = false);
  }
}
function Sm(e2) {
  if (typeof e2 > "u")
    Object.keys(qe).forEach((a) => {
      Array.isArray(qe[a]) && qe[a].forEach((u) => Aa(u)), delete qe[a];
    }), Ql(null);
  else if (Array.isArray(e2))
    e2.forEach((a) => {
      a.key && Aa(a);
    });
  else if (typeof e2 == "object")
    e2.key && Aa(e2);
  else if (typeof e2 == "string") {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    let [a, u] = n;
    typeof a == "function" && (u = a, a = ""), Aa({
      key: e2,
      scope: a,
      method: u,
      splitKey: "+"
    });
  }
}
const Aa = (e2) => {
  let {
    key: r,
    scope: n,
    method: o,
    splitKey: a = "+"
  } = e2;
  ym(r).forEach((l) => {
    const d = l.split(a), w = d.length, S = d[w - 1], y = S === "*" ? "*" : Ln(S);
    if (!qe[y]) return;
    n || (n = po());
    const h = w > 1 ? gm(lr, d) : [], f = [];
    qe[y] = qe[y].filter((p) => {
      const c = (o ? p.method === o : true) && p.scope === n && GP(p.mods, h);
      return c && f.push(p.element), !c;
    }), f.forEach((p) => Ql(p));
  });
};
function Oh(e2, r, n, o) {
  if (r.element !== o)
    return;
  let a;
  if (r.scope === n || r.scope === "all") {
    a = r.mods.length > 0;
    for (const u in pt)
      Object.prototype.hasOwnProperty.call(pt, u) && (!pt[u] && r.mods.indexOf(+u) > -1 || pt[u] && r.mods.indexOf(+u) === -1) && (a = false);
    (r.mods.length === 0 && !pt[16] && !pt[18] && !pt[17] && !pt[91] || a || r.shortcut === "*") && (r.keys = [], r.keys = r.keys.concat(ze), r.method(e2, r) === false && (e2.preventDefault ? e2.preventDefault() : e2.returnValue = false, e2.stopPropagation && e2.stopPropagation(), e2.cancelBubble && (e2.cancelBubble = true)));
  }
}
function Ah(e2, r) {
  const n = qe["*"];
  let o = e2.keyCode || e2.which || e2.charCode;
  if (e2.key && (o = Ln(e2.key)), o === di.capslock || !ur.filter.call(this, e2)) return;
  if ((o === 93 || o === 224) && (o = 91), ze.indexOf(o) === -1 && o !== 229 && ze.push(o), ["metaKey", "ctrlKey", "altKey", "shiftKey"].forEach((d) => {
    const w = ro[d];
    e2[d] && ze.indexOf(w) === -1 ? ze.push(w) : !e2[d] && ze.indexOf(w) > -1 ? ze.splice(ze.indexOf(w), 1) : d === "metaKey" && e2[d] && (ze = ze.filter((S) => S in ro || S === o));
  }), o in pt) {
    pt[o] = true;
    for (const d in lr)
      if (Object.prototype.hasOwnProperty.call(lr, d)) {
        const w = ro[lr[d]];
        ur[d] = e2[w];
      }
    if (!n) return;
  }
  for (const d in pt)
    Object.prototype.hasOwnProperty.call(pt, d) && (pt[d] = e2[ro[d]]);
  e2.getModifierState && !(e2.altKey && !e2.ctrlKey) && e2.getModifierState("AltGraph") && (ze.indexOf(17) === -1 && ze.push(17), ze.indexOf(18) === -1 && ze.push(18), pt[17] = true, pt[18] = true);
  const a = po();
  if (n)
    for (let d = 0; d < n.length; d++)
      n[d].scope === a && (e2.type === "keydown" && n[d].keydown || e2.type === "keyup" && n[d].keyup) && Oh(e2, n[d], a, r);
  if (!(o in qe)) return;
  const u = qe[o], l = u.length;
  for (let d = 0; d < l; d++)
    if ((e2.type === "keydown" && u[d].keydown || e2.type === "keyup" && u[d].keyup) && u[d].key) {
      const w = u[d], {
        splitKey: S
      } = w, y = w.key.split(S), h = [];
      for (let f = 0; f < y.length; f++)
        h.push(Ln(y[f]));
      h.sort().join("") === ze.sort().join("") && Oh(e2, w, a, r);
    }
}
function ur(e2, r, n) {
  ze = [];
  const o = ym(e2);
  let a = [], u = "all", l = document, d = 0, w = false, S = true, y = "+", h = false, f = false;
  for (n === void 0 && typeof r == "function" && (n = r), Object.prototype.toString.call(r) === "[object Object]" && (r.scope && (u = r.scope), r.element && (l = r.element), r.keyup && (w = r.keyup), r.keydown !== void 0 && (S = r.keydown), r.capture !== void 0 && (h = r.capture), typeof r.splitKey == "string" && (y = r.splitKey), r.single === true && (f = true)), typeof r == "string" && (u = r), f && Sm(e2, u); d < o.length; d++)
    e2 = o[d].split(y), a = [], e2.length > 1 && (a = gm(lr, e2)), e2 = e2[e2.length - 1], e2 = e2 === "*" ? "*" : Ln(e2), e2 in qe || (qe[e2] = []), qe[e2].push({
      keyup: w,
      keydown: S,
      scope: u,
      mods: a,
      shortcut: o[d],
      method: n,
      key: o[d],
      splitKey: y,
      element: l
    });
  if (typeof l < "u" && window) {
    if (!$r.has(l)) {
      const p = function() {
        let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.event;
        return Ah(c, l);
      }, m = function() {
        let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.event;
        Ah(c, l), nC(c);
      };
      $r.set(l, {
        keydownListener: p,
        keyupListenr: m,
        capture: h
      }), sl(l, "keydown", p, h), sl(l, "keyup", m, h);
    }
    if (!so) {
      const p = () => {
        ze = [];
      };
      so = {
        listener: p,
        capture: h
      }, sl(window, "focus", p, h);
    }
  }
}
function iC(e2) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
  Object.keys(qe).forEach((n) => {
    qe[n].filter((a) => a.scope === r && a.shortcut === e2).forEach((a) => {
      a && a.method && a.method();
    });
  });
}
function Ql(e2) {
  const r = Object.values(qe).flat();
  if (r.findIndex((o) => {
    let {
      element: a
    } = o;
    return a === e2;
  }) < 0) {
    const {
      keydownListener: o,
      keyupListenr: a,
      capture: u
    } = $r.get(e2) || {};
    o && a && (Ji(e2, "keyup", a, u), Ji(e2, "keydown", o, u), $r.delete(e2));
  }
  if ((r.length <= 0 || $r.size <= 0) && (Object.keys($r).forEach((a) => {
    const {
      keydownListener: u,
      keyupListenr: l,
      capture: d
    } = $r.get(a) || {};
    u && l && (Ji(a, "keyup", l, d), Ji(a, "keydown", u, d), $r.delete(a));
  }), $r.clear(), Object.keys(qe).forEach((a) => delete qe[a]), so)) {
    const {
      listener: a,
      capture: u
    } = so;
    Ji(window, "focus", a, u), so = null;
  }
}
const ul = {
  getPressedKeyString: JP,
  setScope: bm,
  getScope: po,
  deleteScope: rC,
  getPressedKeyCodes: XP,
  getAllKeyCodes: QP,
  isPressed: tC,
  filter: eC,
  trigger: iC,
  unbind: Sm,
  keyMap: di,
  modifier: lr,
  modifierMap: ro
};
for (const e2 in ul)
  Object.prototype.hasOwnProperty.call(ul, e2) && (ur[e2] = ul[e2]);
if (typeof window < "u") {
  const e2 = window.hotkeys;
  ur.noConflict = (r) => (r && window.hotkeys === ur && (window.hotkeys = e2), ur), window.hotkeys = ur;
}
ur.filter = () => true;
function CM(e2, r, n, o) {
  n instanceof Array && (o = n, n = void 0), o = o || [], n = n || {};
  const { preventDefault: a = true } = n, u = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback(
    (d, w) => {
      a && d.preventDefault(), setTimeout(() => r(d, w));
    },
    o
  ), l = () => {
    ur.unbind(e2, u);
  };
  qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => (ur(e2, n, u), l), [e2, n, u]);
}
const RM = (e2) => {
  const r = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(null);
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    const n = (o) => {
      r.current && !r.current.contains(o.target) && e2(o);
    };
    return document.addEventListener("click", n, true), () => {
      document.removeEventListener("click", n, true);
    };
  }, [e2]), r;
};
function MM(e2) {
  const r = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef();
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    r.current = e2;
  }, [e2]), r.current;
}
function IM(e2) {
  const r = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(e2);
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    r.current = e2;
  }, [e2]), r;
}
function LM(e2) {
  const r = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(null);
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    e2 && (typeof e2 == "function" ? e2(r.current) : e2.current = r.current);
  }), r;
}
function FM(e2) {
  const [r, n] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(e2), o = (u, l) => {
    n((d) => ({
      ...d,
      features: {
        ...d.features,
        [u]: {
          enabled: l
        }
      }
    }));
  }, a = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback(
    (...u) => u.every((l) => {
      var d;
      return (d = r.features[l]) == null ? void 0 : d.enabled;
    }),
    [r.features]
  );
  return {
    setFeature: o,
    isFeatureEnabled: a
  };
}
const Em = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.createContext(""), $M = (e2) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Em.Provider, { value: e2.value, children: e2.children }), NM = () => {
  const e2 = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useContext(Em);
  if (typeof e2 != "string")
    throw new Error(
      "Error while calling useIdentity! Context has incorrect type (expected string)"
    );
  return e2;
};
function DM(e2) {
  const [r, n] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(e2), o = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useMemo(() => oC(r, n), []);
  return {
    state: r,
    actions: {
      ...o,
      set: (a) => {
        n(
          typeof a == "function" ? a : (u) => ({
            ...u,
            ...a
          })
        );
      }
    }
  };
}
function oC(e2, r = () => {
}) {
  return Object.keys(e2).reduce(
    (o, a) => ({
      ...o,
      [`set${Xe.upperFirst(a)}`]: (u) => r((l) => ({
        ...l,
        [a]: u
      }))
    }),
    {}
  );
}
const kM = (e2, r, n = {}) => {
  n = {
    timeout: 200,
    ...n
  };
  const o = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useRef(), a = () => {
    o.current && (clearTimeout(o.current), o.current = null);
  };
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useCallback(
    (u, ...l) => {
      a(), r && u.detail === 1 && (o.current = setTimeout(() => {
        r(u, ...l);
      }, n.timeout)), u.detail % 2 === 0 && e2(u, ...l);
    },
    [r, e2, n.timeout]
  );
};
function kr(e2) {
  return typeof e2 == "function";
}
function _m(e2) {
  var r = function(o) {
    Error.call(o), o.stack = new Error().stack;
  }, n = e2(r);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var ll = _m(function(e2) {
  return function(n) {
    e2(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(o, a) {
      return a + 1 + ") " + o.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Tl(e2, r) {
  if (e2) {
    var n = e2.indexOf(r);
    0 <= n && e2.splice(n, 1);
  }
}
var rs = (function() {
  function e2(r) {
    this.initialTeardown = r, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return e2.prototype.unsubscribe = function() {
    var r, n, o, a, u;
    if (!this.closed) {
      this.closed = true;
      var l = this._parentage;
      if (l)
        if (this._parentage = null, Array.isArray(l))
          try {
            for (var d = wl(l), w = d.next(); !w.done; w = d.next()) {
              var S = w.value;
              S.remove(this);
            }
          } catch (c) {
            r = { error: c };
          } finally {
            try {
              w && !w.done && (n = d.return) && n.call(d);
            } finally {
              if (r) throw r.error;
            }
          }
        else
          l.remove(this);
      var y = this.initialTeardown;
      if (kr(y))
        try {
          y();
        } catch (c) {
          u = c instanceof ll ? c.errors : [c];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var f = wl(h), p = f.next(); !p.done; p = f.next()) {
            var m = p.value;
            try {
              Th(m);
            } catch (c) {
              u = u ?? [], c instanceof ll ? u = Ua(Ua([], bl(u)), bl(c.errors)) : u.push(c);
            }
          }
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            p && !p.done && (a = f.return) && a.call(f);
          } finally {
            if (o) throw o.error;
          }
        }
      }
      if (u)
        throw new ll(u);
    }
  }, e2.prototype.add = function(r) {
    var n;
    if (r && r !== this)
      if (this.closed)
        Th(r);
      else {
        if (r instanceof e2) {
          if (r.closed || r._hasParent(this))
            return;
          r._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(r);
      }
  }, e2.prototype._hasParent = function(r) {
    var n = this._parentage;
    return n === r || Array.isArray(n) && n.includes(r);
  }, e2.prototype._addParent = function(r) {
    var n = this._parentage;
    this._parentage = Array.isArray(n) ? (n.push(r), n) : n ? [n, r] : r;
  }, e2.prototype._removeParent = function(r) {
    var n = this._parentage;
    n === r ? this._parentage = null : Array.isArray(n) && Tl(n, r);
  }, e2.prototype.remove = function(r) {
    var n = this._finalizers;
    n && Tl(n, r), r instanceof e2 && r._removeParent(this);
  }, e2.EMPTY = (function() {
    var r = new e2();
    return r.closed = true, r;
  })(), e2;
})(), xm = rs.EMPTY;
function Om(e2) {
  return e2 instanceof rs || e2 && "closed" in e2 && kr(e2.remove) && kr(e2.add) && kr(e2.unsubscribe);
}
function Th(e2) {
  kr(e2) ? e2() : e2.unsubscribe();
}
var aC = {
  Promise: void 0
}, sC = {
  setTimeout: function(e2, r) {
    for (var n = [], o = 2; o < arguments.length; o++)
      n[o - 2] = arguments[o];
    return setTimeout.apply(void 0, Ua([e2, r], bl(n)));
  },
  clearTimeout: function(e2) {
    return clearTimeout(e2);
  },
  delegate: void 0
};
function uC(e2) {
  sC.setTimeout(function() {
    throw e2;
  });
}
function Ph() {
}
function $a(e2) {
  e2();
}
var Am = (function(e2) {
  Xa(r, e2);
  function r(n) {
    var o = e2.call(this) || this;
    return o.isStopped = false, n ? (o.destination = n, Om(n) && n.add(o)) : o.destination = cC, o;
  }
  return r.create = function(n, o, a) {
    return new Pl(n, o, a);
  }, r.prototype.next = function(n) {
    this.isStopped || this._next(n);
  }, r.prototype.error = function(n) {
    this.isStopped || (this.isStopped = true, this._error(n));
  }, r.prototype.complete = function() {
    this.isStopped || (this.isStopped = true, this._complete());
  }, r.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = true, e2.prototype.unsubscribe.call(this), this.destination = null);
  }, r.prototype._next = function(n) {
    this.destination.next(n);
  }, r.prototype._error = function(n) {
    try {
      this.destination.error(n);
    } finally {
      this.unsubscribe();
    }
  }, r.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, r;
})(rs), lC = (function() {
  function e2(r) {
    this.partialObserver = r;
  }
  return e2.prototype.next = function(r) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(r);
      } catch (o) {
        Ta(o);
      }
  }, e2.prototype.error = function(r) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(r);
      } catch (o) {
        Ta(o);
      }
    else
      Ta(r);
  }, e2.prototype.complete = function() {
    var r = this.partialObserver;
    if (r.complete)
      try {
        r.complete();
      } catch (n) {
        Ta(n);
      }
  }, e2;
})(), Pl = (function(e2) {
  Xa(r, e2);
  function r(n, o, a) {
    var u = e2.call(this) || this, l;
    return kr(n) || !n ? l = {
      next: n ?? void 0,
      error: o ?? void 0,
      complete: a ?? void 0
    } : l = n, u.destination = new lC(l), u;
  }
  return r;
})(Am);
function Ta(e2) {
  uC(e2);
}
function fC(e2) {
  throw e2;
}
var cC = {
  closed: true,
  next: Ph,
  error: fC,
  complete: Ph
}, dC = (function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
})();
function pC(e2) {
  return e2;
}
function hC(e2) {
  return e2.length === 0 ? pC : e2.length === 1 ? e2[0] : function(n) {
    return e2.reduce(function(o, a) {
      return a(o);
    }, n);
  };
}
var Ch = (function() {
  function e2(r) {
    r && (this._subscribe = r);
  }
  return e2.prototype.lift = function(r) {
    var n = new e2();
    return n.source = this, n.operator = r, n;
  }, e2.prototype.subscribe = function(r, n, o) {
    var a = this, u = mC(r) ? r : new Pl(r, n, o);
    return $a(function() {
      var l = a, d = l.operator, w = l.source;
      u.add(d ? d.call(u, w) : w ? a._subscribe(u) : a._trySubscribe(u));
    }), u;
  }, e2.prototype._trySubscribe = function(r) {
    try {
      return this._subscribe(r);
    } catch (n) {
      r.error(n);
    }
  }, e2.prototype.forEach = function(r, n) {
    var o = this;
    return n = Rh(n), new n(function(a, u) {
      var l = new Pl({
        next: function(d) {
          try {
            r(d);
          } catch (w) {
            u(w), l.unsubscribe();
          }
        },
        error: u,
        complete: a
      });
      o.subscribe(l);
    });
  }, e2.prototype._subscribe = function(r) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(r);
  }, e2.prototype[dC] = function() {
    return this;
  }, e2.prototype.pipe = function() {
    for (var r = [], n = 0; n < arguments.length; n++)
      r[n] = arguments[n];
    return hC(r)(this);
  }, e2.prototype.toPromise = function(r) {
    var n = this;
    return r = Rh(r), new r(function(o, a) {
      var u;
      n.subscribe(function(l) {
        return u = l;
      }, function(l) {
        return a(l);
      }, function() {
        return o(u);
      });
    });
  }, e2.create = function(r) {
    return new e2(r);
  }, e2;
})();
function Rh(e2) {
  var r;
  return (r = e2 ?? aC.Promise) !== null && r !== void 0 ? r : Promise;
}
function vC(e2) {
  return e2 && kr(e2.next) && kr(e2.error) && kr(e2.complete);
}
function mC(e2) {
  return e2 && e2 instanceof Am || vC(e2) && Om(e2);
}
var gC = _m(function(e2) {
  return function() {
    e2(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), zr = (function(e2) {
  Xa(r, e2);
  function r() {
    var n = e2.call(this) || this;
    return n.closed = false, n.currentObservers = null, n.observers = [], n.isStopped = false, n.hasError = false, n.thrownError = null, n;
  }
  return r.prototype.lift = function(n) {
    var o = new Mh(this, this);
    return o.operator = n, o;
  }, r.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new gC();
  }, r.prototype.next = function(n) {
    var o = this;
    $a(function() {
      var a, u;
      if (o._throwIfClosed(), !o.isStopped) {
        o.currentObservers || (o.currentObservers = Array.from(o.observers));
        try {
          for (var l = wl(o.currentObservers), d = l.next(); !d.done; d = l.next()) {
            var w = d.value;
            w.next(n);
          }
        } catch (S) {
          a = { error: S };
        } finally {
          try {
            d && !d.done && (u = l.return) && u.call(l);
          } finally {
            if (a) throw a.error;
          }
        }
      }
    });
  }, r.prototype.error = function(n) {
    var o = this;
    $a(function() {
      if (o._throwIfClosed(), !o.isStopped) {
        o.hasError = o.isStopped = true, o.thrownError = n;
        for (var a = o.observers; a.length; )
          a.shift().error(n);
      }
    });
  }, r.prototype.complete = function() {
    var n = this;
    $a(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.isStopped = true;
        for (var o = n.observers; o.length; )
          o.shift().complete();
      }
    });
  }, r.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
  }, Object.defineProperty(r.prototype, "observed", {
    get: function() {
      var n;
      return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
    },
    enumerable: false,
    configurable: true
  }), r.prototype._trySubscribe = function(n) {
    return this._throwIfClosed(), e2.prototype._trySubscribe.call(this, n);
  }, r.prototype._subscribe = function(n) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
  }, r.prototype._innerSubscribe = function(n) {
    var o = this, a = this, u = a.hasError, l = a.isStopped, d = a.observers;
    return u || l ? xm : (this.currentObservers = null, d.push(n), new rs(function() {
      o.currentObservers = null, Tl(d, n);
    }));
  }, r.prototype._checkFinalizedStatuses = function(n) {
    var o = this, a = o.hasError, u = o.thrownError, l = o.isStopped;
    a ? n.error(u) : l && n.complete();
  }, r.prototype.asObservable = function() {
    var n = new Ch();
    return n.source = this, n;
  }, r.create = function(n, o) {
    return new Mh(n, o);
  }, r;
})(Ch), Mh = (function(e2) {
  Xa(r, e2);
  function r(n, o) {
    var a = e2.call(this) || this;
    return a.destination = n, a.source = o, a;
  }
  return r.prototype.next = function(n) {
    var o, a;
    (a = (o = this.destination) === null || o === void 0 ? void 0 : o.next) === null || a === void 0 || a.call(o, n);
  }, r.prototype.error = function(n) {
    var o, a;
    (a = (o = this.destination) === null || o === void 0 ? void 0 : o.error) === null || a === void 0 || a.call(o, n);
  }, r.prototype.complete = function() {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || o === void 0 || o.call(n);
  }, r.prototype._subscribe = function(n) {
    var o, a;
    return (a = (o = this.source) === null || o === void 0 ? void 0 : o.subscribe(n)) !== null && a !== void 0 ? a : xm;
  }, r;
})(zr), yC = /* @__PURE__ */ ((e2) => (e2.RELOAD = "reload", e2.RECOMPUTE = "recompute", e2))(yC || {}), wC = /* @__PURE__ */ ((e2) => (e2.RENAME = "rename", e2.TYPE_CHANGE = "type-change", e2))(wC || {});
const WM = new zr(), UM = new zr(), bC = new zr();
var SC = /* @__PURE__ */ ((e2) => (e2.SAVE_ALL = "save-all", e2))(SC || {});
const zM = new zr();
var EC = /* @__PURE__ */ ((e2) => (e2.WILL_SAVE = "will-save", e2.DID_SAVE = "did-save", e2.WILL_CREATE = "will-create", e2.WILL_RENAME = "will-rename", e2.WILL_DELETE = "will-delete", e2.DID_CREATE = "did-create", e2.DID_RENAME = "did-rename", e2.DID_DELETE = "did-delete", e2.DIAGNOSTIC_REFRESH = "diagnostic-refresh", e2))(EC || {});
const BM = new zr();
var _C = /* @__PURE__ */ ((e2) => (e2.RESEND_BREAKPOINTS = "resend-breakpoints", e2))(_C || {});
const HM = new zr(), jM = new zr();
var Ha = /* @__PURE__ */ ((e2) => (e2.EVENT_STARTED = "event-started", e2.EVENT_ENDED = "event-ended", e2.EVENT_EMITED = "event-emited", e2.REQUEST_SENT = "request-sent", e2))(Ha || {});
const Cl = new zr(), Tm = 31;
var Pm = ((e2) => (e2.EMPTY = "Please enter a valid name", e2.LENGTH_EXCEEDED = `The name is too long, it should not exceed ${Tm} characters`, e2.SHOULD_START_WITH_LETTER = "The name can only start with a letter or a Japanese character", e2.INVALID = "Invalid name", e2))(Pm || {});
function xC(e2) {
  if (e2 === "")
    throw new Error(
      "Please enter a valid name"
      /* EMPTY */
    );
  if (e2.length > Tm)
    throw new Error(Pm.LENGTH_EXCEEDED);
  if (!/^[a-zA-Z\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FAF]/.test(e2))
    throw new Error(
      "The name can only start with a letter or a Japanese character"
      /* SHOULD_START_WITH_LETTER */
    );
  if (!/^[\w\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FAF-]+$/i.test(e2))
    throw new Error(
      "Invalid name"
      /* INVALID */
    );
  return true;
}
function qM(e2) {
  if (!e2) return null;
  if (typeof e2 == "string")
    try {
      xC(e2);
    } catch (r) {
      return r.message;
    }
}
function ZM(e2, r) {
  let n = "";
  if (["array", "object"].includes(r))
    try {
      const o = JSON.parse(e2);
      r === "array" && (!Array.isArray(o) || !Xe.isObject(o)) && (n = `Invalid value for type ${r}`), r === "object" && (!Xe.isObject(o) || Array.isArray(o)) && (n = `Invalid value for type ${r}`);
    } catch {
      n = `Invalid value for type ${r}`;
    }
  return r === "date" && (new RegExp(
    /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/
  ).test(e2) || (n = `Invalid value for type ${r}`)), r === "number" && isNaN(+e2) && (n = `Invalid value for type ${r}`), ["boolean", "bool"].includes(r) && typeof e2 != "boolean" && !["true", "false"].includes(e2) && (n = `Invalid value for type ${r}`), n;
}
function ef(e2) {
  const r = new RegExp(
    ':(?!4D\\.\\w+)[CPK]?\\d+(?=(?:[^"{}\\[\\]\\\\]*(?:\\\\.|"(?:[^"{}\\[\\]\\\\]*\\\\.)*[^"{}\\[\\]\\\\]*"))*[^"}\\]]*$)',
    "gm"
  );
  return e2.replace(r, "");
}
var Cm = /* @__PURE__ */ ((e2) => (e2.METHODS = "method", e2.WEBFORMS = "webform", e2.CLASSES = "class", e2.WELCOME = "welcome", e2.SETTINGS = "settings", e2.ROOT = "root", e2.REPORTS = "report", e2))(Cm || {});
const On = {
  CLASSES: "Classes",
  METHODS: "Methods",
  SHARED: "Shared",
  WEBFORMS: "WebForms",
  CLASSES_FOLDER: "ClassesFolder",
  REPORTS: "Reports",
  DEBUGGER: "Debugger"
};
var sr = /* @__PURE__ */ ((e2) => (e2.FOLDER = "folder", e2.WEBFORM = "webform", e2.REPORT = "report", e2.METHOD = "method", e2.CLASS = "class", e2.CLASS_FOLDER = "classfolder", e2.DEBUGGER = "debugger", e2.WELCOME = "welcome", e2.SETTINGS = "settings", e2.METHODS = "method", e2.WEBFORMS = "webform", e2.CLASSES = "class", e2.DEBUGGERS = "debugger", e2.MODELS = "models", e2.ROLES = "roles", e2.HTTP_HANDLERS = "http-handlers", e2.LOCALIZATION = "localization", e2.MODEL = "model", e2.DATA_EXPLORER = "dataexplorer", e2.MOBILE = "mobile", e2.MOBILEFORM = "mform", e2.FILE = "file", e2.TEXT = "text", e2))(sr || {}), kn = /* @__PURE__ */ ((e2) => (e2.GET_FOLDER = "getFolder", e2.GET = "get", e2.SAVE = "save", e2.RENAME = "rename", e2.DROP = "drop", e2.ADD_FOLDER = "addFolder", e2.CREATE_FOLDER = "mkdir", e2.RENAME_FOLDER = "renameFolder", e2.DROP_FOLDER = "dropFolder", e2.REMOVE_ITEM = "removeItem", e2.MOVE_ITEM = "moveItem", e2.GET_INFO = "getInfo", e2.SAVE_CONTENT = "save", e2.UPDATE_CHECK = "update:check", e2.UPDATE_INSTALL = "update:install", e2.GET_APP_SETTINGS = "getWebServerInfo", e2.GET_FILE_CONTENT = "getFileContent", e2.SET_FILE_CONTENT = "setFileContent", e2.GET_FILES_INFO = "getFilesInfo", e2))(kn || {}), Rm = /* @__PURE__ */ ((e2) => (e2[e2.DISABLED = 0] = "DISABLED", e2[e2.ENABLED = 1] = "ENABLED", e2))(Rm || {});
const OC = "roles.json", AC = "qodlyApp.json", KM = "model.4DModel", TC = "HTTPHandlers.json", GM = "Localization/i18n";
function PC(e2) {
  const r = e2.split("."), n = r.pop(), o = r.join(".").split("/")[0];
  switch (true) {
    case n === "4DModel":
      return sr.MODEL;
    case n === "WebForm":
      return sr.WEBFORM;
    case (["4dm", "4qs", "4qm"].includes(n) && o === On.METHODS):
      return sr.METHOD;
    case (["4dm", "4qs", "4qm"].includes(n) && o === On.CLASSES):
      return sr.CLASS;
    case e2 === OC:
      return sr.ROLES;
    case e2 === TC:
      return sr.HTTP_HANDLERS;
    case e2 === AC:
      return sr.SETTINGS;
    default:
      return sr.TEXT;
  }
}
function VM(e2, r = false) {
  switch (e2) {
    case On.REPORTS:
    case "report":
      return "QoDoc";
    case On.WEBFORMS:
    case "webform":
      return "WebForm";
    case "Mobile":
    case "mform":
      return "MForm";
    case "class":
    case "method":
    case On.CLASSES:
    case On.METHODS:
      return r ? "4qs" : "4dm";
    default:
      return "";
  }
}
function YM(e2, r = "") {
  const n = new RegExp("(?<=\\/)(\\w+)(?=\\.)").exec(e2);
  return n ? n[1] : r;
}
class CC {
  constructor() {
    this.current = Promise.resolve();
  }
  lock() {
    let r;
    const n = new Promise((a) => {
      r = a;
    }), o = this.current.then(() => r);
    return this.current = n, o;
  }
}
function Mm() {
  const e2 = new CC();
  return async (r) => {
    const n = await e2.lock();
    try {
      const o = await r();
      return n(), o;
    } catch (o) {
      console.error(o), n();
      return;
    }
  };
}
const RC = Xe.curry(
  (e2, r, n) => e2 && Xe.get(n, e2) === r
), XM = Xe.curry((e2, r, n) => Xe.get(n, e2) !== r), JM = Xe.curry((e2, r) => Xe.get(r, "id") !== e2), QM = Xe.curry((e2, r) => Xe.get(r, "id") === e2), eI = Xe.curry((e2, r) => Xe.get(r, "path") === e2);
function tI(e2 = "id", r, n) {
  return n.findIndex(RC(e2, r)) !== -1;
}
function rI(e2) {
  if (!e2) return "";
  const { id: r, namespace: n } = e2;
  return n && r ? `${n}:${r}` : r;
}
function MC(e2) {
  return [
    "bool",
    "word",
    "string",
    "text",
    "uuid",
    "short",
    "long",
    "number",
    "long64",
    "duration",
    "object",
    "date",
    "image",
    "blob"
  ].includes(e2.type || "");
}
function nI(e2) {
  return e2.type === "object";
}
function IC(e2) {
  var r;
  return e2.kind === "relatedEntities" || ((r = e2.type) == null ? void 0 : r.includes("Selection")) || e2.behavior === "relatedEntities";
}
function LC(e2) {
  return e2.kind === "relatedEntity" || e2.behavior === "relatedEntity" || !MC(e2);
}
function iI(e2) {
  return IC(e2) || LC(e2);
}
function oI(e2) {
  return e2.applyTo === "dataStore";
}
function aI(e2) {
  return e2.applyTo === "dataClass";
}
function sI(e2) {
  return e2.applyTo === "entity";
}
function uI(e2) {
  return e2.applyTo === "entityCollection";
}
function lI(e2) {
  return e2.type === "entity";
}
function fI(e2) {
  return e2.type === "entitysel";
}
function FC(e2) {
  return e2.dataType === "array";
}
function $C(e2) {
  return e2.dataType === "object";
}
function NC(e2) {
  return e2.type === "scalar";
}
function cI(e2) {
  return FC(e2) || $C(e2) || NC(e2);
}
const dI = (e2) => e2 != null && e2.type === "entity", pI = (e2) => e2.type === "entitysel", hI = (e2) => e2.type === "array" || e2.type === "scalar" && e2.dataType === "array", vI = (e2) => e2.type === "object" || e2.type === "scalar" && e2.dataType === "object", mI = (e2) => e2.type === "scalar" && e2.dataType === "date";
function gI() {
  return new Promise((e2, r) => {
    window.addEventListener("bundle:ready", (n) => n.data ? e2() : r(n.caughtErr));
  });
}
function yI() {
  return new Promise((e2) => {
    window.addEventListener("i18n:ready", () => e2());
  });
}
var ja = /* @__PURE__ */ ((e2) => (e2.capable = "capable", e2.incapable = "incapable", e2.indifferent = "indifferent", e2))(ja || {}), DC = /* @__PURE__ */ ((e2) => (e2.soap = "soap", e2.web = "web", e2.sql = "sql", e2.rest = "rest", e2))(DC || {}), Im = /* @__PURE__ */ ((e2) => (e2.table = "table", e2.catalog = "catalog", e2.currentRecord = "currentRecord", e2.currentSelection = "currentSelection", e2))(Im || {});
const wI = {
  publishedSoap: "soap",
  publishedWeb: "web",
  publishedSql: "sql",
  publishedRest: "rest"
  /* rest */
};
function bI(e2) {
  var u;
  let r = {};
  try {
    const l = ((u = e2.match(/\/\/%attributes = (.*)/)) == null ? void 0 : u[1]) || "";
    r = JSON.parse(l);
  } catch {
  }
  const { published4DMobile: n, ...o } = r;
  return {
    ...{
      invisible: false,
      shared: false,
      executedOnServer: false,
      preemptive: ja.indifferent,
      publishedSoap: false,
      publishedWsdl: false,
      publishedWeb: false,
      publishedSql: false,
      publishedRest: !!n,
      publishedRestOptions: n || {
        table: "",
        scope: Im.table
      }
    },
    ...o
  };
}
function kC(e2) {
  const r = {};
  return e2.invisible && (r.invisible = true), e2.shared && (r.shared = true), e2.executedOnServer && (r.executedOnServer = true), e2.preemptive && [ja.capable, ja.incapable].includes(e2.preemptive) && (r.preemptive = e2.preemptive), e2.publishedSoap && (r.publishedSoap = true, e2.publishedWsdl && (r.publishedWsdl = true)), e2.publishedWeb && (r.publishedWeb = true), e2.publishedSql && (r.publishedSql = true), e2.publishedRest && e2.publishedRestOptions && (r.published4DMobile = e2.publishedRestOptions), JSON.stringify(r).replace(/"(true|false)"/g, "$1");
}
function SI(e2, r, n = false) {
  const o = Xe.isString(r) ? r : kC(r);
  if (!n && WC(e2))
    return e2;
  const a = UC(e2);
  return `//%attributes = ${o}\r
${a}`;
}
function WC(e2) {
  return /^\/\/%attributes.*(?:\r\n|\n)?/g.test(e2);
}
function UC(e2) {
  return e2.replace(/^\/\/%attributes.*(?:\r\n|\n)?/g, "");
}
const EI = () => Hl.uuid().replaceAll("-", "").toUpperCase(), ot = "/rest/$designer", ns = "/rest/$designer-ext";
function _I(...e2) {
  return (r) => {
    if (e2.length === 0)
      return r;
    const n = { ...r };
    return e2.forEach((o) => {
      typeof n[o] == "string" && (n[o] = new Date(n[o]));
    }), n;
  };
}
class Ih extends Error {
  constructor(r, n, o) {
    super(), this.url = r, this.response = n, this.data = o;
  }
  log() {
    console.error("Error while sending the request", this);
  }
}
async function Fe(e2, r) {
  var a;
  Cl.next({ action: Ha.REQUEST_SENT });
  const n = await window.fetch(e2, r);
  if (/401/.test(n.status.toString()) && (window.location.href = "/login.html?redirect=studio"), /^[45]/.test(n.status.toString())) {
    let u;
    try {
      const l = await n.json();
      ((a = l == null ? void 0 : l.__ERROR) == null ? void 0 : a.some(
        (w) => w.errCode === 1651
      )) && Cl.next({
        action: Ha.EVENT_EMITED,
        payload: {
          eventName: "onsessionexpired"
        }
      }), u = new Ih(e2, n, l);
    } catch {
      u = new Ih(e2, n);
    }
    throw u.log(), u;
  }
  return await n.json();
}
function xI(e2) {
  return Cl.next({ action: Ha.REQUEST_SENT }), e2;
}
var vr = {}, dt = {}, Lh;
function An() {
  if (Lh) return dt;
  Lh = 1;
  var e2 = dt.ValidationError = function(c, g, b, _, x, P) {
    if (Array.isArray(_) ? (this.path = _, this.property = _.reduce(function(M, B) {
      return M + d(B);
    }, "instance")) : _ !== void 0 && (this.property = _), c && (this.message = c), b) {
      var T = b.$id || b.id;
      this.schema = T || b;
    }
    g !== void 0 && (this.instance = g), this.name = x, this.argument = P, this.stack = this.toString();
  };
  e2.prototype.toString = function() {
    return this.property + " " + this.message;
  };
  var r = dt.ValidatorResult = function(c, g, b, _) {
    this.instance = c, this.schema = g, this.options = b, this.path = _.path, this.propertyPath = _.propertyPath, this.errors = [], this.throwError = b && b.throwError, this.throwFirst = b && b.throwFirst, this.throwAll = b && b.throwAll, this.disableFormat = b && b.disableFormat === true;
  };
  r.prototype.addError = function(c) {
    var g;
    if (typeof c == "string")
      g = new e2(c, this.instance, this.schema, this.path);
    else {
      if (!c) throw new Error("Missing error detail");
      if (!c.message) throw new Error("Missing error message");
      if (!c.name) throw new Error("Missing validator type");
      g = new e2(c.message, this.instance, this.schema, this.path, c.name, c.argument);
    }
    if (this.errors.push(g), this.throwFirst)
      throw new o(this);
    if (this.throwError)
      throw g;
    return g;
  }, r.prototype.importErrors = function(c) {
    typeof c == "string" || c && c.validatorType ? this.addError(c) : c && c.errors && (this.errors = this.errors.concat(c.errors));
  };
  function n(m, c) {
    return c + ": " + m.toString() + `
`;
  }
  r.prototype.toString = function(c) {
    return this.errors.map(n).join("");
  }, Object.defineProperty(r.prototype, "valid", { get: function() {
    return !this.errors.length;
  } }), dt.ValidatorResultError = o;
  function o(m) {
    typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, o), this.instance = m.instance, this.schema = m.schema, this.options = m.options, this.errors = m.errors;
  }
  o.prototype = new Error(), o.prototype.constructor = o, o.prototype.name = "Validation Error";
  var a = dt.SchemaError = function m(c, g) {
    this.message = c, this.schema = g, Error.call(this, c), typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, m);
  };
  a.prototype = Object.create(
    Error.prototype,
    {
      constructor: { value: a, enumerable: false },
      name: { value: "SchemaError", enumerable: false }
    }
  );
  var u = dt.SchemaContext = function(c, g, b, _, x) {
    this.schema = c, this.options = g, Array.isArray(b) ? (this.path = b, this.propertyPath = b.reduce(function(P, T) {
      return P + d(T);
    }, "instance")) : this.propertyPath = b, this.base = _, this.schemas = x;
  };
  u.prototype.resolve = function(c) {
    return p(this.base, c);
  }, u.prototype.makeChild = function(c, g) {
    var b = g === void 0 ? this.path : this.path.concat([g]), _ = c.$id || c.id;
    let x = p(this.base, _ || "");
    var P = new u(c, this.options, b, x, Object.create(this.schemas));
    return _ && !P.schemas[x] && (P.schemas[x] = c), P;
  };
  var l = dt.FORMAT_REGEXPS = {
    // 7.3.1. Dates, Times, and Duration
    "date-time": /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/,
    date: /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/,
    time: /^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/,
    duration: /P(T\d+(H(\d+M(\d+S)?)?|M(\d+S)?|S)|\d+(D|M(\d+D)?|Y(\d+M(\d+D)?)?)(T\d+(H(\d+M(\d+S)?)?|M(\d+S)?|S))?|\d+W)/i,
    // 7.3.2. Email Addresses
    // TODO: fix the email production
    email: /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
    "idn-email": /^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u,
    // 7.3.3. Hostnames
    // 7.3.4. IP Addresses
    "ip-address": /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    // FIXME whitespace is invalid
    ipv6: /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
    // 7.3.5. Resource Identifiers
    // TODO: A more accurate regular expression for "uri" goes:
    // [A-Za-z][+\-.0-9A-Za-z]*:((/(/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?)?#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(/(/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])|/?%[0-9A-Fa-f]{2}|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*(#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?|/(/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)?)?
    uri: /^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$/,
    "uri-reference": /^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/,
    iri: /^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$/,
    "iri-reference": /^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~-\u{10FFFF}]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~-\u{10FFFF}]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~-\u{10FFFF}])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~-\u{10FFFF}]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/u,
    uuid: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    // 7.3.6. uri-template
    "uri-template": /(%[0-9a-f]{2}|[!#$&(-;=?@\[\]_a-z~]|\{[!#&+,./;=?@|]?(%[0-9a-f]{2}|[0-9_a-z])(\.?(%[0-9a-f]{2}|[0-9_a-z]))*(:[1-9]\d{0,3}|\*)?(,(%[0-9a-f]{2}|[0-9_a-z])(\.?(%[0-9a-f]{2}|[0-9_a-z]))*(:[1-9]\d{0,3}|\*)?)*\})*/iu,
    // 7.3.7. JSON Pointers
    "json-pointer": /^(\/([\x00-\x2e0-@\[-}\x7f]|~[01])*)*$/iu,
    "relative-json-pointer": /^\d+(#|(\/([\x00-\x2e0-@\[-}\x7f]|~[01])*)*)$/iu,
    // hostname regex from: http://stackoverflow.com/a/1420225/5628
    hostname: /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
    "host-name": /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
    "utc-millisec": function(m) {
      return typeof m == "string" && parseFloat(m) === parseInt(m, 10) && !isNaN(m);
    },
    // 7.3.8. regex
    regex: function(m) {
      var c = true;
      try {
        new RegExp(m);
      } catch {
        c = false;
      }
      return c;
    },
    // Other definitions
    // "style" was removed from JSON Schema in draft-4 and is deprecated
    style: /[\r\n\t ]*[^\r\n\t ][^:]*:[\r\n\t ]*[^\r\n\t ;]*[\r\n\t ]*;?/,
    // "color" was removed from JSON Schema in draft-4 and is deprecated
    color: /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
    phone: /^\+(?:[0-9] ?){6,14}[0-9]$/,
    alpha: /^[a-zA-Z]+$/,
    alphanumeric: /^[a-zA-Z0-9]+$/
  };
  l.regexp = l.regex, l.pattern = l.regex, l.ipv4 = l["ip-address"], dt.isFormat = function(c, g, b) {
    if (typeof c == "string" && l[g] !== void 0) {
      if (l[g] instanceof RegExp)
        return l[g].test(c);
      if (typeof l[g] == "function")
        return l[g](c);
    } else if (b && b.customFormats && typeof b.customFormats[g] == "function")
      return b.customFormats[g](c);
    return true;
  };
  var d = dt.makeSuffix = function(c) {
    return c = c.toString(), !c.match(/[.\s\[\]]/) && !c.match(/^[\d]/) ? "." + c : c.match(/^\d+$/) ? "[" + c + "]" : "[" + JSON.stringify(c) + "]";
  };
  dt.deepCompareStrict = function m(c, g) {
    if (typeof c != typeof g)
      return false;
    if (Array.isArray(c))
      return !Array.isArray(g) || c.length !== g.length ? false : c.every(function(x, P) {
        return m(c[P], g[P]);
      });
    if (typeof c == "object") {
      if (!c || !g)
        return c === g;
      var b = Object.keys(c), _ = Object.keys(g);
      return b.length !== _.length ? false : b.every(function(x) {
        return m(c[x], g[x]);
      });
    }
    return c === g;
  };
  function w(m, c, g, b) {
    typeof g == "object" ? c[b] = h(m[b], g) : m.indexOf(g) === -1 && c.push(g);
  }
  function S(m, c, g) {
    c[g] = m[g];
  }
  function y(m, c, g, b) {
    typeof c[b] != "object" || !c[b] ? g[b] = c[b] : m[b] ? g[b] = h(m[b], c[b]) : g[b] = c[b];
  }
  function h(m, c) {
    var g = Array.isArray(c), b = g && [] || {};
    return g ? (m = m || [], b = b.concat(m), c.forEach(w.bind(null, m, b))) : (m && typeof m == "object" && Object.keys(m).forEach(S.bind(null, m, b)), Object.keys(c).forEach(y.bind(null, m, c, b))), b;
  }
  dt.deepMerge = h, dt.objectGetPath = function(c, g) {
    for (var b = g.split("/").slice(1), _; typeof (_ = b.shift()) == "string"; ) {
      var x = decodeURIComponent(_.replace(/~0/, "~").replace(/~1/g, "/"));
      if (!(x in c)) return;
      c = c[x];
    }
    return c;
  };
  function f(m) {
    return "/" + encodeURIComponent(m).replace(/~/g, "%7E");
  }
  dt.encodePath = function(c) {
    return c.map(f).join("");
  }, dt.getDecimalPlaces = function(c) {
    var g = 0;
    if (isNaN(c)) return g;
    typeof c != "number" && (c = Number(c));
    var b = c.toString().split("e");
    if (b.length === 2) {
      if (b[1][0] !== "-")
        return g;
      g = Number(b[1].slice(1));
    }
    var _ = b[0].split(".");
    return _.length === 2 && (g += _[1].length), g;
  }, dt.isSchema = function(c) {
    return typeof c == "object" && c || typeof c == "boolean";
  };
  var p = dt.resolveUrl = function(c, g) {
    const b = new URL(g, new URL(c, "resolve://"));
    if (b.protocol === "resolve:") {
      const { pathname: _, search: x, hash: P } = b;
      return _ + x + P;
    }
    return b.toString();
  };
  return dt;
}
var fl, Fh;
function zC() {
  if (Fh) return fl;
  Fh = 1;
  var e2 = An(), r = e2.ValidatorResult, n = e2.SchemaError, o = {};
  o.ignoreProperties = {
    // informative properties
    id: true,
    default: true,
    description: true,
    title: true,
    // arguments to other properties
    additionalItems: true,
    then: true,
    else: true,
    // special-handled properties
    $schema: true,
    $ref: true,
    extends: true
  };
  var a = o.validators = {};
  a.type = function(h, f, p, m) {
    if (h === void 0)
      return null;
    var c = new r(h, f, p, m), g = Array.isArray(f.type) ? f.type : [f.type];
    if (!g.some(this.testType.bind(this, h, f, p, m))) {
      var b = g.map(function(_) {
        if (_) {
          var x = _.$id || _.id;
          return x ? "<" + x + ">" : _ + "";
        }
      });
      c.addError({
        name: "type",
        argument: b,
        message: "is not of a type(s) " + b
      });
    }
    return c;
  };
  function u(y, h, f, p, m) {
    var c = h.throwError, g = h.throwAll;
    h.throwError = false, h.throwAll = false;
    var b = this.validateSchema(y, m, h, f);
    return h.throwError = c, h.throwAll = g, !b.valid && p instanceof Function && p(b), b.valid;
  }
  a.anyOf = function(h, f, p, m) {
    if (h === void 0)
      return null;
    var c = new r(h, f, p, m), g = new r(h, f, p, m);
    if (!Array.isArray(f.anyOf))
      throw new n("anyOf must be an array");
    if (!f.anyOf.some(
      u.bind(
        this,
        h,
        p,
        m,
        function(_) {
          g.importErrors(_);
        }
      )
    )) {
      var b = f.anyOf.map(function(_, x) {
        var P = _.$id || _.id;
        return P ? "<" + P + ">" : _.title && JSON.stringify(_.title) || _.$ref && "<" + _.$ref + ">" || "[subschema " + x + "]";
      });
      p.nestedErrors && c.importErrors(g), c.addError({
        name: "anyOf",
        argument: b,
        message: "is not any of " + b.join(",")
      });
    }
    return c;
  }, a.allOf = function(h, f, p, m) {
    if (h === void 0)
      return null;
    if (!Array.isArray(f.allOf))
      throw new n("allOf must be an array");
    var c = new r(h, f, p, m), g = this;
    return f.allOf.forEach(function(b, _) {
      var x = g.validateSchema(h, b, p, m);
      if (!x.valid) {
        var P = b.$id || b.id, T = P || b.title && JSON.stringify(b.title) || b.$ref && "<" + b.$ref + ">" || "[subschema " + _ + "]";
        c.addError({
          name: "allOf",
          argument: { id: T, length: x.errors.length, valid: x },
          message: "does not match allOf schema " + T + " with " + x.errors.length + " error[s]:"
        }), c.importErrors(x);
      }
    }), c;
  }, a.oneOf = function(h, f, p, m) {
    if (h === void 0)
      return null;
    if (!Array.isArray(f.oneOf))
      throw new n("oneOf must be an array");
    var c = new r(h, f, p, m), g = new r(h, f, p, m), b = f.oneOf.filter(
      u.bind(
        this,
        h,
        p,
        m,
        function(x) {
          g.importErrors(x);
        }
      )
    ).length, _ = f.oneOf.map(function(x, P) {
      var T = x.$id || x.id;
      return T || x.title && JSON.stringify(x.title) || x.$ref && "<" + x.$ref + ">" || "[subschema " + P + "]";
    });
    return b !== 1 && (p.nestedErrors && c.importErrors(g), c.addError({
      name: "oneOf",
      argument: _,
      message: "is not exactly one from " + _.join(",")
    })), c;
  }, a.if = function(h, f, p, m) {
    if (h === void 0) return null;
    if (!e2.isSchema(f.if)) throw new Error('Expected "if" keyword to be a schema');
    var c = u.call(this, h, p, m, null, f.if), g = new r(h, f, p, m), b;
    if (c) {
      if (f.then === void 0) return;
      if (!e2.isSchema(f.then)) throw new Error('Expected "then" keyword to be a schema');
      b = this.validateSchema(h, f.then, p, m.makeChild(f.then)), g.importErrors(b);
    } else {
      if (f.else === void 0) return;
      if (!e2.isSchema(f.else)) throw new Error('Expected "else" keyword to be a schema');
      b = this.validateSchema(h, f.else, p, m.makeChild(f.else)), g.importErrors(b);
    }
    return g;
  };
  function l(y, h) {
    if (Object.hasOwnProperty.call(y, h)) return y[h];
    if (h in y) {
      for (; y = Object.getPrototypeOf(y); )
        if (Object.propertyIsEnumerable.call(y, h)) return y[h];
    }
  }
  a.propertyNames = function(h, f, p, m) {
    if (this.types.object(h)) {
      var c = new r(h, f, p, m), g = f.propertyNames !== void 0 ? f.propertyNames : {};
      if (!e2.isSchema(g)) throw new n('Expected "propertyNames" to be a schema (object or boolean)');
      for (var b in h)
        if (l(h, b) !== void 0) {
          var _ = this.validateSchema(b, g, p, m.makeChild(g));
          c.importErrors(_);
        }
      return c;
    }
  }, a.properties = function(h, f, p, m) {
    if (this.types.object(h)) {
      var c = new r(h, f, p, m), g = f.properties || {};
      for (var b in g) {
        var _ = g[b];
        if (_ !== void 0) {
          if (_ === null)
            throw new n('Unexpected null, expected schema in "properties"');
          typeof p.preValidateProperty == "function" && p.preValidateProperty(h, b, _, p, m);
          var x = l(h, b), P = this.validateSchema(x, _, p, m.makeChild(_, b));
          P.instance !== c.instance[b] && (c.instance[b] = P.instance), c.importErrors(P);
        }
      }
      return c;
    }
  };
  function d(y, h, f, p, m, c) {
    if (this.types.object(y) && !(h.properties && h.properties[m] !== void 0))
      if (h.additionalProperties === false)
        c.addError({
          name: "additionalProperties",
          argument: m,
          message: "is not allowed to have the additional property " + JSON.stringify(m)
        });
      else {
        var g = h.additionalProperties || {};
        typeof f.preValidateProperty == "function" && f.preValidateProperty(y, m, g, f, p);
        var b = this.validateSchema(y[m], g, f, p.makeChild(g, m));
        b.instance !== c.instance[m] && (c.instance[m] = b.instance), c.importErrors(b);
      }
  }
  a.patternProperties = function(h, f, p, m) {
    if (this.types.object(h)) {
      var c = new r(h, f, p, m), g = f.patternProperties || {};
      for (var b in h) {
        var _ = true;
        for (var x in g) {
          var P = g[x];
          if (P !== void 0) {
            if (P === null)
              throw new n('Unexpected null, expected schema in "patternProperties"');
            try {
              var T = new RegExp(x, "u");
            } catch {
              T = new RegExp(x);
            }
            if (T.test(b)) {
              _ = false, typeof p.preValidateProperty == "function" && p.preValidateProperty(h, b, P, p, m);
              var M = this.validateSchema(h[b], P, p, m.makeChild(P, b));
              M.instance !== c.instance[b] && (c.instance[b] = M.instance), c.importErrors(M);
            }
          }
        }
        _ && d.call(this, h, f, p, m, b, c);
      }
      return c;
    }
  }, a.additionalProperties = function(h, f, p, m) {
    if (this.types.object(h)) {
      if (f.patternProperties)
        return null;
      var c = new r(h, f, p, m);
      for (var g in h)
        d.call(this, h, f, p, m, g, c);
      return c;
    }
  }, a.minProperties = function(h, f, p, m) {
    if (this.types.object(h)) {
      var c = new r(h, f, p, m), g = Object.keys(h);
      return g.length >= f.minProperties || c.addError({
        name: "minProperties",
        argument: f.minProperties,
        message: "does not meet minimum property length of " + f.minProperties
      }), c;
    }
  }, a.maxProperties = function(h, f, p, m) {
    if (this.types.object(h)) {
      var c = new r(h, f, p, m), g = Object.keys(h);
      return g.length <= f.maxProperties || c.addError({
        name: "maxProperties",
        argument: f.maxProperties,
        message: "does not meet maximum property length of " + f.maxProperties
      }), c;
    }
  }, a.items = function(h, f, p, m) {
    var c = this;
    if (this.types.array(h) && f.items !== void 0) {
      var g = new r(h, f, p, m);
      return h.every(function(b, _) {
        if (Array.isArray(f.items))
          var x = f.items[_] === void 0 ? f.additionalItems : f.items[_];
        else
          var x = f.items;
        if (x === void 0)
          return true;
        if (x === false)
          return g.addError({
            name: "items",
            message: "additionalItems not permitted"
          }), false;
        var P = c.validateSchema(b, x, p, m.makeChild(x, _));
        return P.instance !== g.instance[_] && (g.instance[_] = P.instance), g.importErrors(P), true;
      }), g;
    }
  }, a.contains = function(h, f, p, m) {
    var c = this;
    if (this.types.array(h) && f.contains !== void 0) {
      if (!e2.isSchema(f.contains)) throw new Error('Expected "contains" keyword to be a schema');
      var g = new r(h, f, p, m), b = h.some(function(_, x) {
        var P = c.validateSchema(_, f.contains, p, m.makeChild(f.contains, x));
        return P.errors.length === 0;
      });
      return b === false && g.addError({
        name: "contains",
        argument: f.contains,
        message: "must contain an item matching given schema"
      }), g;
    }
  }, a.minimum = function(h, f, p, m) {
    if (this.types.number(h)) {
      var c = new r(h, f, p, m);
      return f.exclusiveMinimum && f.exclusiveMinimum === true ? h > f.minimum || c.addError({
        name: "minimum",
        argument: f.minimum,
        message: "must be greater than " + f.minimum
      }) : h >= f.minimum || c.addError({
        name: "minimum",
        argument: f.minimum,
        message: "must be greater than or equal to " + f.minimum
      }), c;
    }
  }, a.maximum = function(h, f, p, m) {
    if (this.types.number(h)) {
      var c = new r(h, f, p, m);
      return f.exclusiveMaximum && f.exclusiveMaximum === true ? h < f.maximum || c.addError({
        name: "maximum",
        argument: f.maximum,
        message: "must be less than " + f.maximum
      }) : h <= f.maximum || c.addError({
        name: "maximum",
        argument: f.maximum,
        message: "must be less than or equal to " + f.maximum
      }), c;
    }
  }, a.exclusiveMinimum = function(h, f, p, m) {
    if (typeof f.exclusiveMinimum != "boolean" && this.types.number(h)) {
      var c = new r(h, f, p, m), g = h > f.exclusiveMinimum;
      return g || c.addError({
        name: "exclusiveMinimum",
        argument: f.exclusiveMinimum,
        message: "must be strictly greater than " + f.exclusiveMinimum
      }), c;
    }
  }, a.exclusiveMaximum = function(h, f, p, m) {
    if (typeof f.exclusiveMaximum != "boolean" && this.types.number(h)) {
      var c = new r(h, f, p, m), g = h < f.exclusiveMaximum;
      return g || c.addError({
        name: "exclusiveMaximum",
        argument: f.exclusiveMaximum,
        message: "must be strictly less than " + f.exclusiveMaximum
      }), c;
    }
  };
  var w = function(h, f, p, m, c, g) {
    if (this.types.number(h)) {
      var b = f[c];
      if (b == 0)
        throw new n(c + " cannot be zero");
      var _ = new r(h, f, p, m), x = e2.getDecimalPlaces(h), P = e2.getDecimalPlaces(b), T = Math.max(x, P), M = Math.pow(10, T);
      return Math.round(h * M) % Math.round(b * M) !== 0 && _.addError({
        name: c,
        argument: b,
        message: g + JSON.stringify(b)
      }), _;
    }
  };
  a.multipleOf = function(h, f, p, m) {
    return w.call(this, h, f, p, m, "multipleOf", "is not a multiple of (divisible by) ");
  }, a.divisibleBy = function(h, f, p, m) {
    return w.call(this, h, f, p, m, "divisibleBy", "is not divisible by (multiple of) ");
  }, a.required = function(h, f, p, m) {
    var c = new r(h, f, p, m);
    return h === void 0 && f.required === true ? c.addError({
      name: "required",
      message: "is required"
    }) : this.types.object(h) && Array.isArray(f.required) && f.required.forEach(function(g) {
      l(h, g) === void 0 && c.addError({
        name: "required",
        argument: g,
        message: "requires property " + JSON.stringify(g)
      });
    }), c;
  }, a.pattern = function(h, f, p, m) {
    if (this.types.string(h)) {
      var c = new r(h, f, p, m), g = f.pattern;
      try {
        var b = new RegExp(g, "u");
      } catch {
        b = new RegExp(g);
      }
      return h.match(b) || c.addError({
        name: "pattern",
        argument: f.pattern,
        message: "does not match pattern " + JSON.stringify(f.pattern.toString())
      }), c;
    }
  }, a.format = function(h, f, p, m) {
    if (h !== void 0) {
      var c = new r(h, f, p, m);
      return !c.disableFormat && !e2.isFormat(h, f.format, this) && c.addError({
        name: "format",
        argument: f.format,
        message: "does not conform to the " + JSON.stringify(f.format) + " format"
      }), c;
    }
  }, a.minLength = function(h, f, p, m) {
    if (this.types.string(h)) {
      var c = new r(h, f, p, m), g = h.match(/[\uDC00-\uDFFF]/g), b = h.length - (g ? g.length : 0);
      return b >= f.minLength || c.addError({
        name: "minLength",
        argument: f.minLength,
        message: "does not meet minimum length of " + f.minLength
      }), c;
    }
  }, a.maxLength = function(h, f, p, m) {
    if (this.types.string(h)) {
      var c = new r(h, f, p, m), g = h.match(/[\uDC00-\uDFFF]/g), b = h.length - (g ? g.length : 0);
      return b <= f.maxLength || c.addError({
        name: "maxLength",
        argument: f.maxLength,
        message: "does not meet maximum length of " + f.maxLength
      }), c;
    }
  }, a.minItems = function(h, f, p, m) {
    if (this.types.array(h)) {
      var c = new r(h, f, p, m);
      return h.length >= f.minItems || c.addError({
        name: "minItems",
        argument: f.minItems,
        message: "does not meet minimum length of " + f.minItems
      }), c;
    }
  }, a.maxItems = function(h, f, p, m) {
    if (this.types.array(h)) {
      var c = new r(h, f, p, m);
      return h.length <= f.maxItems || c.addError({
        name: "maxItems",
        argument: f.maxItems,
        message: "does not meet maximum length of " + f.maxItems
      }), c;
    }
  };
  function S(y, h, f) {
    var p, m = f.length;
    for (p = h + 1, m; p < m; p++)
      if (e2.deepCompareStrict(y, f[p]))
        return false;
    return true;
  }
  return a.uniqueItems = function(h, f, p, m) {
    if (f.uniqueItems === true && this.types.array(h)) {
      var c = new r(h, f, p, m);
      return h.every(S) || c.addError({
        name: "uniqueItems",
        message: "contains duplicate item"
      }), c;
    }
  }, a.dependencies = function(h, f, p, m) {
    if (this.types.object(h)) {
      var c = new r(h, f, p, m);
      for (var g in f.dependencies)
        if (h[g] !== void 0) {
          var b = f.dependencies[g], _ = m.makeChild(b, g);
          if (typeof b == "string" && (b = [b]), Array.isArray(b))
            b.forEach(function(P) {
              h[P] === void 0 && c.addError({
                // FIXME there's two different "dependencies" errors here with slightly different outputs
                // Can we make these the same? Or should we create different error types?
                name: "dependencies",
                argument: _.propertyPath,
                message: "property " + P + " not found, required by " + _.propertyPath
              });
            });
          else {
            var x = this.validateSchema(h, b, p, _);
            c.instance !== x.instance && (c.instance = x.instance), x && x.errors.length && (c.addError({
              name: "dependencies",
              argument: _.propertyPath,
              message: "does not meet dependency required by " + _.propertyPath
            }), c.importErrors(x));
          }
        }
      return c;
    }
  }, a.enum = function(h, f, p, m) {
    if (h === void 0)
      return null;
    if (!Array.isArray(f.enum))
      throw new n("enum expects an array", f);
    var c = new r(h, f, p, m);
    return f.enum.some(e2.deepCompareStrict.bind(null, h)) || c.addError({
      name: "enum",
      argument: f.enum,
      message: "is not one of enum values: " + f.enum.map(String).join(",")
    }), c;
  }, a.const = function(h, f, p, m) {
    if (h === void 0)
      return null;
    var c = new r(h, f, p, m);
    return e2.deepCompareStrict(f.const, h) || c.addError({
      name: "const",
      argument: f.const,
      message: "does not exactly match expected constant: " + f.const
    }), c;
  }, a.not = a.disallow = function(h, f, p, m) {
    var c = this;
    if (h === void 0) return null;
    var g = new r(h, f, p, m), b = f.not || f.disallow;
    return b ? (Array.isArray(b) || (b = [b]), b.forEach(function(_) {
      if (c.testType(h, f, p, m, _)) {
        var x = _ && (_.$id || _.id), P = x || _;
        g.addError({
          name: "not",
          argument: P,
          message: "is of prohibited type " + P
        });
      }
    }), g) : null;
  }, fl = o, fl;
}
var Pa = {}, $h;
function Rl() {
  if ($h) return Pa;
  $h = 1;
  var e2 = An();
  Pa.SchemaScanResult = r;
  function r(n, o) {
    this.id = n, this.ref = o;
  }
  return Pa.scan = function(o, a) {
    function u(y, h) {
      if (!h || typeof h != "object") return;
      if (h.$ref) {
        let c = e2.resolveUrl(y, h.$ref);
        S[c] = S[c] ? S[c] + 1 : 0;
        return;
      }
      var f = h.$id || h.id;
      let p = e2.resolveUrl(y, f);
      var m = f ? p : y;
      if (m) {
        if (m.indexOf("#") < 0 && (m += "#"), w[m]) {
          if (!e2.deepCompareStrict(w[m], h))
            throw new Error("Schema <" + m + "> already exists with different definition");
          return w[m];
        }
        w[m] = h, m[m.length - 1] == "#" && (w[m.substring(0, m.length - 1)] = h);
      }
      l(m + "/items", Array.isArray(h.items) ? h.items : [h.items]), l(m + "/extends", Array.isArray(h.extends) ? h.extends : [h.extends]), u(m + "/additionalItems", h.additionalItems), d(m + "/properties", h.properties), u(m + "/additionalProperties", h.additionalProperties), d(m + "/definitions", h.definitions), d(m + "/patternProperties", h.patternProperties), d(m + "/dependencies", h.dependencies), l(m + "/disallow", h.disallow), l(m + "/allOf", h.allOf), l(m + "/anyOf", h.anyOf), l(m + "/oneOf", h.oneOf), u(m + "/not", h.not);
    }
    function l(y, h) {
      if (Array.isArray(h))
        for (var f = 0; f < h.length; f++)
          u(y + "/" + f, h[f]);
    }
    function d(y, h) {
      if (!(!h || typeof h != "object"))
        for (var f in h)
          u(y + "/" + f, h[f]);
    }
    var w = {}, S = {};
    return u(o, a), new r(w, S);
  }, Pa;
}
var cl, Nh;
function BC() {
  if (Nh) return cl;
  Nh = 1;
  var e2 = zC(), r = An(), n = Rl().scan, o = r.ValidatorResult, a = r.ValidatorResultError, u = r.SchemaError, l = r.SchemaContext, d = "/", w = function h() {
    this.customFormats = Object.create(h.prototype.customFormats), this.schemas = {}, this.unresolvedRefs = [], this.types = Object.create(y), this.attributes = Object.create(e2.validators);
  };
  w.prototype.customFormats = {}, w.prototype.schemas = null, w.prototype.types = null, w.prototype.attributes = null, w.prototype.unresolvedRefs = null, w.prototype.addSchema = function(f, p) {
    var m = this;
    if (!f)
      return null;
    var c = n(p || d, f), g = p || f.$id || f.id;
    for (var b in c.id)
      this.schemas[b] = c.id[b];
    for (var b in c.ref)
      this.unresolvedRefs.push(b);
    return this.unresolvedRefs = this.unresolvedRefs.filter(function(_) {
      return typeof m.schemas[_] > "u";
    }), this.schemas[g];
  }, w.prototype.addSubSchemaArray = function(f, p) {
    if (Array.isArray(p))
      for (var m = 0; m < p.length; m++)
        this.addSubSchema(f, p[m]);
  }, w.prototype.addSubSchemaObject = function(f, p) {
    if (!(!p || typeof p != "object"))
      for (var m in p)
        this.addSubSchema(f, p[m]);
  }, w.prototype.setSchemas = function(f) {
    this.schemas = f;
  }, w.prototype.getSchema = function(f) {
    return this.schemas[f];
  }, w.prototype.validate = function(f, p, m, c) {
    if (typeof p != "boolean" && typeof p != "object" || p === null)
      throw new u("Expected `schema` to be an object or boolean");
    m || (m = {});
    var g = p.$id || p.id;
    let b = r.resolveUrl(m.base, g || "");
    if (!c) {
      c = new l(p, m, [], b, Object.create(this.schemas)), c.schemas[b] || (c.schemas[b] = p);
      var _ = n(b, p);
      for (var x in _.id) {
        var P = _.id[x];
        c.schemas[x] = P;
      }
    }
    if (m.required && f === void 0) {
      var T = new o(f, p, m, c);
      return T.addError("is required, but is undefined"), T;
    }
    var T = this.validateSchema(f, p, m, c);
    if (T) {
      if (m.throwAll && T.errors.length)
        throw new a(T);
    } else throw new Error("Result undefined");
    return T;
  };
  function S(h) {
    var f = typeof h == "string" ? h : h.$ref;
    return typeof f == "string" ? f : false;
  }
  w.prototype.validateSchema = function(f, p, m, c) {
    var g = new o(f, p, m, c);
    if (typeof p == "boolean")
      p === true ? p = {} : p === false && (p = { type: [] });
    else if (!p)
      throw new Error("schema is undefined");
    if (p.extends)
      if (Array.isArray(p.extends)) {
        var b = { schema: p, ctx: c };
        p.extends.forEach(this.schemaTraverser.bind(this, b)), p = b.schema, b.schema = null, b.ctx = null, b = null;
      } else
        p = r.deepMerge(p, this.superResolve(p.extends, c));
    var _ = S(p);
    if (_) {
      var x = this.resolve(p, _, c), P = new l(x.subschema, m, c.path, x.switchSchema, c.schemas);
      return this.validateSchema(f, x.subschema, m, P);
    }
    var T = m && m.skipAttributes || [];
    for (var M in p)
      if (!e2.ignoreProperties[M] && T.indexOf(M) < 0) {
        var B = null, F = this.attributes[M];
        if (F)
          B = F.call(this, f, p, m, c);
        else if (m.allowUnknownAttributes === false)
          throw new u("Unsupported attribute: " + M, p);
        B && g.importErrors(B);
      }
    if (typeof m.rewrite == "function") {
      var k = m.rewrite.call(this, f, p, m, c);
      g.instance = k;
    }
    return g;
  }, w.prototype.schemaTraverser = function(f, p) {
    f.schema = r.deepMerge(f.schema, this.superResolve(p, f.ctx));
  }, w.prototype.superResolve = function(f, p) {
    var m = S(f);
    return m ? this.resolve(f, m, p).subschema : f;
  }, w.prototype.resolve = function(f, p, m) {
    if (p = m.resolve(p), m.schemas[p])
      return { subschema: m.schemas[p], switchSchema: p };
    let g = new URL(p, "thismessage::/").hash;
    var b = g && g.length && p.substr(0, p.length - g.length);
    if (!b || !m.schemas[b])
      throw new u("no such schema <" + p + ">", f);
    var _ = r.objectGetPath(m.schemas[b], g.substr(1));
    if (_ === void 0)
      throw new u("no such schema " + g + " located in <" + b + ">", f);
    return { subschema: _, switchSchema: p };
  }, w.prototype.testType = function(f, p, m, c, g) {
    if (g !== void 0) {
      if (g === null)
        throw new u('Unexpected null in "type" keyword');
      if (typeof this.types[g] == "function")
        return this.types[g].call(this, f);
      if (g && typeof g == "object") {
        var b = this.validateSchema(f, g, m, c);
        return b === void 0 || !(b && b.errors.length);
      }
      return true;
    }
  };
  var y = w.prototype.types = {};
  return y.string = function(f) {
    return typeof f == "string";
  }, y.number = function(f) {
    return typeof f == "number" && isFinite(f);
  }, y.integer = function(f) {
    return typeof f == "number" && f % 1 === 0;
  }, y.boolean = function(f) {
    return typeof f == "boolean";
  }, y.array = function(f) {
    return Array.isArray(f);
  }, y.null = function(f) {
    return f === null;
  }, y.date = function(f) {
    return f instanceof Date;
  }, y.any = function(f) {
    return true;
  }, y.object = function(f) {
    return f && typeof f == "object" && !Array.isArray(f) && !(f instanceof Date);
  }, cl = w, cl;
}
var Dh;
function HC() {
  if (Dh) return vr;
  Dh = 1;
  var e2 = vr.Validator = BC();
  return vr.ValidatorResult = An().ValidatorResult, vr.ValidatorResultError = An().ValidatorResultError, vr.ValidationError = An().ValidationError, vr.SchemaError = An().SchemaError, vr.SchemaScanResult = Rl().SchemaScanResult, vr.scan = Rl().scan, vr.validate = function(r, n, o) {
    var a = new e2();
    return a.validate(r, n, o);
  }, vr;
}
var jC = HC();
const Lm = (e2, r, n) => {
  const o = e2 instanceof RegExp ? kh(e2, n) : e2, a = r instanceof RegExp ? kh(r, n) : r, u = o !== null && a != null && qC(o, a, n);
  return u && {
    start: u[0],
    end: u[1],
    pre: n.slice(0, u[0]),
    body: n.slice(u[0] + o.length, u[1]),
    post: n.slice(u[1] + a.length)
  };
}, kh = (e2, r) => {
  const n = r.match(e2);
  return n ? n[0] : null;
}, qC = (e2, r, n) => {
  let o, a, u, l, d, w = n.indexOf(e2), S = n.indexOf(r, w + 1), y = w;
  if (w >= 0 && S > 0) {
    if (e2 === r)
      return [w, S];
    for (o = [], u = n.length; y >= 0 && !d; ) {
      if (y === w)
        o.push(y), w = n.indexOf(e2, y + 1);
      else if (o.length === 1) {
        const h = o.pop();
        h !== void 0 && (d = [h, S]);
      } else
        a = o.pop(), a !== void 0 && a < u && (u = a, l = S), S = n.indexOf(r, y + 1);
      y = w < S && w >= 0 ? w : S;
    }
    o.length && l !== void 0 && (d = [u, l]);
  }
  return d;
}, Fm = "\0SLASH" + Math.random() + "\0", $m = "\0OPEN" + Math.random() + "\0", tf = "\0CLOSE" + Math.random() + "\0", Nm = "\0COMMA" + Math.random() + "\0", Dm = "\0PERIOD" + Math.random() + "\0", ZC = new RegExp(Fm, "g"), KC = new RegExp($m, "g"), GC = new RegExp(tf, "g"), VC = new RegExp(Nm, "g"), YC = new RegExp(Dm, "g"), XC = /\\\\/g, JC = /\\{/g, QC = /\\}/g, eR = /\\,/g, tR = /\\./g;
function dl(e2) {
  return isNaN(e2) ? e2.charCodeAt(0) : parseInt(e2, 10);
}
function rR(e2) {
  return e2.replace(XC, Fm).replace(JC, $m).replace(QC, tf).replace(eR, Nm).replace(tR, Dm);
}
function nR(e2) {
  return e2.replace(ZC, "\\").replace(KC, "{").replace(GC, "}").replace(VC, ",").replace(YC, ".");
}
function km(e2) {
  if (!e2)
    return [""];
  const r = [], n = Lm("{", "}", e2);
  if (!n)
    return e2.split(",");
  const { pre: o, body: a, post: u } = n, l = o.split(",");
  l[l.length - 1] += "{" + a + "}";
  const d = km(u);
  return u.length && (l[l.length - 1] += d.shift(), l.push.apply(l, d)), r.push.apply(r, l), r;
}
function iR(e2) {
  return e2 ? (e2.slice(0, 2) === "{}" && (e2 = "\\{\\}" + e2.slice(2)), no(rR(e2), true).map(nR)) : [];
}
function oR(e2) {
  return "{" + e2 + "}";
}
function aR(e2) {
  return /^-?0\d/.test(e2);
}
function sR(e2, r) {
  return e2 <= r;
}
function uR(e2, r) {
  return e2 >= r;
}
function no(e2, r) {
  const n = [], o = Lm("{", "}", e2);
  if (!o)
    return [e2];
  const a = o.pre, u = o.post.length ? no(o.post, false) : [""];
  if (/\$$/.test(o.pre))
    for (let l = 0; l < u.length; l++) {
      const d = a + "{" + o.body + "}" + u[l];
      n.push(d);
    }
  else {
    const l = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(o.body), d = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(o.body), w = l || d, S = o.body.indexOf(",") >= 0;
    if (!w && !S)
      return o.post.match(/,(?!,).*\}/) ? (e2 = o.pre + "{" + o.body + tf + o.post, no(e2)) : [e2];
    let y;
    if (w)
      y = o.body.split(/\.\./);
    else if (y = km(o.body), y.length === 1 && y[0] !== void 0 && (y = no(y[0], false).map(oR), y.length === 1))
      return u.map((f) => o.pre + y[0] + f);
    let h;
    if (w && y[0] !== void 0 && y[1] !== void 0) {
      const f = dl(y[0]), p = dl(y[1]), m = Math.max(y[0].length, y[1].length);
      let c = y.length === 3 && y[2] !== void 0 ? Math.abs(dl(y[2])) : 1, g = sR;
      p < f && (c *= -1, g = uR);
      const _ = y.some(aR);
      h = [];
      for (let x = f; g(x, p); x += c) {
        let P;
        if (d)
          P = String.fromCharCode(x), P === "\\" && (P = "");
        else if (P = String(x), _) {
          const T = m - P.length;
          if (T > 0) {
            const M = new Array(T + 1).join("0");
            x < 0 ? P = "-" + M + P.slice(1) : P = M + P;
          }
        }
        h.push(P);
      }
    } else {
      h = [];
      for (let f = 0; f < y.length; f++)
        h.push.apply(h, no(y[f], false));
    }
    for (let f = 0; f < h.length; f++)
      for (let p = 0; p < u.length; p++) {
        const m = a + h[f] + u[p];
        (!r || w || m) && n.push(m);
      }
  }
  return n;
}
const lR = 1024 * 64, qa = (e2) => {
  if (typeof e2 != "string")
    throw new TypeError("invalid pattern");
  if (e2.length > lR)
    throw new TypeError("pattern is too long");
}, fR = {
  "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", true],
  "[:alpha:]": ["\\p{L}\\p{Nl}", true],
  "[:ascii:]": ["\\x00-\\x7f", false],
  "[:blank:]": ["\\p{Zs}\\t", true],
  "[:cntrl:]": ["\\p{Cc}", true],
  "[:digit:]": ["\\p{Nd}", true],
  "[:graph:]": ["\\p{Z}\\p{C}", true, true],
  "[:lower:]": ["\\p{Ll}", true],
  "[:print:]": ["\\p{C}", true],
  "[:punct:]": ["\\p{P}", true],
  "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", true],
  "[:upper:]": ["\\p{Lu}", true],
  "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", true],
  "[:xdigit:]": ["A-Fa-f0-9", false]
}, Qi = (e2) => e2.replace(/[[\]\\-]/g, "\\$&"), cR = (e2) => e2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Wh = (e2) => e2.join(""), dR = (e2, r) => {
  const n = r;
  if (e2.charAt(n) !== "[")
    throw new Error("not in a brace expression");
  const o = [], a = [];
  let u = n + 1, l = false, d = false, w = false, S = false, y = n, h = "";
  e: for (; u < e2.length; ) {
    const c = e2.charAt(u);
    if ((c === "!" || c === "^") && u === n + 1) {
      S = true, u++;
      continue;
    }
    if (c === "]" && l && !w) {
      y = u + 1;
      break;
    }
    if (l = true, c === "\\" && !w) {
      w = true, u++;
      continue;
    }
    if (c === "[" && !w) {
      for (const [g, [b, _, x]] of Object.entries(fR))
        if (e2.startsWith(g, u)) {
          if (h)
            return ["$.", false, e2.length - n, true];
          u += g.length, x ? a.push(b) : o.push(b), d = d || _;
          continue e;
        }
    }
    if (w = false, h) {
      c > h ? o.push(Qi(h) + "-" + Qi(c)) : c === h && o.push(Qi(c)), h = "", u++;
      continue;
    }
    if (e2.startsWith("-]", u + 1)) {
      o.push(Qi(c + "-")), u += 2;
      continue;
    }
    if (e2.startsWith("-", u + 1)) {
      h = c, u += 2;
      continue;
    }
    o.push(Qi(c)), u++;
  }
  if (y < u)
    return ["", false, 0, false];
  if (!o.length && !a.length)
    return ["$.", false, e2.length - n, true];
  if (a.length === 0 && o.length === 1 && /^\\?.$/.test(o[0]) && !S) {
    const c = o[0].length === 2 ? o[0].slice(-1) : o[0];
    return [cR(c), false, y - n, false];
  }
  const f = "[" + (S ? "^" : "") + Wh(o) + "]", p = "[" + (S ? "" : "^") + Wh(a) + "]";
  return [o.length && a.length ? "(" + f + "|" + p + ")" : o.length ? f : p, d, y - n, true];
}, io = (e2, { windowsPathsNoEscape: r = false } = {}) => r ? e2.replace(/\[([^\/\\])\]/g, "$1") : e2.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1"), pR = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), Uh = (e2) => pR.has(e2), hR = "(?!(?:^|/)\\.\\.?(?:$|/))", Ca = "(?!\\.)", vR = /* @__PURE__ */ new Set(["[", "."]), mR = /* @__PURE__ */ new Set(["..", "."]), gR = new Set("().*{}+?[]^$\\!"), yR = (e2) => e2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), rf = "[^/]", zh = rf + "*?", Bh = rf + "+?";
var rt, ut, Dr, Ue, Ye, an, Tn, sn, mr, Pn, ho, Fn, Wm, ln, Na, Ml, Um;
const _t = class _t2 {
  constructor(r, n, o = {}) {
    Pt(this, Fn);
    tt(this, "type");
    Pt(this, rt);
    Pt(this, ut);
    Pt(this, Dr, false);
    Pt(this, Ue, []);
    Pt(this, Ye);
    Pt(this, an);
    Pt(this, Tn);
    Pt(this, sn, false);
    Pt(this, mr);
    Pt(this, Pn);
    Pt(this, ho, false);
    this.type = r, r && Ve(this, ut, true), Ve(this, Ye, n), Ve(this, rt, te(this, Ye) ? te(te(this, Ye), rt) : this), Ve(this, mr, te(this, rt) === this ? o : te(te(this, rt), mr)), Ve(this, Tn, te(this, rt) === this ? [] : te(te(this, rt), Tn)), r === "!" && !te(te(this, rt), sn) && te(this, Tn).push(this), Ve(this, an, te(this, Ye) ? te(te(this, Ye), Ue).length : 0);
  }
  get hasMagic() {
    if (te(this, ut) !== void 0)
      return te(this, ut);
    for (const r of te(this, Ue))
      if (typeof r != "string" && (r.type || r.hasMagic))
        return Ve(this, ut, true);
    return te(this, ut);
  }
  // reconstructs the pattern
  toString() {
    return te(this, Pn) !== void 0 ? te(this, Pn) : this.type ? Ve(this, Pn, this.type + "(" + te(this, Ue).map((r) => String(r)).join("|") + ")") : Ve(this, Pn, te(this, Ue).map((r) => String(r)).join(""));
  }
  push(...r) {
    for (const n of r)
      if (n !== "") {
        if (typeof n != "string" && !(n instanceof _t2 && te(n, Ye) === this))
          throw new Error("invalid part: " + n);
        te(this, Ue).push(n);
      }
  }
  toJSON() {
    var n;
    const r = this.type === null ? te(this, Ue).slice().map((o) => typeof o == "string" ? o : o.toJSON()) : [this.type, ...te(this, Ue).map((o) => o.toJSON())];
    return this.isStart() && !this.type && r.unshift([]), this.isEnd() && (this === te(this, rt) || te(te(this, rt), sn) && ((n = te(this, Ye)) == null ? void 0 : n.type) === "!") && r.push({}), r;
  }
  isStart() {
    var n;
    if (te(this, rt) === this)
      return true;
    if (!((n = te(this, Ye)) != null && n.isStart()))
      return false;
    if (te(this, an) === 0)
      return true;
    const r = te(this, Ye);
    for (let o = 0; o < te(this, an); o++) {
      const a = te(r, Ue)[o];
      if (!(a instanceof _t2 && a.type === "!"))
        return false;
    }
    return true;
  }
  isEnd() {
    var n, o, a;
    if (te(this, rt) === this || ((n = te(this, Ye)) == null ? void 0 : n.type) === "!")
      return true;
    if (!((o = te(this, Ye)) != null && o.isEnd()))
      return false;
    if (!this.type)
      return (a = te(this, Ye)) == null ? void 0 : a.isEnd();
    const r = te(this, Ye) ? te(te(this, Ye), Ue).length : 0;
    return te(this, an) === r - 1;
  }
  copyIn(r) {
    typeof r == "string" ? this.push(r) : this.push(r.clone(this));
  }
  clone(r) {
    const n = new _t2(this.type, r);
    for (const o of te(this, Ue))
      n.copyIn(o);
    return n;
  }
  static fromGlob(r, n = {}) {
    var a;
    const o = new _t2(null, void 0, n);
    return en(a = _t2, ln, Na).call(a, r, o, 0, n), o;
  }
  // returns the regular expression if there's magic, or the unescaped
  // string if not.
  toMMPattern() {
    if (this !== te(this, rt))
      return te(this, rt).toMMPattern();
    const r = this.toString(), [n, o, a, u] = this.toRegExpSource();
    if (!(a || te(this, ut) || te(this, mr).nocase && !te(this, mr).nocaseMagicOnly && r.toUpperCase() !== r.toLowerCase()))
      return o;
    const d = (te(this, mr).nocase ? "i" : "") + (u ? "u" : "");
    return Object.assign(new RegExp(`^${n}$`, d), {
      _src: n,
      _glob: r
    });
  }
  get options() {
    return te(this, mr);
  }
  // returns the string match, the regexp source, whether there's magic
  // in the regexp (so a regular expression is required) and whether or
  // not the uflag is needed for the regular expression (for posix classes)
  // TODO: instead of injecting the start/end at this point, just return
  // the BODY of the regexp, along with the start/end portions suitable
  // for binding the start/end in either a joined full-path makeRe context
  // (where we bind to (^|/), or a standalone matchPart context (where
  // we bind to ^, and not /).  Otherwise slashes get duped!
  //
  // In part-matching mode, the start is:
  // - if not isStart: nothing
  // - if traversal possible, but not allowed: ^(?!\.\.?$)
  // - if dots allowed or not possible: ^
  // - if dots possible and not allowed: ^(?!\.)
  // end is:
  // - if not isEnd(): nothing
  // - else: $
  //
  // In full-path matching mode, we put the slash at the START of the
  // pattern, so start is:
  // - if first pattern: same as part-matching mode
  // - if not isStart(): nothing
  // - if traversal possible, but not allowed: /(?!\.\.?(?:$|/))
  // - if dots allowed or not possible: /
  // - if dots possible and not allowed: /(?!\.)
  // end is:
  // - if last pattern, same as part-matching mode
  // - else nothing
  //
  // Always put the (?:$|/) on negated tails, though, because that has to be
  // there to bind the end of the negated pattern portion, and it's easier to
  // just stick it in now rather than try to inject it later in the middle of
  // the pattern.
  //
  // We can just always return the same end, and leave it up to the caller
  // to know whether it's going to be used joined or in parts.
  // And, if the start is adjusted slightly, can do the same there:
  // - if not isStart: nothing
  // - if traversal possible, but not allowed: (?:/|^)(?!\.\.?$)
  // - if dots allowed or not possible: (?:/|^)
  // - if dots possible and not allowed: (?:/|^)(?!\.)
  //
  // But it's better to have a simpler binding without a conditional, for
  // performance, so probably better to return both start options.
  //
  // Then the caller just ignores the end if it's not the first pattern,
  // and the start always gets applied.
  //
  // But that's always going to be $ if it's the ending pattern, or nothing,
  // so the caller can just attach $ at the end of the pattern when building.
  //
  // So the todo is:
  // - better detect what kind of start is needed
  // - return both flavors of starting pattern
  // - attach $ at the end of the pattern when creating the actual RegExp
  //
  // Ah, but wait, no, that all only applies to the root when the first pattern
  // is not an extglob. If the first pattern IS an extglob, then we need all
  // that dot prevention biz to live in the extglob portions, because eg
  // +(*|.x*) can match .xy but not .yx.
  //
  // So, return the two flavors if it's #root and the first child is not an
  // AST, otherwise leave it to the child AST to handle it, and there,
  // use the (?:^|/) style of start binding.
  //
  // Even simplified further:
  // - Since the start for a join is eg /(?!\.) and the start for a part
  // is ^(?!\.), we can just prepend (?!\.) to the pattern (either root
  // or start or whatever) and prepend ^ or / at the Regexp construction.
  toRegExpSource(r) {
    var w;
    const n = r ?? !!te(this, mr).dot;
    if (te(this, rt) === this && en(this, Fn, Wm).call(this), !this.type) {
      const S = this.isStart() && this.isEnd(), y = te(this, Ue).map((m) => {
        var x;
        const [c, g, b, _] = typeof m == "string" ? en(x = _t2, ln, Um).call(x, m, te(this, ut), S) : m.toRegExpSource(r);
        return Ve(this, ut, te(this, ut) || b), Ve(this, Dr, te(this, Dr) || _), c;
      }).join("");
      let h = "";
      if (this.isStart() && typeof te(this, Ue)[0] == "string" && !(te(this, Ue).length === 1 && mR.has(te(this, Ue)[0]))) {
        const c = vR, g = (
          // dots are allowed, and the pattern starts with [ or .
          n && c.has(y.charAt(0)) || // the pattern starts with \., and then [ or .
          y.startsWith("\\.") && c.has(y.charAt(2)) || // the pattern starts with \.\., and then [ or .
          y.startsWith("\\.\\.") && c.has(y.charAt(4))
        ), b = !n && !r && c.has(y.charAt(0));
        h = g ? hR : b ? Ca : "";
      }
      let f = "";
      return this.isEnd() && te(te(this, rt), sn) && ((w = te(this, Ye)) == null ? void 0 : w.type) === "!" && (f = "(?:$|\\/)"), [
        h + y + f,
        io(y),
        Ve(this, ut, !!te(this, ut)),
        te(this, Dr)
      ];
    }
    const o = this.type === "*" || this.type === "+", a = this.type === "!" ? "(?:(?!(?:" : "(?:";
    let u = en(this, Fn, Ml).call(this, n);
    if (this.isStart() && this.isEnd() && !u && this.type !== "!") {
      const S = this.toString();
      return Ve(this, Ue, [S]), this.type = null, Ve(this, ut, void 0), [S, io(this.toString()), false, false];
    }
    let l = !o || r || n || !Ca ? "" : en(this, Fn, Ml).call(this, true);
    l === u && (l = ""), l && (u = `(?:${u})(?:${l})*?`);
    let d = "";
    if (this.type === "!" && te(this, ho))
      d = (this.isStart() && !n ? Ca : "") + Bh;
    else {
      const S = this.type === "!" ? (
        // !() must match something,but !(x) can match ''
        "))" + (this.isStart() && !n && !r ? Ca : "") + zh + ")"
      ) : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && l ? ")" : this.type === "*" && l ? ")?" : `)${this.type}`;
      d = a + u + S;
    }
    return [
      d,
      io(u),
      Ve(this, ut, !!te(this, ut)),
      te(this, Dr)
    ];
  }
};
rt = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), Dr = /* @__PURE__ */ new WeakMap(), Ue = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakMap(), an = /* @__PURE__ */ new WeakMap(), Tn = /* @__PURE__ */ new WeakMap(), sn = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), Pn = /* @__PURE__ */ new WeakMap(), ho = /* @__PURE__ */ new WeakMap(), Fn = /* @__PURE__ */ new WeakSet(), Wm = function() {
  if (this !== te(this, rt))
    throw new Error("should only call on root");
  if (te(this, sn))
    return this;
  this.toString(), Ve(this, sn, true);
  let r;
  for (; r = te(this, Tn).pop(); ) {
    if (r.type !== "!")
      continue;
    let n = r, o = te(n, Ye);
    for (; o; ) {
      for (let a = te(n, an) + 1; !o.type && a < te(o, Ue).length; a++)
        for (const u of te(r, Ue)) {
          if (typeof u == "string")
            throw new Error("string part in extglob AST??");
          u.copyIn(te(o, Ue)[a]);
        }
      n = o, o = te(n, Ye);
    }
  }
  return this;
}, ln = /* @__PURE__ */ new WeakSet(), Na = function(r, n, o, a) {
  var p, m;
  let u = false, l = false, d = -1, w = false;
  if (n.type === null) {
    let c = o, g = "";
    for (; c < r.length; ) {
      const b = r.charAt(c++);
      if (u || b === "\\") {
        u = !u, g += b;
        continue;
      }
      if (l) {
        c === d + 1 ? (b === "^" || b === "!") && (w = true) : b === "]" && !(c === d + 2 && w) && (l = false), g += b;
        continue;
      } else if (b === "[") {
        l = true, d = c, w = false, g += b;
        continue;
      }
      if (!a.noext && Uh(b) && r.charAt(c) === "(") {
        n.push(g), g = "";
        const _ = new _t(b, n);
        c = en(p = _t, ln, Na).call(p, r, _, c, a), n.push(_);
        continue;
      }
      g += b;
    }
    return n.push(g), c;
  }
  let S = o + 1, y = new _t(null, n);
  const h = [];
  let f = "";
  for (; S < r.length; ) {
    const c = r.charAt(S++);
    if (u || c === "\\") {
      u = !u, f += c;
      continue;
    }
    if (l) {
      S === d + 1 ? (c === "^" || c === "!") && (w = true) : c === "]" && !(S === d + 2 && w) && (l = false), f += c;
      continue;
    } else if (c === "[") {
      l = true, d = S, w = false, f += c;
      continue;
    }
    if (Uh(c) && r.charAt(S) === "(") {
      y.push(f), f = "";
      const g = new _t(c, y);
      y.push(g), S = en(m = _t, ln, Na).call(m, r, g, S, a);
      continue;
    }
    if (c === "|") {
      y.push(f), f = "", h.push(y), y = new _t(null, n);
      continue;
    }
    if (c === ")")
      return f === "" && te(n, Ue).length === 0 && Ve(n, ho, true), y.push(f), f = "", n.push(...h, y), S;
    f += c;
  }
  return n.type = null, Ve(n, ut, void 0), Ve(n, Ue, [r.substring(o - 1)]), S;
}, Ml = function(r) {
  return te(this, Ue).map((n) => {
    if (typeof n == "string")
      throw new Error("string type in extglob ast??");
    const [o, a, u, l] = n.toRegExpSource(r);
    return Ve(this, Dr, te(this, Dr) || l), o;
  }).filter((n) => !(this.isStart() && this.isEnd()) || !!n).join("|");
}, Um = function(r, n, o = false) {
  let a = false, u = "", l = false;
  for (let d = 0; d < r.length; d++) {
    const w = r.charAt(d);
    if (a) {
      a = false, u += (gR.has(w) ? "\\" : "") + w;
      continue;
    }
    if (w === "\\") {
      d === r.length - 1 ? u += "\\\\" : a = true;
      continue;
    }
    if (w === "[") {
      const [S, y, h, f] = dR(r, d);
      if (h) {
        u += S, l = l || y, d += h - 1, n = n || f;
        continue;
      }
    }
    if (w === "*") {
      o && r === "*" ? u += Bh : u += zh, n = true;
      continue;
    }
    if (w === "?") {
      u += rf, n = true;
      continue;
    }
    u += yR(w);
  }
  return [u, io(r), !!n, l];
}, Pt(_t, ln);
let Za = _t;
const wR = (e2, { windowsPathsNoEscape: r = false } = {}) => r ? e2.replace(/[?*()[\]]/g, "[$&]") : e2.replace(/[?*()[\]\\]/g, "\\$&"), wt = (e2, r, n = {}) => (qa(r), !n.nocomment && r.charAt(0) === "#" ? false : new is(r, n).match(e2)), bR = /^\*+([^+@!?\*\[\(]*)$/, SR = (e2) => (r) => !r.startsWith(".") && r.endsWith(e2), ER = (e2) => (r) => r.endsWith(e2), _R = (e2) => (e2 = e2.toLowerCase(), (r) => !r.startsWith(".") && r.toLowerCase().endsWith(e2)), xR = (e2) => (e2 = e2.toLowerCase(), (r) => r.toLowerCase().endsWith(e2)), OR = /^\*+\.\*+$/, AR = (e2) => !e2.startsWith(".") && e2.includes("."), TR = (e2) => e2 !== "." && e2 !== ".." && e2.includes("."), PR = /^\.\*+$/, CR = (e2) => e2 !== "." && e2 !== ".." && e2.startsWith("."), RR = /^\*+$/, MR = (e2) => e2.length !== 0 && !e2.startsWith("."), IR = (e2) => e2.length !== 0 && e2 !== "." && e2 !== "..", LR = /^\?+([^+@!?\*\[\(]*)?$/, FR = ([e2, r = ""]) => {
  const n = zm([e2]);
  return r ? (r = r.toLowerCase(), (o) => n(o) && o.toLowerCase().endsWith(r)) : n;
}, $R = ([e2, r = ""]) => {
  const n = Bm([e2]);
  return r ? (r = r.toLowerCase(), (o) => n(o) && o.toLowerCase().endsWith(r)) : n;
}, NR = ([e2, r = ""]) => {
  const n = Bm([e2]);
  return r ? (o) => n(o) && o.endsWith(r) : n;
}, DR = ([e2, r = ""]) => {
  const n = zm([e2]);
  return r ? (o) => n(o) && o.endsWith(r) : n;
}, zm = ([e2]) => {
  const r = e2.length;
  return (n) => n.length === r && !n.startsWith(".");
}, Bm = ([e2]) => {
  const r = e2.length;
  return (n) => n.length === r && n !== "." && n !== "..";
}, Hm = typeof process == "object" && process ? typeof define_process_env_default == "object" && define_process_env_default && define_process_env_default.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix", Hh = {
  win32: { sep: "\\" },
  posix: { sep: "/" }
}, kR = Hm === "win32" ? Hh.win32.sep : Hh.posix.sep;
wt.sep = kR;
const Yt = Symbol("globstar **");
wt.GLOBSTAR = Yt;
const WR = "[^/]", UR = WR + "*?", zR = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", BR = "(?:(?!(?:\\/|^)\\.).)*?", HR = (e2, r = {}) => (n) => wt(n, e2, r);
wt.filter = HR;
const Vt = (e2, r = {}) => Object.assign({}, e2, r), jR = (e2) => {
  if (!e2 || typeof e2 != "object" || !Object.keys(e2).length)
    return wt;
  const r = wt;
  return Object.assign((o, a, u = {}) => r(o, a, Vt(e2, u)), {
    Minimatch: class extends r.Minimatch {
      constructor(a, u = {}) {
        super(a, Vt(e2, u));
      }
      static defaults(a) {
        return r.defaults(Vt(e2, a)).Minimatch;
      }
    },
    AST: class extends r.AST {
      /* c8 ignore start */
      constructor(a, u, l = {}) {
        super(a, u, Vt(e2, l));
      }
      /* c8 ignore stop */
      static fromGlob(a, u = {}) {
        return r.AST.fromGlob(a, Vt(e2, u));
      }
    },
    unescape: (o, a = {}) => r.unescape(o, Vt(e2, a)),
    escape: (o, a = {}) => r.escape(o, Vt(e2, a)),
    filter: (o, a = {}) => r.filter(o, Vt(e2, a)),
    defaults: (o) => r.defaults(Vt(e2, o)),
    makeRe: (o, a = {}) => r.makeRe(o, Vt(e2, a)),
    braceExpand: (o, a = {}) => r.braceExpand(o, Vt(e2, a)),
    match: (o, a, u = {}) => r.match(o, a, Vt(e2, u)),
    sep: r.sep,
    GLOBSTAR: Yt
  });
};
wt.defaults = jR;
const jm = (e2, r = {}) => (qa(e2), r.nobrace || !/\{(?:(?!\{).)*\}/.test(e2) ? [e2] : iR(e2));
wt.braceExpand = jm;
const qR = (e2, r = {}) => new is(e2, r).makeRe();
wt.makeRe = qR;
const ZR = (e2, r, n = {}) => {
  const o = new is(r, n);
  return e2 = e2.filter((a) => o.match(a)), o.options.nonull && !e2.length && e2.push(r), e2;
};
wt.match = ZR;
const jh = /[?*]|[+@!]\(.*?\)|\[|\]/, KR = (e2) => e2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
class is {
  constructor(r, n = {}) {
    tt(this, "options");
    tt(this, "set");
    tt(this, "pattern");
    tt(this, "windowsPathsNoEscape");
    tt(this, "nonegate");
    tt(this, "negate");
    tt(this, "comment");
    tt(this, "empty");
    tt(this, "preserveMultipleSlashes");
    tt(this, "partial");
    tt(this, "globSet");
    tt(this, "globParts");
    tt(this, "nocase");
    tt(this, "isWindows");
    tt(this, "platform");
    tt(this, "windowsNoMagicRoot");
    tt(this, "regexp");
    qa(r), n = n || {}, this.options = n, this.pattern = r, this.platform = n.platform || Hm, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!n.windowsPathsNoEscape || n.allowWindowsEscape === false, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!n.preserveMultipleSlashes, this.regexp = null, this.negate = false, this.nonegate = !!n.nonegate, this.comment = false, this.empty = false, this.partial = !!n.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = n.windowsNoMagicRoot !== void 0 ? n.windowsNoMagicRoot : !!(this.isWindows && this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
  }
  hasMagic() {
    if (this.options.magicalBraces && this.set.length > 1)
      return true;
    for (const r of this.set)
      for (const n of r)
        if (typeof n != "string")
          return true;
    return false;
  }
  debug(...r) {
  }
  make() {
    const r = this.pattern, n = this.options;
    if (!n.nocomment && r.charAt(0) === "#") {
      this.comment = true;
      return;
    }
    if (!r) {
      this.empty = true;
      return;
    }
    this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], n.debug && (this.debug = (...u) => console.error(...u)), this.debug(this.pattern, this.globSet);
    const o = this.globSet.map((u) => this.slashSplit(u));
    this.globParts = this.preprocess(o), this.debug(this.pattern, this.globParts);
    let a = this.globParts.map((u, l, d) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        const w = u[0] === "" && u[1] === "" && (u[2] === "?" || !jh.test(u[2])) && !jh.test(u[3]), S = /^[a-z]:/i.test(u[0]);
        if (w)
          return [...u.slice(0, 4), ...u.slice(4).map((y) => this.parse(y))];
        if (S)
          return [u[0], ...u.slice(1).map((y) => this.parse(y))];
      }
      return u.map((w) => this.parse(w));
    });
    if (this.debug(this.pattern, a), this.set = a.filter((u) => u.indexOf(false) === -1), this.isWindows)
      for (let u = 0; u < this.set.length; u++) {
        const l = this.set[u];
        l[0] === "" && l[1] === "" && this.globParts[u][2] === "?" && typeof l[3] == "string" && /^[a-z]:$/i.test(l[3]) && (l[2] = "?");
      }
    this.debug(this.pattern, this.set);
  }
  // various transforms to equivalent pattern sets that are
  // faster to process in a filesystem walk.  The goal is to
  // eliminate what we can, and push all ** patterns as far
  // to the right as possible, even if it increases the number
  // of patterns that we have to process.
  preprocess(r) {
    if (this.options.noglobstar)
      for (let o = 0; o < r.length; o++)
        for (let a = 0; a < r[o].length; a++)
          r[o][a] === "**" && (r[o][a] = "*");
    const { optimizationLevel: n = 1 } = this.options;
    return n >= 2 ? (r = this.firstPhasePreProcess(r), r = this.secondPhasePreProcess(r)) : n >= 1 ? r = this.levelOneOptimize(r) : r = this.adjascentGlobstarOptimize(r), r;
  }
  // just get rid of adjascent ** portions
  adjascentGlobstarOptimize(r) {
    return r.map((n) => {
      let o = -1;
      for (; (o = n.indexOf("**", o + 1)) !== -1; ) {
        let a = o;
        for (; n[a + 1] === "**"; )
          a++;
        a !== o && n.splice(o, a - o);
      }
      return n;
    });
  }
  // get rid of adjascent ** and resolve .. portions
  levelOneOptimize(r) {
    return r.map((n) => (n = n.reduce((o, a) => {
      const u = o[o.length - 1];
      return a === "**" && u === "**" ? o : a === ".." && u && u !== ".." && u !== "." && u !== "**" ? (o.pop(), o) : (o.push(a), o);
    }, []), n.length === 0 ? [""] : n));
  }
  levelTwoFileOptimize(r) {
    Array.isArray(r) || (r = this.slashSplit(r));
    let n = false;
    do {
      if (n = false, !this.preserveMultipleSlashes) {
        for (let a = 1; a < r.length - 1; a++) {
          const u = r[a];
          a === 1 && u === "" && r[0] === "" || (u === "." || u === "") && (n = true, r.splice(a, 1), a--);
        }
        r[0] === "." && r.length === 2 && (r[1] === "." || r[1] === "") && (n = true, r.pop());
      }
      let o = 0;
      for (; (o = r.indexOf("..", o + 1)) !== -1; ) {
        const a = r[o - 1];
        a && a !== "." && a !== ".." && a !== "**" && (n = true, r.splice(o - 1, 2), o -= 2);
      }
    } while (n);
    return r.length === 0 ? [""] : r;
  }
  // First phase: single-pattern processing
  // <pre> is 1 or more portions
  // <rest> is 1 or more portions
  // <p> is any portion other than ., .., '', or **
  // <e> is . or ''
  //
  // **/.. is *brutal* for filesystem walking performance, because
  // it effectively resets the recursive walk each time it occurs,
  // and ** cannot be reduced out by a .. pattern part like a regexp
  // or most strings (other than .., ., and '') can be.
  //
  // <pre>/**/../<p>/<p>/<rest> -> {<pre>/../<p>/<p>/<rest>,<pre>/**/<p>/<p>/<rest>}
  // <pre>/<e>/<rest> -> <pre>/<rest>
  // <pre>/<p>/../<rest> -> <pre>/<rest>
  // **/**/<rest> -> **/<rest>
  //
  // **/*/<rest> -> */**/<rest> <== not valid because ** doesn't follow
  // this WOULD be allowed if ** did follow symlinks, or * didn't
  firstPhasePreProcess(r) {
    let n = false;
    do {
      n = false;
      for (let o of r) {
        let a = -1;
        for (; (a = o.indexOf("**", a + 1)) !== -1; ) {
          let l = a;
          for (; o[l + 1] === "**"; )
            l++;
          l > a && o.splice(a + 1, l - a);
          let d = o[a + 1];
          const w = o[a + 2], S = o[a + 3];
          if (d !== ".." || !w || w === "." || w === ".." || !S || S === "." || S === "..")
            continue;
          n = true, o.splice(a, 1);
          const y = o.slice(0);
          y[a] = "**", r.push(y), a--;
        }
        if (!this.preserveMultipleSlashes) {
          for (let l = 1; l < o.length - 1; l++) {
            const d = o[l];
            l === 1 && d === "" && o[0] === "" || (d === "." || d === "") && (n = true, o.splice(l, 1), l--);
          }
          o[0] === "." && o.length === 2 && (o[1] === "." || o[1] === "") && (n = true, o.pop());
        }
        let u = 0;
        for (; (u = o.indexOf("..", u + 1)) !== -1; ) {
          const l = o[u - 1];
          if (l && l !== "." && l !== ".." && l !== "**") {
            n = true;
            const w = u === 1 && o[u + 1] === "**" ? ["."] : [];
            o.splice(u - 1, 2, ...w), o.length === 0 && o.push(""), u -= 2;
          }
        }
      }
    } while (n);
    return r;
  }
  // second phase: multi-pattern dedupes
  // {<pre>/*/<rest>,<pre>/<p>/<rest>} -> <pre>/*/<rest>
  // {<pre>/<rest>,<pre>/<rest>} -> <pre>/<rest>
  // {<pre>/**/<rest>,<pre>/<rest>} -> <pre>/**/<rest>
  //
  // {<pre>/**/<rest>,<pre>/**/<p>/<rest>} -> <pre>/**/<rest>
  // ^-- not valid because ** doens't follow symlinks
  secondPhasePreProcess(r) {
    for (let n = 0; n < r.length - 1; n++)
      for (let o = n + 1; o < r.length; o++) {
        const a = this.partsMatch(r[n], r[o], !this.preserveMultipleSlashes);
        if (a) {
          r[n] = [], r[o] = a;
          break;
        }
      }
    return r.filter((n) => n.length);
  }
  partsMatch(r, n, o = false) {
    let a = 0, u = 0, l = [], d = "";
    for (; a < r.length && u < n.length; )
      if (r[a] === n[u])
        l.push(d === "b" ? n[u] : r[a]), a++, u++;
      else if (o && r[a] === "**" && n[u] === r[a + 1])
        l.push(r[a]), a++;
      else if (o && n[u] === "**" && r[a] === n[u + 1])
        l.push(n[u]), u++;
      else if (r[a] === "*" && n[u] && (this.options.dot || !n[u].startsWith(".")) && n[u] !== "**") {
        if (d === "b")
          return false;
        d = "a", l.push(r[a]), a++, u++;
      } else if (n[u] === "*" && r[a] && (this.options.dot || !r[a].startsWith(".")) && r[a] !== "**") {
        if (d === "a")
          return false;
        d = "b", l.push(n[u]), a++, u++;
      } else
        return false;
    return r.length === n.length && l;
  }
  parseNegate() {
    if (this.nonegate)
      return;
    const r = this.pattern;
    let n = false, o = 0;
    for (let a = 0; a < r.length && r.charAt(a) === "!"; a++)
      n = !n, o++;
    o && (this.pattern = r.slice(o)), this.negate = n;
  }
  // set partial to true to test if, for example,
  // "/a/b" matches the start of "/*/b/*/d"
  // Partial means, if you run out of file before you run
  // out of pattern, then that's fine, as long as all
  // the parts match.
  matchOne(r, n, o = false) {
    const a = this.options;
    if (this.isWindows) {
      const c = typeof r[0] == "string" && /^[a-z]:$/i.test(r[0]), g = !c && r[0] === "" && r[1] === "" && r[2] === "?" && /^[a-z]:$/i.test(r[3]), b = typeof n[0] == "string" && /^[a-z]:$/i.test(n[0]), _ = !b && n[0] === "" && n[1] === "" && n[2] === "?" && typeof n[3] == "string" && /^[a-z]:$/i.test(n[3]), x = g ? 3 : c ? 0 : void 0, P = _ ? 3 : b ? 0 : void 0;
      if (typeof x == "number" && typeof P == "number") {
        const [T, M] = [r[x], n[P]];
        T.toLowerCase() === M.toLowerCase() && (n[P] = T, P > x ? n = n.slice(P) : x > P && (r = r.slice(x)));
      }
    }
    const { optimizationLevel: u = 1 } = this.options;
    u >= 2 && (r = this.levelTwoFileOptimize(r)), this.debug("matchOne", this, { file: r, pattern: n }), this.debug("matchOne", r.length, n.length);
    for (var l = 0, d = 0, w = r.length, S = n.length; l < w && d < S; l++, d++) {
      this.debug("matchOne loop");
      var y = n[d], h = r[l];
      if (this.debug(n, y, h), y === false)
        return false;
      if (y === Yt) {
        this.debug("GLOBSTAR", [n, y, h]);
        var f = l, p = d + 1;
        if (p === S) {
          for (this.debug("** at the end"); l < w; l++)
            if (r[l] === "." || r[l] === ".." || !a.dot && r[l].charAt(0) === ".")
              return false;
          return true;
        }
        for (; f < w; ) {
          var m = r[f];
          if (this.debug(`
globstar while`, r, f, n, p, m), this.matchOne(r.slice(f), n.slice(p), o))
            return this.debug("globstar found match!", f, w, m), true;
          if (m === "." || m === ".." || !a.dot && m.charAt(0) === ".") {
            this.debug("dot detected!", r, f, n, p);
            break;
          }
          this.debug("globstar swallow a segment, and continue"), f++;
        }
        return !!(o && (this.debug(`
>>> no match, partial?`, r, f, n, p), f === w));
      }
      let c;
      if (typeof y == "string" ? (c = h === y, this.debug("string match", y, h, c)) : (c = y.test(h), this.debug("pattern match", y, h, c)), !c)
        return false;
    }
    if (l === w && d === S)
      return true;
    if (l === w)
      return o;
    if (d === S)
      return l === w - 1 && r[l] === "";
    throw new Error("wtf?");
  }
  braceExpand() {
    return jm(this.pattern, this.options);
  }
  parse(r) {
    qa(r);
    const n = this.options;
    if (r === "**")
      return Yt;
    if (r === "")
      return "";
    let o, a = null;
    (o = r.match(RR)) ? a = n.dot ? IR : MR : (o = r.match(bR)) ? a = (n.nocase ? n.dot ? xR : _R : n.dot ? ER : SR)(o[1]) : (o = r.match(LR)) ? a = (n.nocase ? n.dot ? $R : FR : n.dot ? NR : DR)(o) : (o = r.match(OR)) ? a = n.dot ? TR : AR : (o = r.match(PR)) && (a = CR);
    const u = Za.fromGlob(r, this.options).toMMPattern();
    return a && typeof u == "object" && Reflect.defineProperty(u, "test", { value: a }), u;
  }
  makeRe() {
    if (this.regexp || this.regexp === false)
      return this.regexp;
    const r = this.set;
    if (!r.length)
      return this.regexp = false, this.regexp;
    const n = this.options, o = n.noglobstar ? UR : n.dot ? zR : BR, a = new Set(n.nocase ? ["i"] : []);
    let u = r.map((w) => {
      const S = w.map((y) => {
        if (y instanceof RegExp)
          for (const h of y.flags.split(""))
            a.add(h);
        return typeof y == "string" ? KR(y) : y === Yt ? Yt : y._src;
      });
      return S.forEach((y, h) => {
        const f = S[h + 1], p = S[h - 1];
        y !== Yt || p === Yt || (p === void 0 ? f !== void 0 && f !== Yt ? S[h + 1] = "(?:\\/|" + o + "\\/)?" + f : S[h] = o : f === void 0 ? S[h - 1] = p + "(?:\\/|" + o + ")?" : f !== Yt && (S[h - 1] = p + "(?:\\/|\\/" + o + "\\/)" + f, S[h + 1] = Yt));
      }), S.filter((y) => y !== Yt).join("/");
    }).join("|");
    const [l, d] = r.length > 1 ? ["(?:", ")"] : ["", ""];
    u = "^" + l + u + d + "$", this.negate && (u = "^(?!" + u + ").+$");
    try {
      this.regexp = new RegExp(u, [...a].join(""));
    } catch {
      this.regexp = false;
    }
    return this.regexp;
  }
  slashSplit(r) {
    return this.preserveMultipleSlashes ? r.split("/") : this.isWindows && /^\/\/[^\/]+/.test(r) ? ["", ...r.split(/\/+/)] : r.split(/\/+/);
  }
  match(r, n = this.partial) {
    if (this.debug("match", r, this.pattern), this.comment)
      return false;
    if (this.empty)
      return r === "";
    if (r === "/" && n)
      return true;
    const o = this.options;
    this.isWindows && (r = r.split("\\").join("/"));
    const a = this.slashSplit(r);
    this.debug(this.pattern, "split", a);
    const u = this.set;
    this.debug(this.pattern, "set", u);
    let l = a[a.length - 1];
    if (!l)
      for (let d = a.length - 2; !l && d >= 0; d--)
        l = a[d];
    for (let d = 0; d < u.length; d++) {
      const w = u[d];
      let S = a;
      if (o.matchBase && w.length === 1 && (S = [l]), this.matchOne(S, w, n))
        return o.flipNegate ? true : !this.negate;
    }
    return o.flipNegate ? false : this.negate;
  }
  static defaults(r) {
    return wt.defaults(r).Minimatch;
  }
}
wt.AST = Za;
wt.Minimatch = is;
wt.escape = wR;
wt.unescape = io;
const qm = "/$shared", GR = {
  "**/saved_conditions.json": {
    parser: "json",
    content: {
      conditions: []
    },
    schema: {
      type: "object",
      properties: {
        conditions: {
          type: "array",
          items: {
            type: "object"
          }
        }
      },
      required: ["conditions"]
    }
  },
  "**/shared_datasources.json": {
    parser: "json",
    content: {},
    schema: {
      type: "object",
      additionalProperties: true,
      patternProperties: {
        "^.*$": {
          type: "array"
        }
      }
    }
  },
  "**/shared_css.json": {
    parser: "json",
    content: {
      classes: []
    },
    schema: {
      type: "object",
      properties: {
        classes: {
          type: "array",
          items: {
            type: "object"
          }
        }
      },
      required: ["classes"]
    }
  },
  "**/shared_app_events.json": {
    parser: "json",
    content: []
  },
  "**/CustomComponents/manifest.json": {
    parser: "json",
    content: [],
    schema: {
      type: "array",
      items: {
        type: "object"
      }
    }
  },
  "**/crafted_components.json": {
    parser: "json",
    content: [],
    schema: { type: "array" }
  },
  "**/HTTPHandlers.json": {
    parser: "json",
    content: [],
    schema: { type: "array" }
  },
  "**/*.json": {
    parser: "json",
    content: {}
  }
};
function Zm(e2) {
  const r = Object.entries(GR).find(
    ([n]) => wt(e2, n)
  );
  return r == null ? void 0 : r[1];
}
function Km(e2) {
  var o;
  const r = (o = Zm(e2)) == null ? void 0 : o.content;
  if (!r) return;
  const n = e2.replace(`${qm}/`, "Shared/");
  Gm({
    name: n,
    content: r,
    asText: typeof r == "string"
  });
}
function os({
  path: e2,
  createIfNotExists: r = false
}) {
  const n = `${qm}/${e2}`;
  return Fe(`${n}?t=${Date.now()}`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }).then((o) => {
    const a = Zm(e2);
    let u = o;
    if (!a) return u;
    if (typeof u == "string")
      try {
        switch (a.parser) {
          case "json":
            u = JSON.parse(u);
            break;
          default:
            break;
        }
      } catch {
        throw new Error("Cannot parse");
      }
    if (a.schema && !new jC.Validator().validate(u, a.schema).valid)
      throw new Error("Invalid Schema");
    return u;
  }).catch((o) => {
    if (VR(o) && r) {
      const a = YR(o, e2);
      bC.next({
        message: a,
        kind: "warning"
      }), Km(n);
    }
    throw o;
  });
}
function VR(e2) {
  var r;
  return ((r = e2 == null ? void 0 : e2.response) == null ? void 0 : r.status) === 404 || (e2 == null ? void 0 : e2.message) === "Invalid Schema" || (e2 == null ? void 0 : e2.message) === "Cannot parse" || (e2 == null ? void 0 : e2.name) === "SyntaxError";
}
function YR(e2, r) {
  var n;
  switch (true) {
    case ((e2 == null ? void 0 : e2.message) === "Cannot parse " || (e2 == null ? void 0 : e2.name) === "SyntaxError"):
      return `Cannot parse file '${r}', resetting...`;
    case (e2 == null ? void 0 : e2.message) === "Invalid Schema":
      return `File '${r}' is corrupt, resetting...`;
    case ((n = e2 == null ? void 0 : e2.response) == null ? void 0 : n.status) === 404:
      return `File '${r}' not found, creating...`;
    default:
      return e2 == null ? void 0 : e2.message;
  }
}
function TI(e2) {
  return Fe(ns, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function PI(e2) {
  return Fe(ns, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
const XR = () => {
  const { host: e2, protocol: r } = window.location, n = r === "https:";
  return {
    projectOpened: false,
    remoteDebuggerMode: Rm.DISABLED,
    baseUrl: "",
    qodly: true,
    urls: {
      renderer: "/$lib/renderer/",
      debugger: `ws${n ? "s" : ""}://${e2}/remoteDebugger`,
      lsp: `ws${n ? "s" : ""}://${e2}/LSP`
    },
    isRestActive: true
  };
};
async function CI() {
  const { hostname: e2, host: r, protocol: n } = window.location, o = n === "https:";
  try {
    const a = await Fe(ot, {
      method: "POST",
      body: JSON.stringify({
        verb: kn.GET_APP_SETTINGS
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }), u = (() => {
      if (a.rendererPath)
        return a.rendererPath;
      const l = `http://${e2}:${a.webServerHTTPPort}`, d = `https://${e2}:${a.webServerHTTPSPort}`;
      return a.webServerHTTPPort && a.webServerHTTPSPort ? o ? d : l : a.webServerHTTPPort ? l : d;
    })();
    return {
      projectOpened: a.webServerHTTPSPort > 0 || a.webServerHTTPPort > 0,
      remoteDebuggerMode: a.remoteDebuggerMode,
      baseUrl: u,
      qodly: typeof a.qodly > "u" ? true : a.qodly,
      urls: {
        renderer: a.rendererPath || `${u}/$lib/renderer/`,
        debugger: `ws${o ? "s" : ""}://${r}/remoteDebugger`,
        lsp: `ws${o ? "s" : ""}://${r}/LSP`
      },
      isRestActive: a.isRESTActive
    };
  } catch (a) {
    return console.error(a), XR();
  }
}
async function JR(e2) {
  return await Fe(ot, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function RI(...e2) {
  return (await Promise.all(
    e2.map(
      (o) => JR({
        root: o,
        verb: kn.GET_FOLDER
      })
    )
  )).map(
    ({ children: o }) => o.map(({ name: a, date: u, type: l }) => ({
      name: a,
      type: l,
      date: u,
      path: `${l}/${a}`
    }))
  ).flat();
}
function MI(e2, r = {}) {
  const { sanitize: n = true } = r;
  return Fe(`/rest/$getWebForm/${e2}`, {
    method: "GET"
  }).then((o) => {
    if (!(o != null && o.components) || !n)
      return o;
    const a = /* @__PURE__ */ new Map();
    return {
      ...o,
      // generate a unique id for webform loaders (fixes qs#397)
      // since the same webform loader might be used inside another webform loader
      components: Xe.entries(o.components).map(([u, l]) => {
        const d = u, { resolvedName: w } = l.type;
        if (w === "WebformLoader") {
          const S = Hl.generate();
          a.set(u, S), u = S;
        }
        return [u, l, d];
      }).reduce((u, [l, d, w]) => {
        var S;
        return d.nodes && (d.nodes = d.nodes.map((y) => a.get(y) || y)), d.linkedNodes && (d.linkedNodes = Xe.entries(d.linkedNodes).reduce(
          (y, [h, f]) => ({
            ...y,
            [h]: a.get(f) || f
          }),
          {}
        )), (S = d.props) != null && S.events && (d.props.events = d.props.events.map(
          (y) => (y.type === "navigation" && y.loader && (y.loader = a.get(y.loader) || y.loader), y)
        )), {
          ...u,
          [l]: {
            ...d,
            props: {
              ...d.props,
              __originalID: w
            }
          }
        };
      }, {})
    };
  });
}
function II(e2) {
  return Fe(ot, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(e2)
  }).then((r) => ({
    ...r,
    content: [sr.METHOD, sr.CLASS].includes(
      r.type
    ) ? ef(r.content) : r.content
  }));
}
function LI(e2) {
  return e2.type === "folder" ? Fe(ns, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }) : Fe(ot, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function FI(e2) {
  return e2.type === "folder" ? (await Fe(ns, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })).deleted : (await Fe(ot, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })).deleted;
}
function $I(e2) {
  return Fe(ot, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function NI(e2) {
  return Fe(ot, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function DI(e2) {
  return (await Fe(ot, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })).deleted;
}
async function kI(...e2) {
  return await Fe(ot, {
    method: "POST",
    body: JSON.stringify({
      verb: kn.GET_FILES_INFO,
      files: e2
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function WI(e2) {
  const r = await Fe("/api/login", {
    method: "POST",
    body: JSON.stringify({
      accessKey: e2
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
  return r.isLogged && r.success;
}
async function UI() {
  return await Fe(
    "/rest/$catalog/$all?$metadata=full",
    {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }
  );
}
async function zI(e2) {
  try {
    const r = false ? "/i18n/languages.json" : `/$lib/${e2 ? "studio" : "renderer"}/i18n/languages.json`, o = await (await fetch(r)).text(), { supported: a } = JSON.parse(o);
    return a;
  } catch {
    return [];
  }
}
async function BI({
  name: e2,
  path: r = "",
  root: n = "root",
  asText: o = false
}) {
  return Fe(ot, {
    method: "POST",
    body: JSON.stringify({
      verb: "getFileContent",
      root: n,
      path: r,
      name: e2,
      asText: o
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  });
}
async function HI(e2 = {}) {
  try {
    return await os({
      path: "shared_datasources.json",
      ...e2
    });
  } catch {
    return {};
  }
}
async function jI(e2 = {}) {
  try {
    return await os({
      path: "shared_app_events.json",
      createIfNotExists: true,
      ...e2
    });
  } catch {
    return [];
  }
}
async function qI(e2 = {}) {
  try {
    return await os({
      path: "shared_css.json",
      ...e2
    });
  } catch {
    return { classes: [] };
  }
}
async function ZI(e2 = {}) {
  try {
    return await os({
      path: "saved_conditions.json",
      ...e2
    });
  } catch {
    return { conditions: [] };
  }
}
async function KI() {
  try {
    return await Fe(
      "/rest/$info/privileges",
      {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      }
    );
  } catch {
    return { privileges: [] };
  }
}
async function GI() {
  try {
    return await (await fetch(`monaco_theme.json?t=${Date.now()}`)).json();
  } catch {
    return null;
  }
}
const QR = Mm(), VI = async (e2) => {
  const r = {
    verb: kn.SET_FILE_CONTENT,
    asText: false,
    name: "shared_datasources.json",
    path: "",
    root: "shared",
    content: e2
  };
  return QR(async () => (await Fe(ot, {
    method: "POST",
    body: JSON.stringify(r),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }), e2));
}, eM = Mm(), YI = async (e2) => {
  const r = {
    verb: kn.SET_FILE_CONTENT,
    asText: false,
    name: "shared_app_events.json",
    path: "",
    root: "shared",
    content: e2
  };
  return eM(async () => (await Fe(ot, {
    method: "POST",
    body: JSON.stringify(r),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }), e2));
}, Gm = async (e2) => {
  const r = await Fe(ot, {
    method: "POST",
    body: JSON.stringify({
      ...e2,
      verb: kn.SET_FILE_CONTENT,
      root: Cm.ROOT
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }), n = PC(
    `${e2.path || "Sources"}/${e2.name}`
  );
  return {
    ...r,
    type: n,
    size: 0
  };
}, XI = async (e2) => await Gm({
  name: "crafted_components.json",
  path: On.WEBFORMS,
  content: e2
});
function JI(e2) {
  return Fe(ot, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function QI(e2) {
  return Fe(ot, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function eL(e2) {
  return Fe(ot, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function tL(e2) {
  return Fe(ot, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }).then((r) => Array.isArray(r) ? r : {
    ...r,
    content: ["4dm", "4qm", "4qs"].includes(r.ext) ? ef(r.content) : r.content
  }).catch((r) => {
    var n, o;
    throw ((o = (n = r.data) == null ? void 0 : n.__ERROR[0]) == null ? void 0 : o.errCode) === 1839 && Km(e2.path), r;
  });
}
function rL(e2) {
  return Fe(ot, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function tM(e2) {
  const r = new RegExp(/^\((.+)(?=\))/gi).exec(e2);
  return r !== null ? r[1] : "";
}
function rM(e2) {
  const r = new RegExp(/(->)(.*)/gi).exec(e2);
  if (r !== null)
    return r[0].replace("->", "");
  const n = /:([^)]*)$/.exec(e2);
  return n !== null ? `result : ${n[1].trim()}` : "";
}
function nM(e2) {
  const r = tM(e2).split(/[;,]/g).filter(Boolean).map((a) => {
    const u = a.split(":")[0].trim(), l = a.split(":")[1].trim();
    return {
      name: u,
      type: l
    };
  }), n = rM(e2), o = n ? {
    name: n.split(":")[0].trim(),
    type: n.split(":")[1].trim()
  } : {
    name: "result",
    type: "Variable"
  };
  return {
    params: r,
    result: o
  };
}
async function nL(e2, r) {
  const o = e2.split(".").pop();
  try {
    const a = await Fe(ot, {
      method: "POST",
      body: JSON.stringify({
        verb: "getFunctionContent",
        className: r,
        functionName: o
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    a.content = ef(a.content);
    const { params: u, result: l } = nM(a.parameters);
    return {
      ...a,
      params: u,
      returns: l
    };
  } catch (a) {
    return console.error(a), {
      className: r,
      functionName: o,
      filePath: e2,
      content: "",
      params: []
    };
  }
}
var iM = /* @__PURE__ */ ((e2) => (e2.STUDIO_LOADED = "UA-1-0", e2.WELCOME_TOUR_INIT = "UA-1-3", e2.WELCOME_TOUR_END = "UA-1-4", e2))(iM || {});
function iL(e2, r) {
  fetch("/api/v1/activity", {
    body: JSON.stringify({
      AID: e2,
      ...r
    }),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  }).catch((n) => {
  });
}
function oL(e2) {
  window.pagesense = window.pagesense || [], window.pagesense.push(["trackEvent", e2]);
}
var oM = /* @__PURE__ */ ((e2) => (e2.LOCAL = "local", e2.SHARED = "shared", e2.THEME = "theme", e2))(oM || {}), aM = /* @__PURE__ */ ((e2) => (e2[e2.METHOD = 1] = "METHOD", e2[e2.CLASS = 10] = "CLASS", e2))(aM || {}), sM = /* @__PURE__ */ ((e2) => (e2.WelCome = "WelCome", e2.ActionPanel = "ActionPanel", e2.SideBar = "SideBar", e2.Settings = "Settings", e2.Main = "Main", e2.Explorer = "Explorer", e2.Header = "Header", e2.ComponentList = "ComponentList", e2))(sM || {}), uM = /* @__PURE__ */ ((e2) => (e2[e2.FILE_NOT_FOUND = 1839] = "FILE_NOT_FOUND", e2[e2.JSON_MALFORMED = 554] = "JSON_MALFORMED", e2[e2.JSON_MALFORMED_AT_LINE = 550] = "JSON_MALFORMED_AT_LINE", e2))(uM || {});
const aL = {
  transparent: {
    backgroundColor: "transparent"
  },
  black: {
    backgroundColor: "#4a4a4a",
    color: "white",
    padding: "3px 5px",
    borderRadius: 5
  },
  grey: {
    backgroundColor: "#e8e8e8",
    color: "#262626",
    padding: "3px 5px",
    borderRadius: 5
  }
}, sL = {
  Code: {
    key: "editors:code",
    config: { language: "4d", theme: "fd-dark" }
  },
  WebForm: {
    key: "editors:webforms"
  }
};

export { ot as API_PREFIX, OM as AppLoader, WP as ControlledSwitch, aL as DATASOURCE_THEMES, wC as DatasourcesActions, _C as DebuggerActions, kn as DesignerRequestVerb, vM as Dialog, ox as DialogBody, iM as EActivity, sL as EDITOR, sM as EIDENTIFIERS, uM as ERROR_CODES, oM as EWebFormStyleClassScope, ns as EXT_API_PREFIX, sr as FileFolderType, On as FolderRootPath, Cm as FolderRootType, Ih as HTTPError, TC as HTTP_HANDLERS_PATH, ja as IPreemptive, DC as IPublished, Im as IPublishedRestScope, $M as IdentityProvider, yM as Incase, PO as IndentLines, GM as LOCALIZATION_PATH, zP as LogoSVG, EC as LspActions, Tm as MAX_FILE_NAME_LENGTH, KM as MODEL_TAB_PATH, AM as Modal, to as ModalCloseReason, ai as ModalColor, xh as ModalIcons, vm as ModalType, CC as Mutex, Pm as NameError, ix as Overlay, KE as Portal, wI as PublishOptions, OC as ROLES_TAB_PATH, Rm as RemoteDebuggerMode, AC as SETTINGS_TAB_PATH, qm as SHARED_API_PREFIX, aM as SourceCodeDescriptor, CO as Switcher, SC as TabEventsActions, EM as Tip, SM as TipsProvider, mM as Toast, xM as Tooltip, gM as Tree, pO as TreeIcon, Ov as TreeNode, yC as WebformActions, Ha as WebformEventsActions, TM as ZoomComponent, KP as ZoomLevel, hI as _isArrayDatasource, vI as _isObjectDatasource, SI as addAttributesToContent, $I as addFolder, RC as by, QM as byId, eI as byPath, xI as callServerSideParser, TI as checkUpdates, JI as createFolder, WM as datasourcesSubject, HM as debuggerSubject, FI as dropFile, DI as dropFolder, tI as exists, YM as extractWebformName, EI as generateUUID, CI as getAppSettings, UI as getCatalog, rI as getDatasourceId, XR as getDefaultAppSettings, II as getFile, BI as getFileContent, VM as getFileExtentionFromType, kI as getFilesInfo, JR as getFolder, RI as getFolders, nL as getFunctionContent, GI as getMonacoTheme, tL as getNodeInfo, ZI as getSavedConditions, jI as getSharedAppEvents, qI as getSharedCSS, HI as getSharedDatasources, os as getSharedResource, zI as getSupportedLanguages, PC as getTypeFromExtension, KI as getUserPrivileges, MI as getWebForm, WC as hasAttributesString, Fe as http, PI as installUpdates, FC as isArrayDatasource, aI as isDataClassMethod, oI as isDataStoreMethod, mI as isDateDatasource, dI as isEntity, lI as isEntityDatasource, sI as isEntityMethod, pI as isEntitySelection, fI as isEntitySelectionDatasource, uI as isEntitySelectionMethod, nI as isObjectAttribute, $C as isObjectDatasource, iI as isRelatedAttribute, IC as isRelatedEntitiesAttribute, LC as isRelatedEntityAttribute, NC as isScalarDatasource, MC as isSimpleAttribute, cI as isSimpleDatasource, gI as loadDS, yI as loadI18n, iL as log, WI as login, BM as lspSubject, eL as moveItem, XM as outBy, JM as outById, bI as parseAttributes, Mm as queue, UC as removeAttributesString, QI as removeItem, LI as renameFile, NI as renameFolder, ef as sanitizeContent, rL as saveContent, XI as setCraftedComponents, Gm as setFileContent, YI as setSharedAppEvents, VI as setSharedSources, kC as stringifyAttributes, zM as tabEventsSubject, jM as tasksManagerSubject, bC as toastSubject, oL as trackEvent, _I as transformDates, Km as tryCreateSharedResource, PM as useDidMountEffect, kM as useDoubleClick, FM as useFeatureFlags, LM as useForwardedRef, CM as useHotkeys, NM as useIdentity, RM as useOutsideClick, MM as usePrevious, DM as useStateObject, IM as useStateRef, BT as useTip, xC as validateName, qM as validateServerSide, ZM as validateValue, Cl as webformEventsSubject, UM as webformSubject };
