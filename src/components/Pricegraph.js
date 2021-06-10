import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import {Link} from "react-router-dom";
const randomColor = require("randomcolor");

function Chart() {

    // const {chart_id} = props;
    // const [activeIndex, setActiveIndex] = React.useState(null),
    const [data, setData] = React.useState({});
    const [loading, setLoading] = useState(true);

    const[optionsdata, setOptionsdata]= React.useState([]);
    const [series, setSeries] = React.useState([]);

    //
    React.useEffect(() => {
        d3.csv("https://raw.githubusercontent.com/mtclinton/bitexplorer/main/public/prices.csv").then((d) => {
            d = d.reverse();
            // const parseDate = d3.timeParse("%m/%d/%Y");
            let a = []
            d.forEach((i) => {
                i.date = new Date(i.date).getTime();
                i.value = Number(i.value);
                // setData([...data, d]);
                a.push(Object.values(i));
            });
            setOptionsdata({
                options: {
                    chart: {
                        toolbar: {
                            show: false
                        }
                    },
                    colors: randomColor({
                        luminosity: "light",
                        hue: "blue",
                        count: 30
                    }),
                    xaxis: {
                        type: 'datetime',
                        // min: new Date('01 May 2012').getTime(),
                        tickAmount: 6,
                    },
                }
            });

            setSeries([
                {
                    name: "series 1",
                    type: "area",
                    data: a
                },
            ]);
            setLoading(false);


        });


    }, []);



    return (

    <>
        {
            loading && <div>Loading</div>
        }
        {
            !loading
            && <ReactApexChart
                options={optionsdata.options}
                series={series}

            />

        }

    </>
    )


}

export default Chart;