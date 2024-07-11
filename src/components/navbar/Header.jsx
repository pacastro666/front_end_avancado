import { useNavigate } from 'react-router-dom'
import "./styles.css"

export default function NavBar() {
  const navigate = useNavigate()
  return (
    <div className="header clip-contents">
      <div className="navigation-pill-list">      
      <div className="navigation-pill-1">
          <button className='more-info' onClick={() => navigate('/')}>Home</button>
          <button className='more-info' onClick={() => navigate('/products')}>Produtos</button>
        </div>
      </div>
      <div className="button-3 clip-contents">
          <p className="button-2">Login</p>
        </div>
      <div className="button-3 clip-contents">
          <p className="button-2">Registro</p>
        </div>
    </div>
  )
}