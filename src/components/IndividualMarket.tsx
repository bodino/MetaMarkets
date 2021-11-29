import React from 'react'
import logo from './logo.svg'
import { useState, useEffect } from 'react'
import '../App.css'
import GetData from './marketIcons/getData'
import { useParams } from 'react-router-dom';
import {
    useRecoilState,
  } from 'recoil'

  import { marketState } from '../state'
  import { isItLoading } from '../state'



export function IndividualMarket({items}:any) {
    const [marketArray, setMarketArray] = useRecoilState<any>(marketState)
    const [isLoading, setIsLoading] = useRecoilState<any>(isItLoading)

    const { id } = useParams();
    var currentArray;
    
    const [marketObject, setMarketObject]:any = useState(0)
    

    useEffect(() => {
        const fetchItems = async () => {
          //setIsLoading(true)
          for (var i =0; items.length > i; i++){
            currentArray= items[i];
            if (id === currentArray.marketMakerAddress){
                setMarketObject(currentArray);
                i =items.length;
                console.log(marketObject.marketMakerAddress)
            }
          }

          
        }
        fetchItems()
      }, [isLoading])
  
   return  (
    <div className="IndividualMarketPage">
        <div className="MarketHeader">
            <a>
               Volume 
            </a>
            <a>
               Total Liquidity  
            </a>
            <a>
               Volume 
            </a>
            <a>
               Volume 
            </a>
            <a>
               Volume 
            </a>
        </div>
    </div>
)
}

export default IndividualMarket
