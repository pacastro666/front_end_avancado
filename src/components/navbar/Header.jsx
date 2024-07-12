import { useNavigate } from 'react-router-dom'
import "./styles.css"

export default function NavBar() {
  const navigate = useNavigate()
  return (
    <div className="header">
      
      <div className="navigation-pill-list">      
      <div className="navigation-pill-1">
          <button className='more-info' onClick={() => navigate('/')}>Home</button>
          <button className='more-info' onClick={() => navigate('/products')}>Produtos</button>

        </div>
      </div>
        <div className="user">
          <span>Usuário:</span>
         </div>  
          <button className='button-2' onClick={()=>navigate('/login')}>login</button> 
          <button className="button-2"  onClick={()=>navigate('/Registro')}>registro</button>  
    </div>
  )
}