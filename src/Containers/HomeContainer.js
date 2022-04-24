import { Button, Card, Col, Input, Row, Select, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import Title from 'antd/lib/typography/Title';
import { Content } from 'antd/lib/layout/layout';
import { sortList } from '../Constant';
import { useDispatch, useSelector } from 'react-redux';
import { discoverLoadMoreMovies, getConfigurations, getPopularMovies, popularLoadMoreMovies, searchLoadMoreMovies, searchMovies, sortMovies } from '../Redux/Actions/movieActions';
import MovieContainer from './MovieContainer';

function HomeContainer() {
    const dispatch = useDispatch()
    const moviesReducer = useSelector(state => state.movies)
    const { movies, totalPages, currentPage } = moviesReducer
    const [sortOption, setSortOption] = useState(false)
    const [query, setQuery] = useState('')
    const { Option } = Select;

    useEffect(() => {
        if (movies.length == 0) {
            dispatch(getConfigurations())
            dispatch(getPopularMovies())
        }
    }, [movies])

    const onSortClick = () => {
        if (query.trim() !== "") {
            dispatch(searchMovies(query))
        } else {
            dispatch(sortMovies(sortOption))
        }
    }

    const onloadMoreClick = () => {
        if (sortOption && currentPage < totalPages) {
            dispatch(discoverLoadMoreMovies(sortOption, currentPage + 1))
        } else if (!query && !sortOption && currentPage < totalPages) {
            dispatch(popularLoadMoreMovies(currentPage + 1))
        } else if (query && currentPage < totalPages) {
            dispatch(searchLoadMoreMovies(query, currentPage + 1))
        }
    }

    return (
        <Content style={{ padding: '30px' }}>
            <Title level={3}>Popular Movies</Title>
            <Row gutter={16} justify="start" className='home-container'>
                <Col flex={2}>
                    <Space size={'middle'} direction='vertical' style={{ width: '100%' }}>
                        <Card title="Sort">
                            <Select placeholder="Please select" style={{ width: '100%' }} onChange={e => setSortOption(e)} size='large'>
                                {sortList.map((option, index) => {
                                    return (
                                        <Option value={option.title} key={index}>{option.value}</Option>
                                    )
                                })}
                            </Select>
                        </Card>

                        <Card title="Search">
                            <Input value={query} onChange={e => setQuery(e.target.value)} size="large" placeholder="Search" />
                        </Card>
                        <Button onClick={() => onSortClick()} size='large' type='primary' block>Search</Button>
                    </Space>
                </Col>
                <Col flex={6}>
                    <Space size={'middle'} direction={'vertical'}>
                        <MovieContainer />
                        <Button size='large' type='primary' block onClick={() => onloadMoreClick()}>Load More</Button>
                    </Space>
                </Col>
            </Row>
        </Content>
    )
}

export default HomeContainer