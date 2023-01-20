import { createContext, useState, useEffect } from "react"
import { getProductData } from "../data/productStoreData"

// Create context to layout what is available to React app
const CartContext = createContext({})

// Provider gives React app access to the context
export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("cartProducts")) || [])

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
  })

  function getProductQuantity(id) {
    const quantity = cartProducts.find((product) => product.id === id)?.quantity
    if (quantity === undefined) {
      return 0
    }
    return quantity
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id)
    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ])
    } else {
      setCartProducts(cartProducts.map((product) => (product.id === id ? { ...product, quantity: product.quantity + 1 } : product)))
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id)
    if (quantity === 1) {
      deleteFromCart(id)
    } else {
      setCartProducts(cartProducts.map((product) => (product.id === id ? { ...product, quantity: product.quantity - 1 } : product)))
    }
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((product) => {
        return product.id !== id
      })
    )
  }

  function getSubtotalCost() {
    let totalCost = 0
    cartProducts.forEach((cartItem) => {
      const productData = getProductData(cartItem.id)
      totalCost += productData.price * cartItem.quantity
    })
    return totalCost
  }

  function getTaxCost() {
    return getSubtotalCost() * 0.0825
  }

  function getTotalCost() {
    return getSubtotalCost() + getTaxCost()
  }

  return <CartContext.Provider value={{ items: cartProducts, getProductData, getProductQuantity, addOneToCart, removeOneFromCart, deleteFromCart, getSubtotalCost, getTaxCost, getTotalCost }}>{children}</CartContext.Provider>
}

export default CartContext
