import React from "react"
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {CartTile} from "../components/cart-tile"

export const Cart = () => {
  const {cart} = useSelector(state => state)
  const [totalCart, set] = React.useState(0)

  React.useEffect(() => {
    set(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])

  return (
    <div>
      {cart && cart.length ? (
        <div>
          <div className="min-h-[80vh] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {cart.map(cartItem => (
                <CartTile cartItem={cartItem} />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-end p-5 mt-14">
            <h1 className="font-bold text-lg text-red-800">
              Your Cart Summary
            </h1>
            <p>
              <span className="text-gray-800 font-bold">Total Items</span>
              <span>:{cart.length}</span>
            </p>
            <p>
              <span className="text-gray-800 font-bold">Total Cart</span>
              <span>:{totalCart}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold mb-2 text-gray-800">
            Your Cart is empty
          </h1>
          <Link
            to="/"
            className="bg-red-900 text-white border-2 font-bold p-3 rounded-lg cursor-pointer inline-block"
          >
            Home
          </Link>
        </div>
      )}
    </div>
  )
}
