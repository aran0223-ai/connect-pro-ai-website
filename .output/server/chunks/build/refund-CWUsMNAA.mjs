import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { S as SiteHeader, a as SiteFooter } from './SiteFooter-DAn3oYoO.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './nuxt-link-CWAfGLLl.mjs';
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
  __name: "refund",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "site-root",
        style: { "background": "#121212", "color": "#fff", "min-height": "100vh" }
      }, _attrs))} data-v-e6279daf>`);
      _push(ssrRenderComponent(SiteHeader, null, null, _parent));
      _push(`<main class="container policy-content" data-v-e6279daf><h1 style="${ssrRenderStyle({ "color": "#00FF00" })}" data-v-e6279daf>Refund Policy</h1><p data-v-e6279daf>Last updated: October 24, 2025</p><h2 data-v-e6279daf>1. Commission Fee</h2><p data-v-e6279daf>The 15% commission fee charged by Connect Pro AI is <strong data-v-e6279daf>non-refundable</strong>.</p><h2 data-v-e6279daf>2. Service Quality</h2><p data-v-e6279daf>Liability for service quality rests solely with the Provider, not the legal entity, <strong data-v-e6279daf>Aran Jallal</strong>.</p><h2 data-v-e6279daf>3. Contact</h2><p data-v-e6279daf> Legal Entity: Aran Jallal (Sole Proprietor)<br data-v-e6279daf> Email: <a href="mailto:liam@connect-pro-ai.net" style="${ssrRenderStyle({ "color": "#00FF00" })}" data-v-e6279daf>liam@connect-pro-ai.net</a></p></main>`);
      _push(ssrRenderComponent(SiteFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/refund.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const refund = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e6279daf"]]);

export { refund as default };
//# sourceMappingURL=refund-CWUsMNAA.mjs.map
