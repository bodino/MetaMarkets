import React from 'react'
import { useState, useEffect } from 'react'
import RenderData from './render'
import {
    Link
  } from "react-router-dom";


export function MapData({items ,isLoading}:any) {


    return isLoading ? (<h1></h1>) :     
        <div className="FlexBoxMarkets">
        {items.map((item:any) =>(

            <Link to={"/Market/"+item.marketMakerAddress} >
                <RenderData key={item.char_id} item={item}></RenderData>
            </Link>

        ))}
        </div>
};

export default MapData
