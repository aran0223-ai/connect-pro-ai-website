import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-DAn3oYoO.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./nuxt-link-CWAfGLLl.js";
import "/workspaces/connect-pro-ai-website/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/workspaces/connect-pro-ai-website/node_modules/hookable/dist/index.mjs";
import "/workspaces/connect-pro-ai-website/node_modules/unctx/dist/index.mjs";
import "/workspaces/connect-pro-ai-website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/workspaces/connect-pro-ai-website/node_modules/radix3/dist/index.mjs";
import "/workspaces/connect-pro-ai-website/node_modules/defu/dist/defu.mjs";
import "/workspaces/connect-pro-ai-website/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "terms",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "site-root",
        style: { "background": "#121212", "color": "#fff", "min-height": "100vh" }
      }, _attrs))} data-v-9e5a038c>`);
      _push(ssrRenderComponent(SiteHeader, null, null, _parent));
      _push(`<main class="container policy-content" data-v-9e5a038c><h1 style="${ssrRenderStyle({ "color": "#00FF00" })}" data-v-9e5a038c>Terms of Service</h1><p data-v-9e5a038c>Last updated: October 24, 2025</p><section class="about-section" data-v-9e5a038c><h2 data-v-9e5a038c>About Us</h2><p data-v-9e5a038c> Connect Pro AI is an AI-powered platform connecting businesses with verified service providers. We operate as an autonomous AI middleman, ensuring secure, transparent, and efficient business connections. Our mission is to simplify and streamline the process of finding trusted partners for your business needs. </p></section><h2 data-v-9e5a038c>1. Legal Entity</h2><p data-v-9e5a038c>This service is a trade name operated by <strong data-v-9e5a038c>Aran Jallal</strong>, Sole Proprietor, doing business as &quot;Connect Pro AI&quot;. All legal agreements and commissions are settled with the legal entity, <strong data-v-9e5a038c>Aran Jallal</strong>.</p><h2 data-v-9e5a038c>2. Service Description</h2><p data-v-9e5a038c> Connect Pro AI operates as an autonomous AI middleman platform that: <ul data-v-9e5a038c><li data-v-9e5a038c>Facilitates connections between businesses seeking services and vetted providers/agencies.</li><li data-v-9e5a038c>Charges a 15% commission fee on the initial contract value (or first retainer). We do not directly provide marketing services.</li></ul></p><h2 data-v-9e5a038c>3. Payment Terms</h2><p data-v-9e5a038c> All transactions are processed through Paddle as the Merchant of Record. Provider payouts are made via USDT (crypto). By using our service, you agree to: <ul data-v-9e5a038c><li data-v-9e5a038c>Pay the agreed service fee (15% of initial contract value).</li><li data-v-9e5a038c>Process all payments through our designated payment processor (Paddle).</li><li data-v-9e5a038c>Acknowledge that all commissions are settled with the legal entity, Aran Jallal.</li></ul></p><h2 data-v-9e5a038c>4. Service Guarantee</h2><p data-v-9e5a038c>We guarantee: Verification of provider credentials; Secure and transparent handling of introductions; A clear, fixed fee structure.</p><h2 data-v-9e5a038c>5. Limitation of Liability</h2><p data-v-9e5a038c>Connect Pro AI acts solely as an intermediary. We are not responsible for: The quality of services provided by matched providers; Direct or indirect damages arising from provider services; Business outcomes related to matched services.</p><h2 data-v-9e5a038c>6. Contact Information</h2><p data-v-9e5a038c> Trading As: Liam Smith | AI Partner<br data-v-9e5a038c> Legal Entity: Aran Jallal (Sole Proprietor)<br data-v-9e5a038c> Email: <a href="mailto:liam@connect-pro-ai.net" style="${ssrRenderStyle({ "color": "#00FF00" })}" data-v-9e5a038c>liam@connect-pro-ai.net</a></p></main>`);
      _push(ssrRenderComponent(SiteFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const terms = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9e5a038c"]]);
export {
  terms as default
};
//# sourceMappingURL=terms-DqFB6XaB.js.map
