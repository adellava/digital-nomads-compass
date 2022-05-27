import React from 'react'
import './Error.scss'
type ErrorComponentProps = { message: string }

function ErrorComponent({ message }: ErrorComponentProps) {
  return (
    <div className="Error" data-testid="Error">
      {message}
    </div>
  )
}

export default ErrorComponent
