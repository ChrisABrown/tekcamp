export default function Product({ item, imgSrc, size, alt }) {
  const itemURL = `/${item.sku}`

  function handleClick(e) {
    let images = []
    item.images = images
  }

  let sources = Object.keys(imgSrc)

  return (
    <>
      <figure className='product-box'>
        <img src={imgSrc[sources[0]]} alt={alt} />
        <p>${item.price}</p>
      </figure>
    </>
  )
}
