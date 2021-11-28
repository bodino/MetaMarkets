import react from 'react'
import {atom} from 'recoil'



export const connectedState = atom<any>({
    key: "connectedState",
    default: false
})

export const marketState = atom<any>({
    key: "marketState",
    default: []
})

export const isItLoading = atom<any>({
    key: "isLoading",
    default: true
})