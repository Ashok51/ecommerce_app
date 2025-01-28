import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({variant, children}) => {  // variant: like danger, success / children : actual message to show
  return (
    <Alert variant={variant}>
      {children}
    </Alert>
  )
}

Message.defaultProps = {
  variant: 'info',
}

export default Message