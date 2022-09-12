import React, { useState } from 'react'
import {ethers} from 'ethers';

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

const {ethereum} = window

const FACTORY_ADDRESS = '0x8548128b77c66d6914f4F01A2087fF8343942282'
const provider = new ethers.providers.Web3Provider(window.ethereum);

const Description = () => {

    var  selected = ethereum.selectedAddress
    let  id
    let saleAddress 
   
    console.log('id', id)
  
    const deploySale = async () => {
             
          await postData()
       
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

                        const tx = await FactoryContract. deployNormalSale(
                          ethers.utils.parseEther('0.001'),
                          ethers.utils.parseEther('10'),
                          id,
                          {value:deployFee})

                        await tx.wait()

                        saleAddress = await FactoryContract.saleIdToAddress(id)
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

    const postData = async () =>  {

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
      const VestingDays=document.getElementById("VestingDays").value
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
                      VestingDays: VestingDays
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
                saleAddress:saleAddress,
                saleOwner:selected,
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
      
          const response = await fetch('https://sparklaunch-backend.herokuapp.com/sale', requestOptions);
          const data = await response.json();
          console.log('Data:',data)
          id = data.saleDetails.saleID
          console.log('ID:', id)
  
      } catch(e) {
          
          console.log("Err: ", e)
      }
  
      //console.log(data)
  
     
  
    }


    return (
        <>
            <div className='inner_div_right_bottoms'>
                <div className='inner_div_right_bottom_heading'>Description</div>
                <textarea id='description' className='inner_div_right_bottom_input' placeholder='This is my description' style={{padding:"2rem"}}></textarea>
            </div>
            <div className='next_button'  onClick={()=>{
                    //deploySale()
                    postData()
                }}>
                    <div id="button_29">Done</div>
            </div>
        </>)
}

export default Description