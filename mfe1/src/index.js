import App from "./App";
import {render, unmountComponentAtNode} from 'react-dom';
// import('./bootstrap');

class ReactElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this._innerHTML = this.innerHTML;
    this.mount();
  }

  disconnectedCallback() {
    this.unmount();
  }

  update() {
    this.unmount();
    this.mount();
  }

  mount() {
    render(<App />, this);
  }

  unmount() {
    unmountComponentAtNode(this);
  }

}
customElements.define('react-app', ReactElement);