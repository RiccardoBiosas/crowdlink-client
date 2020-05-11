const CrowdlinkReferral = artifacts.require('CrowdlinkReferral')

module.exports = function(deployer) {
    deployer.deploy(CrowdlinkReferral)
    .then(() => console.log(`ADDRESS: ${CrowdlinkReferral.address}`))
}