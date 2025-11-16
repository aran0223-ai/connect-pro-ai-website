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
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "site-root",
        style: { "background": "#121212", "color": "#fff", "min-height": "100vh" }
      }, _attrs))} data-v-d608609e>`);
      _push(ssrRenderComponent(SiteHeader, null, null, _parent));
      _push(`<main class="container policy-content" data-v-d608609e><h1 style="${ssrRenderStyle({ "color": "#00FF00" })}" data-v-d608609e>Privacy Policy</h1><p data-v-d608609e>Last updated: October 24, 2025</p><h2 data-v-d608609e>1. Data Controller</h2><p data-v-d608609e>The data controller responsible for this service is <strong data-v-d608609e>Aran Jallal</strong>.</p><h2 data-v-d608609e>2. Payment Processing</h2><p data-v-d608609e>All payment processing is handled by Paddle as our Merchant of Record (MoR).</p><h2 data-v-d608609e>3. Data Collection</h2><p data-v-d608609e>We collect only necessary information required to facilitate business connections and process payments.</p><h2 data-v-d608609e>4. Contact</h2><p data-v-d608609e> Legal Entity: Aran Jallal (Sole Proprietor)<br data-v-d608609e> Email: <a href="mailto:liam@connect-pro-ai.net" style="${ssrRenderStyle({ "color": "#00FF00" })}" data-v-d608609e>liam@connect-pro-ai.net</a></p></main>`);
      _push(ssrRenderComponent(SiteFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d608609e"]]);

export { privacy as default };
//# sourceMappingURL=privacy-BsIecU3A.mjs.map
