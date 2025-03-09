import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Carousel from './Components/Carousel/Carousel'
import Products from './Components/Products/Product'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <About/>
      <div className="conatiner">
        <Title subTitle='Our Product' title='Excellence in Every Product' />
        <Products/>
      </div>
      <Title subTitle='Our Services' title='Essential Organizational Services' />
      <Service/>
      <Title subTitle='Contact' title='Get in touch' />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
  