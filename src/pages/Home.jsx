import React from "react"
import "./HomeStyles.css"
import Footer from "../components/footer/Footer"
import NavBar from "../components/navbar/Header"
import BannerCentral from "../components/banners/Banner"


export default function Home() {
  return ( 

    <>
      <NavBar/>
      <BannerCentral/>
      <Footer/>   
    </>

    )
}