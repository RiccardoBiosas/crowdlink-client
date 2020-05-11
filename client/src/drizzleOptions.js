import Web3 from 'web3'
import CrowdlinkReferral from './contracts/CrowdlinkReferral'

const options = {
    web3: {
        block: false,
        
    },
    contracts: [CrowdlinkReferral],
    events: {

    }
}

export default options