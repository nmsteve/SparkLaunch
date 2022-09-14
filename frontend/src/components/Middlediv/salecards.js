import React, {useState, useEffect}  from 'react'
import {ethers} from 'ethers';

import Salecard from './Salecard'

const factoryABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_adminContract",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newFee",
        "type": "uint256"
      }
    ],
    "name": "LogSetFee",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "newAddress",
        "type": "address"
      }
    ],
    "name": "LogSetFeeAddr",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "LogWithdrawalBNB",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "saleContract",
        "type": "address"
      }
    ],
    "name": "SaleDeployed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "sale",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "saleOwner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "saleToken",
        "type": "address"
      }
    ],
    "name": "SaleOwnerAndTokenSetInFactory",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "admin",
    "outputs": [
      {
        "internalType": "contract IAdmin1",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "allSales",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "minParticipation",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxParticipation",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "deployNormalSale",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "fee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "feeAddr",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "startIndex",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endIndex",
        "type": "uint256"
      }
    ],
    "name": "getAllSales",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getLastDeployedSale",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getNumberOfSalesDeployed",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "getSaleAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "saleAddressToSaleOwner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "saleIdToAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "serviceFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_fee",
        "type": "uint256"
      }
    ],
    "name": "setFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_feeAddr",
        "type": "address"
      }
    ],
    "name": "setFeeAddr",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_serviceFee",
        "type": "uint256"
      }
    ],
    "name": "setServiceFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "withdrawBNB",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

const saleABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_admin",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_serviceFee",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_feeAddr",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_minParticipation",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_maxParticipation",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "isSaleSuccessful",
        "type": "bool"
      }
    ],
    "name": "LogFinishSale",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "LogWithdrawDepositedTokensIfSaleCancelled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "LogwithdrawUserFundsIfSaleCancelled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_tierId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_startTime",
        "type": "uint256"
      }
    ],
    "name": "RoundAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "saleOwner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenPriceInBNB",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "saleEnd",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_hardCap",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_softCap",
        "type": "uint256"
      }
    ],
    "name": "SaleCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "TokensSold",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "TokensWithdrawn",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "admin",
    "outputs": [
      {
        "internalType": "contract IAdmin1",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "depositTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "feeAddr",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "finishSale",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCurrentRound",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getNumberOfRegisteredUsers",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "getParticipation",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_tier",
        "type": "uint256"
      }
    ],
    "name": "grantATier",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "addys",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "tiers",
        "type": "uint256[]"
      }
    ],
    "name": "grantATierMultiply",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isParticipated",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isSaleSuccessful",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxParticipation",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "minParticipation",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "numberOfParticipants",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tierId",
        "type": "uint256"
      }
    ],
    "name": "participate",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "beneficiary",
        "type": "address"
      }
    ],
    "name": "removeStuckTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "sale",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isCreated",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "earningsWithdrawn",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "leftoverWithdrawn",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "tokensDeposited",
        "type": "bool"
      },
      {
        "internalType": "address",
        "name": "saleOwner",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenPriceInBNB",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalTokensSold",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalBNBRaised",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "saleEnd",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "hardCap",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "softCap",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "saleFinished",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "serviceFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "startTimes",
        "type": "uint256[]"
      }
    ],
    "name": "setRounds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_saleOwner",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_tokenPriceInBNB",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_saleEnd",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_hardCap",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_softCap",
        "type": "uint256"
      }
    ],
    "name": "setSaleParams",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "tier",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "tierIdToTierStartTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "tierIds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "userToParticipation",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amountBought",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountBNBPaid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tierId",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "areTokensWithdrawn",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawDepositedTokensIfSaleCancelled",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawEarnings",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawEarningsAndLeftover",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawLeftover",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawUnusedFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawUserFundsIfSaleCancelled",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]


const FACTORY_ADDRESS = '0x8548128b77c66d6914f4F01A2087fF8343942282'
const provider = new ethers.providers.Web3Provider(window.ethereum);
const FactoryContract = new ethers.Contract(FACTORY_ADDRESS, factoryABI, provider);

function Salecards ({setopenModal9,setopenModal5}){

    let salesData = [];
    let saleInfor = [];

    var [saleList, setSaleList] = useState()

    async  function  fetchSalesData() {
        if (typeof window.ethereum !== "undefined") {
    
            const salesNoObject = await FactoryContract.getNumberOfSalesDeployed();
            const  salesNo = salesNoObject.toString()
            console.log('saleNo:', salesNo)
    
            for(let i = 0;i < 6;i++) {
                
                //try to get the saleData in the contract
                try {
    
                    //get sale address
                    const saleAddressObject = await FactoryContract.allSales(i);
                    const saleAddress = saleAddressObject.toString()
                   // console.log(saleAddress)
                    
                   //get sale chainData
                    const saleContract =  new ethers.Contract(saleAddress, saleABI, provider);
                    const chainData = await saleContract.sale();
                    //console.log('Data',chainData)
                    
                    //get NO of participants
                    const noOfParticipants =await saleContract.numberOfParticipants()
                    const holders = noOfParticipants.toNumber()
                    //console.log('Holders', holders)
    
                    //format chainData for display
                    let dateObject = new Date(chainData.saleEnd.toString() *1000)
                    //console.log("Date:", dateObject.toUTCString())
    
                    //create display object
                    let sale = {
                        saleAddress:saleAddress,
                        softCap:chainData.softCap.toString()/10**18,
                        raised:chainData.totalBNBRaised.toString()/10**18,
                        price:chainData.tokenPriceInBNB.toString()/10**18,
                        date: dateObject,
                        holders:holders
                    }
    
                     //console.log('SaleOdject',sale)
    
                     salesData.push(sale)
                    
                    
                } catch (e) {console.log("Err: ", e)}
            
            }
          
        }
        
    }

    async function fetchSaleInfor () {

      

        try{
        
            const response = await fetch('https://sparklaunch-backend.herokuapp.com/sale');
            //const response = await fetch('http://localhost:3001/sale');
            const DBdata = await response.json();
            //console.log('Data:',DBdata)
            console.log('Data Lenght:', DBdata.length)

            DBdata.map(  async sale =>  {

              const saleID = sale.saleDetails.saleID

              //get sale address
              const saleAddressObject = await FactoryContract.saleIdToAddress(saleID);
              const saleAddress = saleAddressObject.toString()
              //console.log(saleAddress)
              
            //get sale chainData
              const saleContract =  new ethers.Contract(saleAddress, saleABI, provider);
              const chainData = await saleContract.sale();
              //console.log('Data',chainData)
              
              //get NO of participants
              const noOfParticipants =await saleContract.numberOfParticipants()
              const holders = noOfParticipants.toNumber()
              //console.log('Holders', holders)

              //format data for display
              let dateObject = new Date(chainData.saleEnd.toString() *1000)

              //get max and min participation
              const minBuy = await saleContract.minParticipation()
              const maxBuy = await saleContract.maxParticipation()



            
            let saleDBChain = 
            
              {       
                  saleToken: {
                  name: sale.saleToken.name,
                  symbol: sale.saleToken.symbol,
                  address: sale.saleToken.address,
                  },
                  saleParams: {
                    softCap:chainData.softCap.toString()/10**18,
                    hardCap:chainData.hardCap.toString()/10**18,
                    raised:chainData.totalBNBRaised.toString()/10**18,
                    price:chainData.tokenPriceInBNB.toString()/10**18,
                    startDate:sale.saleParams.startDate,
                    endDate:dateObject,
                    minBuy:minBuy.toString()/10**18,
                    maxBuy:maxBuy.toString()/10**18,
                    firstRelease:sale.saleParams.firstRelease,
                    eachRelease:sale.saleParams.eachRelease,
                    vestingDays: sale.saleParams.vestingDay
                  },
                  saleLinks: {
                    logo: sale.saleLinks.logo,
                    fb:sale.saleLinks.fb,
                    git:sale.saleLinks.git,
                    insta:sale.saleLinks.insta,
                    reddit:sale.saleLinks.reddit,
            
                    web: sale.saleLinks.web,
                    twitter: sale.saleLinks.twitter,
                    telegram: sale.saleLinks.telegram,
                    discord: sale.saleLinks.discord,
                    youtube: sale.saleLinks.youtube
                  },
                  saleDetails:{
                  saleID:sale.saleDetails.saleID,
                  saleAddress:saleAddress,
                  saleOwner:chainData.saleOwner.toString(),
                  description:sale.saleDetails.description,
                  holders:holders,
                  listingDate: sale.saleDetails.listingDate
                  },
              }

            saleInfor.push(saleDBChain)
            
            });
        
          

        } catch(e) {console.log("Err: ", e)}
        
     }  

    async function displayCard(){
        await fetchSaleInfor() 
        await fetchSalesData()
        console.log('saleInfor',saleInfor)
       console.log('saleData',salesData)

        // salesData.map((sale) => {
        //   console.log('Sale:',sale)
        // })

        setSaleList( saleList =   saleInfor.map((sale)=> 
    
        // <div className="kyc_boxes" key={sale.saleAddress} onClick={()=>{setopenModal9(true);setopenModal5(false);}}>    
        //     <Salecard 
        //         softCap={sale.softCap}
        //         raised={sale.raised}
        //         price={sale.price}
        //         date={sale.date}
        //         holders={sale.holders}
        //     />
        // </div>

          <div className="kyc_boxes" key={sale.saleDetails.saleID} onClick={()=>{setopenModal9(true);setopenModal5(false);}}>    
          <Salecard 
              name={sale.saleToken.name}
              symbol={sale.saleToken.symbol}
              description={sale.saleDetails.description}
              softCap={sale.saleParams.softCap}
              raised={sale.saleParams.raised}
              price={sale.saleParams.price}
              date={sale.saleParams.endDate}
              holders={sale.saleDetails.holders}
              listingDate={sale.saleDetails.listingDate}
          />
          </div>

        ))
        {console.log('saleList',saleList)}
    
    }

    { useEffect(()=>{
      displayCard()
   },[])}  
    

    return (
        <> 
    
        {saleList}

        </>
    )
}

export default Salecards