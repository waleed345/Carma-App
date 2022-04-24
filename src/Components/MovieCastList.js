import Text from 'antd/lib/typography/Text'
import Title from 'antd/lib/typography/Title'
import React from 'react'

function MovieCastList({ actor }) {
    return (
        <div className="container">
            <Title level={5}>{actor?.name}</Title>
            <Text>{actor?.known_for_department}</Text>
        </div>
    )
}

export default MovieCastList