import { change_position } from "./change_position.js";

const image_element = document.getElementById('custom_image');

browser.storage.local.get('show_image_on').then((data) => {
    if (data.show_image_on === true) {
        image_element.style.display = 'block';
    } else {
        image_element.style.display = 'none';
    }
});

browser.storage.local.get('image_url').then((data) => {
    image_element.setAttribute('src', data.image_url);
});

browser.storage.local.get('image_opacity').then((data) => {
    image_element.style.opacity = data.image_opacity;
});

browser.storage.local.get('image_size').then((data) => {
    image_element.style.height = `${data.image_size}px`;
});

browser.storage.local.get('image_position').then((data) => {
    if (data.image_position !== undefined) {
        change_position('image_container', data.image_position);
    } else {
        change_position('image_container', 'bottom_right');
    }
});

browser.runtime.onMessage.addListener((message) => {
    console.log('mensagem recebida');

    if (message.command === 'show_image') {
        if (message.type === 'show_image_on') {
            if (message.value === true) {
                image_element.style.display = 'block';
                browser.storage.local.set({ show_image_on: true });
            } else {
                image_element.style.display = 'none';
                browser.storage.local.set({ show_image_on: false });
            }
        }

        else if (message.type === 'image_url') {
            image_element.setAttribute('src', message.value);
            browser.storage.local.set({ image_url: message.value });
        }

        else if (message.type === 'image_opacity') {
            image_element.style.opacity = message.value;
            browser.storage.local.set({ image_opacity: message.value });
        }

        else if (message.type === 'image_size') {
            image_element.style.height = `${message.value}px`;
            browser.storage.local.set({ image_size: message.value });
        }

        else if (message.type === 'image_position') {
            change_position('image_container', message.value);
            browser.storage.local.set({ image_position: message.value });
        }
    }
});