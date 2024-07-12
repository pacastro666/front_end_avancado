import React,{useState} from "react"
import "./Index.css"
import NavBar from "../components/navbar/Header"
import Footer from "../components/footer/Footer"
export default function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]= useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submit",{email,password})

  }
  return ( 
    <>
    <NavBar/>
         <div id="login">       
          <h1 className="title"Login do sistema></h1>
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