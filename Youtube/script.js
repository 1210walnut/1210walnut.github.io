const API_KEY = "AIzaSyBFY8IEdIfzqZK8tT2LxR8oRfkEblHkukg";

async function search() {

    const q = document.getElementById("query").value;

    const url =
    `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&q=${encodeURIComponent(q)}&key=${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();

    const results = document.getElementById("results");
    results.innerHTML = "";

    data.items.forEach(video => {

        const div = document.createElement("div");
        div.className = "video";

        div.innerHTML = `
            <img src="${video.snippet.thumbnails.medium.url}">
            <p>${video.snippet.title}</p>
        `;

        div.onclick = () => {
            play(video.id.videoId);
        };

        results.appendChild(div);
    });
}

function play(videoId){

    document.getElementById("player").innerHTML = `
        <iframe
            src="https://www.youtube.com/embed/${videoId}?autoplay=1"
            frameborder="0"
            allowfullscreen>
        </iframe>
    `;
}