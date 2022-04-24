import Title from 'antd/lib/typography/Title'
import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../Components/MovieCard'

function MovieContainer({ type }) {
    const moviesReducer = useSelector(state => state.movies)
    const { movies, similarMovies } = moviesReducer
    return (
        <React.Fragment>
            {type == "similar" ?
                <div className="similar-movie-container">
                    <div className="title">
                        <Title level={3}>Similar Movies</Title>
                    </div>
                    <div className="body">
                        {similarMovies.map((movie, index) => {
                            return (
                                <MovieCard key={index} movie={movie} />
                            )
                        })}
                    </div>
                </div>
                :
                <div className="grid">
                    {movies.map((movie, index) => {
                        let rating = movie.vote_average * 10
                        return (
                            <MovieCard key={index} movie={movie} rating={rating} />
                        )
                    })}
                </div >
            }
        </React.Fragment>
    )
}

export default MovieContainer