import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios, {AxiosResponse} from 'axios';

import BlockInfo from './parts/BlockInfo';
import TxGraph from './parts/TxGraph';

import {Info, Block, IGetInfoResponse,IGetBlockResponse} from "../../types";
import { API_URL } from '../../constants';

interface IProps {
    currency: string,
    Icon: Function
    code: string
}



function Overview(props: IProps) {
    const { currency, Icon, code } = props;

    const [info, setInfo] = useState<Info | null>(null);
    const [blocks, setBlocks] = useState<Block[]>([]);

    useEffect(() => {
        axios.get<IGetInfoResponse>(`${API_URL}get_info/${code}`)
            .then((res) => {
                console.log(res.data.data);

                setInfo(res.data.data);

            }).catch((e) => {
            console.error(e);
        });
    }, [code]);

    useEffect(() => {
        async function fetchBlocks() {
            if(!info) return;

            const blockCount = info.blocks;
            for (let i = blockCount; i >= (blockCount - 7); i -= 1) {
                try {
                    // eslint-disable-next-line no-await-in-loop
                    const res = await axios.get<IGetBlockResponse>(`${API_URL}get_block/${code}/${i}`);
                    console.log(res.data.data);
                    blocks.push(res.data.data);
                } catch (e) {
                    console.error(e);
                }
            }

            // Rerender only happens when object changes
            // Push does not create a new object, so force change
            setBlocks([...blocks]);
        }

        if (info !== null) fetchBlocks();
    }, [info]);

    return (
        <div className="columns is-multiline box">
            <div className="column is-12">
                <h1 className="subtitle">{currency}</h1>
            </div>
            <div className="column is-6">
                <div className="category">
                    <h1 className="title is-flex is-align-items-center is-5">
                        <Icon width={44} height={44} className="mr-2" />
                        {' '}
                        | Latest Info
                    </h1>
                    <hr />
                    {
                        info !== null && blocks.length > 0 && <BlockInfo info={info} blocks={blocks} />
                    }
                </div>
            </div>
            <div className="column is-6">
                <div className="category">
                    <h1 className="title is-flex is-align-items-center is-5">
                        <Icon width={44} height={44} className="mr-2" />
                        {' '}
                        | Transaction Graph
                    </h1>
                    <hr />
                    <TxGraph blocks={blocks} />
                </div>
            </div>
        </div>
    );
}

export default Overview;