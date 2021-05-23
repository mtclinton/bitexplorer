import React, {useEffect, useState} from 'react';

import {API_URL} from '../constants'
import Header from "../components/nav/Header";
import Footer from "../components/nav/Footer";
import Container from "../components/Container"

function Home() {

    const [data, setData] = useState([])
    const [blocks, setBlocks] = useState([])


    // ***** fetch data *****
    const fetchData = async url => {

        try {

            // Call the API
            fetch(url).then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(response);
                }
            }).then(function (data) {

                // Store the post data to a variable
                let btc_data = data.data;
                setData(btc_data)

                let blocks_data = []

                for(let i=0; i < 10; i++){
                    const b_num = btc_data.blocks - i;
                    const b = fetch(`${API_URL}get_block/BTC/${b_num}`);
                    blocks_data.push(b)
                }

                Promise.all(blocks_data)
                    .then(responses => Promise.all(responses.map(value => value.json())))
                    .then(dataList => {
                        const blcks = dataList.map(v => v.data);

                        setBlocks(blcks);
                    });

            }).then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(response);
                }
            // }).then(function (block_data) {
            //     setBlock(block_data.data)

            }).catch(function (error) {
                console.warn(error);
            });

        } catch (err) {
            console.log("Error:", err)
        }
    }

    useEffect(() => {
        fetchData(  `${API_URL}get_info/BTC`)

        fetchData()
    }, [])

    return (
      // <div>
      //     Home
      //     {Object.keys(data).map((keyName, i) => (
      //         <div className="crypto-item-container" key={i}>
      //             <span className="crypto-item">{keyName} : {data[keyName]}</span>
      //         </div>
      //
      //     ))}
      //     <br />
      //     <div>
      //         <h1>Block: {data.blocks}</h1>
      //         {Object.keys(blocks).map((block, i) => (
      //             Object.keys(blocks[block]).map((keyName, i) => (
      //                 <div className="crypto-item-container" key={i}>
      //                     <span className="crypto-item">{keyName} : {blocks[block][keyName]}</span>
      //                 </div>
      //
      //             ))
      //
      //         ))}
      //     </div>
      // </div>
        <>
            <Header />
            <Container />
            <Footer />
        </>
    );
}

export default Home;