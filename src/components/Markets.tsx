import React from 'react'
import logo from './logo.svg'
import { useState, useEffect } from 'react'
import '../App.css'
import GetData from './marketIcons/getData'
import MapData from './marketIcons/mapData'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil'
  import { marketState } from '../state'
  import { isItLoading } from '../state'



export function Markets() {
    const [marketArray, setMarketArray] = useRecoilState<any>(marketState)
    const [isLoading, setIsLoading] = useRecoilState<any>(isItLoading)

  return (
    <div className="Menu">
        <MapData
        items={marketArray}
        isLoading={isLoading}

        /> 
    </div>
  )
}

export default Markets
