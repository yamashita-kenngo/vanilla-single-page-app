import './chat-slider.element.css';

export class ChatSliderElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {

        this.innerHTML = `
        <div class="spa-slider"></div>
        `;
    }
}
customElements.define('chat-slider', ChatSliderElement);