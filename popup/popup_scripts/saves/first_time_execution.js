import { option_selected } from "../animations/option_selected.js";
import { switch_off, switch_on } from "../animations/switch_on.js";

browser.storage.local.get('dark_light').then((data) => {
    if (data.dark_light === undefined || data.dark_light === true) {
        switch_on('dark_light_switch');
    } else {
        switch_off('dark_light_switch');
    }
});

browser.storage.local.get('clock_on').then((data) => {
    console.log('conferiu o valor');

    if (data.clock_on === false) {
        switch_off('clock_switch');
    } else {
        switch_on('clock_switch');
    }
});

browser.storage.local.get('clock_position').then((data) => {
    if (data.clock_position !== undefined) {
        option_selected('clock_position_buttons', data.clock_position);
    } else {
        option_selected('clock_position_buttons', 'top_left')
    }
});

browser.storage.local.get('show_image_on').then(data => {
    if (data.show_image_on === true) {
        switch_on('show_image_switch');
    } else {
        switch_off('show_image_switch');
    }
});

browser.storage.local.get('image_position').then((data) => {
    if (data.image_position !== undefined) {
        option_selected('image_position_buttons', data.image_position);
    } else {
        option_selected('image_position_buttons', 'bottom_right');
    }
});