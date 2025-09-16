
import './App.css'
import AboutPage from './Compounds/about/AboutPage'
import HomeSection from './Compounds/home/HomeSection'
import Signup from './Compounds/signup/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductPage from './Compounds/products/ProductPage'
import PricingPage from './Compounds/pricing/PricingPage'
import SupportPage from './Compounds/support/SupportPage'
import Navbar from './Compounds/Navbar'
import Footer from './Compounds/Footer'
import NotFound from './Compounds/NotFound'


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomeSection />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/products' element={<ProductPage />}></Route>
          <Route path='/pricing' element={<PricingPage />}></Route>
          <Route path='/support' element={<SupportPage />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

      
      

    </>
  )
}

export default App
