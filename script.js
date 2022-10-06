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
            let fc = document.createElement('figcaption');
            let container = document.querySelector('.gif-container');

            // loop through the array with 25 images and put them all in the gif-container
            for (let i=0; i < content.data.length; i++) {
                let img = document.createElement('img');
                fig.src = "";
                console.log(i);
                img.src = content.data[i].images.downsized.url;
                img.alt = content.data[i].title;
                fc.textContent = content.data[i].title;
                img.style.margin = '5px';
                container.appendChild(img);
                //fig.appendChild(img);

                //container.insertAdjacentElement("beforeend", fig);
                document.getElementById("search").value = "";
            }
        })
        .catch(err => {
            console.error(err);
        })
    });
}

document.getElementById("btnClear").addEventListener("click", ev => {
    ev.preventDefault();
    let button = document.getElementById("btnClear");
    let container = document.querySelector('.gif-container');

    container.textContent = '';
});