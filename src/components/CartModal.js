import ReactDom from "react-dom"
import { useContext } from "react"
import CartContext from "../context/CartContext"
import CartProduct from "./CartProduct"

const CartModal = ({ handleClose }) => {
  const cart = useContext(CartContext)
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  const handleCheckout = async () => {
    console.log("Thank you for purchasing!")
  }

  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <article className="cart-modal">
        <button type="button" onClick={handleClose}>
          Close
        </button>
        {productsCount > 0 ? (
          <>
            <p>Items in your cart: </p>
            {cart.items.map((currentProduct, index) => (
              <CartProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity} product={currentProduct} />
            ))}
            <h1>Subtotal: ${cart.getSubtotalCost().toFixed(2)}</h1>
            <h1>Sales Tax: ${cart.getTaxCost().toFixed(2)}</h1>
            <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>
            <button onClick={handleCheckout}>Purchase Items</button>
          </>
        ) : (
          <p>There are no items in your cart</p>
        )}
      </article>
    </>,
    document.getElementById("portal")
  )
}

export default CartModal
