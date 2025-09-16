import React from 'react'

const RightImage = ({ productName, productDesp, learnMore, imgURL }) => {
  return (
    <div className='container py-5'>
      <div className="row">
        <div className="col">
          <h1 className='mt-5 pt-5'>{productName}</h1>
          <p className='mt-4'>{productDesp}</p>
          <a href={learnMore}>Learn more →</a>
        </div>
        <div className="col">
          <img src={imgURL}/>
        </div>
      </div>
    </div>
  )
}

export default RightImage
