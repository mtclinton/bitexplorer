import React from 'react';
import Blocklist from "./Blocklist";
import Chart from './Pricegraph';

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

function Container(props) {

    const {data, blocks} = props;

    return (
        <>
            <section className="hero is-medium">
                <div className="hero-body has-text-centered">
                    {/*<h1 className="title is-2">Search transactions, addresses or blocks</h1>*/}
                    <div id="hero-input-group" className="field has-addons has-addons-centered">
                        <div className="control">
                            <input className="input is-medium" type="text" placeholder="Search..."/>
                        </div>
                        <div className="control">
                            <a className="button is-medium is-primary">
                                <i className="fal fa-search" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container is-max-desktop">
                <section className="featured">
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <h2 className="subtitle">Supported Currencies</h2>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <div className="field has-addons has-addons-centered">
                                    <div className="control">
                                        <a className="button is-small" disabled>
                                            <i className="far fa-chevron-left" />
                                        </a>
                                    </div>
                                    <div className="control">
                                        <a className="button is-small">
                                            <i className="far fa-chevron-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3">
                            <article>
                                <figure className="image is-5by3">
                                    <img src="/css/bitcoin_card.svg"/>
                                </figure>
                                {/*<h2 className="subtitle">Creating a Group</h2>*/}
                                {/*<span className="tag is-rounded">Users & Groups</span>*/}
                            </article>
                        </div>
                        <div className="column is-3">
                            <article>
                                <figure className="image is-5by3">
                                    <img src="/css/litecoin_card.svg"/>
                                </figure>
                                {/*<h2 className="subtitle">Downloading/Printing Your Invoices</h2>*/}
                                {/*<span className="tag is-rounded">Billing & Accounts</span>*/}
                            </article>
                        </div>
                        <div className="column is-3">
                            <article>
                                <figure className="image is-5by3">
                                    <img src="/css/bitcoincash_card.svg"/>
                                </figure>
                                {/*<h2 className="subtitle">Changing the Account Owner</h2>*/}
                                {/*<span className="tag is-rounded">Billing & Accounts</span>*/}
                            </article>
                        </div>
                        <div className="column is-3">
                            <article>
                                <figure className="image is-5by3">
                                    <img src="/css/doge_card.svg"/>
                                </figure>
                                {/*<h2 className="subtitle">Adding Internal Notes</h2>*/}
                                {/*<span className="tag is-rounded">Billing & Accounts</span>*/}
                            </article>
                        </div>
                    </div>
                </section>
                <section className="categories">
                    <div className="columns is-multiline">
                        <div className="column is-6">
                            <div className="category">
                                <h1 className="title is-5">
                                    <img src="/css/bitcoin_card.svg"  style={{height:"44px", width: "44px", verticalAlign: "middle"}}/> | Latest Blocks <span>5 minutes ago</span>
                                </h1>
                                <hr/>
                                <Blocklist data={data} blocks={blocks} />
                                <h3 className="category-more">View All <i
                                    className="far fa-arrow-right icon-padding-left" /></h3>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div className="category">
                                <h1 className="title is-5">
                                    | Latest Prices
                                </h1>
                                <hr/>
                                <Chart chart_id={1}/>
                                <h3 className="category-more">View All <i
                                    className="far fa-arrow-right icon-padding-left" /></h3>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div className="category">
                                <h1 className="title is-5">
                                    <img src="/css/litecoin_card.svg"  style={{height:"44px", width: "44px", verticalAlign: "middle"}}/> | Latest Blocks <span>5 minutes ago</span>
                                </h1>
                                <hr/>
                                <Blocklist data={data} blocks={blocks} />

                                <h3 className="category-more">View All <i
                                    className="far fa-arrow-right icon-padding-left" /></h3>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div className="category">
                                <h1 className="title is-5">
                                    | Latest Prices
                                </h1>
                                <hr/>
                                <Chart chart_id={2}/>
                                <h3 className="category-more">View All <i
                                    className="far fa-arrow-right icon-padding-left" /></h3>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div className="category">
                                <h1 className="title is-5">
                                    <img src="/css/bitcoincash_card.svg"  style={{height:"44px", width: "44px", verticalAlign: "middle"}}/> | Latest Blocks <span>5 minutes ago</span>
                                </h1>
                                <hr/>
                                <Blocklist data={data} blocks={blocks} />

                                <h3 className="category-more">View All <i
                                    className="far fa-arrow-right icon-padding-left" /></h3>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div className="category">
                                <h1 className="title is-5">
                                    | Latest Prices
                                </h1>
                                <hr/>
                                <Chart chart_id={3}/>
                                <h3 className="category-more">View All <i
                                    className="far fa-arrow-right icon-padding-left" /></h3>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div className="category">
                                <h1 className="title is-5">
                                    <img src="/css/doge_card.svg"  style={{height:"44px", width: "44px", verticalAlign: "middle"}}/> | Latest Blocks <span>5 minutes ago</span>
                                </h1>
                                <hr/>
                                <Blocklist data={data} blocks={blocks} />

                                <h3 className="category-more">View All <i
                                    className="far fa-arrow-right icon-padding-left" /></h3>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div className="category">
                                <h1 className="title is-5">
                                    | Latest Prices
                                </h1>
                                <hr/>
                                <Chart chart_id={4}/>
                                <h3 className="category-more">View All <i
                                    className="far fa-arrow-right icon-padding-left" /></h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Container;