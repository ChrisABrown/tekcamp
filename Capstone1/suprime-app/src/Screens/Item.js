import React from 'react'

const Item = ({}) => {
  return (
    <>
      {' '}
      <>
        <Button className='btn btn-light my-3' onClick={() => navigate('/')}>
          Go Back
        </Button>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <ItemDetails
            key={sku}
            sku={sku}
            navigate={navigate}
            menuItem={menuItem}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        )}
      </>
      ) }
    </>
  )
}

export default Item
