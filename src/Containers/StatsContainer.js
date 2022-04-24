import React, { useEffect, useState } from 'react'
import CanvasJSReact from '../Charts/canvasjs.react';
import * as d3 from "d3";
import Bar from '../Charts/Bars';
import { get } from '../Services/HttpServices'

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function StatsContainer() {
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [topRatedMovies1, setTopRatedMovies1] = useState([])
    const [data, setData] = useState([]);

    useEffect(() => {
        getTopRatedMoviesData()
        async function getTopRatedMoviesData() {
            let resp = await get('/3/movie/top_rated')
            let top10Movies = resp.results.slice(0, 10)
            let data1 = top10Movies.map((movie, index) => { return { label: movie.title, y: movie.vote_average } })
            let data2 = top10Movies.map((movie, index) => { return { label: movie.title, y: movie.vote_average / movie.vote_count } })
            setTopRatedMovies(data1)
            setTopRatedMovies1(data2)
        }
        let a = generateData()
        if (data.length >= 0 && !data?.[0]?.date && a?.[0].date) {
            setData(a)
        }
    }, [data])

    const generateData = (value, length = 10) =>
        d3.range(length).map((item, index) => ({
            index: index,
            date: topRatedMovies?.[item]?.data,
            value: value === null || value === undefined ? topRatedMovies?.[item]?.value * 10 : value
        }));

    const options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Top 10 Rated Movies"
        },
        axisX: {
            title: "Movies",
            reversed: true,
        },
        axisY: {
            title: "Rating",
            includeZero: true,
        },
        data: [{
            type: "bar",
            dataPoints: [...topRatedMovies]
        }]
    }

    const options1 = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Rated Count"
        },
        axisX: {
            title: "Movies",
            reversed: true,
        },
        axisY: {
            title: "Rating",
            includeZero: true,
        },
        data: [{
            type: "bar",
            dataPoints: [...topRatedMovies1]
        }]
    }


    return (
        <div className="App">
            {/* <div>
                <Bar
                    data={data}
                    width={700}
                    height={300}
                    top={20}
                    bottom={30}
                    left={30}
                    right={0}
                />
                <span className="label">Top 10 Rated Movies </span>
            </div> */}
            <div>
                <CanvasJSChart options={options} />
                <CanvasJSChart options={options1} />
            </div>
        </div>
    );
}

export default StatsContainer