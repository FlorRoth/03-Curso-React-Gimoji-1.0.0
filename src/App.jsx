import { useState } from 'react';;
import './styles/index.css'
import { NavBar } from "./components/navbar/NavBar";
import { CustomBanner } from './components/banners/CustomBanner';


import { Gimoji } from './components/Gimoji/Gimoji';


function App() {


  return (
    <>
      <NavBar />
      <CustomBanner />
      <Gimoji />
    </>
  )
}

export default App
