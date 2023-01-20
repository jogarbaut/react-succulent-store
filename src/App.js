import CustomNav from "./components/CustomNav"
import { CartProvider } from "./context/CartContext"
import Home from "./pages/Home"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <CartProvider>
        <CustomNav />
        <Home />
      </CartProvider>
      <Footer />
    </div>
  )
}

export default App
