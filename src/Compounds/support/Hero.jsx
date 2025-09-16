import React from 'react'

const Hero = () => {
    return (
        <div id='blue' className='pb-5'>
            <div className="container ">
                <div className="flex py-5 ">
                    <h5 className='f'>Support Portal</h5>
                    <a className='fs-5' href="">Track tickets</a>
                </div>
                <div className="row">
                    <div className="col">
                        <h4 className='py-3'>Search for an answer or browse help topics to create a ticket</h4>
                        <input type="search" name="" id="heroSearch" placeholder='Eg: how do i activate F&O, why is my order getting rejected ... ' />
                        <a href="" className='fs-6 me-3'>Track account opening</a>
                        <a href="" className='fs-6 me-3'>Track segment activation</a>
                        <a href="" className='fs-6 me-3'>Intraday margins</a>
                        <a href="" className='fs-6 me-3'>Kite user manual</a>
                    </div>
                    <div className="col ms-5 pt-5 ">
                        <h4>Featured</h4>
                        <ol>
                            <li>  <a href="" className='fs-6 m-4 '>Surveillance measure on scrips - June 2025</a></li>
                            <li> <a href="" className='fs-6 m-4 '>Rights Entitlements listing in June 2025</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
