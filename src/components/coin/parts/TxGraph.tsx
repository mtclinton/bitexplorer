import * as React from "react";
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';

import numberWithCommas from '../../../utils/commas';
import {Block} from "../../../types";

const randomColor = require('randomcolor');

interface IProps {
    blocks: Block[]
}

function TxGraph(props: IProps) {
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

export default TxGraph;