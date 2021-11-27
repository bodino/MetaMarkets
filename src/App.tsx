import React from 'react'
import logo from './logo.svg'
import { useState, useEffect } from 'react'
import './App.css'
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
import Menu from './pages/Menu'

import { connectedState } from './state'


var Eth = require('web3-eth')
let web3
const usdcAddress = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
var autoSelectWallet = 'metamask'

let provider: any
let signer: any

const wallets = [
  { walletName: 'coinbase', preferred: true },
  { walletName: 'metamask', preferred: true },
  { walletName: 'frame', preferred: true },
  {
    walletName: 'walletConnect',
    preferred: true,
    rpc: {
      ['137']: 'https://polygon-mainnet.g.alchemy.com/v2/wNblPFs6UL8D6V1GQ-8-k_cBWfEboHiW',
    },
  },
]

 

function App() {
  const[walletConnected, setWalletConnected] = useState<any>(0)
  // const [connected, setConnected] = useRecoilState<any>(connectedState)


  const onboard = Onboard({
    dappId: '3bbe9d54-ac92-483d-92b0-dbaebe33768e', // [String] The API key created by step one above
    networkId: 137, // [Integer] The Ethereum network ID your Dapp uses.
    darkMode: true,
    subscriptions: {
      wallet: (wallet: any) => {
        provider = new ethers.providers.Web3Provider(wallet.provider)
        console.log(provider)
        signer = provider.getSigner()
        console.log(`connected to ${wallet.name}`)
        window.localStorage.setItem('selectedWallet', wallet.name)
      },
      
    },
    walletSelect: {
      wallets: wallets,
    },
  })

  

  useEffect(() => {
    async function loadWallet() {
      const previouslySelectedWallet = window.localStorage.getItem(
        'selectedWallet',
      )
      if (previouslySelectedWallet != null) {
        await onboard.walletSelect(previouslySelectedWallet)
      }
    }
    loadWallet()
  }, [])

 

  async function getBlockState() {
    try { 
      //setWalletConnected(true);

      }catch (error) {}

    // @ts-ignore
    //const daiContract = new ethers.Contract(usdcAddress, usdcAbi, provider);
  }

  return (
    <div className="App">
      <Menu 
     
      wallet ={onboard}
      walletConnected = {walletConnected}
      setWalletConnected = {setWalletConnected}
      />
     
    </div>
  )
}

export default App
