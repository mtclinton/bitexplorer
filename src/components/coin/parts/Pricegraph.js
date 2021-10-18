import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const randomColor = require('randomcolor');

function Chart() {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading && <div>Loading</div>}
            {
                !loading && (
                    <></>
                )
            }
        </>
    );
}

export default Chart;