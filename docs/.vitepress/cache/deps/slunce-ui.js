import {
  Transition,
  computed,
  createBaseVNode,
  createBlock,
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
  vShow,
  withCtx,
  withDirectives
} from "./chunk-APGZIJ2V.js";

// node_modules/slunce-ui/dist/slunce-ui.js
var O = {
  name: "sl-button"
};
var V = defineComponent({
  ...O,
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
    const e = t, n = (r, v) => {
      let b = [
        parseInt("0x" + r.slice(1, 3)),
        parseInt("0x" + r.slice(3, 5)),
        parseInt("0x" + r.slice(5, 7))
      ], u = [];
      for (var y = 0; y < b.length; y++) {
        let i = b[y] + v;
        i < 0 && (i = 0), i > 255 && (i = 255), u.push(i);
      }
      var k = u[0], B = u[1], C = u[2], w = "#" + ((1 << 24) + (k << 16) + (B << 8) + C).toString(16).slice(1);
      return w;
    }, o = {
      "--custom-color": e.color,
      "--custom-color-hover": n(e.color, 40),
      "--custom-color-active": n(e.color, -40),
      "--custom-color-disabled": n(e.color, 80)
    }, s = computed(() => [
      e.size == "medium" ? "sl-button-medium" : e.size == "small" ? "sl-button-small" : e.size == "mini" ? "sl-button-mini" : "sl-button sl-button-normal",
      e.type ? `sl-button-${e.type}` : "",
      e.disabled ? "is-disabled" : "",
      e.plain ? "is-plain" : "",
      e.round ? "is-round" : "",
      e.text ? "is-text" : "",
      e.bg ? "is-bg" : ""
    ]), c = computed(() => [
      e.color == "" ? {} : e.type == "default" ? {} : o
    ]);
    return (r, v) => (openBlock(), createElementBlock("button", {
      class: normalizeClass(["slButton", unref(s)]),
      style: normalizeStyle(unref(c))
    }, [
      renderSlot(r.$slots, "default", {}, void 0, true)
    ], 6));
  }
});
var m = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, s] of e)
    n[o] = s;
  return n;
};
var j = m(V, [["__scopeId", "data-v-3dd6ea4a"]]);
var h = (t) => (t.install = (e) => {
  const n = t.name || t.__name;
  e.component(n, t);
}, t);
var P = h(j);
var U = ["width", "height"];
var F = ["xlink:href"];
var G = {
  name: "sl-icon"
};
var H = defineComponent({
  ...G,
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
    const e = t, n = computed(() => `#icon-${e.name}`), o = computed(() => `color: ${e.color}`), s = computed(() => ["sl-icon", e.name ? `icon-${e.name}` : ""]);
    return (c, r) => (openBlock(), createElementBlock("svg", {
      class: normalizeClass(unref(s)),
      style: normalizeStyle(unref(o)),
      width: e.width,
      height: e.height,
      "aria-hidden": "true"
    }, [
      createBaseVNode("use", {
        "xlink:href": unref(n),
        fill: "currentColor"
      }, null, 8, F)
    ], 14, U));
  }
});
var J = m(H, [["__scopeId", "data-v-7d74408c"]]);
var K = h(J);
var Q = {
  name: "sl-link"
};
var R = defineComponent({
  ...Q,
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
    return (o, s) => (openBlock(), createElementBlock("span", {
      class: normalizeClass(unref(n))
    }, [
      renderSlot(o.$slots, "default", {}, void 0, true)
    ], 2));
  }
});
var W = m(R, [["__scopeId", "data-v-fa5f001b"]]);
var X = h(W);
var Y = {
  key: 0,
  class: "text"
};
var Z = {
  name: "Message"
};
var ee = defineComponent({
  ...Z,
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
    const e = t, n = computed(() => typeof e.text == "string"), o = computed(() => e.type ? `sl-message-${e.type}` : "sl-message-info"), s = ref(false);
    return onMounted(() => {
      s.value = true;
    }), (c, r) => (openBlock(), createBlock(Transition, { name: "slide-fade" }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass(["sl-message", unref(o)])
        }, [
          unref(n) ? (openBlock(), createElementBlock("span", Y, toDisplayString(t.text), 1)) : renderSlot(c.$slots, "default", { key: 1 }, void 0, true)
        ], 2), [
          [vShow, s.value]
        ])
      ]),
      _: 3
    }));
  }
});
var te = m(ee, [["__scopeId", "data-v-99649baf"]]);
var $ = ({ text: t, type: e = "info", timeout: n = 2500 }) => {
  document.querySelector(".sl-message-container") && document.body.removeChild(
    document.querySelector(".sl-message-container")
  );
  const o = typeof document < "u" && typeof document.createElement < "u" ? document.createElement("div") : void 0;
  o.setAttribute("class", "sl-message-container"), typeof document < "u" && document.body.appendChild(o);
  let s = null;
  const c = createVNode(te, { text: t, type: e, timeout: n }, [t]);
  render(c, o), clearTimeout(s), s = setTimeout(() => {
    render(null, o), typeof document < "u" && document.body.removeChild(o), clearTimeout(s);
  }, n);
};
var ne = [
  P,
  K,
  X,
  $
];
var oe = (t) => {
  ne.forEach((e) => t.component(e.name, e)), t.config.globalProperties.$message = $;
};
var le = {
  install: oe
};
export {
  $ as Message,
  le as default,
  P as slButton,
  K as slIcon,
  X as slLink
};
//# sourceMappingURL=slunce-ui.js.map
