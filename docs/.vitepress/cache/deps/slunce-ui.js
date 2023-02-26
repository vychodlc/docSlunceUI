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
var f = {
  name: "sl-button"
};
var y = defineComponent({
  ...f,
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
    const t = e, o = {
      "--custom-color": t.color
    }, l = computed(() => [
      t.size == "medium" ? "sl-button-medium" : t.size == "small" ? "sl-button-small" : t.size == "mini" ? "sl-button-mini" : "sl-button",
      t.type ? `sl-button-${t.type}` : "",
      t.disabled ? "is-disabled" : "",
      t.plain ? "is-plain" : "",
      t.round ? "is-round" : ""
    ]), s = computed(() => [
      t.color == "" ? {} : t.type == "default" ? {} : o
    ]);
    return (r, B) => (openBlock(), createElementBlock("button", {
      class: normalizeClass(["slButton", unref(l)]),
      style: normalizeStyle(unref(s))
    }, [
      renderSlot(r.$slots, "default", {}, void 0, true)
    ], 6));
  }
});
var b = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, s] of t)
    o[l] = s;
  return o;
};
var n = b(y, [["__scopeId", "data-v-4d739fc3"]]);
n.install = (e) => {
  e.component(n.name, n);
};
var g = [
  n
];
var S = (e) => {
  g.forEach((t) => e.component(t.name, t));
};
var z = {
  install: S
};
export {
  z as default,
  n as slButton
};
//# sourceMappingURL=slunce-ui.js.map
