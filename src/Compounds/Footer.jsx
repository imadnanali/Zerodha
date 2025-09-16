import React from 'react'

function Footer() {
    return (
        <footer className='pt-5 border-top' style={{ backgroundColor: "#fbfbfb" }}>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <img src='media/images/logo.svg' style={{ width: "55%" }} />
                        <p className='mt-3'>&copy; 2010 - 2025, Zerodha Broking Ltd.</p>
                        <p>All rights reserved.</p>
                    </div>
                    <div className='col'>
                        <h5 >Company</h5>
                        <a href="#" style={{ textDecoration: "none" }} className='text-muted '>About</a><br />
                        <a href="#" style={{ textDecoration: "none" }} className='text-muted '>Products</a><br />
                        <a href="#" style={{ textDecoration: "none" }} className='text-muted '>Pricing</a><br />
                        <a href="#" style={{ textDecoration: "none" }} className='text-muted '>Referral programme</a><br />
                        <a href="#" style={{ textDecoration: "none" }} className='text-muted '>Careers</a><br />
                        <a href="#" style={{ textDecoration: "none" }} className='text-muted '>Zerodha.tech</a><br />
                        <a href="#" style={{ textDecoration: "none" }} className='text-muted '>Press & media</a><br />
                        <a href="#" style={{ textDecoration: "none" }} className='text-muted '>Zerodha cares(CSR)</a>
                    </div>
                    <div className='col'>
                        <h5>Support</h5>
                        <a href="#" style={{ textDecoration: "none" }} className='text-muted '>Contact</a><br />
                        <a href="#" style={{ textDecoration: "none" }} className='text-muted '>Support portal</a><br />
                        <a href="#" style={{ textDecoration: "none" }} className='text-muted '>Z-Connect blog</a><br />
                        <a href="#" style={{ textDecoration: "none" }} className='text-muted '>List of changes</a><br />
                        <a href="#" style={{ textDecoration: "none" }} className='text-muted '>Downloads & resources</a>
                    </div>
                    <div className='col'>
                        <h5>Account</h5>
                        <a href="#" style={{ textDecoration: "none" }} className='text-muted '>Open an account</a><br />
                        <a href="#" style={{ textDecoration: "none" }} className='text-muted '>Fund transfer</a><br />
                        <a href="#" style={{ textDecoration: "none" }} className='text-muted '>60 day challenge</a>
                    </div>
                </div>
                <div className="row mt-5 text-muted" >
                    <p style={{ fontSize: "11px" }}>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="#" style={{ textDecoration: "none" }}>complaints@zerodha.com</a>, for DP related to <a href="" style={{ textDecoration: "none" }}>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>


                    <p style={{ fontSize: "11px" }}>Procedure to file a complaint on <a href="#" style={{ textDecoration: "none" }}>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                    <p style={{ fontSize: "11px" }}>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                    <p style={{ fontSize: "11px" }}>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                    <p style={{ fontSize: "11px" }}>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="#" style={{ textDecoration: "none" }}>create a ticket here</a>.</p>
                </div>
                <div className="col mb-3 ms-5 ">
                    <a href="#" className='p-3 text-muted' style={{ textDecoration: "none", fontSize: "13px" }} >NSE</a>
                    <a href="#" className='p-3 text-muted' style={{ textDecoration: "none", fontSize: "13px" }} >BSE</a>
                    <a href="#" className='p-3 text-muted' style={{ textDecoration: "none", fontSize: "13px" }} >MCX</a>
                    <a href="#" className='p-3 text-muted' style={{ textDecoration: "none", fontSize: "13px" }} >Term & conditions</a>
                    <a href="#" className='p-3 text-muted' style={{ textDecoration: "none", fontSize: "13px" }} >Policies & procedures</a>
                    <a href="#" className='p-3 text-muted' style={{ textDecoration: "none", fontSize: "13px" }} >Privacy policy</a>
                    <a href="#" className='p-3 text-muted' style={{ textDecoration: "none", fontSize: "13px" }} >Disclosure</a>
                    <a href="#" className='p-3 text-muted' style={{ textDecoration: "none", fontSize: "13px" }} >For investor's attention</a>
                    <a href="#" className='p-3 text-muted' style={{ textDecoration: "none", fontSize: "13px" }} >Investor charter</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;