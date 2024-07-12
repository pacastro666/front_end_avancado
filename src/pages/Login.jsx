import "./Index.css"
import NavBar from "../components/navbar/Header"
import Footer from "../components/footer/Footer"
export default function Login() {
  return ( 
    <>
       <NavBar/>    
   <div className="frame-51">
      <div className="frame-5">
        <div className="group-1">
          <p className="email-cpf">Email</p>
          <div className="rectangle-4214" />
          <div className="frame-3">
            <p className="senha">senha</p>
          </div>
          <div className="rectangle-4217" />
     
        </div>
        <div className="header-auth">
          <div className="button-1 clip-contents">
            <p className="button">Login</p>
          </div>
        </div>
      </div>
    </div>  
    <Footer/>
    </>

    )
}