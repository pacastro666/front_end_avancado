
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Registro from './pages/Registro'
import { AuthProvider} from './contexts/auth'
export default function AppRoutes() {

  return ( 

    <>
    <BrowserRouter> 
     <AuthProvider>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:id/:title' element={<ProductDetails/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/Registro' element={<Registro/>}></Route>
        </Routes>  
        </AuthProvider>    
      
    </BrowserRouter>
   
    </>

    )
}