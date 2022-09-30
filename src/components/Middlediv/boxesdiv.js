import React, { useState } from 'react'
import { fetchSaleInfor } from './dataProccessing'

const Middleboxesdiv = () => {

    const [featuredSales, setFeatured] = useState([])
  
    // const displayFeatured =  async() => {
    //     featuredSales = await fetchSaleInfor()
    //     setFeatured
    // }


    return (
        <>
            <div className='boxes'>

            </div>
            <div className='boxes'>

            </div>
            <div className='boxes'>

            </div>
            <div className='boxes'>

            </div>

            <div className='boxes'>

            </div>
        </>
    )
}

export default Middleboxesdiv