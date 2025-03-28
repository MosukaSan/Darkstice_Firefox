function wallpaper_message(tabs, value, type) {
    console.log('Mensagem enviada')

    browser.tabs.sendMessage(tabs[0].id, {
        command: 'wallpaper',
        type: type,
        value: value
    });
}

document.getElementById('options_form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    console.log('submit detectado')
    const wallpaper_input = document.activeElement;
    
    if (wallpaper_input.id === 'wallpaper_input') {
        browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
            wallpaper_message(tabs, wallpaper_input.value, 'image');
        });
    } else if (wallpaper_input.id === 'video_wallpaper_input') {
        browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
            wallpaper_message(tabs, wallpaper_input.value, 'video')
        });
    } else if (wallpaper_input.id === 'wallpaper_opacity_input') {
        browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
            wallpaper_message(tabs, wallpaper_input.value, 'opacity');
        });
    }
});
