export function dark_light(value) {
    console.log('função dark_light');

    if (value) {
        document.body.style.backgroundColor = '#322f42';
        document.getElementById('search_input').style.backgroundColor = '#B7A2C9';
        document.getElementById('darkstice_logo').setAttribute('src', 'images/Darkstice_Logo_Light.png');
        document.getElementById('clock').style.color = '#c5c3c4';
        document.getElementById('search_input').style.backgroundImage = 'url(images/google_icon_dark.svg)';
        document.getElementById('search_input').style.color = 'black';
    } else {
        document.body.style.backgroundColor = '#B7A2C9';
        document.getElementById('search_input').style.backgroundColor = '#322f42';
        document.getElementById('darkstice_logo').setAttribute('src', 'images/Darkstice_Logo_Dark.png');
        document.getElementById('clock').style.color = '#212531';
        document.getElementById('search_input').style.backgroundImage = 'url(images/google_icon_light.svg)';
        document.getElementById('search_input').style.color = 'white';
    }
}