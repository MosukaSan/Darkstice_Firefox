import { change_position } from "./change_position.js";

const clock_element = document.getElementById('clock');

browser.storage.local.get('clock_on').then((data) => {
    if (data.clock_on === false) {
        clock_element.style.display = 'none';
    } else {
        clock_element.style.display = 'block';
    }
});

browser.storage.local.get('clock_opacity').then((data) => {
    clock_element.style.opacity = data.clock_opacity;
});

browser.storage.local.get('clock_size').then((data) => {
    clock_element.style.fontSize = `${data.clock_size}px`;
});

browser.storage.local.get('clock_position').then((data) => {
    if (data.clock_position !== undefined) {
        change_position('clock', data.clock_position);
    } else {
        change_position('clock', 'top_left');
    }
});

browser.runtime.onMessage.addListener((message) => {
    console.log('Mensagem recebida')

    if (message.command === 'clock') {
        if (message.type === 'clock_on') {
            if (message.value === true) {
                clock_element.style.display = 'block';
                browser.storage.local.set({ clock_on: message.value });
            } else {
                clock_element.style.display = 'none';
                browser.storage.local.set({ clock_on: message.value });
            }
        }

        else if (message.type === 'clock_opacity') {
            clock_element.style.opacity = message.value;
            browser.storage.local.set({ clock_opacity: message.value });
        }

        else if (message.type === 'clock_size') {
            clock_element.style.fontSize = `${message.value}px`;
            browser.storage.local.set({ clock_size: message.value });
        }

        else if (message.type === 'clock_position') {
            change_position('clock', message.value);
            browser.storage.local.set({ clock_position: message.value });
        }
    }
});
