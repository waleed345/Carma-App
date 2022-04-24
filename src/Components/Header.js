import { Button, PageHeader } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
    return (
        <div id="app_header">
            <PageHeader
                ghost={false}
                className="site-page-header"
                title="TMDB"
                subTitle="The Moview Database"
                extra={[
                    <Button onClick={() => navigate(`/`)} key="1">Home</Button>,
                    <Button onClick={() => navigate(`/movie/stats`)} key="2">Stats</Button>,
                ]}
            />
        </div>
    )
}

export default Header