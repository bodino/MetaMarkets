import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MapData from './mapData'


var Eth = require('web3-eth')
let web3
const usdcAddress = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
var autoSelectWallet = 'metamask'

export function GetData() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://strapi-matic.poly.market/markets?_limit=-1&closed=false&active=true&market_type=normal`,
      )
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return( 
    <div>
        <MapData
        items={items}
        isLoading={isLoading}

        />
    </div>
  
  
  );

}

export default GetData
