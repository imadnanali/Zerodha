import React from 'react'

function Pricing() {
    return (
        <div className='container my-5 '>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p>We poineered the concept discount bloking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' className='' style={{ textDecoration: "none" }}>See pricing <i class="fa-solid fa-arrow-right"></i></a>

                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col px-5 py-2 border'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free eduity delivery and <br/> direct mutual funds</p>
                        </div>
                        <div className='col px-5 py-2 border'>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intaraday and F&O</p>
                        </div>
                        <div className='col'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;