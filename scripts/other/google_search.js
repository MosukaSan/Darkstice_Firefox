document.getElementById('search_form').addEventListener('submit', (event) => {
    event.preventDefault();

    const query = document.getElementById('search_input').value;

    if (query) {
        window.open(`https://google.com/search?q=${query}`, "_self");
    }
});