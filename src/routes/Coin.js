import React ,{ useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import DOMPurify from "dompurify"
import "./Coin.css"

import axios from "axios"


const Coin = () => {

    const params= useParams()
    const [Coin,setCoin]= useState({})

    const url=`https://api.coingecko.com/api/v3/coins/${params.coinId}`


    useEffect(() =>{
        axios.get(url).then((res) => {
            setCoin(res.data)
        }).catch((error) =>{
            console.log(error)
        })
    }, [])


  return (
    <div>
        <div className="coin-container">
            <div className="content">
                <h1>{Coin.name}</h1>
            </div>
            <div className="content">
                <div className="rank">
                    <span className="rank-btn">Rank #{Coin.market_cap_rank}</span>
                </div>
                <div className="info">
                    <div className="coin-heading">
                        {Coin.image ? <img src={Coin.image.small} alt=''/> : null}
                        <p>{Coin.name}</p>
                        {Coin.symbol ? <p>{Coin.symbol.toUpperCase()}</p> : null }
                        
                    </div>
                    <div className="coin-prise">
                        {Coin.market_data?.current_price ? <h1>${Coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
                    </div>
                </div>
            </div>
            <div className="content">
                <table>
                    <thead>
                        <tr>
                            <th>1h</th>
                            <th>24h</th>
                            <th>7d</th>
                            <th>14d</th>
                            <th>30d</th>
                            <th>1yr</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{Coin.market_data?.price_change_percentage_1h_in_currency ?  <p> {Coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}% </p> : null}</td>
                            <td>{Coin.market_data?.price_change_percentage_24h_in_currency ? <p> {Coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1) }%</p> : null}</td>
                            <td>{Coin.market_data?.price_change_percentage_7d_in_currency ? <p> {Coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1) }%</p> : null}</td>
                            <td>{Coin.market_data?.price_change_percentage_14d_in_currency ? <p> {Coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1) }%</p> : null}</td>
                            <td>{Coin.market_data?.price_change_percentage_30d_in_currency ? <p>{ Coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1) }%</p> : null}</td>
                            <td>{Coin.market_data?.price_change_percentage_1y_in_currency ? <p> {Coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1) }%</p> : null}</td>


                           
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="content">
                <div className="stats">
                    <div className="left">
                        <div className="row">
                            <h4>24 Hour Low</h4>
                            {Coin.market_data?.low_24h ? <p>${Coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
                            
                        </div>
                        <div className="row">
                            <h4>24 Hour Heigh</h4>
                            {Coin.market_data?.high_24h ? <p>${Coin.market_data.high_24h.usd.toLocaleString()}</p> : null}
                        </div>
                    </div>
                    <div className="right">
                        <div className="row">
                            <h4>Market Cap</h4>
                            {Coin.market_data?.market_cap ? <p>${Coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
                            
                        </div>
                        <div className="row">
                            <h4>Circulating Supply</h4>
                            {Coin.market_data ? <p>{Coin.market_data.circulating_supply}</p> : null}
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="about">
                    <h3>About</h3>
                    <p dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(Coin.description ? Coin.description.en: ''),
                    }}>

                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Coin