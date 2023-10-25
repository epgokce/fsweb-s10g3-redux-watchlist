export const ADD_FAVORITES = "ADD_FAVORITES";
export const DELETE_FAVORITES = "DELETE_FAVORITES";
export const RECYECLE_MOVIE = "RECYECLE_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";

export const addFavorites = (movie) =>{
return ({type: ADD_FAVORITES, payload: movie});
};

export const deleteFavorites = (id) =>{
return ({type: DELETE_FAVORITES, payload: id});
};

export const recyecleMovie = (id) =>{
    return ({type: RECYECLE_MOVIE, payload: id});
    };

export const removeMovie = (id) =>{
    return ({type: REMOVE_MOVIE, payload: id});
    };