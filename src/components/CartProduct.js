import CartContext from "../context/CartContext"
import { useContext } from "react"
import { FaPlus, FaMinus, FaRegWindowClose } from "react-icons/fa"

const CartProduct = ({ id, quantity, product }) => {
  const cart = useContext(CartContext)
  const productData = cart.getProductData(id)

  return (
    <article className="cart-product">
      <div className="flex-row">
        <h3 className="title">{productData.title}</h3>
      </div>

      <div className="grid-row">
        <div className="grid-item">
          <div className="img-container">
            <img src={require(`../assets/img/${productData.image}`)} alt={productData.title} />
          </div>
        </div>
        <div className="grid-item quantity-buttons">

          <button type="button" className="btn btn__subtract" onClick={() => cart.removeOneFromCart(product.id)}>
            <FaMinus />
          </button>

          <p className="quantity">Qty {quantity}</p>

          <button type="button" className="btn btn__add" onClick={() => cart.addOneToCart(product.id)}>
            <FaPlus />
          </button>


        </div>

        <div className="grid-item">
          <p className="subtotal">${(quantity * productData.price).toFixed(2)}</p>

          <button type="button" className="btn btn__remove" onClick={() => cart.deleteFromCart(id)}>
            <FaRegWindowClose />
          </button>
        </div>
      </div>
    </article>
  )
}

export default CartProduct
