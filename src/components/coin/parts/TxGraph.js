import React from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';

import numberWithCommas from '../../../utils/commas';

const randomColor = require('randomcolor');

function TxGraph(props) {
    const {blocks} = props;

    return (
        <ReactApexChart
            options={{
                chart: {
                    toolbar: {
                        show: false,
                    },
                },
                colors: randomColor({
                    luminosity: 'light',
                    hue: 'blue',
                    count: 30,
                }),
                xaxis: {
                    type: 'block',
                    tickAmount: 6,
                    title: {
                        text: 'Block Number',
                    },
                },
                yaxis: {
                    title: {
                        text: '# of Txs',
                    },
                },
            }}
            series={[
                {
                    name: 'Transactions',
                    type: 'area',
                    data: blocks.map((block) => ({
                        x: numberWithCommas(block.block_no),
                        y: block.txs.length,
                    })),
                },
            ]}
        />
    );
}

TxGraph.propTypes = {
    blocks: PropTypes.array.isRequired,
};

export default TxGraph;