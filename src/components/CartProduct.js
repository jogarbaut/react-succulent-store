import CartContext from '../context/CartContext'
import { useContext } from "react"

const CartProduct = ({ id, quantity, product }) => {
  const cart = useContext(CartContext)
  const productData = cart.getProductData(id)

  return (
    <>
    <h3>{productData.title}</h3>
    <button onClick={() => cart.removeOneFromCart(product.id)}>-</button>
    <p>{quantity} total</p>
    <button onClick={() => cart.addOneToCart(product.id)}>+</button>
    <p>${(quantity * productData.price).toFixed(2)}</p>
    <button type="button" onClick={() => cart.deleteFromCart(id)}>Remove</button>
    <hr />
    </>
  )
}

export default CartProduct