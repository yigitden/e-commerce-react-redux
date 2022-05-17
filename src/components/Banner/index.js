import React from 'react'
import banner from '../../images/banner.jpg'

const Banner = () => {
    return (
        <div className='container banner'>
            <div className='row justify-center'> 
            <div className='col-12-xl'>
                    <img src={banner} />
                    </div>
            </div>
        </div>
    )
}

export default Banner