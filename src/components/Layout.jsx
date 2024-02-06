import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import Abouts from '../pages/Abouts'
import ContactUS from '../pages/ContactUS'
import Accessories from '../pages/Accessories'
import Page404 from '../pages/404page'
import Test from './Test'

const Layout = () => {
  return (
    <BrowserRouter>
        <Header/>
        <div className='container'>
          <div className='main'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='san-pham' element={<Catalog/>}>
                  <Route path=':slug' element={<Product/>}/>
              </Route>
              <Route path='cart' element={<Cart/>}/>
              <Route path='gioi-thieu' element={<Abouts/>}/>
              <Route path='lien-he' element={<ContactUS/>}/>
              <Route path='phu-kien' element={<Accessories/>}/>
              <Route path='*' element={<Page404/>}/>
              <Route path='test' element={<Test/>}/>
            </Routes>
          </div>
        </div>
        <Footer/>
    </BrowserRouter>
  )
}

export default Layout