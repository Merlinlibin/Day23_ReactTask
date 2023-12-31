import React from 'react'
import Footer from '../components/Footer';
import Section from '../components/Section';
import FilterMeny from '../components/FilterMeny';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { useState } from 'react';



function App() {
 const[cart, setcart] = useState(0);

  return (
   
    <>
      <NavBar cart={ cart}  setcart={setcart}/>
       
        <Header />
        
        <FilterMeny />
        
        <Section cart={ cart}  setcart={setcart}/>
        
        <Footer />
      </>
  )
}

export default App
