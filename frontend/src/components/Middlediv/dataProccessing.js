  import { ethers } from "ethers"

  import { factoryABI, saleABI , adminABI} from "./abi";
  import { selectedSale } from "./salecards";

  //const backendURL = 'http://localhost:3001/sale'
  const backendURL = 'https://sparklaunch-backend.herokuapp.com/sale'
  
  const FACTORY_ADDRESS = '0x8548128b77c66d6914f4F01A2087fF8343942282'
  const ADMIN_ADDRESS = '0xE765240958a91DF0cF878b8a4ED23D5FF8effFFe'

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const FactoryContract = new ethers.Contract(FACTORY_ADDRESS, factoryABI, provider);
  const AdminContract = new ethers.Contract(ADMIN_ADDRESS, adminABI, provider)

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

 const participateInsale = async ()  =>  {

  const amount = document.getElementById('amount').value
  const amountInWei = ethers.utils.parseUnits( amount.toString(), 'ether')

  try {

    //connect if not connected
    await ethereum.request({ method: 'eth_requestAccounts' });

    //get sale address
    const saleAddressObject = await FactoryContract.saleIdToAddress(selectedSale);
    const saleAddress = saleAddressObject.toString()
  
  //get sale chainData
    const signer = provider.getSigner(ethereum.selectedAddress)
    const saleContract =  new ethers.Contract(saleAddress, saleABI, signer);
    const sale = await await saleContract.sale()
    console.log('sale',sale.isCreated)

    if(!sale.isCreated) {
      console.log('sale Params not set')
    } else 
    
    {

      const userTierObject = await saleContract.tier(ethereum.selectedAddress);
      const userTier = userTierObject.toNumber()
      console.log('userTier',userTier)


      if(userTier == 0) {
        console.log('No tier granted')

      } else 
      
      {

        if(await saleContract.isParticipated(ethereum.selectedAddress)) {

          console.log('Already Participated')
          console.log(amountInWei.toString())
        } else 
        {
          //Participate
         const  tx= await saleContract.participate(userTier, {value:amountInWei})
         tx.wait()
         console.log(tx)

        }
      }
  }  
  } catch (error) {

    console.log(error.message)
    
  }
}

const withdraw = async () => {
  try {


     //connect if not connected
     await ethereum.request({ method: 'eth_requestAccounts' });

     //get sale address
     const saleAddress = await FactoryContract.saleIdToAddress(selectedSale);
    
   //get sale chainData
     const signer = provider.getSigner(ethereum.selectedAddress)
     const saleContract =  new ethers.Contract(saleAddress, saleABI, signer)
     const sale = await saleContract.sale()
     if(!sale.isCreated) {
      console.log('params not set')
     } else if(!await saleContract.saleFinished()) {
         console.log("Sale not Finished")
     } else if( ! await saleContract.isParticipated(ethereum.selectedAddress)) {
      console.log('You did not participate')
     } else if(!await saleContract.isSaleSuccessful()) {
      console.log("sale Not successful")
     } else {
      const tx = await saleContract.withdraw()
      tx.wait()
      console.log('tx:',tx)
     }

    
  } catch (error) {
    console.log(error.message)
  }
}

const finishSale = async () => {
  try {

    //get sale address
    const saleAddress = await FactoryContract.saleIdToAddress(selectedSale);
    
    if(! await AdminContract.isAdmin(ethereum.selectedAddress)) {
      console.log('Caller not the admin')
    } else
    {
      //get sale Data
        const signer = provider.getSigner(ethereum.selectedAddress)
        const saleContract =  new ethers.Contract(saleAddress, saleABI, signer)

        //finish sale
        const tx = await saleContract.finishSale()
        tx.wait()
        console.log('tx:',tx)
    }
    
  } catch (error) {
    console.log('Error:',error.message)
  }
}

export { fetchSalesData, fetchSaleInfor, deploySale, participateInsale, withdraw, finishSale}