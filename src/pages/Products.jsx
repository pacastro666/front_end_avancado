import { createContext, useEffect, useState } from "react"
import NavBar from "../components/navbar/Header"
import Footer from "../components/footer/Footer"
import Card from "../components/Cards/Card"
import products from "./Products.json"
import Item from "../components/item/item"
import "./ProductsStyles.css"

export default function Products() {
  const [productList, setProductList] = useState([])
  const [count, setCount] = useState(0); // quantidade de compras realizadas
  const [buttonActived, setButtonActived] = useState(false)


    useEffect(() => {
    setProductList(products.bottles)
  }, []);
 
  return (
    <>
   <NavBar/>
    <section className="main-products">
    {productList.map((p, index) => (
            <Card key={index} product={p} />
          ))}

    </section>
    <Footer/>  
  </>

  )
}
