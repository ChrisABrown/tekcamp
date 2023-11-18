import { Link } from 'react-router-dom'
import { addToCart } from '../actions/cartActions'

export default function Product(props) {
  const { item, imgSrc, price, alt } = props
  const itemURL = `/${item.sku}`

  // function handleClick(e) {
  //   let images = []
  //   item.images = images
  // }

  let sources = Object.values(imgSrc)

  return (
    <>
      <figure className='product-box'>
        <Link to={itemURL}>
          <div className='product-image'>
            <img src={sources} alt={alt} />
          </div>
        </Link>
        <section className='product-info'>
          <p className='product-price'>${price}</p>
          <p className='product-description'>{alt}</p>
          <button className='btn' onClick={addToCart(item.SKU)}>
            add to cart
          </button>
        </section>
      </figure>
    </>
  )
}
