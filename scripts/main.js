import { ActorList } from "./actors.js";
import { GenreList } from "./genres.js";
import { ShowList } from "./shows.js";

const genreHTMLElements = GenreList()
const showHTMLElements = ShowList()
const actorHTMLElements = ActorList()


// Get all of the dynamically generated HTML into the main browser document (DOM)
const selected = document.querySelector("#magnum")
selected.innerHTML = `
    <h2>Genres</h2>
    ${genreHTMLElements}

    <h2>Shows</h2>
    ${showHTMLElements}

    <h2>Actors</h2>
    ${actorHTMLElements}
`
