import React, {useState, useEffect}  from 'react'

import Salecard from './Salecard'
import {fetchSaleInfor} from './dataProccessing'

export var selectedSale = 0


function Salecards ({setopenModal9,setopenModal5}){
     
  

    var [saleList, setSaleList] = useState()
  
    function handleClick(e){
      console.log('Target:',e.currentTarget.id);
      selectedSale = e.currentTarget.id
      setopenModal9(true);
      setopenModal5(false);
      console.log('Selected Sale:',selectedSale)
    }
  
    async function displayCard(){
       const salesInfor = await fetchSaleInfor()
        console.log('sale NO',salesInfor.salesNO.toNumber())
        console.log('saleData',salesInfor.salesData)
        console.log('saleLength',salesInfor.salesData.length)
       
        if(salesInfor.salesData.length === salesInfor.salesNO.toNumber()) {
         console.log('Infor ready')
         setSaleList( saleList =   salesInfor.salesData.map((sale)=> 

          <div id={sale.saleDetails.saleID} className="kyc_boxes" key={sale.saleDetails.saleID} 
          onClick={handleClick}
           >  
             
          <Salecard

              ID={sale.saleDetails.saleID}
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
        } else {
              setTimeout(function() {
               
                console.log('saleLength',salesInfor.salesData.length)
                console.log('Infor ready after wait')
                setSaleList( saleList =   salesInfor.salesData.map((sale)=> 

                <div id={sale.saleDetails.saleID} className="kyc_boxes" key={sale.saleDetails.saleID} onClick={handleClick} >  
                
              <Salecard

                  ID={sale.saleDetails.saleID}
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

      
              }, 5000);
          }
        

    }

    const displaySales =() => {
      fetchSaleInfor().then((sales) =>  setSaleList( saleList =   sales.map((sale)=> 

      <div id={sale.saleDetails.saleID} className="kyc_boxes" key={sale.saleDetails.saleID} 
      onClick={
        handleClick
      }

       >  
         
      <Salecard

          ID={sale.saleDetails.saleID}
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

    )) )
    }

    { useEffect(()=>{
      displayCard()
      //displaySales()
   },[])}  
    

    return (
        <> 
        {saleList}
        </>
    )
}

export default Salecards

