import * as React from "react";

import BitcoinIcon from '../assets/bitcoin.svg';
import LitecoinIcon from  '../assets/litecoin.svg';
import DashIcon from  '../assets/dash.svg';
import DogecoinIcon from  '../assets/dogecoin.svg';

function CurrencyList() {
    return (
        <section>
            <section className="hero bd-hero bd-is-basic">
                <div className="hero-body">
                    <div className="container">
                        <div className="bd-hero-body">
                            <div className="bd-hero-heading">
                                <h1 className="title">
                                    <p>BitExplorer</p>
                                </h1>
                                <div className="subtitle is-4">
                                    <p>
                                        We allow you to explore the blockchains of Bitcoin, Litecoin, Dash,
                                        and Dogecoin.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="columns mt-3 box">
                <div className="column">
                    <BitcoinIcon />
                </div>
                <div className="column">
                    <article>
                        <figure className="image">
                            <LitecoinIcon />
                        </figure>
                    </article>
                </div>
                <div className="column">
                    <article>
                        <figure className="image">
                            <DashIcon />
                        </figure>
                    </article>
                </div>
                <div className="column">
                    <article>
                        <figure className="image">
                            <DogecoinIcon />
                        </figure>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default CurrencyList;