import { ethers } from "ethers"

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

  //const backendURL = 'http://localhost:3001/sale'
  const backendURL = 'https://sparklaunch-backend.herokuapp.com/sale'
  
  const FACTORY_ADDRESS = '0x8548128b77c66d6914f4F01A2087fF8343942282'
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const FactoryContract = new ethers.Contract(FACTORY_ADDRESS, factoryABI, provider);

  const {ethereum} = window
  
  async  function  fetchSalesData() {

         
    let salesData = [];

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

   return salesData
   
  }

 async function fetchSaleInfor () {

   let saleInfor = [];
   try{
       const response = await fetch(`${backendURL}`);
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
   
   return saleInfor
  }  

 const postData = async () =>  {

   let  id

   const name = document.getElementById("name").value
   const symbol = document.getElementById("symbol").value
   const address =document.getElementById("address").value

   const softCap=document.getElementById("softCap").value
   const hardCap=document.getElementById("hardCap").value
   const price=document.getElementById("price").value
   const startDate=document.getElementById("startDate").value
   const endDate=document.getElementById("endDate").value
   const minBuy=document.getElementById("minBuy").value
   const maxBuy=document.getElementById("maxBuy").value
   const firstRelease=document.getElementById("firstRelease").value
   const vestingDays=document.getElementById("vestingDays").value
   const eachRelease=document.getElementById("eachRelease").value


   const logo=document.getElementById("logo").value
   const fb=document.getElementById("fb").value
   const git=document.getElementById("git").value
   const insta=document.getElementById("insta").value
   const reddit=document.getElementById("reddit").value

   const web=document.getElementById("web").value
   const twitter=document.getElementById("twitter").value
   const telegram=document.getElementById("telegram").value
   const discord=document.getElementById("discord").value
   const youtube=document.getElementById("youtube").value
   const description=document.getElementById("description").value


   const input = JSON.stringify( 
       {
         
           saleToken:
               {
                   name: name,
                   symbol: symbol,
                   address: address
               },
           saleParams: 
               {
                   softCap:softCap,
                   hardCap:hardCap,
                   price:price,
                   startDate:startDate,
                   endDate:endDate,
                   minBuy:minBuy,
                   maxBuy:maxBuy,
                   firstRelease:firstRelease,
                   eachRelease:eachRelease,
                   vestingDays: vestingDays
               },
           saleLinks: {
                   logo: logo,
                   fb:fb,
                   git:git,
                   insta:insta,
                   reddit:reddit,
           
                   web: web,
                   twitter: twitter,
                   telegram: telegram,
                   discord: discord,
                   youtube: youtube
           },
           saleDetails:{
             saleOwner:ethereum.selectedAddress,
             description: description
           },

       }
   
   )
   
   const requestOptions = {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: input
   };

   try{
   
      
       const response = await fetch(`${backendURL}`, requestOptions);
       const data = await response.json();
       console.log('Data:',data)
       id = data.saleDetails.saleID
       console.log('ID:', id)
       return id

   } catch(e) {
       
       console.log("Err: ", e)
   }

   //console.log(data)

  

 }

 const deploySale = async () => {
             
    const id = await postData()
    
         if (!ethereum) {
         console.log('Please install MetaMask')
         } 

     const connect = await ethereum.request({ method: 'eth_requestAccounts' });

     if (connect) {

     
       try {
                 //signer needed for transaction 
                 const signer = provider.getSigner();
                 
             
                 const FactoryContract = new ethers.Contract(FACTORY_ADDRESS, factoryABI, signer);

                 let balance = await provider.getBalance(ethereum.selectedAddress);
                 let bal = ethers.utils.formatEther(balance);

                 let deployFee = await FactoryContract.fee()
                 let fee =  ethers.utils.formatEther(deployFee)

                 if(bal < fee){

                     console.log("insufficient funds")
                 } 
                 else {

                     const tx = await FactoryContract.deployNormalSale(
                       ethers.utils.parseEther('0.001'),
                       ethers.utils.parseEther('10'),
                       id,
                       {value:deployFee})

                     await tx.wait()

                    let saleAddress = await FactoryContract.saleIdToAddress(id)
                     console.log('SaleAddress:',saleAddress)
                 }
                 
                 console.log('Account:',ethereum.selectedAddress)
                 console.log("Bal:",bal)
                 console.log('fee:',fee)


               } catch (error) {
                 console.log("Error:", error.message)
                 }

                
     }

    
 }


  export { fetchSalesData, fetchSaleInfor, deploySale}