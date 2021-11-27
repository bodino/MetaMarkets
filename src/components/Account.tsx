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

var Eth = require('web3-eth')
let web3
const usdcAddress = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
var autoSelectWallet = 'metamask'


export function Account() {


  return (
    <div className="Account">
        <span>
            <br></br>
        </span>
      <div className= "UserInfo">
            <p>USDC Value</p>
            <p className="balances">$0.00</p>
            <p>Portfolio Value</p>
            <p className="balances">$0.00</p>
      </div>
        <span>
            <br></br>
        </span>

      <div className= "UserInfo">
            <p>Active Markets</p>

      </div>

    </div>
  )
}

export default Account