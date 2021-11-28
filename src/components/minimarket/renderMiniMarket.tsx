import React from 'react'
import logo from './logo.svg'
import { useState, useEffect } from 'react'



export function RenderMiniMarket({item}:any) {


  return (
    <div className="YourMarketInfo">
    <div className="TopMarket">
        <img className="UserMarketImg" src={item.image}></img>
        {item.question}
      </div>
    </div>
  )
}

export default RenderMiniMarket
