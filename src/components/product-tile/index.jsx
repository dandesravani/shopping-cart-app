import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {addToCart, removeFromCart} from "../../store/slices/cart-slice"

export const ProductTile = ({product}) => {
  const dispatch = useDispatch()
  const {cart} = useSelector(state => state)

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  const handleRemoveCart = () => {
    dispatch(removeFromCart(product.id))
  }

  return (
    <div>
      <div className="flex flex-col items-center border-2 border-red-900 rounded-md p-4 h-[360px]">
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product?.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-40 truncate mt-3 text-gray-700 text-lg font-bold">
          {product?.title}
        </div>
        <div className="flex justify-center items-center w-full mt-5">
          <button
            onClick={
              cart.some(prod => prod.id === product.id)
                ? handleRemoveCart
                : handleAddToCart
            }
            className="bg-red-900 text-white border-2 font-bold p-3 rounded-lg cursor-pointer inline-block"
          >
            {cart.some(prod => prod.id === product.id)
              ? "Remove From Cart"
              : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  )
}
