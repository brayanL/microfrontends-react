import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import App from "./App";
// import('./bootstrap');

class ReactElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this._innerHTML = this.innerHTML;
    render(<App />, this);
  }

  disconnectedCallback() {
    unmountComponentAtNode(this);
  }

  update() {
    unmountComponentAtNode(this);
    render(<App />, this);
  }
}
customElements.define('react-app', ReactElement);