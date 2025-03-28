import { dark_light } from "../other/dark_light.js";

browser.storage.local.get('dark_light').then((data) => {
    if (data.dark_light || data.dark_light === undefined) {
        dark_light(true);
    } else {
        dark_light(false)
    }
});

browser.runtime.onMessage.addListener((message) => {
    console.log('mensagem recebida');

    if (message.command === 'change_dark') {
        if (message.value === true) {
            dark_light(true);
            browser.storage.local.set({ dark_light: true });
        } else {
            dark_light(false);
            browser.storage.local.set({ dark_light: false });
        }
    }
});