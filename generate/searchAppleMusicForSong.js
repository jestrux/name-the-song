const fetch = require('node-fetch');

async function SearchAppleMusicForSong(searchQuery){
    // console.log("Search for: ", searchQuery);
    const url = `https://api.music.apple.com/v1/catalog/us/search?term=${encodeURIComponent(searchQuery)}`;
    
    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IldlYlBsYXlLaWQifQ.eyJpc3MiOiJBTVBXZWJQbGF5IiwiaWF0IjoxNjEzNjc0ODA0LCJleHAiOjE2MjkyMjY4MDR9.Jg1w_qynXZvU13x2aOqQFUaFZ0nnt-4xkln6TYx1xiFdRSW03dFIe90XDH6mDAFe7JdSO8yU4-hUUykedCg5ZQ"
            }
        });

        const { results } = await response.json();

        if(!results || !results.songs) return searchQuery;

        let { songs, artists } = results;

        songs = songs.data.map(({attributes}) => {
            const { name, artistName, albumName, artwork, previews } = attributes;
            const preview = previews[0].url;
            const randomName = (Math.random() * 1e32).toString(36);
            const fileName = randomName + "." + preview.split(".").pop();

            return {
                name, artistName, albumName, 
                artwork: artwork.url.replace('{w}', 120).replace('{h}', 120),
                preview,
                fileName
            }
        });
        
        return songs[0];
    } catch (error) {
        console.log("Song fetch error: ", error);
        return searchQuery;
    }
}

module.exports = SearchAppleMusicForSong;