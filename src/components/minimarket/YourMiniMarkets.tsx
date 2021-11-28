import React from 'react'
import { useState, useEffect } from 'react'
import RenderMiniMarket from './renderMiniMarket'
import { marketState } from '../../state'
import {useRecoilState} from 'recoil'



export function YourMiniMarkets({isLoading}:any) {
    const [marketArray, setMarketArray] = useRecoilState<any>(marketState)

    return isLoading ? (<h1></h1>) :     
        <div className="FlexBoxMarkets">
        {marketArray.map((item:any) =>(


            <RenderMiniMarket key={item.char_id} item={item}></RenderMiniMarket>
        

        ))}
        </div>
};

export default YourMiniMarkets
