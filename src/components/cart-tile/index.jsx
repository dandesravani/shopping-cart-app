import React from "react"
import {useDispatch} from "react-redux"
import {removeFromCart} from "../../store/slices/cart-slice"

export const CartTile = ({cartItem}) => {
  const dispatch = useDispatch()

  const handleRemoveCart = () => {
    dispatch(removeFromCart(cartItem.id))
  }
  return (
    <div className="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
      <div className="flex p-3">
        <img
          className="h-28 rounded-lg"
          src={cartItem?.image}
          alt={cartItem?.title}
        />
        <div className="ml-10 self-start space-y-5">
          <h1 className="text-xl text-white font-bold">{cartItem?.title}</h1>
          <p className="text-white font-extrabold">{cartItem?.price}</p>
        </div>
      </div>

      <div className="flex justify-center items-center w-full mt-5">
        <button
          onClick={handleRemoveCart}
          className="bg-red-900 text-white border-2 font-bold p-3 rounded-lg cursor-pointer inline-block"
        >
          Remove From Cart
        </button>
      </div>
    </div>
  )
}
