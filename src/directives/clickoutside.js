export default {
  priority: 700,
  bind: function(el, binding, vNode) {
    const handler = e => {
      if (!el.contains(e.target) && el !== e.target) {
        vNode.context[binding.expression]();
      }
    };
    el.out = handler;
    document.addEventListener("click", handler);
  },
  unbind: function(el) {
    document.removeEventListener("click", el.out);
    el.out = null;
  }
};
