/// <reference types="./main.d.ts" />

import { append } from "./utils";

/**
 * *@type {import("./main").DefineComponent}
 */
export let defineComponent = (options, component) => {
  window.customElements.define(
    options.tag,
    class extends HTMLElement {
      constructor() {
        super();
        this.ctx = {
          onInit: root => {},
          onDestroy: () => {},
          host: this,
          watch: (n, ov, nv) => {},
        };
        if (options.shadow) {
          this.attachShadow({ mode: options.shadow });
        }
      }
      static get observedAttributes() {
        return options.observed;
      }

      connectedCallback() {
        let temp = {};

        this.getAttributeNames().forEach(attr => {
          if (!attr.startsWith(":")) return;
          temp[attr.slice(1)] = this.getAttribute(attr);
        });

        this.ctx["props"] = temp;
        let content = component(this.ctx);
        let root = this.shadowRoot ?? this;

        // this will work with vanJS as a pragma as well
        append(root, content);

        // even though root is also accessible from ctx.host, it might be too verbose
        // if we want to do any query selector on init. It takes literally one word
        // and it makes query selector much easier in the component.
        this.ctx.onInit(root);
      }
      attributeChangedCallback(n, ov, nv) {
        this.ctx.watch(n, ov, nv);
      }
      disconnectedCallback() {
        this.ctx.onDestroy();
      }
    }
  );
};
