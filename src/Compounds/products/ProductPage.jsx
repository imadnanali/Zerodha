import React from 'react'
import Leftimage from './Leftimage'
import RightImage from './RightImage'

const ProductPage = () => {
  return (
    <div>
      <div className="container text-center my-5 py-5 border-bottom">
        <h1 className=''>Zerodha Products</h1>
        <p >Sleek, modern, and intuitive trading platforms</p>
        <p className='fs-6'>Check out our <a href="" style={{ textDecoration: "none" }}>investment offerings →</a></p>

      </div>
      <Leftimage
        imgURL="media/images/kite.png"
        productName="Kite"
        productDesp='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.'
        tryDemo=''
        learnMore=''
        googlePlay='media/images/googlePlayBadge.svg'
        appStore='media/images/appstoreBadge.svg'
      />
      <RightImage
        productName='Console'
        productDesp='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.'
        learnMore=''
        imgURL='media/images/console.png'
      />

      <Leftimage
        imgURL="media/images/coin.png"
        productName="Coin"
        productDesp='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.'
        tryDemo=''
        learnMore=''
        googlePlay='media/images/googlePlayBadge.svg'
        appStore='media/images/appstoreBadge.svg'
      />

      <RightImage
        productName='Kite Connect API'
        productDesp='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.'
        learnMore=''
        imgURL='media/images/kiteconnect.png'
      />


      <Leftimage
        imgURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDesp='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.'
        tryDemo=''
        learnMore=''
        googlePlay='media/images/googlePlayBadge.svg'
        appStore='media/images/appstoreBadge.svg'
      />

      <h4 className='text-center my-5 py-5'>Want to know more about our technology stack? Check out the <a
        style={{ textDecoration: 'none' }} href="">Zerodha.tech</a> blog.</h4>

      <div className='text-center mb-4'>
        <h2 className='mb-4'>The Zerodha Universe</h2>
        <p>Extend your trading and investment experience even further with our partner platforms</p>

        <div className="row mt-5 pt-5">
          <div className='col-4 '>
            <img src='media/images/smallcaseLogo.png' />
            <p className='text-muted'>Thematic investing platform</p>
          </div>
          <div className='col-4 '>
            <img style={{ width: '25%' }} src='media/images/streakLogo.png' />
            <p className='text-muted'>Systematic trading platform</p>
          </div>
          <div className='col-4 '>
            <img style={{ width: '40%' }} src='media/images/sensibullLogo.svg' />
            <p className='text-muted'>Options trading platform that lets you</p>
          </div>
        </div>


        <div className="row mt-5">
          <div className='col-4 '>
            <img style={{ width: '45%' }} src='media/images/zerodhaFundhouse.png' />
            <p className='text-muted'>Thematic investing platform</p>
          </div>
          <div className='col-4 '>
            <img src='media/images/goldenpiLogo.png' />
            <p className='text-muted'>Thematic investing platform</p>
          </div>
          <div className='col-4 '>
            <img style={{ width: '40%' }} src='media/images/dittoLogo.png' />
            <p className='text-muted'>Thematic investing platform</p>
          </div>
        </div>
        <button className='p-2 btn btn-primary  fs-5 mb-5' style={{ width: "20%", margin: "0 auto", }}>Sign up for free</button>


      </div>

    </div>
  )
}

export default ProductPage
