import { Link } from 'react-router-dom'

export default function Product(props) {
  const { item, imgSrc, price, alt } = props
  const itemURL = `/${item.sku}`

  function handleClick(e) {
    let images = []
    item.images = images
  }

  let sources = Object.values(imgSrc)

  return (
    <>
      <figure className='product-box'>
        <Link to={itemURL}>
          <img src={sources} alt={alt} />
        </Link>
        <section>
          <p className='product-price'>${price}</p>
          <p className='product-description'>{alt}</p>
        </section>
      </figure>
    </>
  )
}
