import { option_selected } from "../animations/option_selected.js";
import { switch_off, switch_on } from "../animations/switch_on.js";

function image_message(tabs, value, type) {
    browser.tabs.sendMessage(tabs[0].id, {
        command: 'show_image',
        type: type,
        value: value
    });
}

let image_on = false;

browser.storage.local.get('show_image_on').then((data) => {
    if (data.show_image_on === true) {
        image_on = true;
    } else {
        image_on = false;
    }
});

document.getElementById('show_image_switch').addEventListener('click', () => {
    if (image_on) {
        console.log('click');
        switch_off('show_image_switch');
        image_on = false;

        browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
            image_message(tabs, false, 'show_image_on');
        });
    } else {
        console.log('click');
        switch_on('show_image_switch');
        image_on = true;

        browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
            image_message(tabs, true, 'show_image_on')
        });
    }
});

document.getElementById('options_form').addEventListener('submit', (event) => {
    event.preventDefault();
    const image_input = document.activeElement;

    if (image_input.id === 'show_image_input') {
        browser.tabs.query({ active: true, currentWindow: true }).then((tabs => {
            image_message(tabs, image_input.value, 'image_url')
        }));
    }

    if (image_input.id === 'image_opacity_input') {
        browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
            image_message(tabs, image_input.value, 'image_opacity');
        });
    }

    if (image_input.id === 'image_size_input') {
        browser.tabs.query( {active: true, currentWindow:true }).then((tabs) => {
            image_message(tabs, image_input.value, 'image_size');
        });
    }
});

document.getElementById('image_position_buttons').addEventListener('click', (event) => {
    if (event.target !== event.currentTarget && event.target.tagName.toLowerCase() === 'button') {
        option_selected('image_position_buttons', event.target.className);

        browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
            image_message(tabs, event.target.className, 'image_position');
        });
    }
});