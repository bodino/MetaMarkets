import React from 'react'
import logo from './logo.svg'
import { useState, useEffect } from 'react'
import '../App.css'
import GetData from './marketIcons/getData'
import { useParams } from 'react-router-dom'
import Chart from './Chart'
import { useRecoilState } from 'recoil'

import { marketState } from '../state'
import { isItLoading } from '../state'
import { createChart } from 'lightweight-charts'
import { green } from '@mui/material/colors'

export function IndividualMarket({ items }: any) {
  const [marketArray, setMarketArray] = useRecoilState<any>(marketState)
  const [isLoading, setIsLoading] = useRecoilState<any>(isItLoading)

  const { id } = useParams()
  var currentArray

  const [marketObject, setMarketObject]: any = useState(0)

  const [doneFinding, setDoneFinding]: any = useState(true)

  const [buyClicked, setBuyClicked]: any = useState(true)

  const [yesClicked, setYesClicked]: any = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      //setIsLoading(true)
      for (var i = 0; items.length > i; i++) {
        currentArray = items[i]
        if (id === currentArray.marketMakerAddress) {
          setMarketObject(currentArray)
          i = items.length
          setDoneFinding(false)
          console.log(currentArray);
        }
      }
      console.log(marketObject)
    }
    fetchItems()
  }, [isLoading])

  function addBorder() {}

  return doneFinding ? (
    <h1></h1>
  ) : (
    <div className="IndividualMarketPage">
      <div className="MarketHeader">{marketObject.question}</div>
      <div className="MarketHeaderInfo">
        <a className="MarketHeaderText">
          <a>Volume</a>
          <a>
            {'$' + Math.round(marketObject.volume).toLocaleString('en-US')}{' '}
          </a>
        </a>
        <a className="MarketHeaderText">
          <a>Liquidity</a>
          <a>
            {'$' + Math.round(marketObject.liquidity).toLocaleString('en-US')}
          </a>
        </a>
        <a className="MarketHeaderText">
          <a>{marketObject.outcomes[0]!}</a>
          <a>{'$' + Math.round(marketObject.outcomePrices[0]! * 100) / 100}</a>
        </a>
        <a className="MarketHeaderText">
          <a>{marketObject.outcomes[1]!}</a>
          <a>{'$' + Math.round(marketObject.outcomePrices[1]! * 100) / 100}</a>
        </a>
        <a className="MarketHeaderText">
          <a>End Date</a>
          <a>{marketObject.end_date}</a>
        </a>
      </div>
      <div className="flexContainsBuyAndGraph">
        <div className="BuyMenu">
          <div className="BuyMenuOutside">
            <div className="BuySellButton">
              <div
                className="ActualButton"
                onClick={() => {
                  setBuyClicked(true)
                }}
                style={{
                  borderColor: !buyClicked ? '' : 'green',
                  color: !buyClicked ? '' : 'green',
                }}
              >
                Buy
              </div>
              <div
                className="ActualButton"
                onClick={() => {
                  setBuyClicked(false)
                }}
                style={{
                  borderColor: buyClicked ? '' : 'red',
                  color: buyClicked ? '' : 'red',
                }}
              >
                Sell
              </div>
            </div>

            <div className="BuySellButton">
              <div
                className="ActualButton"
                onClick={() => {
                  setYesClicked(true)
                }}
                style={{
                  borderColor: !yesClicked ? '' : 'green',
                  color: !yesClicked ? '' : 'green',
                }}
              >
                <a>{marketObject.outcomes[0]!}</a>

                <a>
                  {'$' + Math.round(marketObject.outcomePrices[0]! * 100) / 100}
                </a>
              </div>
              <div
                className="ActualButton"
                onClick={() => {
                  setYesClicked(false)
                }}
                style={{
                  borderColor: yesClicked ? '' : 'red',
                  color: yesClicked ? '' : 'red',
                }}
              >
                <a>{marketObject.outcomes[1]!}</a>
                <a>
                  {'$' + Math.round(marketObject.outcomePrices[1]! * 100) / 100}
                </a>
              </div>
            </div>

            <div className="Amount">
              Amount
              <span style={{ fontSize: '10px', color: 'grey' }}>
                {' '}
                Set order size
              </span>
            </div>

            <div className="InputBoxFlex">
              <input className="InputBox" placeholder="0.0000"></input>
              <div className="InputBox">USDC</div>
            </div>

            <div className="ConfirmBox">
              <div className="ConfirmBoxTextFlex">
                <div style={{width: "235px"}}className= "ConfirmBoxFlexRow">
                  <a className="ConfirmBoxText">Expected Price</a>
                  <a className="ConfirmBoxplaceHolder">-</a>
                </div>
                <div style={{width: "235px"}} className= "ConfirmBoxFlexRow">
                  <a className="ConfirmBoxText">Estimated Shares Bought</a>
                  <a className="ConfirmBoxplaceHolder">-</a>
                </div>
                <div style={{width: "235px"}} className= "ConfirmBoxFlexRow">
                  <a className="ConfirmBoxText">Maximum Winnings</a>
                  <a className="ConfirmBoxplaceHolder">-</a>
                </div>
                <div style={{width: "235px"}} className= "ConfirmBoxFlexRow">
                  <a className="ConfirmBoxText">Max Return on investment</a>
                  <a className="ConfirmBoxplaceHolder">-</a>
                </div>
                
                
              </div>
              <div className="ConfirmBoxButton">
                Execute Trade
              </div>
            </div>
          </div>
        </div>
        <div className="Chart">
          <Chart />
        </div>
      </div>
      <div className="MarketFooter">
        <br></br>
        <div className="PositionMenu">

        </div>
        {marketObject.description}


      </div>
    </div>
  )
}

export default IndividualMarket
