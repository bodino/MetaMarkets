import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
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
import Web3 from 'web3'
import { ethers } from 'ethers'
import Header from '../components/Header'
import Account from '../components/Account'
import { connectedState } from '../state'
import GetData from '../components/marketIcons/getData'
import Markets from '../components/Markets'
import IndividualMarket from '../components/IndividualMarket'



var Eth = require('web3-eth')
let web3
const usdcAddress = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
var autoSelectWallet = 'metamask'

export function Menu({ wallet, walletConnected, setWalletConnected }: any) {
  const [connected, setConnected] = useRecoilState<any>(connectedState)

  async function logintoWallet() {
    await wallet.walletSelect()
    await wallet.walletCheck()
    setConnected(true)
  }

  return (
    <Router>
    <div className="Menu1">
      <Header
        login={logintoWallet}
        wallet={wallet}
        walletConnected={walletConnected}
        setWalletConnected={setWalletConnected}
      />

    <div className="FlexBox">
      <Account 
      />
      <div className="MarketsPage">
      
        <Routes>
          <Route path="/" element={<Markets/> }>
          </Route>
          <Route path="/Market" element={<IndividualMarket/>}> 
          </Route>
        </Routes>
       

      </div>
    </div>
     
    </div>
    </Router>
  )
}

export default Menu
