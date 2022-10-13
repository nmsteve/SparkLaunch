import React, { useEffect, useState } from 'react'
import { fetchFeaturedsale } from '../../connect/dataProccessing'

const Featuredboxes = () => {

    var [featuredSales, setFeaturedSales] = useState([])
    var [featuredList, setFeaturedList] = useState([])

   
  
    const displayFeatured =  async() => {
        setFeaturedSales(featuredSales = await fetchFeaturedsale() )

       
           
            setFeaturedList(
            
            featuredList = 
                        <>
                        <div className='featured-card-animation'></div> 
                        <div className='featured-card-animation'></div>
                        <div className='featured-card-animation'></div> 
                        <div className='featured-card-animation'></div>
                        <div className='featured-card-animation'></div> 
                        </>
        )
        

       setTimeout(() => {

        setFeaturedList(
            featuredList = featuredSales.map((sale)=>
                <div id={sale.saleDetails.saleID} key={sale._id} className='featured-card' style={{backgroundImage:`url(${sale.saleDetails.saleImg})`}}>
                     {/* <img className='img-fluid featured_mainImg' src={sale.saleDetails.saleImg}></img> */}
                    <h2 className='featured-card-name'>{sale.saleToken.name}</h2>
                </div>
                
            )
        )
        
       }, 2000);

        // setFeaturedList(
        //     featuredList = featuredSales.map((sale)=>
        //         <div id={sale.saleDetails.saleID} key={sale._id} className='featured_box'>
        //              <img className='img-fluid featured_mainImg' src={sale.saleDetails.saleImg}></img>
        //               {/* <img className='featured_logoImg' src={sale.saleDetails.saleImg}></img> */}
        //             <h2 className='featured_name'>{sale.saleToken.name}</h2>
        //         </div>
                
        //     )
        // )
    
    
      console.log('Featured Sales',featuredSales)
    
      console.log('Featured list',featuredList)
           
    }

    useEffect(()=> {
       
        displayFeatured()
    },[])

    return (
        <>
            
           {console.log('Featured list',featuredList) }
            
            {featuredList}
           
        </>
    )
}

export default Featuredboxes