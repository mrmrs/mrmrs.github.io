/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

const Video = ({ filename, ...props }) => {
  return (
    <video autoplay='true' loop='true' width='1920' sx={{ width: '100%', maxWidth: '1920px', mx: 'auto', display: 'block' }} {...props}>
      <source src={"https://dlu344star2bj.cloudfront.net/v/"+filename+".mp4"} type="video/mp4" />
    </video>
  )
}

Video.defaultProps = {
  filename: '0203a'
}

export default Video
