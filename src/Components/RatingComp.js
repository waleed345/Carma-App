import { Progress } from 'antd'
import React from 'react'

function RatingComp({ width, percent }) {
    return (
        <Progress
            className='rating-container'
            width={width}
            type="circle"
            strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
            }}
            percent={percent}
            strokeWidth={8}
        />
    )
}

export default RatingComp