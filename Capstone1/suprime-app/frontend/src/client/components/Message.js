import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'

const Message = ({ variant, children }) => {
  const [show, setShow] = useState(true)
  if (show) {
    return (
      <Alert variant={variant} onClose={() => setShow(false)} dismissible>
        {children}
      </Alert>
    )
  }
  return <Button onClick={() => setShow(true)}>Show Message</Button>
}

Message.defaultProps = {
  variant: 'danger',
}

export default Message
