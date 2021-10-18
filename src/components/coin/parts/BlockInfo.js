import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { API_URL } from '../../../constants';

function BlockInfo(props) {
    const { code } = props;

    const [info, setInfo] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}get_info/${code}`)
            .then((res) => {
                setInfo(res.data.data);
            });
    }, []);

    return (
        <section>
            {
                info && (
                    <div className="mt-2">
                        <p>
                            Mining Difficulty:&nbsp;
                            {info.mining_difficulty}
                        </p>
                        <p>
                            Unconfirmed Transactions:&nbsp;
                            {info.unconfirmed_txs}
                        </p>
                        <p>
                            Total Blocks:&nbsp;
                            {info.blocks}
                        </p>
                    </div>
                )
            }
        </section>
    );
}

BlockInfo.propTypes = {
    code: PropTypes.string.isRequired,
};

export default BlockInfo;