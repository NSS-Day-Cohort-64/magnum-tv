import { getTheShows } from "./database.js"

export const ShowList = () => {
    // Get the array of show objects
    const shows = getTheShows()

    // Start with a blank string
    let showHTML = ""

    // Use a for..of loop to iterate the array
    for (const showObject of shows) {
        // Build up the HTML string for each show
        showHTML += `<section>${showObject.title}</section>`
    }


    // return the string of all HTML representations
    return showHTML
}