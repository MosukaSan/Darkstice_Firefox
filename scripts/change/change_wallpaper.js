browser.storage.local.get('wallpaper').then((data) => {
    if (data.wallpaper.type === 'image') {
        document.getElementById('wallpaper').setAttribute('src', data.wallpaper.value);
    } else if (data.wallpaper.type === 'video') {
        document.getElementById('video_wallpaper_source').setAttribute('src', data.wallpaper.value);
        document.getElementById('video_wallpaper_container').load();
    }
});

browser.storage.local.get('wallpaper_opacity').then((data) => {
    if (data.wallpaper_opacity.wallpaper_type === 'image') {
        document.getElementById('wallpaper').style.opacity = data.wallpaper_opacity.value;
    } else if (data.wallpaper_opacity.wallpaper_type === 'video') {
        document.getElementById('video_wallpaper_container').style.opacity = data.wallpaper_opacity.value;
    }
});

browser.runtime.onMessage.addListener((message) => {
    console.log('Mensagem recebida');
    
    if (message.command === 'wallpaper') {
        if (message.type === 'image') {
            document.getElementById('wallpaper').setAttribute('src', message.value);
            browser.storage.local.set({ wallpaper: message });
        } else if (message.type === 'video') {
            document.getElementById('video_wallpaper_source').setAttribute('src', message.value);
            document.getElementById('video_wallpaper_container').load();
            browser.storage.local.set({ wallpaper: message });
        } else if (message.type === 'opacity') {
            browser.storage.local.get('wallpaper').then((data) => {
                if (data.wallpaper.type === 'image') {
                    document.getElementById('wallpaper').style.opacity = message.value;
                    browser.storage.local.set({
                        wallpaper_opacity: {
                            wallpaper_type: 'image',
                            value: message.value
                        }
                    });
                } else if (data.wallpaper.type === 'video') {
                    document.getElementById('video_wallpaper_container').style.opacity = message.value;
                    browser.storage.local.set({
                        wallpaper_opacity: {
                            wallpaper_type: 'video',
                            value: message.value
                        }
                    });
                }
            });
        }
    }
});