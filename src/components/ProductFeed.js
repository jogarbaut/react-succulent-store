import ProductCard from "./ProductCard"
import { productsArray } from "../data/productStoreData"

const ProductFeed = () => {
  return (
    <>
      <section className="product-feed">
        <h2>Products</h2>
        <div className="product-wrapper">
          {productsArray.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}

export default ProductFeed
