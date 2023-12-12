import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='productCard' onClick={console.log(product.name)}>
      <div className='contentContainer'>
        <img className='imgProduct' src={product.imageUrl} alt={product.name} />
        <span className='productName'>{product.name}</span>        
      </div>
      <div className='priceContainer'>
        <div className='newPriceBox'>
          <span className='productDiscount'>{product.discount}%</span>
          <div className='newPriceContainer'>
            <span className='newProductPrice'>{product.price - ((product.price * product.discount) / 100)}</span>
            <span className='newProductPriceCurrency'>تومان</span>          
          </div>          
        </div>
        <div>
          <del className='oldProductPrice'>{product.price}</del> 
        </div>
      </div>       
    </div>
  )
}

export default ProductCard