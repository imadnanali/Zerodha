import React from 'react'

const AboutTeam = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className='border-bottom '>
          <div className='text-center my-5 py-5 fs-3 '>
            <h2>We pioneered the discount broking model in India.</h2>
            <h2>Now, we are breaking ground with our technology.</h2>
          </div>
        </div>
        <div className="row my-5 py-5 mx-5 ">
          <div className="col">
            <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>

            <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

            <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
          </div>
          <div className="col">
            <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>

            <p> <a href="#" style={{ textDecoration: "none" }}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

            <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <a style={{ textDecoration: "none" }} href="">blog</a> or see what the media is <a href="" style={{ textDecoration: "none" }}>saying about us</a> or learn more about our business and product <a href="" style={{ textDecoration: "none" }}>philosophies</a>.</p>
          </div>
        </div>
        <div className="row text-center ">
          <h1 className='text-center mb-5'>People</h1>
          <div className="col mt-5">
            <img className='rounded-circle' style={{width:"55%"}} src={`${import.meta.env.BASE_URL}media/images/nithinKamath.jpg`}  />
            <h5 className='mt-3'>Nithin Kamath</h5>
            <p className='mt-3 text-muted'>Founder, CEO</p>
          </div>
          <div className="col mt-5 text-start fs-6">
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

            <p>Playing basketball is his zen.</p>

            <p>Connect on <a href="" style={{ textDecoration: "none" }}>Homepage</a>  / <a href="" style={{ textDecoration: "none" }}>TradingQnA</a> / <a href="" style={{ textDecoration: "none" }}>Twitter</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTeam