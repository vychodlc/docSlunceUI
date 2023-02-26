import {
  computed,
  createElementBlock,
  defineComponent,
  normalizeClass,
  normalizeStyle,
  openBlock,
  renderSlot,
  unref
} from "./chunk-APGZIJ2V.js";

// node_modules/slunce-ui/dist/slunce-ui.js
var _ = {
  name: "sl-button"
};
var b = defineComponent({
  ..._,
  props: {
    type: {
      type: String,
      default: "default"
    },
    disabled: Boolean,
    round: Boolean,
    size: {
      type: String,
      default: "default"
    },
    customColor: {
      type: String,
      default: ""
    },
    leftIcon: String,
    rightIcon: String,
    localing: Boolean
  },
  setup(e) {
    const t = e, o = {
      background: t.customColor,
      border: t.customColor,
      color: "#fff"
    }, s = computed(() => [
      t.size == "medium" ? "sl-button-medium" : t.size == "small" ? "sl-button-small" : t.size == "mini" ? "sl-button-mini" : "sl-button",
      t.type ? `sl-button-${t.type}` : "",
      t.disabled ? `sl-button-${t.type ? t.type : "default"}-disabled` : "",
      t.round ? `sl-button-${t.size ? t.size : "default"}-round` : ""
    ]), l = computed(() => [
      t.customColor == "" ? {} : t.type == "default" ? {} : o
    ]);
    return (r, z) => (openBlock(), createElementBlock("button", {
      class: normalizeClass(["slButton", unref(s)]),
      style: normalizeStyle(unref(l))
    }, [
      renderSlot(r.$slots, "default", {}, void 0, true)
    ], 6));
  }
});
var y = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, l] of t)
    o[s] = l;
  return o;
};
var n = y(b, [["__scopeId", "data-v-a9940aa4"]]);
n.install = (e) => {
  e.component(n.name, n);
};
var g = [
  n
];
var S = (e) => {
  g.forEach((t) => e.component(t.name, t));
};
var C = {
  install: S
};
export {
  C as default,
  n as slButton
};
//# sourceMappingURL=slunce-ui.js.map
