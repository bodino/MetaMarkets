import React from 'react'
import { useState, useEffect } from 'react'
import RenderData from './render'



export function MapData({items ,isLoading}:any) {


    return isLoading ? (<h1></h1>) :     
        <div className="FlexBoxMarkets">
        {items.map((item:any) =>(


            <RenderData key={item.char_id} item={item}></RenderData>
        

        ))}
        </div>
};

export default MapData
