import React, {useEffect, useState} from 'react'
import {Web3ReactProvider, useWeb3React, UnsupportedChainIdError} from '@web3-react/core'
import Web3Provider, { useWeb3Context, Web3Consumer } from 'web3-react'
import Web3 from 'web3'
import {ethers} from 'ethers'

import {AccountData, ContractData, ContractForm} from '@drizzle/react-components'
import CrowdlinkReferral from '../contracts/CrowdlinkReferral'

import '@portis/web3'
import { ConnectorsInstance } from '../connectors/connectorsInstance'


//use context.active

const address = '0xf66c19541c961d875597Cec23Fc35fd223101993'

export const ContractTest = () => {
    const {library, account} = useWeb3Context() //use context.active to check whether there's an active web3 provider

    const[contract_instance, setContract_instance] = useState({})
    // console.log('inside contract test web3 context', context)
    console.log('inside contract test: LIBRARY', library)
    console.log(CrowdlinkReferral)

    console.log('ethers')
    console.log(ethers)
    console.log('defaultprovider', ethers.getDefaultProvider())

    const initializeContract = async() => {
        console.log(ethers)
        console.log('library', library.getSigner())
        const contract = await new ethers.Contract('0xF0EE3abb4eB18a1Fd5B6f5b88fd5503ABe97B152' ,CrowdlinkReferral.abi, library)
        // console.log(contract)
        console.log(contract)
        return contract
    }

    const openReferralCampaign = async() => {
        const contract = new ethers.Contract('0xF0EE3abb4eB18a1Fd5B6f5b88fd5503ABe97B152' ,CrowdlinkReferral.abi, library.getSigner())
        console.log('contract inside openreferralcampaign', contract)
        console.log('library', library.getSigner())

        await contract.functions.openReferralCampaign(200, 20, 'twitter')


    }


    useEffect(() => {


        if(library && account) {
            // // console.log('ethers', library)
            // contract = initializeContract()
            // // console.log('state', contract)
            const contract = new ethers.Contract('0xF0EE3abb4eB18a1Fd5B6f5b88fd5503ABe97B152' ,CrowdlinkReferral.abi, library)
            console.log('CONTRACT OUTSIDE', contract)
            console.log(contract)
            setContract_instance(contract)

            console.log('contract instance', contract_instance)

         

        }
     


        
    }, [library, account])



    return(
        <div>
            <div>
                <h2>web3 instance</h2>
                <ConnectorsInstance />
            </div>
            {/* <ContractForm>

            </ContractForm> */}
            <h1>contract test</h1>

            <div>
                <h1>open referral campaign</h1>
                <button onClick={() => openReferralCampaign() }>open referral campaign</button>
            </div>
        </div>
    )
}