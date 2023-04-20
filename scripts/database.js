const magnumData = {
    shows: [
        {
            id: 1,
            title: "Ted Lasso",
            broadcastDay: "Wednesday",
            genreId: 4
        },
        {
            id: 2,
            title: "American Horror Story",
            broadcastDay: "Monday",
            genreId: 1
        },
        {
            id: 3,
            title: "Game of Thrones",
            broadcastDay: "Saturday",
            genreId: 3
        },
        {
            id: 4,
            title: "Ozark",
            broadcastDay: "Monday",
            genreId: 2
        },
    ],
    actors: [
        {
            id: 1,
            name: "Jason Sudeikis",
            showId: 1
        },
        {
            id: 2,
            name: "Jason Bateman",
            showId: 4
        },
        {
            id: 3,
            name: "Jessica Lange",
            showId: 2
        },
        {
            id: 4,
            name: "Kit Harrington",
            showId: 3
        }
    ],
    genres: [
        {
            id: 1,
            label: "Horror"
        },
        {
            id: 2,
            label: "Suspense/Crime"
        },
        {
            id: 3,
            label: "Action"
        },
        {
            id: 4,
            label: "Comedy"
        }
    ]
}

// Create a function to export the array of genres
export const getTheGenres = () => {
    return magnumData.genres.map(genre => ({...genre}))
}

export const getTheShows = () => {
    return magnumData.shows.map(show => ({...show}))
}

export const getTheActors = () => {
    return magnumData.actors.map(actor => ({...actor}))
}


