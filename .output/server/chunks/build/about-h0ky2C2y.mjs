import { defineComponent, useSSRContext, mergeProps } from 'vue';
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
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "site-root",
        style: { "background": "#121212", "color": "#fff", "min-height": "100vh" }
      }, _attrs))} data-v-ccf6a7a0>`);
      _push(ssrRenderComponent(SiteHeader, null, null, _parent));
      _push(`<main class="container about-content" data-v-ccf6a7a0><h1 style="${ssrRenderStyle({ "color": "#00FF00" })}" data-v-ccf6a7a0>About Connect Pro AI</h1><p data-v-ccf6a7a0>We&#39;re an AI-powered platform connecting businesses with verified service providers.</p><div class="team" data-v-ccf6a7a0><h2 style="${ssrRenderStyle({ "color": "#00FF00" })}" data-v-ccf6a7a0>Our Team</h2><div class="team-member" data-v-ccf6a7a0><h3 data-v-ccf6a7a0>Liam Smith</h3><p data-v-ccf6a7a0>Brand &amp; Operations</p></div><div class="team-member" data-v-ccf6a7a0><h3 data-v-ccf6a7a0>Aran Jallal</h3><p data-v-ccf6a7a0>Legal Entity &amp; Proprietor</p></div></div></main>`);
      _push(ssrRenderComponent(SiteFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ccf6a7a0"]]);

export { about as default };
//# sourceMappingURL=about-h0ky2C2y.mjs.map
