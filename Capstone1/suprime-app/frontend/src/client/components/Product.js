import { Link } from 'react-router-dom'
import Home from '../views/Home'

export default function Product({ item, imgSrc, size, alt, navigate }) {
  const itemURL = `/${item.sku}`

  function handleClick(e) {
    let images = []
    item.images = images
  }

  let sources = Object.keys(imgSrc)
  function renderImages() {
    for (let i = 0; i <= sources.length; i++) {
      console.log(imgSrc[sources[i]])
      return imgSrc[sources[i]]
    }
  }

  return (
    <>
      <figure className='product-box'>
        <Link to=''>
          <img src={renderImages()} alt={alt} />
        </Link>
        <p className='shop-price'>${item.price}</p>
      </figure>
    </>
  )
}
