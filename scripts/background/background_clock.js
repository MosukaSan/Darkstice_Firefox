const date_first = new Date();
document.getElementById('clock').firstElementChild.textContent = date_first.toLocaleTimeString('en-us', {
    hour: '2-digit',
    minute: '2-digit' 
});

setInterval(() => {
    const date = new Date();
    document.getElementById('clock').firstElementChild.textContent = date.toLocaleTimeString('en-us', {
        hour: '2-digit',
        minute: '2-digit'
    });
}, 1000);