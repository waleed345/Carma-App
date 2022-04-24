import { get } from '../../Services/HttpServices'
import { DISCOVER_LOAD_MORE_MOVIES, GET_CONFIGURATION, GET_MOVIE_CREDITS, GET_MOVIE_DETAIL, GET_MOVIE_KEYWORDS, GET_POPULAR_MOVIES, GET_SIMILAR_MOVIE, IS_ERROR, POPULAR_LOAD_MORE_MOVIES, SEARCH_LOAD_MORE_MOVIES, SEARCH_MOVIES, SORT_MOVIES } from '../Types'

export const getConfigurations = () => async dispatch => {
    try {
        const res = await get('/3/configuration')
        dispatch({
            type: GET_CONFIGURATION,
            payload: res
        })
    }
    catch (error) {
        dispatch({
            type: IS_ERROR,
        })
    }
}

export const getPopularMovies = () => async dispatch => {
    try {
        const res = await get('/3/movie/popular')
        dispatch({
            type: GET_POPULAR_MOVIES,
            payload: res
        })
    }
    catch (error) {
        console.log(error)
        dispatch({
            type: IS_ERROR,
        })
    }
}

export const discoverLoadMoreMovies = (sortOption, currentPage) => async dispatch => {
    try {
        const res = await get(`/3/discover/movie?sort_by=${sortOption}&page=${currentPage}`)
        dispatch({
            type: DISCOVER_LOAD_MORE_MOVIES,
            payload: res
        })
    }
    catch (error) {
        dispatch({
            type: IS_ERROR,
        })
    }
}

export const popularLoadMoreMovies = (currentPage) => async dispatch => {
    try {
        const res = await get(`/3/movie/popular?page=${currentPage} `)
        dispatch({
            type: POPULAR_LOAD_MORE_MOVIES,
            payload: res
        })
    }
    catch (error) {
        dispatch({
            type: IS_ERROR,
        })
    }
}

export const searchLoadMoreMovies = (query, currentPage) => async dispatch => {
    try {
        const res = await get(`/3/search/movie?query=${query}&page=${currentPage} `)
        dispatch({
            type: SEARCH_LOAD_MORE_MOVIES,
            payload: res
        })
    }
    catch (error) {
        dispatch({
            type: IS_ERROR,
        })
    }
}

export const searchMovies = (query) => async dispatch => {
    try {
        const res = await get(`/3/search/movie?query=${query}`)
        dispatch({
            type: SEARCH_MOVIES,
            payload: res
        })
    }
    catch (error) {
        dispatch({
            type: IS_ERROR,
        })
    }
}

export const sortMovies = (sortOption) => async dispatch => {
    try {
        const res = await get(`/3/discover/movie?sort_by=${sortOption}`)
        dispatch({
            type: SORT_MOVIES,
            payload: res
        })
    }
    catch (error) {
        dispatch({
            type: IS_ERROR,
        })
    }
}

export const getMovieDetail = (id) => async dispatch => {
    try {
        const res = await get(`/3/movie/${id}`)
        dispatch({
            type: GET_MOVIE_DETAIL,
            payload: res
        })
    }
    catch (error) {
        dispatch({
            type: IS_ERROR,
        })
    }
}

export const getMovieCredit = (id) => async dispatch => {
    try {
        const res = await get(`/3/movie/${id}/credits`)
        dispatch({
            type: GET_MOVIE_CREDITS,
            payload: res
        })
    }
    catch (error) {
        dispatch({
            type: IS_ERROR,
        })
    }
}

export const getMovieKeywords = (id) => async dispatch => {
    try {
        const res = await get(`/3/movie/${id}/keywords`)
        dispatch({
            type: GET_MOVIE_KEYWORDS,
            payload: res
        })
    }
    catch (error) {
        dispatch({
            type: IS_ERROR,
        })
    }
}

export const getSimilarMovie = (id) => async dispatch => {
    try {
        const res = await get(`/3/movie/${id}/similar`)
        dispatch({
            type: GET_SIMILAR_MOVIE,
            payload: res
        })
    }
    catch (error) {
        dispatch({
            type: IS_ERROR,
        })
    }
}