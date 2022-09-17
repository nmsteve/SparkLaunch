import React, {useState, useEffect}  from 'react'

import Salecard from './Salecard'
import { fetchSalesData, fetchSaleInfor} from './dataProccessing'

export 
var selectedSale =1000

function Salecards ({setopenModal9,setopenModal5}){

  var [saleList, setSaleList] = useState()
  
    async function displayCard(){
       const saleInfor = await fetchSaleInfor() 
       const salesData = await fetchSalesData()
        console.log('saleInfor',saleInfor)
       //console.log('saleData',salesData)

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

          <div className="kyc_boxes" key={sale.saleDetails.saleID} onClick={ async ()=>{
            setopenModal9(true);
            setopenModal5(false);
            }}>    
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
      console.log('selected sale:', selectedSale)
   },[])}  
    

    return (
        <> 
    
        {saleList}

        </>
    )
}

export default Salecards 
