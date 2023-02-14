import React from 'react'
import Products from '../../components/Products/Products'
import Animator from '../../components/UI/Animator'
const style = {


}
const ProductsRoute = () => {
  return (
    <Animator>
      <Products cat={'vintage'}/>
    </Animator>
  )
}

export default ProductsRoute