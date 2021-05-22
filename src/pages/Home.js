import React, {useEffect, useState} from 'react';

import {API_URL} from '../constants'

function Home() {

    const [data, setData] = useState([])
    const [block, setBlock] = useState([])


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

                // Fetch another API
                return fetch(`${API_URL}get_blockhash/BTC/${btc_data.blocks}`);

            }).then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(response);
                }
            }).then(function (block_data) {
                setBlock(block_data.data)

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
      <div>
          Home
          {Object.keys(data).map((keyName, i) => (
              <div className="crypto-item-container" key={i}>
                  <span className="crypto-item">{keyName} : {data[keyName]}</span>
              </div>

          ))}
          <br />
          <div>
              <h1>Block: {data.blocks}</h1>
              {Object.keys(block).map((keyName, i) => (
                  <div className="crypto-item-container" key={i}>
                      <span className="crypto-item">{keyName} : {block[keyName]}</span>
                  </div>

              ))}
          </div>
      </div>
    );
}

export default Home;