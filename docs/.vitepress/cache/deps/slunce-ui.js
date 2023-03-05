import {
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  normalizeClass,
  normalizeStyle,
  onMounted,
  openBlock,
  ref,
  render,
  renderSlot,
  toDisplayString,
  unref,
  useCssVars,
  vShow,
  withCtx,
  withDirectives
} from "./chunk-APGZIJ2V.js";

// node_modules/slunce-ui/dist/slunce-ui.js
var q = {
  name: "sl-button"
};
var F = defineComponent({
  ...q,
  props: {
    type: {
      type: String,
      default: "default"
    },
    disabled: Boolean,
    round: Boolean,
    plain: Boolean,
    text: Boolean,
    bg: Boolean,
    size: {
      type: String,
      default: "default"
    },
    color: {
      type: String,
      default: "#000"
    },
    leftIcon: String,
    rightIcon: String,
    localing: Boolean
  },
  setup(t) {
    const e = t, n = (c, _) => {
      let d = [
        parseInt("0x" + c.slice(1, 3)),
        parseInt("0x" + c.slice(3, 5)),
        parseInt("0x" + c.slice(5, 7))
      ], r = [];
      for (var u = 0; u < d.length; u++) {
        let g = d[u] + _;
        g < 0 && (g = 0), g > 255 && (g = 255), r.push(g);
      }
      var v = r[0], i = r[1], p = r[2], w = "#" + ((1 << 24) + (v << 16) + (i << 8) + p).toString(16).slice(1);
      return w;
    }, l = {
      "--custom-color": e.color,
      "--custom-color-hover": n(e.color, 40),
      "--custom-color-active": n(e.color, -40),
      "--custom-color-disabled": n(e.color, 80)
    }, o = computed(() => [
      e.size == "medium" ? "sl-button-medium" : e.size == "small" ? "sl-button-small" : e.size == "mini" ? "sl-button-mini" : "sl-button sl-button-normal",
      e.type ? `sl-button-${e.type}` : "",
      e.disabled ? "is-disabled" : "",
      e.plain ? "is-plain" : "",
      e.round ? "is-round" : "",
      e.text ? "is-text" : "",
      e.bg ? "is-bg" : ""
    ]), s = computed(() => [
      e.color == "" ? {} : e.type == "default" ? {} : l
    ]);
    return (c, _) => (openBlock(), createElementBlock("button", {
      class: normalizeClass(["slButton", unref(o)]),
      style: normalizeStyle(unref(s))
    }, [
      renderSlot(c.$slots, "default", {}, void 0, true)
    ], 6));
  }
});
var b = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [l, o] of e)
    n[l] = o;
  return n;
};
var H = b(F, [["__scopeId", "data-v-18d7f027"]]);
var $ = (t) => (t.install = (e) => {
  const n = t.name || t.__name;
  e.component(n, t);
}, t);
var P = $(H);
(function(t) {
  var e, n = '<svg><symbol id="icon-minus"  class="icon icon-minus" viewBox="0 0 100 100">  <line x1="15" y1="50" x2="85" y2="50" stroke-width="5" stroke="currentColor"></line></symbol><symbol id="icon-play"  class="icon icon-play" viewBox="0 0 100 100"viewBox="0 0 0 0">  <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="5" fill="none"/>  <line x1="35" y1="30" x2="35" y2="70" stroke-width="5" stroke="currentColor"></line>  <line x1="65" y1="30" x2="65" y2="70" stroke-width="5" stroke="currentColor"></line></symbol><symbol id="icon-plus"  class="icon icon-plus" viewBox="0 0 100 100">  <line x1="15" y1="50" x2="85" y2="50" stroke-width="5" stroke="currentColor"></line>  <line x1="50" y1="15" x2="50" y2="85" stroke-width="5" stroke="currentColor"></line></symbol><symbol id="icon-search"  class="icon icon-search" viewBox="0 0 100 100"viewBox="0 0 0 0">  <circle cx="40" cy="40" r="30" stroke="currentColor" stroke-width="5" fill="none"></circle>  <line x1="66" y1="66" x2="88" y2="88" stroke-width="5" stroke="currentColor"></line></symbol></svg>', l = (e = document.getElementsByTagName("script"))[e.length - 1].getAttribute("data-injectcss");
  if (l && !t.__iconfont__svg__cssinject__) {
    t.__iconfont__svg__cssinject__ = true;
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (o) {
      console && console.log(o);
    }
  }
  (function(o) {
    if (document.addEventListener)
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState))
        setTimeout(o, 0);
      else {
        var s = function() {
          document.removeEventListener("DOMContentLoaded", s, false), o();
        };
        document.addEventListener("DOMContentLoaded", s, false);
      }
    else
      document.attachEvent && (_ = o, d = t.document, r = false, (u = function() {
        try {
          d.documentElement.doScroll("left");
        } catch {
          return void setTimeout(u, 50);
        }
        c();
      })(), d.onreadystatechange = function() {
        d.readyState == "complete" && (d.onreadystatechange = null, c());
      });
    function c() {
      r || (r = true, _());
    }
    var _, d, r, u;
  })(function() {
    var o, s, c, _, d, r;
    (o = document.createElement("div")).innerHTML = n, n = null, (s = o.getElementsByTagName("svg")[0]) && (s.setAttribute("aria-hidden", "true"), s.style.position = "absolute", s.style.width = 0, s.style.height = 0, s.style.overflow = "hidden", c = s, (_ = document.body).firstChild ? (d = c, (r = _.firstChild).parentNode.insertBefore(d, r)) : _.appendChild(c));
  });
})(window);
var U = ["width", "height"];
var G = ["xlink:href"];
var J = {
  name: "sl-icon"
};
var K = defineComponent({
  ...J,
  props: {
    name: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    width: {
      type: [Number, String],
      default: 60
    },
    height: {
      type: [Number, String],
      default: 60
    }
  },
  setup(t) {
    const e = t, n = computed(() => `#icon-${e.name}`), l = computed(() => `color: ${e.color}`), o = computed(() => ["sl-icon", e.name ? `icon-${e.name}` : ""]);
    return (s, c) => (openBlock(), createElementBlock("svg", {
      class: normalizeClass(unref(o)),
      style: normalizeStyle(unref(l)),
      width: e.width,
      height: e.height,
      "aria-hidden": "true"
    }, [
      createBaseVNode("use", {
        "xlink:href": unref(n),
        fill: "currentColor"
      }, null, 8, G)
    ], 14, U));
  }
});
var Q = b(K, [["__scopeId", "data-v-cab599e7"]]);
var W = $(Q);
var X = {
  name: "sl-link"
};
var Y = defineComponent({
  ...X,
  props: {
    type: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    underline: {
      type: Boolean,
      default: true
    }
  },
  setup(t) {
    const e = t, n = computed(() => [
      "sl-link",
      e.type ? `sl-link-${e.type}` : "sl-link-default",
      e.disabled ? "is-disabled" : "",
      e.underline ? "" : "no-underline"
    ]);
    return (l, o) => (openBlock(), createElementBlock("span", {
      class: normalizeClass(unref(n))
    }, [
      renderSlot(l.$slots, "default", {}, void 0, true)
    ], 2));
  }
});
var Z = b(Y, [["__scopeId", "data-v-fa5f001b"]]);
var ee = $(Z);
var te = {
  key: 0,
  class: "text"
};
var oe = {
  name: "sl-message"
};
var ne = defineComponent({
  ...oe,
  props: {
    type: {
      type: String,
      default: "info"
    },
    text: {
      type: [String, Object],
      default: ""
    }
  },
  setup(t) {
    const e = t, n = computed(() => typeof e.text == "string"), l = computed(() => e.type ? `sl-message-${e.type}` : "sl-message-info"), o = ref(false);
    return onMounted(() => {
      o.value = true;
    }), (s, c) => (openBlock(), createBlock(Transition, { name: "slide-fade" }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass(["sl-message", unref(l)])
        }, [
          unref(n) ? (openBlock(), createElementBlock("span", te, toDisplayString(t.text), 1)) : renderSlot(s.$slots, "default", { key: 1 }, void 0, true)
        ], 2), [
          [vShow, o.value]
        ])
      ]),
      _: 3
    }));
  }
});
var se = b(ne, [["__scopeId", "data-v-b18c90c8"]]);
var S = ({ text: t, type: e = "info", timeout: n = 2e3, close: l = false }) => {
  document.querySelector(".sl-message-container") && document.body.removeChild(
    document.querySelector(".sl-message-container")
  );
  const o = typeof document < "u" && typeof document.createElement < "u" ? document.createElement("div") : void 0;
  o.setAttribute("class", "sl-message-container"), typeof document < "u" && typeof o < "u" && document.body.appendChild(o);
  let s = null;
  const c = createVNode(se, { text: t, type: e, timeout: n, close: l }, [t]);
  render(c, o), clearTimeout(s), s = setTimeout(() => {
    render(null, o), typeof document < "u" && typeof o < "u" && document.body.appendChild(o), clearTimeout(s);
  }, n);
};
var le = { class: "sl-col-default" };
var ce = {
  name: "sl-col"
};
var re = defineComponent({
  ...ce,
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  setup(t) {
    const e = t;
    useCssVars((o) => ({
      "0f6cfb60": n.value,
      "0316a149": l.value
    }));
    const n = ref(e.span <= 24 && e.span % 1 == 0 ? 100 / 24 * e.span + "%" : ""), l = ref(e.offset <= 24 && e.offset % 1 == 0 ? 100 / 24 * e.offset + "%" : "");
    return (o, s) => (openBlock(), createElementBlock("div", le, [
      renderSlot(o.$slots, "default", {}, void 0, true)
    ]));
  }
});
var ie = b(re, [["__scopeId", "data-v-fad5cb1f"]]);
var ae = $(ie);
var de = {
  name: "sl-row"
};
var ue = { class: "sl-row-default" };
function _e(t, e, n, l, o, s) {
  return openBlock(), createElementBlock("div", ue, [
    renderSlot(t.$slots, "default", {}, void 0, true)
  ]);
}
var fe = b(de, [["render", _e], ["__scopeId", "data-v-fae0707b"]]);
var pe = $(fe);
var C = (t, e) => {
  let n = [
    parseInt("0x" + t.slice(1, 3)),
    parseInt("0x" + t.slice(3, 5)),
    parseInt("0x" + t.slice(5, 7))
  ], l = [];
  for (var o = 0; o < n.length; o++) {
    let r = n[o] + e;
    r < 0 && (r = 0), r > 255 && (r = 255), l.push(r);
  }
  var s = l[0], c = l[1], _ = l[2], d = "#" + ((1 << 24) + (s << 16) + (c << 8) + _).toString(16).slice(1);
  return d;
};
var me = { class: "sl-color" };
var ye = { class: "sl-color-name" };
var ve = { class: "sl-color-value" };
var ge = {
  key: 0,
  class: "sl-color-items"
};
var he = {
  name: "sl-color"
};
var Ce = defineComponent({
  ...he,
  props: {
    color: {
      type: String,
      default: ""
    },
    text: String,
    otherColor: {
      type: Boolean,
      default: false
    }
  },
  setup(t) {
    const e = t;
    useCssVars((v) => ({
      33318424: unref(n),
      "32ff008d": unref(o),
      "32ff008e": unref(s),
      "32ff008f": unref(c),
      "32ff0090": unref(_),
      "32ff0091": unref(d),
      "32ff0092": unref(r)
    }));
    const n = e.color, l = computed(() => `
    width: 100%;
    height: ${e.otherColor ? "70%" : "100%"};
  `), o = C(n, -50), s = C(n, -20), c = C(n, 10), _ = C(n, 40), d = C(n, 70), r = C(n, 100), u = (v) => {
      var g;
      let i = C(n, v == 0 ? 0 : 30 * v - 50);
      const p = ["", "-dark-2", "-dark-1", "-light-1", "-light-2", "-light-3", "-light-4"], w = `--sl-color-${(g = e.text) == null ? void 0 : g.toLocaleLowerCase().replace(" ", "-")}${p[v]}: ${i}`;
      navigator.clipboard.writeText(w).then(() => {
        S({
          type: "success",
          text: `Copy Success ~ ${w}`
        });
      }, () => {
        S({
          type: "Danger",
          text: "Copy Failed !"
        });
      });
    };
    return (v, i) => (openBlock(), createElementBlock("div", me, [
      createBaseVNode("div", {
        class: "sl-color-main",
        style: normalizeStyle(unref(l)),
        onClick: i[0] || (i[0] = (p) => u(0))
      }, [
        createBaseVNode("div", ye, toDisplayString(e.text), 1),
        createBaseVNode("div", ve, toDisplayString(e.color), 1)
      ], 4),
      t.otherColor ? (openBlock(), createElementBlock("div", ge, [
        createBaseVNode("div", {
          class: "sl-color-item",
          onClick: i[1] || (i[1] = (p) => u(1))
        }),
        createBaseVNode("div", {
          class: "sl-color-item",
          onClick: i[2] || (i[2] = (p) => u(2))
        }),
        createBaseVNode("div", {
          class: "sl-color-item",
          onClick: i[3] || (i[3] = (p) => u(3))
        }),
        createBaseVNode("div", {
          class: "sl-color-item",
          onClick: i[4] || (i[4] = (p) => u(4))
        }),
        createBaseVNode("div", {
          class: "sl-color-item",
          onClick: i[5] || (i[5] = (p) => u(5))
        }),
        createBaseVNode("div", {
          class: "sl-color-item",
          onClick: i[6] || (i[6] = (p) => u(6))
        })
      ])) : createCommentVNode("", true)
    ]));
  }
});
var be = b(Ce, [["__scopeId", "data-v-c547fcec"]]);
var xe = $(be);
var $e = [
  P,
  W,
  ee,
  S,
  ae,
  pe,
  xe
];
var ke = (t) => {
  $e.forEach((e) => t.component(e.name, e)), t.config.globalProperties.$message = S;
};
var Se = {
  install: ke
};
export {
  Se as default,
  P as slButton,
  ae as slCol,
  xe as slColor,
  W as slIcon,
  ee as slLink,
  S as slMessage,
  pe as slRow
};
//# sourceMappingURL=slunce-ui.js.map
