import { ChatSliderElement } from './chat-slider.element';

describe('ChatSlider', () => {
    let chatSlider: ChatSliderElement;

    beforeEach(() => {
        chatSlider = new ChatSliderElement();
    }); 
    // とりあえずレンダリング確認

    it('should create successfully', () => {
        expect(chatSlider).toBeTruthy();
    });

    it('should working', () => {
        chatSlider.connectedCallback();

        expect(chatSlider.shadowRoot.querySelector('chat-slider').innerHTML).toEqual(
            'Working chat-slider !'
        );
    });
});