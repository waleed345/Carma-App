import Title from 'antd/lib/typography/Title'
import React from 'react'
import { useSelector } from 'react-redux'
import CastCard from '../Components/CastCard'

function CastContainer() {
    const movieReducers = useSelector(state => state.movies)
    const { configuration, movieCasts } = movieReducers
    return (
        <React.Fragment>
            <Title level={3}>Top Cast</Title>
            <div className="cast-flex-container">
                {movieCasts.map((cast, index) => {
                    return (
                        <CastCard key={index} url={`${configuration.base_url}${configuration?.profile_sizes?.[2]}${cast.profile_path}`} cast={cast} />
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default CastContainer