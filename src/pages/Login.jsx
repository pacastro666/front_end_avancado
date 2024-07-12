import React,{useState,useContext} from "react"
import { AuthContext } from "../contexts/auth"
import "./Index.css"
import NavBar from "../components/navbar/Header"
import Footer from "../components/footer/Footer"


export default function Login() {
  const {authenticated,login} = useContext(AuthContext)
  const [email,setEmail]=useState("")
  const [password,setPassword]= useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({email,password})
    login(email,password)  //integracao com meu contexto

  }
  return ( 
    <>
    <NavBar/>
         <div id="login">       
          <h2 className="title">Login do sistema</h2>
          <p>{String(authenticated)}</p>
            <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
             </div>

             <div className="field">
              <label htmlFor="password">senha</label>
              <input type="password" name="password" id="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
             </div>
             <div className="actions">
              <button className="button-1" type="submit">Entrar</button>

             </div>
        
        

          </form>

         </div>

  <Footer/>
         
    
    </>

    )
}