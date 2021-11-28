import React from 'react'

import { useState, useEffect } from 'react'
import '../App.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import Onboard from 'bnc-onboard'
import Web3 from 'web3'
import { ethers } from 'ethers'
import logo from '../Vector.png'
import { Link } from 'react-router-dom'

import { connectedState } from '../state'

var Eth = require('web3-eth')
let web3
const usdcAddress = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
var autoSelectWallet = 'metamask'

export function Header({
  login,
  wallet,
  walletConnected,
  setWalletConnected,
}: any) {
  const [connected, setConnected] = useRecoilState<any>(connectedState)

  function test() {
    var address = wallet.getState().address
    console.log(address)
    if (address > 2) {
      setConnected(true)
    }
  }
  useEffect(() => {
    setTimeout(test, 20)
  })

  return (
    <div className="Header">
      <div className="AppName">
        <Link to="/">
          <div>
            <img className="ImageLogo" src={logo} />
          </div>
        </Link>
        <div className="MenuOptions">Portfolio</div>

        <div className="MenuOptions">Markets</div>
        <div className="MenuOptions">PolyMarketWhales</div>
      </div>
      <div className="connectToWalletModule">
        <button className="buttonColor" onClick={login}>
          {' '}
          {!connected === false ? 'Connected' : 'Click to Connect'}
        </button>
      </div>
    </div>
  )
}

export default Header
