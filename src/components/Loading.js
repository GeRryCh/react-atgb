import React from 'react'
import ReactLoading from 'react-loading'

function Loading() {
  return (
    <ReactLoading
      type='spinningBubbles'
      color='#555555'
      className='center mv3'
      height='32px'
      width='32px' />
  )
}

export default Loading;