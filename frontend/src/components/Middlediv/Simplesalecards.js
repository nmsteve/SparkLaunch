import React, {useState, useEffect}  from 'react'
import {ethers} from 'ethers';

import Salecard from './middlediv_salecard'

const factoryABI =[
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
      "name": "LogsetFeeAddr",
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
          "internalType": "contract IAdmin",
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
      "inputs": [],
      "name": "deploySale",
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
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "isSaleCreatedThroughFactory",
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
    }
]
const saleABI =  [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_admin",
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
          "internalType": "bool",
          "name": "_isSaleSucsessful",
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
          "name": "amountBNBWithdrawn",
          "type": "uint256"
        }
      ],
      "name": "LogWithdrawBNBIfSaleCancelled",
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
          "name": "amountBNBWithdrawn",
          "type": "uint256"
        }
      ],
      "name": "LogWithdrawParticipation",
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
          "name": "softCap",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "_calculateServiceFee",
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
      "name": "admin",
      "outputs": [
        {
          "internalType": "contract IAdmin",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "factory",
      "outputs": [
        {
          "internalType": "contract ISalesFactory",
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
          "name": "amount",
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
          "name": "softCap",
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
          "name": "saleToken",
          "type": "address"
        }
      ],
      "name": "setSaleToken",
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
      "name": "withdrawBNBIfSaleCancelled",
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
      "name": "withdrawParticipation",
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
      "stateMutability": "payable",
      "type": "receive"
    }
]

const FACTORY_ADDRESS = '0x1Ce6CAB4923aC137686f32a36f524A92c93e7651'
const provider = new ethers.providers.Web3Provider(window.ethereum);
const FactoryContract = new ethers.Contract(FACTORY_ADDRESS, factoryABI, provider);

function Middlediv_salecards ({setopenModal9,setopenModal5}){

    let salesData = [];

    var [saleList, setSaleList] = useState()

    async  function  fetchSalesData() {
        if (typeof window.ethereum !== "undefined") {
    
            const salesNoObject = await FactoryContract.getNumberOfSalesDeployed();
            const  salesNo = salesNoObject.toString()
    
            for(let i = 0;i < 6;i++) {
                
                //try to get the saleData in the contract
                try {
    
                    //get sale address
                    const saleAddressObject = await FactoryContract.allSales(i);
                    const saleAddress = saleAddressObject.toString()
                   // console.log(saleAddress)
                    
                   //get sale data
                    const saleContract =  new ethers.Contract(saleAddress, saleABI, provider);
                    const data = await saleContract.sale();
                    //console.log('Data',data)
                    
                    //get NO of participants
                    const noOfParticipants =await saleContract.numberOfParticipants()
                    const holders = noOfParticipants.toNumber()
                    //console.log('Holders', holders)
    
                    //format data for display
                    let dateObject = new Date(data.saleEnd.toString() *1000)
                    //console.log("Date:", dateObject.toUTCString())
    
                    //create display object
                    let sale = {
                        saleAddress:saleAddress,
                        softCap:data.softCap.toString()/10**18,
                        raised:data.totalBNBRaised.toString()/10**18,
                        price:data.tokenPriceInBNB.toString()/10**18,
                        date: dateObject,
                        holders:holders
                    }
    
                     //console.log('SaleOdject',sale)
    
                     salesData.push(sale)
                    
                    
                } catch (e) {
                    console.log("Err: ", e)
                }
            
            }
          
        }
    }
    
    async function displayCard(){
        await fetchSalesData()
    
        setSaleList( saleList =  salesData.map((sale)=> 
    
            <Salecard 
                onClick={()=>{setopenModal9(true);setopenModal5(false);}}
                saleAddress ={sale.saleAddress}
                softCap={sale.softCap}
                raised={sale.raised}
                price={sale.price}
                date={sale.date}
                holders={sale.holders}
            />
        ))
    
    }

    { useEffect(()=>{

       
       displayCard()

   },[])}  
    

    return (
        <> 
        {console.log('salesData',salesData)}
        {saleList}

        </>
    )
}

export default Middlediv_salecards