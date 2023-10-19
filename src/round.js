export class ReactiveWC extends HTMLElement {
  static get observedAttributes() {
    return [];
  }
  connectedCallback() {
    this.getProps();
    this.onInit();
    this.innerHTML = this.render();
  }
  attributeChangedCallback(name, _oldValue, newValue) {
    this[name] = newValue;
    this.watchAttributes(name, JSON.parse(_oldValue), JSON.parse(newValue));
    this.innerHTML = this.render();
  }
  disconnectedCallback() {
    this.onDestroy();
  }
  getProps() {
    this.getAttributeNames().forEach((attr) => {
      if (!attr.startsWith("data_")) return;
      this[attr] = JSON.parse(this.getAttribute(attr));
    });
  }
  watchAttributes(name, _oldValue, newValue) {}
  defineState(object) {
    if (object === null || typeof object !== "object") {
      return object;
    }
    for (const property in object) {
      object[property] = this.defineState(object[property]);
    }
    return new Proxy(object, {
      get(target, property) {
        return target[property];
      },
      set: (target, property, value) => {
        if (target[property] !== value) {
          target[property] = value;
          this.innerHTML = this.render();
        }
        return true;
      },
    });
  }
  onInit() {}
  onDestroy() {}
  render() {}
}
