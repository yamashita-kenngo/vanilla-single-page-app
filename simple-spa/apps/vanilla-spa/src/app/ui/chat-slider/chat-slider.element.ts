import './chat-slider.element.css';

export class ChatSliderElement extends HTMLElement {
    public static observedAttributes = [];

    constructor() {
        super();
        this.addEventListener('click', () => {
            console.log('click event !');
        })
    }

    connectedCallback() {

        this.innerHTML = `
        <div class="spa-slider"></div>
        `;
    }
}
customElements.define('chat-slider', ChatSliderElement);
