export function switch_on(id) {
    const switch_button = document.getElementById(id);
    switch_button.children[0].style.backgroundColor = '#4B3A70';
    switch_button.children[0].style.marginLeft = '60%';
    switch_button.style.backgroundColor = '#B7A2C9';
}

export function switch_off(id) {
    const switch_button = document.getElementById(id);
    switch_button.children[0].style.backgroundColor = '#B7A2C9';
    switch_button.children[0].style.marginLeft = '3px';
    switch_button.style.backgroundColor = '#4B3A70';
}