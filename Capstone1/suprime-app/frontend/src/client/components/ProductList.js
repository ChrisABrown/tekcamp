import React from 'react'
import Product from './Product'

export default function ProductList(props) {
  const { items, navigate } = props
  return (
    <>
      {items.map((item) => {
        return (
          <Product
            key={item._id}
            item={item}
            imgSrc={item.image}
            color={item.color}
            ssssssssssss2wqwq2w2rjnbhglk
            size={item.size}
            price={item.price}
            alt={item.description}
            navigate={navigate}
          />
        )
      })}
    </>
  )
}
