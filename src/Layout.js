import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Detail from './Pages/Detail'
import Home from './Pages/Home'
import Stats from './Pages/Stats'
import './Styles/index.scss'

function Layout() {
    return (
        <div id="app_layout">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/movie/:id" exact element={<Detail />} />
                    <Route path="/movie/stats" exact element={<Stats />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Layout