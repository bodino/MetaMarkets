import React from 'react'
import logo from './logo.svg'
import { useState, useEffect } from 'react'
import '../App.css'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'
import Onboard from 'bnc-onboard'
import Web3 from 'web3'
import { ethers } from 'ethers'

import YourMiniMarkets from './minimarket/YourMiniMarkets'
import { marketState } from '../state'
import { isItLoading } from '../state'
var Eth = require('web3-eth')
let web3
const usdcAddress = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
var autoSelectWallet = 'metamask'



export function Account() {

    const [marketArray, setMarketArray] = useRecoilState<any>(marketState)
    const [isLoading, setIsLoading] = useRecoilState<any>(isItLoading)


  return (
    <div className="Account">
        <span>
            <br></br>
        </span>
      <div className= "UserInfo" style={{justifyContent: 'center'}}>
            <p>USDC Value</p>
            <p className="balances">$0.00</p>
            <p>Portfolio Value</p>
            <p className="balances">$0.00</p>
      </div>
        <span>
            <br></br>
        </span>

      <div className= "YourMarkets">
            <p>Your Markets</p>
            <YourMiniMarkets
            login={marketArray}
            isLoading={isLoading}
            />

      </div>

    </div>
  )
}

export default Account
