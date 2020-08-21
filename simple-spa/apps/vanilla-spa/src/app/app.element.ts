import './app.element.css';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {

    this.innerHTML = `

    `;
  }
}
customElements.define('simple-spa-root', AppElement);
