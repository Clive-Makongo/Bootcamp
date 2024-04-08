// music should be an object with title, artist, and album properties
const music = {
  title: "TPAB",
  artist: "Kendrick Lamar",
  music: "Wesley's Theory"
};

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
const songSnippet = `
  <div class="song">
    <h3> The album is: ${music.title} </h3>
    <p> the artist is: ${music.artist} </p>
    <p> the song is: ${music.music} </p>
  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;

