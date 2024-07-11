import { Link } from "react-router-dom";
export default function Item(props) {
    const product = props.product

    return (
        <article className="product">
            <img src={product.image} alt="product" />
            <h3 className="price-product">
                R$ <span>{product.price}</span>
            </h3>
            <Link to={`/products/${product.id}/${product.title}`} state={{ productInfo: product }}>
                <p className="name-product">{product.title}</p>
            </Link>
            
        </article>

    );
}