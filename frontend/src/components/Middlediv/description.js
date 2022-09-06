import React, { useState } from 'react'
import {ethers} from 'ethers';


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

const {ethereum} = window

const FACTORY_ADDRESS = '0x1Ce6CAB4923aC137686f32a36f524A92c93e7651'
const provider = new ethers.providers.Web3Provider(window.ethereum);


const deploySale = async () => {
    try {
        if (!ethereum) {
           console.log('Please install MetaMask')
        }

         //signer needed for transaction 
        const signer = provider.getSigner();
        //console.log("signer:",signer)

        const FactoryContract = new ethers.Contract(FACTORY_ADDRESS, factoryABI, signer);

        let balance = await provider.getBalance(ethereum.selectedAddress);
        let bal = ethers.utils.formatEther(balance);

        let deployFee = await FactoryContract.fee()
        let fee =  ethers.utils.formatEther(deployFee)

        if(bal < fee){
            console.log("insufficient funds")
        } else {

            const tx = await FactoryContract.deploySale({value:ethers.utils.parseEther('0.001')})
            tx.wait()
            console.log(tx)
        }

        console.log('Account:',ethereum.selectedAddress ,"Bal:",bal)
        console.log('fee:',fee)

    } catch (error) {
       console.log("Error:", error.message)
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
                    endDate:endDate
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

        }
    
    )
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: input
    };

    try{
    
        const response = await fetch('http://localhost:3001/sale', requestOptions);
        const data = await response.json();
        console.log('Data:',data)

    } catch(e) {
        
        console.log("Err: ", e)
    }

    //console.log(data)

   

}

const Description = () => {

   

    return (
        <>
            <div className='inner_div_right_bottoms'>
                <div className='inner_div_right_bottom_heading'>Description</div>
                <textarea className='inner_div_right_bottom_input' placeholder='This is my description' style={{padding:"2rem"}}></textarea>
            </div>
            <div className='next_button'  onClick={()=>{
                    deploySale()
                    //postData()
                }}>
                    <div id="button_29">Done</div>
            </div>
        </>)
}

export default Description