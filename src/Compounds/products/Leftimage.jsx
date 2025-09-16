import React from 'react'

const Leftimage = ({ imgURL, productName, productDesp, tryDemo, learnMore, googlePlay, appStore }) => {
  return (
    <div>
      <div className="container my-5">
        <div className="row m-5">
          <div className="col me-5"><img src={imgURL} /></div>

          <div className="col ms-5" style={{width:'200px'}}>
            <h1 className='mt-5'>{productName}</h1>
            <p className='mt-5'>{productDesp}</p>
            <div>
              <a style={{ textDecoration: "none" }} className='me-5' href={tryDemo}>Try demo →</a>
              <a style={{ textDecoration: "none" }} href={learnMore}>Learn More →</a>
            </div>
            <div className='mt-4'>
              <img className='me-4' src={googlePlay} />
              <img src={appStore} />
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Leftimage
