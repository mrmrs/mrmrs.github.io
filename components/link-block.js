/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

const LinkBlock = ({ ...props }) => {
  return (
    <a {...props} />
  )
}

LinkBlock.defaultProps = {
  sx: {
    display: 'block'
  }
}

export default LinkBlock
