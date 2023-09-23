import React from 'react'

const Item = (props) => {
  return (
    <div>
      <p>{props.items.itemId}</p>
      <p>{props.items.category}</p>
      <p>{props.items.price}</p>
      <p>{props.items.qty}</p>
      <p>{props.items.SKU}</p>
      <p>{props.items.description}</p>
      <p>{props.items.sizes}</p>
      <p>{props.items.colors}</p>
    </div>
  )
}

export default Item
