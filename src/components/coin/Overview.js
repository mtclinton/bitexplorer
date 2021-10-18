import React from 'react';
import PropTypes from 'prop-types';

import BlockInfo from './parts/BlockInfo';

function Overview(props) {
    const { currency, Icon, code } = props;

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
                    <BlockInfo code={code} />
                </div>
            </div>
            <div className="column is-6">
                <div className="category">
                    <h1 className="title is-flex is-align-items-center is-5">
                        <Icon width={44} height={44} className="mr-2" />
                        {' '}
                        | Latest Prices
                    </h1>
                    <hr />
                    {/* <Chart code={code} /> */}
                </div>
            </div>
        </div>
    );
}

Overview.propTypes = {
    currency: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    Icon: PropTypes.func.isRequired,
    code: PropTypes.string.isRequired,
};

export default Overview;