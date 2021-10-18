import React from 'react';

import BitcoinIcon from '../assets/bitcoin.svg';
import LitecoinIcon from '../assets/litecoin.svg';
import DashIcon from '../assets/dash.svg';
import DogecoinIcon from '../assets/dogecoin.svg';

import Header from '../components/nav/Header';
import Footer from '../components/nav/Footer';
import CurrencyList from '../components/CurrencyList';
import Overview from '../components/coin/Overview';

function Home() {
    return (
        <>
            <Header />
            <div className="container is-max-desktop">
                <section className="mt-5">
                    <CurrencyList />
                </section>
                <section className="mt-5">
                    <Overview currency="Bitcoin" Icon={BitcoinIcon} code="btc" />
                </section>
                <section className="mt-5">
                    <Overview currency="Litecoin" Icon={LitecoinIcon} code="ltc" />
                </section>
                <section className="mt-5">
                    <Overview currency="Dash" Icon={DashIcon} code="dash" />
                </section>
                <section className="mt-5">
                    <Overview currency="Dogecoin" Icon={DogecoinIcon} code="doge" />
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Home;