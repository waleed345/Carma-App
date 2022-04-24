import { Rate } from 'antd'
import Paragraph from 'antd/lib/typography/Paragraph'
import Text from 'antd/lib/typography/Text'
import Title from 'antd/lib/typography/Title'
import React from 'react'
import { useSelector } from 'react-redux'
import ImageComp from '../Components/ImageComp'
import MovieCastList from '../Components/MovieCastList'
import RatingComp from '../Components/RatingComp'
import { timeConvert } from '../Helpers'

function MainBannerContainer() {
    const movieReducers = useSelector(state => state.movies)
    const { _movieDetail, configuration, movieCasts, movieCrews } = movieReducers

    const onRatingChange = async (rating, movieId) => {
        let data = {
            value: rating * 2
        }
        // let guestSessionId = await get('/3/authentication/guest_session/new')
        // let resp = await post(`/3/movie/${movieId}/rating&guest_session_id=79c1e7df45ae86fbd4f752cc6c40725c`, data)
        // console.log(resp)
    }

    return (
        <div className="main-banner" style={{ backgroundImage: `url(${configuration.base_url}${configuration?.backdrop_sizes?.[2]}${_movieDetail?.backdrop_path})` }} >
            <div className="custom-bg"></div>

            <div className="inner-section">
                <div className="poster-section">
                    <ImageComp preview={true} url={`${configuration.base_url}${configuration?.backdrop_sizes?.[2]}${_movieDetail?.poster_path}`} width={'100%'} />
                </div>

                <div className="detail-section">
                    <Title level={2} >{_movieDetail?.title} ({new Date(_movieDetail?.release_date).getFullYear()}) </Title>
                    <ul className='inside-detail-list'>
                        <li className='detail'>{new Date(_movieDetail?.release_date).toLocaleDateString()} ({_movieDetail?.production_countries?.[0]?.['iso_3166_1']}) </li>
                        <li className='detail'>
                            <ul className='genres-list'>
                                {_movieDetail?.genres?.map((genre, index) => {
                                    return (
                                        <li className='genre on' key={index}>{genre.name}</li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li className='detail'>{timeConvert(_movieDetail?.runtime)}</li>
                    </ul>

                    <div className="rating">
                        <RatingComp width={60} percent={_movieDetail.vote_average * 10} />
                        <span className='heading'>User<br />Score</span>
                        <Rate onChange={(e) => { onRatingChange(e, _movieDetail.id) }} allowHalf />
                    </div>

                    <Text className='tagline' type='secondary' italic>{_movieDetail?.tagline}</Text>

                    <div className="descrption-container">
                        <Title level={4}>Overview</Title>
                        <Paragraph className='overview'>{_movieDetail?.overview}</Paragraph>
                    </div>

                    <div className="cast-container">
                        {movieCasts.slice(0, 3).map((actor, index) => {
                            return <MovieCastList key={actor.name + index} actor={actor} />

                        })}
                        {movieCrews.slice(0, 3).map((actor, index) => {
                            return <MovieCastList key={actor.name + index} actor={actor} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBannerContainer