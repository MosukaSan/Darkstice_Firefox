import { option_selected } from '../animations/option_selected.js';
import { switch_on, switch_off } from '../animations/switch_on.js';

function clock_message(tabs, value, type) {
    browser.tabs.sendMessage(tabs[0].id, {
        command: 'clock',
        type: type,
        value: value
    });
}

let clock_on = false;

browser.storage.local.get('clock_on').then((data) => {
    if (data.clock_on === false) {
        clock_on = false;
    } else {
        clock_on = true;
    }
});

document.getElementById('clock_switch').addEventListener('click', () => {
    if (clock_on) {
        console.log('click');
        switch_off('clock_switch');
        clock_on = false;

        browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
            clock_message(tabs, false, 'clock_on');
        });
    } else {
        console.log('click');
        switch_on('clock_switch');
        clock_on = true;

        browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
            clock_message(tabs, true, 'clock_on');
        });
    }
});

document.getElementById('options_form').addEventListener('submit', (event) => {
    event.preventDefault();
    const clock_input = document.activeElement;

    if (clock_input.id === 'clock_opacity_input') {
        browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
            clock_message(tabs, clock_input.value, 'clock_opacity');
        });
    }

    else if (clock_input.id === 'clock_size_input') {
        browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
            clock_message(tabs, clock_input.value, 'clock_size');
        });
    }
});

document.getElementById('clock_position_buttons').addEventListener('click', (event) => {
    console.log('click');

    if (event.target !== event.currentTarget && event.target.tagName.toLowerCase() === 'button') {
        console.log('click botão');
        option_selected('clock_position_buttons', event.target.className);

        browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
            clock_message(tabs, event.target.className, 'clock_position');
        });
    }
});