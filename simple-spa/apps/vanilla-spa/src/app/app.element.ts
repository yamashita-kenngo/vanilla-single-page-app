import './app.element.css';
import './ui/chat-slider/chat-slider.element'
export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {

    this.innerHTML = `
    <div id="spa">
        <chat-slider></chat-slider>
    </div>
    `;
  }
}
customElements.define('simple-spa-root', AppElement);
