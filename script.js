let APIKEY = "403LAZMeVWpiwlTLdFASQNVeXZCaZ7ZW";

document.addEventListener("DOMContentLoaded", init);
function init() {
    document.getElementById("btnSearch").addEventListener("click", ev => {
        ev.preventDefault();
        let url = 'https://api.giphy.com/v1/gifs/search?api_key=' + APIKEY + '&limit=25&q=';
        let input = document.getElementById("search").value.trim();
        url = url.concat(input);
        console.log(url);

        fetch(url)
        .then(response => response.json())
        .then(content => {
            console.log(content.data);
            console.log('META', content.meta);
            let fig = document.createElement('figure');
            let img = document.createElement('img');
            let fc = document.createElement('figcaption');
            img.src = content.data[0].images.downsized.url;
            img.alt = content.data[0].title;
            fc.textContent = content.data[0].title;
            fig.appendChild(img);
            //fig.appendChild(fc);
            let container = document.querySelector('.gif-container');
            container.insertAdjacentElement("afterbegin", fig);
            document.querySelector('.gif-container').value() = '';
        })
        .catch(err => {
            console.error(err);
        })
    });
}