//actions
export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';

//action creators
export function setMovies(value) {
  return { type: SET_MOVIES, value };
}

export function setFilter(value) {
  return { type: SET_FILTER, value };
}



/* export const setMovies = (movies) => ({
    type: SET_MOVIES,
    movies
});

export const setFilter = (value) => ({
    type: SET_FILTER,
    value
}); */


