import { Tag } from 'antd'
import Text from 'antd/lib/typography/Text'
import Title from 'antd/lib/typography/Title'
import React from 'react'
import { useSelector } from 'react-redux'
import { currencyFormat } from '../Helpers'

function RightBarContainer() {
    const movieReducers = useSelector(state => state.movies)
    const { _movieDetail, movieKeywords } = movieReducers
    return (
        <React.Fragment>
            <Title level={3}>Details</Title>
            <ul className="movie-finance-detail">
                <li>
                    <Title level={5}>Status</Title>
                    <Text className='financial-text' type='secondary'>{_movieDetail.status}</Text>
                </li>
                <li>
                    <Title level={5}>Original Language</Title>
                    <Text className='financial-text' type='secondary'>{_movieDetail.original_language == "en" ? 'English' : _movieDetail.original_language}</Text>
                </li>
                <li>
                    <Title level={5}>Budget</Title>
                    <Text className='financial-text' type='secondary'>{_movieDetail.budget ? `$${currencyFormat(_movieDetail.budget)}` : '-'}</Text>
                </li>
                <li>
                    <Title level={5}>Revenue</Title>
                    <Text className='financial-text' type='secondary'>{_movieDetail.revenue ? `$${currencyFormat(_movieDetail.revenue)}` : '-'}</Text>
                </li>
                <li>
                    <Title level={5}>Keywords</Title>
                    {movieKeywords?.map((keyword, index) => {
                        return (
                            <Tag className='keyword' key={index}>{keyword.name}</Tag>
                        )
                    })}
                </li>

            </ul>
        </React.Fragment>
    )
}

export default RightBarContainer