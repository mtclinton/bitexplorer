import React, {useEffect, useState} from 'react';

import {API_URL} from '../constants'
import Header from "../components/nav/Header";
import Footer from "../components/nav/Footer";
import Container from "../components/Container"

function timeSince(date) {

    var seconds = Math.floor((new Date() - new Date(date * 1000)) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Blocklist(props) {

    const {data, blocks} = props;


    return (
        <div className="blocklist-container">
            <div className="blocklist-wrapper">

                    {Object.keys(blocks).map((block, i) => (
                        <div className="blocklist-data-container">
                            <div className="blocklist-height">
                                <div className="blocklist-item"><a
                                    href={`https://www.blockchain.com/btc/block/${blocks[block].blockhash}`}
                                    className="block-data">{blocks[block].block_no}</a>
                                </div>
                            </div>
                            <div className="blocklist-mined-trans">
                                <div  className="blocklist-item"><span
                                    className="block-data">{timeSince(blocks[block].time)}</span></div>
                            </div>
                            <div className="blocklist-mined-trans">
                                <div className="blocklist-item2"><a
                                    href={`https://www.blockchain.com/btc/block/${blocks[block].blockhash}`}
                                    className="block-data">{blocks[block].txs.length} txs</a>
                                </div>
                            </div>
                            <div className="blocklist-size">
                                <div className="blocklist-item"><span
                                    className="block-data">{numberWithCommas(blocks[block].size)} bytes</span>
                                </div>
                            </div>
                        </div>

                    ))}

            </div>
        </div>


    );
}

export default Blocklist;