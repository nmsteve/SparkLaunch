import React, {useState, useEffect}  from 'react'

import Salecard from './Salecard'
import { fetchSalesData, fetchSaleInfor} from './dataProccessing'

export 
var selectedSale =1000

function Salecards ({setopenModal9,setopenModal5}){

    var [saleList, setSaleList] = useState()


   function handleClick(e)
    {
      console.log(e.currentTarget.id);
      setopenModal9(true);
      setopenModal5(false);
    }
  
    async function displayCard(){
       const saleInfor = await fetchSaleInfor() 
       const salesData = await fetchSalesData()
        console.log('saleInfor',saleInfor)
       //console.log('saleData',salesData)


        setSaleList( saleList =   saleInfor.map((sale)=> 

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

        ))
        //{console.log('saleList',saleList)}
    
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
