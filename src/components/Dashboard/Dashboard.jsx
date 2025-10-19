import React from 'react'
import Nav from './Nav'
import AddProduct from './AddProduct'
import Hero from './Hero'
import ShowProduct from '../Home/showProduct'
import Footer from '../Home/Footer'

const Dashboard = () => {
  return (
    <>
    <Nav/>
     <Hero/>
     <ShowProduct/>
     <Footer/>
     </>
  )
}

export default Dashboard