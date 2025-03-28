import { switch_off, switch_on } from "../animations/switch_on.js";

function dark_message(tabs, value) {
    browser.tabs.sendMessage(tabs[0].id, {
        command: 'change_dark',
        value: value
    });
}

let dark_on = true;

browser.storage.local.get('dark_light').then((data) => {
    if (data.dark_light === false) {
        dark_on = false;
    } else {
        dark_on = true;
    }
});

document.getElementById('dark_light_switch').addEventListener('click', () => {
    if (dark_on) {
        console.log('click');
        switch_off('dark_light_switch');
        dark_on = false;

        browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
            dark_message(tabs, false);
        });
    } else {
        console.log('click');
        switch_on('dark_light_switch');
        dark_on = true;

        browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
            dark_message(tabs, true);
        });
    }
});
