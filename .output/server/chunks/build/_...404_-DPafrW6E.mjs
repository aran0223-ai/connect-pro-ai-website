import { _ as __nuxt_component_0 } from './nuxt-link-CWAfGLLl.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { S as SiteHeader, a as SiteFooter } from './SiteFooter-DAn3oYoO.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...404]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "site-root",
        style: { "background": "#121212", "color": "#fff", "min-height": "100vh" }
      }, _attrs))} data-v-7d9cb50d>`);
      _push(ssrRenderComponent(SiteHeader, null, null, _parent));
      _push(`<main class="container error-content" data-v-7d9cb50d><h1 style="${ssrRenderStyle({ "color": "#00FF00" })}" data-v-7d9cb50d>404 - Page Not Found</h1><p data-v-7d9cb50d>The page you&#39;re looking for doesn&#39;t exist.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "btn-primary",
        style: { "background": "#00FF00", "color": "#121212", "padding": "0.5rem 1rem", "border-radius": "4px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Return Home`);
          } else {
            return [
              createTextVNode("Return Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(SiteFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...404].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____404_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7d9cb50d"]]);

export { ____404_ as default };
//# sourceMappingURL=_...404_-DPafrW6E.mjs.map
