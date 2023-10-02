export default function Product({ item, imgSrc, size, alt }) {
  const itemURL = `/${item.sku}`

  function handleClick(e) {
    let images = []
    item.images = images
  }

  console.log(imgSrc)

  return (
    <>
      <div id='product_grid' className='product'>
        <h4 className='product-title'>{item.itemId}</h4>
        <p>{`$${item.price}`}</p>
        <figure>
          <img src={imgSrc} alt={alt} height={300} />
          <figcaption>{alt}</figcaption>
        </figure>
        <option>{size}</option>
      </div>
    </>
  )
}
