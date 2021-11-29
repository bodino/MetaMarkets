import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MapData from './mapData'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil'
  import { marketState } from '../../state'
  import { isItLoading } from '../../state'




var Eth = require('web3-eth')
let web3
const usdcAddress = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
var autoSelectWallet = 'metamask'

export function GetData() {
  const [marketArray, setMarketArray] = useRecoilState<any>(marketState)
  const [isLoading, setIsLoading] = useRecoilState<any>(isItLoading)
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://strapi-matic.poly.market/markets?_limit=-1&closed=false&active=true&market_type=normal`,
      )
      console.log("hi")
      setMarketArray(result.data)
      setIsLoading(false)
      
    }

    fetchItems()
  }, [])

  return( 
    <div>
    </div>
  );

}

export default GetData
