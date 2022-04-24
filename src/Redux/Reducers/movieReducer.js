import { CLEAR_ERROR, DISCOVER_LOAD_MORE_MOVIES, GET_CONFIGURATION, GET_MOVIE_CREDITS, GET_MOVIE_DETAIL, GET_MOVIE_KEYWORDS, GET_POPULAR_MOVIES, GET_SIMILAR_MOVIE, IS_ERROR, POPULAR_LOAD_MORE_MOVIES, SEARCH_LOAD_MORE_MOVIES, SEARCH_MOVIES, SORT_MOVIES } from "../Types"

const initialState = {
    movies: [],
    _movieDetail: [],
    configuration: {},
    totalPages: 1,
    currentPage: 1,
    loading: true,
    isError: false,
    movieCasts: [],
    movieCrews: [],
    similarMovies: [],
    movieKeywords: []

}

export default function (state = initialState, action) {

    switch (action.type) {
        case GET_POPULAR_MOVIES:
            return {
                ...state,
                movies: action.payload.results,
                totalPages: action.payload.total_pages,
                currentPage: action.payload.page,
                loading: false

            }
        case DISCOVER_LOAD_MORE_MOVIES:
            return {
                ...state,
                movies: [...state.movies, ...action.payload.results],
                totalPages: action.payload.total_pages,
                currentPage: action.payload.page,
                loading: false

            }
        case SEARCH_LOAD_MORE_MOVIES:
            return {
                ...state,
                movies: [...state.movies, ...action.payload.results],
                totalPages: action.payload.total_pages,
                currentPage: action.payload.page,
                loading: false

            }
        case POPULAR_LOAD_MORE_MOVIES:
            return {
                ...state,
                movies: [...state.movies, ...action.payload.results],
                totalPages: action.payload.total_pages,
                currentPage: action.payload.page,
                loading: false

            }
        case SEARCH_MOVIES:
            return {
                ...state,
                movies: action.payload.results,
                totalPages: action.payload.total_pages,
                currentPage: action.payload.page,
                loading: false
            }
        case SORT_MOVIES:
            return {
                ...state,
                movies: action.payload.results,
                totalPages: action.payload.total_pages,
                currentPage: action.payload.page,
                loading: false
            }
        case GET_MOVIE_DETAIL:
            return {
                ...state,
                _movieDetail: action.payload,
                loading: false
            }
        case GET_MOVIE_CREDITS:
            return {
                ...state,
                movieCasts: action.payload.cast,
                movieCrews: action.payload.crew,
                loading: false
            }
        case GET_SIMILAR_MOVIE:
            return {
                ...state,
                similarMovies: action.payload.results,
                loading: false
            }
        case GET_MOVIE_KEYWORDS:
            return {
                ...state,
                movieKeywords: action.payload.keywords,
                loading: false
            }
        case GET_CONFIGURATION:
            return {
                ...state,
                configuration: action.payload.images,
                loading: false
            }
        case IS_ERROR:
            return {
                ...state,
                loading: false,
                isError: true,
            }
        case CLEAR_ERROR:
            return {
                ...state,
                loading: false,
                isError: false,
            }
        default: return state
    }

}