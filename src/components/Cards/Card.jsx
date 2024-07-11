import { Link } from "react-router-dom";
import "./styles.css"


export default function Card(props) {
  const product = props.product
  return (
    <div className="frame-15">
      <div className="frame-8">
        <div className="frame-7">
          <img
            src={product.image} alt="Meu card"  className="img"
          />
         <Link to={`/products/${product.id}/${product.title}`} state={{ productInfo: product }}>
          <p className="titulo-_produto"> {product.title} </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
