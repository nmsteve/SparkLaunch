import React, {useState, useEffect}  from 'react'
import {ethers} from 'ethers';

import Salecard from './middlediv_salecard'

import Factory from './artifacts/contracts/_SaleFactory.sol/SalesFactoryS.json';
import SimpleSale from './artifacts/contracts/FairLaunch.sol/SparklaunchFairLaunchSale.json'


const FACTORY_ADDRESS = '0x1Ce6CAB4923aC137686f32a36f524A92c93e7651'
const provider = new ethers.providers.Web3Provider(window.ethereum);
const FactoryContract = new ethers.Contract(FACTORY_ADDRESS, Factory.abi, provider);

function Middlediv_salecards ({setopenModal9,setopenModal5}){

    let salesData = [];

    var [saleList, setSaleList] = useState()

    async  function  fetchSalesData() {
        if (typeof window.ethereum !== "undefined") {

            const salesNoObject = await FactoryContract.getNumberOfSalesDeployed();
            const  salesNo = salesNoObject.toString()
    
            for(let i = 0;i < salesNo;i++) {
                
                //try to get the saleData in the contract
                try {

                    //get sale address
                    const saleAddressObject = await FactoryContract.allSales(i);
                    const saleAddress = saleAddressObject.toString()
                   // console.log(saleAddress)
                    
                   //get sale data
                    const saleContract =  new ethers.Contract(saleAddress, SimpleSale.abi, provider);
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