const productsArray = [
  {
    id: 1,
    title: "Aenoium",
    price: 8.99,
    image: "aeonium-s.jpg"
  },
  {
    id: 2,
    title: "Aloe",
    price: 12.99,
    image: "aloe-s.jpg"
  },
  {
    id: 3,
    title: "Cactus",
    price: 55.99,
    image: "cactus-s.jpg"
  },
  {
    id: 4,
    title: "Echeveria",
    price: 15.99,
    image: "echeveria-s.jpg"
  },
  {
    id: 5,
    title: "Sedum",
    price: 21.99,
    image: "sedum-s.jpg"
  },
  {
    id: 6,
    title: "Sempervivum",
    price: 23.99,
    image: "sempervivum-s.jpg"
  },
]

const getProductData = (id) => {
  const productData = productsArray.find((product) => product.id === id)
  if (productData === undefined) {
    return undefined
  }
  return productData
}

export { productsArray, getProductData }
