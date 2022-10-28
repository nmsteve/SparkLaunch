import { ethers } from "ethers"

import { factoryABI, adminABI, testABI } from "./abi"


const ADMIN_ADDRESS = '0x45B1379Be4A4f389B67D7Ad41dB5222f7104D26C'
const FACTORY_ADDRESS = '0x863B229F7d5e41D76C49bC9922983B0c3a096CDF'

const { ethereum } = window;
let provider = null

if (!ethereum) {
  provider = ethers.getDefaultProvider('https://preseed-testnet-1.roburna.com/')
}
else {
  provider = new ethers.providers.Web3Provider(window.ethereum);
}

const FactoryContract = new ethers.Contract(FACTORY_ADDRESS, factoryABI, provider);
const AdminContract = new ethers.Contract(ADMIN_ADDRESS, adminABI, provider)

export { FactoryContract, AdminContract, provider }
