import React, {useEffect, useState} from 'react';

import {API_URL} from '../constants'

function Home() {

    const [data, setData] = useState([])

    // ***** fetch data *****
    const fetchData = async url => {
        try {
            const response = await fetch(url)
            const res = await response.json()
            setData(res.data)
        } catch (err) {
            console.log("Error:", err)
        }
    }

    useEffect(() => {
        fetchData(  `${API_URL}get_info/BTC`)
    }, [])

    return (
      <div>
          Home
          {Object.keys(data).map((keyName, i) => (
              <div className="crypto-item-container" key={i}>
                  <span className="crypto-item">{keyName} : {data[keyName]}</span>
              </div>
          ))}
      </div>
    );
}

export default Home;