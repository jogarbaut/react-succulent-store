import { useContext } from "react"
import CartContext from "../context/CartContext"
import { FaPlus, FaMinus } from "react-icons/fa"

const ProductCard = ({ product }) => {
  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(product.id)

  return (
    <article className="product-card">
      <div className="product-card-l">
        <div className="img-container">
          <img src={require(`../assets/img/${product.image}`)} alt={product.title} />
        </div>
      </div>

      <div className="product-card-r">
        <h1 className="title">{product.title}</h1>
        <h2 className="price">${product.price}<span className="price-unit">/ea</span></h2>

        {productQuantity > 0 ? (
          <>
            <div className="flex-row">
              <button className="btn btn__subtract" onClick={() => cart.removeOneFromCart(product.id)}>
                <FaMinus />
              </button>
              <button className="btn btn__add" onClick={() => cart.addOneToCart(product.id)}>
                <FaPlus />
              </button>
            </div>
            <p className="quantity">In Cart: {productQuantity}</p>
          </>
        ) : (
          <button className="btn btn__add-to-cart" onClick={() => cart.addOneToCart(product.id)}>
            Add to Cart
          </button>
        )}
      </div>
    </article>
  )
}

export default ProductCard
