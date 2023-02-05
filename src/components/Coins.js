import React from 'react'
import { Link } from 'react-router-dom'
import CoinItem from './CoinItem'
import './Coins.css'
import Coin from '../routes/Coin'

const Coins = (props) => {
  return (
    <div className='container'>
      <div>
        <div className='heading'>
          <p>#</p>
          <p className='coin-name'>Coin</p>
          <p>Prise</p>
          <p>24h</p>
          <p className='hide-mobile'>Volume</p>
          <p className='hide-mobile'>Mkt Cap</p>

        </div>

        {props.coins.map(Coins => {
          return (
            <Link to={`/coin/${Coins.id}`} element={<Coin/>} key={Coins.id}>
            <CoinItem coins={Coins} />
            </Link>
          )
        })}


      </div>
        
    </div>
  )
}

export default Coins