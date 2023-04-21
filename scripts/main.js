import { ActorList } from "./actors.js";
import { GenreList } from "./genres.js";
import { ShowList } from "./shows.js";

const genreHTMLElements = GenreList()
const showHTMLElements = ShowList()
const actorHTMLElements = ActorList()


// Get all of the dynamically generated HTML into the main browser document (DOM)
const selected = document.querySelector("#magnum")
selected.innerHTML = `
    <article class="topContent">
        <section class="topContent__info border padded">
            <h2>Actors</h2>
            ${actorHTMLElements}
        </section>
        <section class="topContent__info border padded">
            <h2>Genres</h2>
            ${genreHTMLElements}
        </section>
    </article>

    <article class="bottomContent">
        <section class="shows border padded">
            <h2>Shows</h2>
            ${showHTMLElements}
        </section>
    </article>
`
