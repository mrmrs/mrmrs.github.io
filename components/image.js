/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

const Image = ({ ...props }) => {
  return (
    <img {...props} />
  )
}

Image.defaultProps = {
  sx: {
    display: 'block',
    width: '100%',
    maxWidth: '100%',
  }
}

export default Image
