import react from 'react'
import {atom} from 'recoil'



export const connectedState = atom<any>({
    key: "connectedState",
    default: false
})