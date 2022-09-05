import React, { useState } from 'react'
import {ethers} from 'ethers';
import Factory from './artifacts/contracts/_SaleFactory.sol/SalesFactoryS.json';
import SimpleSale from './artifacts/contracts/FairLaunch.sol/SparklaunchFairLaunchSale.json'

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

        const FactoryContract = new ethers.Contract(FACTORY_ADDRESS, Factory.abi, signer);

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