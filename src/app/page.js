"use client"
import './globals.css';
import Choose from './components/Choose'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
// import ProductPage from './components/[productId]';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Products heading={"OUR COLLECTIONS"} />
      <Choose />
      <Footer />
    </>
  )
}

export default App