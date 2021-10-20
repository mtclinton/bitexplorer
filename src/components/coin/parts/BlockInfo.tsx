import * as React from "react";
import PropTypes from 'prop-types';

import numberWithCommas from '../../../utils/commas';
import {Block, Info} from "../../../types";

interface IProps {
    info: Info
    blocks: Block[]
}

function BlockInfo(props: IProps) {

    const { info, blocks } = props;

    return (
        <section>
            {
                info && (
                    <div className="mt-2">
                        <p>
                            Mining Difficulty:&nbsp;
                            {numberWithCommas(parseInt(info.mining_difficulty))}
                        </p>
                        <p>
                            Unconfirmed Transactions:&nbsp;
                            {numberWithCommas(info.unconfirmed_txs)}
                        </p>
                        <p>
                            Total Blocks:&nbsp;
                            {numberWithCommas(info.blocks)}
                        </p>
                        <hr className="my-3" />
                        {!blocks.length && <p>Loading blocks...</p>}
                        {
                            blocks.map((block) => (
                                <div className="is-flex" key={block.block_no}>
                                    <p>
                                        Block #
                                        {numberWithCommas(block.block_no)}
                                    </p>
                                    <p className="ml-auto">
                                        {numberWithCommas(block.txs.length)}
                                        {' '}
                                        Transactions
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </section>
    );
}

export default BlockInfo;