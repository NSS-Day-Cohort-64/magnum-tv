import { getTheGenres } from "./database.js"

export const GenreList = () => {
    // Get the array of genre objects
    const genres = getTheGenres()

    // Start with a blank string
    let genreHTML = ""

    // Use a for..of loop to iterate the array
    for (const genreObject of genres) {
        // Build up the HTML string for each genre
        genreHTML += `<section>${genreObject.label}</section>`
    }


    // return the string of all HTML representations
    return genreHTML
}