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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "site-root",
        style: { "background": "#121212", "color": "#fff", "min-height": "100vh" }
      }, _attrs))} data-v-e6cf9155>`);
      _push(ssrRenderComponent(SiteHeader, null, null, _parent));
      _push(`<main class="container contact-content" data-v-e6cf9155><h1 style="${ssrRenderStyle({ "color": "#00FF00" })}" data-v-e6cf9155>Contact Us</h1><p data-v-e6cf9155>Email: <a href="mailto:liam@connect-pro-ai.net" style="${ssrRenderStyle({ "color": "#00FF00" })}" data-v-e6cf9155>liam@connect-pro-ai.net</a></p></main>`);
      _push(ssrRenderComponent(SiteFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e6cf9155"]]);
export {
  contact as default
};
//# sourceMappingURL=contact-DT_j0efO.js.map
