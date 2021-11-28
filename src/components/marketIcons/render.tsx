import React from 'react'
import logo from './logo.svg'
import { useState, useEffect } from 'react'



export function RenderData({item}:any) {


  return (
    <div className="MarketInfo">
      <div className="TopMarket">
        <img src={item.image}></img>
        <p className="MarketText">
        {item.question}
        </p>
      </div>
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
  )
}

export default RenderData
