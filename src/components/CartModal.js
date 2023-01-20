import ReactDom from "react-dom"
import { useState, useContext } from "react"
import CartContext from "../context/CartContext"
import CartProduct from "./CartProduct"
import { IoClose, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"

const CartModal = ({ handleClose }) => {
  const cart = useContext(CartContext)
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
  const [showCheckoutMessage, setShowCheckoutMessage] = useState(false)


  const handleResetToggled = async () => {
    localStorage.removeItem("cartProducts");
    window.location.reload(false)
  }

  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <article className="cart-modal">
        {!showCheckoutMessage ? (
          <>
            <div className="flex-col cart-items">
              {productsCount > 0 ? (
                <>
                  <p className="cart-items-title">Items in your cart: </p>
                  {cart.items.map((currentProduct, index) => (
                    <CartProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity} product={currentProduct} />
                  ))}
                </>
              ) : (
                <p className="title">There are no items in your cart</p>
              )}
            </div>
            <div className="flex-col totals">
              <div className="flex-row cancel">
                <button type="button" className="btn btn__cancel" onClick={handleClose}>
                  <IoClose />
                </button>
              </div>

              <div className="values">
              <div>Total Items: {productsCount}</div>
                <div>Subtotal: ${cart.getSubtotalCost().toFixed(2)}</div>
                <div>Sales Tax: ${cart.getTaxCost().toFixed(2)}</div>
                <div className="total">Total: ${cart.getTotalCost().toFixed(2)}</div>
              </div>

              <button type="button" className="btn btn__checkout" onClick={() => setShowCheckoutMessage(true)}>
                Purchase
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="checkout-message">
              <h4>Thank you for checking out the project!</h4>

              <h4>Project Created by Jomel Bautista</h4>
              <div className="flex-row">
                <button className="button__signature" type="button">
                  <a href="https://github.com/jomelbautista" id="button-github" target="_blank" rel="noopener noreferrer">
                    <IoLogoGithub />
                  </a>
                </button>
                <button className="button__signature" type="button">
                  <a href="https://www.linkedin.com/in/jomelgbautista/" id="button-github" target="_blank" rel="noopener noreferrer">
                    <IoLogoLinkedin />
                  </a>
                </button>
              </div>
              <button type="button" className="btn btn__back" onClick={() => setShowCheckoutMessage(false)}>
                Go Back
              </button>
              <button type="button" className="btn btn__reset" onClick={handleResetToggled}>
                Reset Application
              </button>
            </div>
          </>
        )}
      </article>
    </>,
    document.getElementById("portal")
  )
}

export default CartModal
