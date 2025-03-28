export function option_selected(father_id, child_class) {
    const option = document.getElementById(father_id).querySelector(`button.${child_class}`);
    option.style.backgroundColor = '#B7A2C9';
    option.style.color = '#4B3A70';

    const other_buttons = document.getElementById(father_id).querySelectorAll('button');
    other_buttons.forEach((button) => {
        if (button.className !== child_class) {
            button.style.backgroundColor = '#4B3A70';
            button.style.color = '#B7A2C9';
        }
    });
}