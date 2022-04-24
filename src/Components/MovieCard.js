import { Card } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ImageComp from './ImageComp';
import RatingComp from './RatingComp';

function MovieCard({ movie, rating }) {
    const moviesReducer = useSelector(state => state.movies)
    const { configuration } = moviesReducer
    const navigate = useNavigate();
    const { Meta } = Card;
    return (
        <Card
            className='movie-card'
            hoverable
            onClick={() => { navigate(`/movie/${movie.id}`) }}
            style={{ width: 200 }}
            cover={<ImageComp url={`${configuration.base_url}${configuration.poster_sizes[4]}${movie.poster_path}`} width="auto" />}
        >
            {rating && (
                <RatingComp percent={rating} width={40} />
            )}
            <Meta title={movie.title} description={movie.release_date} />
        </Card >
    )
}

export default MovieCard