import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getConfigurations, getMovieCredit, getMovieDetail, getMovieKeywords, getSimilarMovie } from '../Redux/Actions/movieActions'
import CastContainer from './CastContainer'
import MainBannerContainer from './MainBannerContainer'
import MovieContainer from './MovieContainer'
import RightBarContainer from './RightBarContainer'

function DetailContainer() {
    const dispatch = useDispatch();
    const movieReducers = useSelector(state => state.movies)
    const { _movieDetail, configuration } = movieReducers

    const params = useParams()
    const [paramId, setParamId] = useState(false)
    const [loadFirst, setLoadFirst] = useState(false)

    useEffect(() => {
        if (!configuration.base_url) {
            dispatch(getConfigurations())
        }
        if (!paramId || (paramId != params.id)) {
            let id = parseInt(params.id)
            if (!loadFirst && paramId != id) {
                setLoadFirst(true)
                dispatch(getMovieDetail(id))
            }
            if (!_movieDetail?.id) {
                setLoadFirst(false)
                setParamId(id)
                dispatch(getMovieCredit(id))
                dispatch(getSimilarMovie(id))
                dispatch(getMovieKeywords(id))
            }
            if (_movieDetail?.id && (paramId != id)) {
                setLoadFirst(false)
                setParamId(id)
                dispatch(getMovieCredit(_movieDetail?.id))
                dispatch(getSimilarMovie(_movieDetail?.id))
                dispatch(getMovieKeywords(_movieDetail?.id))
            }
        }

    }, [_movieDetail, params])
    return (
        <div id='detail_container'>
            <MainBannerContainer />
            <div className="bottom-section">
                <div className="left-col">
                    <CastContainer />
                    <MovieContainer type="similar" />
                </div>
                <div className="right-col">
                    <RightBarContainer />
                </div>
            </div>
        </div>
    )
}

export default DetailContainer