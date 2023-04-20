import { getTheActors } from "./database.js"

export const ActorList = () => {
    // Get the array of actor objects
    const actors = getTheActors()

    // Start with a blank string
    let actorHTML = ""

    // Use a for..of loop to iterate the array
    for (const actorObject of actors) {
        // Build up the HTML string for each actor
        actorHTML += `<section>${actorObject.name}</section>`
    }


    // return the string of all HTML representations
    return actorHTML
}
