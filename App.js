import React from 'react'
import Home from './app/containers/Home'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


function addMovies(state, { movies }) {
    return movies.map(movie => ({
        Title: movie.Title,
        Poster: movie.Poster,
        imdbID: movie.imdbID
    }))
}
function movieReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_MOVIES':
            return addMovies(state, action.payload)
        default:
            return state
    }
}

const store = createStore(movieReducer)

export default () => (
    <Provider store={store}>
        <Home />
    </Provider>
)