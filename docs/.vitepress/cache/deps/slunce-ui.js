import {
  computed,
  createBaseVNode,
  createElementBlock,
  defineComponent,
  normalizeClass,
  normalizeStyle,
  openBlock,
  renderSlot,
  unref
} from "./chunk-APGZIJ2V.js";

// node_modules/slunce-ui/dist/slunce-ui.js
var k = {
  name: "sl-button"
};
var w = defineComponent({
  ...k,
  props: {
    type: {
      type: String,
      default: "default"
    },
    disabled: Boolean,
    round: Boolean,
    plain: Boolean,
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
  setup(e) {
    const t = e, o = (n, m) => {
      let f = [
        parseInt("0x" + n.slice(1, 3)),
        parseInt("0x" + n.slice(3, 5)),
        parseInt("0x" + n.slice(5, 7))
      ], i = [];
      for (var _ = 0; _ < f.length; _++) {
        let r = f[_] + m;
        r < 0 && (r = 0), r > 255 && (r = 255), i.push(r);
      }
      var I = i[0], x = i[1], C = i[2], B = "#" + ((1 << 24) + (I << 16) + (x << 8) + C).toString(16).slice(1);
      return B;
    }, l = {
      "--custom-color": t.color,
      "--custom-color-hover": o(t.color, 40),
      "--custom-color-active": o(t.color, -40),
      "--custom-color-disabled": o(t.color, 80)
    }, s = computed(() => [
      t.size == "medium" ? "sl-button-medium" : t.size == "small" ? "sl-button-small" : t.size == "mini" ? "sl-button-mini" : "sl-button sl-button-normal",
      t.type ? `sl-button-${t.type}` : "",
      t.disabled ? "is-disabled" : "",
      t.plain ? "is-plain" : "",
      t.round ? "is-round" : ""
    ]), p = computed(() => [
      t.color == "" ? {} : t.type == "default" ? {} : l
    ]);
    return (n, m) => (openBlock(), createElementBlock("button", {
      class: normalizeClass(["slButton", unref(s)]),
      style: normalizeStyle(unref(p))
    }, [
      renderSlot(n.$slots, "default", {}, void 0, true)
    ], 6));
  }
});
var S = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, s] of t)
    o[l] = s;
  return o;
};
var u = S(w, [["__scopeId", "data-v-ac3db428"]]);
u.install = (e) => {
  e.component(u.name, u);
};
var N = ["width", "height"];
var E = ["xlink:href"];
var A = {
  name: "sl-icon"
};
var D = defineComponent({
  ...A,
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
  setup(e) {
    const t = e, o = computed(() => `#icon-${t.name}`), l = computed(() => `color: ${t.color}`), s = computed(() => ["sl-icon", t.name ? `icon-${t.name}` : ""]);
    return (p, n) => (openBlock(), createElementBlock("svg", {
      class: normalizeClass(unref(s)),
      style: normalizeStyle(unref(l)),
      width: t.width,
      height: t.height,
      "aria-hidden": "true"
    }, [
      createBaseVNode("use", {
        "xlink:href": unref(o),
        fill: "currentColor"
      }, null, 8, E)
    ], 14, N));
  }
});
var d = S(D, [["__scopeId", "data-v-77c97760"]]);
d.install = (e) => {
  e.component(d.name, d);
};
var O = [
  u,
  d
];
var U = (e) => {
  O.forEach((t) => e.component(t.name, t));
};
var j = {
  install: U
};
export {
  j as default,
  u as slButton,
  d as slIcon
};
//# sourceMappingURL=slunce-ui.js.map
