import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import ImageComp from './ImageComp'

function CastCard({ url, cast }) {
    return (
        <Card
            className='cast-card'
            hoverable
            cover={<ImageComp preview={true} url={url} />}
        >
            <Meta title={cast.name} description={cast.character} />
        </Card >
    )
}

export default CastCard