import React from "react"
import {Circles} from "react-loader-spinner"
import {ProductTile} from "../components/product-tile"

export const Home = () => {
  const [products, set] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  React.useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        if (data) {
          setLoading(false)
          set(data)
        }
      } catch (e) {
        console.log(e.message)
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles h={"120"} w={"120"} visible={true} />
        </div>
      ) : (
        <div className="min-h-[80vh] w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto p-3">
          {products && products.length > 0
            ? products.map(product => (
                <ProductTile key={product} product={product} />
              ))
            : null}
        </div>
      )}
    </div>
  )
}
