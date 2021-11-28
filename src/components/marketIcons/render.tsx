import React from 'react'
import logo from './logo.svg'
import { useState, useEffect } from 'react'



export function RenderData({item}:any) {


  return (
    <div className="MarketInfo">
      <div className="TopMarket">
        <img className="MarketImg" src={item.image}></img>
        <a style={{paddingTop: "12px",marginRight:"10px"}} className="MarketText">
        {item.question}
        </a>
      </div>
      <div className="MarketInfoFlexRow">
      <div className ="BottomMarketFlex">
        <div className="BottomMarket">
          <p className="MarketText">
            Total Volume
          </p>
        </div>
        <div className="BottomMarket">
          <p className="MarketText">
            {"$"+Math.round(item.volume).toLocaleString("en-US")}
          </p>
        </div>
      </div>
      <div className ="BottomMarketFlex">
        <div style={{alignSelf:"center"}} className="BottomMarket">
          <p style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth:"55px"}} className="MarketText">
            {item.outcomes[0]}
          </p>
        </div>
        <div className="BottomMarket">
          <p className="MarketText">
            {"$"+Math.round(item.outcomePrices[0]*100)/100}
          </p>
        </div>
      </div>
      <div className ="BottomMarketFlex">
        <div style={{alignSelf:"center"}}className="BottomMarket">
          <p style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth:"55px"}}className="MarketText">
            {item.outcomes[1]}
          </p>
        </div>
        <div className="BottomMarket">
          <p className="MarketText">
            {"$"+Math.round(item.outcomePrices[1]*100)/100}
          </p>
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default RenderData
