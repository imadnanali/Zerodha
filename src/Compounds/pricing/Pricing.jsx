import React from 'react'

const Pricing = () => {
  return (
    <div>
      <div className="container">
        <h1 className='mt-5 pt-5 text-center'>Pricing</h1>
        <p className='fs-4 text-center mb-5 pb-5'>Free equity and investments and flat over ₹20 traday and F&O trades</p>

        <div className="row text-center">
          <div className="col-4 p-5">
            <img style={{width:'70%'}} src={`${import.meta.env.BASE_URL}media/images/pricingEquity.svg`}  />
            <h2 className='mb-3 fs-4'>Free equity delivery</h2>
            <p className='text-muted '>All equity delivery investments (NSE, BSE),
            are absolutely free — ₹ 0 brokerage.</p>
          </div>
          <div className="col-4 p-5">
            <img style={{width:'70%'}} src={`${import.meta.env.BASE_URL}media/images/intradayTrades.svg`} />
            <h2 className='mb-3 fs-4'>Intraday and F&O trades</h2>
            <p className='text-muted '>Flat ₹ 20 or 0.03% (whichever is lower) per
            executed order on intraday trades across
            equity, currency, and commodity trades. Flat
            ₹20 on all option trades.</p>
          </div>
          <div className="col-4 p-5">
            <img style={{width:'70%'}} src={`${import.meta.env.BASE_URL}media/images/pricingEquity.svg`} />
            <h2 className='mb-3 fs-4'>Free direct MF</h2>
            <p className='text-muted '>All direct mutual fund investments are
            absolutely free — ₹ 0 commissions & DP
            charges. </p>
          </div>
        <p className='fs-4 my-5'><a style={{textDecoration:'none'}} href="">Calculate your costs upfront</a> using our brokerage calculator</p>
        </div>


        <div className="row mb-5">
            <h4 className='mb-5'>Charges explained</h4>
          <div className="col">
            <h5 className='fs-6'>Securities/Commodities transaction tax</h5>
            <p style={{ fontSize: "13px" }} className='text-muted'>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>

            <p style={{ fontSize: "13px" }} className='text-muted'>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>

            <h5 className='fs-6'>Transaction/Turnover Charges</h5>
            <p style={{ fontSize: "13px" }} className='text-muted'>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
            <p style={{ fontSize: "13px" }} className='text-muted'>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>

            <p style={{ fontSize: "13px" }} className='text-muted'>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
            <p style={{ fontSize: "13px" }} className='text-muted'>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>

            <p style={{ fontSize: "13px" }} className='text-muted'>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>

            <h5 className='fs-6'>Call & trade</h5>
            <p style={{ fontSize: "13px" }} className='text-muted'>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
            <h5 className='fs-6'>Stamp charges</h5>
            <p style={{ fontSize: "13px" }} className='text-muted'>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
            <h5 className='fs-6'>NRI brokerage charges</h5>
            <ul>
              <li style={{ fontSize: "13px" }} className='text-muted'>₹100 per order for futures and options.</li>
              <li style={{ fontSize: "13px" }} className='text-muted'>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
              <li style={{ fontSize: "13px" }} className='text-muted'>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
              <li style={{ fontSize: "13px" }} className='text-muted'>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
            </ul>

            <h5 className='fs-6'>Account with debit balance</h5>
            <p style={{ fontSize: "13px" }} className='text-muted'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
            <h5 className='fs-6'>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h5>
            <ul>
              <li style={{ fontSize: "13px" }} className='text-muted'>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
              <li style={{ fontSize: "13px" }} className='text-muted'>Options - ₹50 per crore + GST traded value (premium value).</li>
              <li style={{ fontSize: "13px" }} className='text-muted'>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
            </ul>
            <h5 className='fs-6'>Margin Trading Facility (MTF)</h5>
            <ul>
              <li style={{ fontSize: "13px" }} className='text-muted'>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
              <li style={{ fontSize: "13px" }} className='text-muted'>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
              <li style={{ fontSize: "13px" }} className='text-muted'>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
            </ul>
          </div>
          <div className="col">
            <h5 className='fs-6'>GST</h5>
            <p style={{ fontSize: "13px" }} className='text-muted'>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
            <h5 className='fs-6'>SEBI Charges</h5>
            <p style={{ fontSize: "13px" }} className='text-muted'>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
            <h5 className='fs-6'>DP (Depository participant) charges</h5>
            <p style={{ fontSize: "13px" }} className='text-muted'>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
            <p style={{ fontSize: "13px" }} className='text-muted'>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
            <p style={{ fontSize: "13px" }} className='text-muted'>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
            <h5 className='fs-6'>Pledging charges</h5>
            <p style={{ fontSize: "13px" }} className='text-muted'>₹30 + GST per pledge request per ISIN.</p>
            <h5 className='fs-6'>AMC (Account maintenance charges)</h5>
            <p style={{ fontSize: "13px" }} className='text-muted'>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a style={{textDecoration:'none'}} href="">Click here</a></p>
            <p  style={{ fontSize: "13px" }} className='text-muted'>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a style={{textDecoration:'none'}} href="">Click here</a></p>
            <h5 className='fs-6'>Corporate action order charges</h5>
            <p style={{ fontSize: "13px" }} className='text-muted'>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>
            <h5 className='fs-6'>Off-market transfer charges</h5>
            <p style={{ fontSize: "13px" }} className='text-muted'>₹25 per transaction.</p>
            <h5 className='fs-6'>Physical CMR request</h5>
            <p style={{ fontSize: "13px" }} className='text-muted'>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>
            <h5 className='fs-6'>Payment gateway charges</h5>
            <p style={{ fontSize: "13px" }} className='text-muted'>₹9 + GST (Not levied on transfers done via UPI)</p>
            <h5 className='fs-6'>Delayed Payment Charges</h5>
            <p style={{ fontSize: "13px" }} className='text-muted'>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <a style={{textDecoration:'none'}} href="">Learn more</a>.</p>
            <h5 className='fs-6'>Trading using 3-in-1 account with block functionality</h5>
            <ul>
              <li style={{ fontSize: "13px" }} className='text-muted'>Delivery & MTF Brokerage: 0.5% per executed order.</li>
              <li style={{ fontSize: "13px" }} className='text-muted'>Intraday Brokerage: 0.05% per executed order.</li>
            </ul>
          </div>
        </div>
        <h5>Disclaimer</h5>
        <p style={{ fontSize: "13px"}} className='text-muted mt-3 mb-5'>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
          


      </div>
    </div>
  )
}

export default Pricing

