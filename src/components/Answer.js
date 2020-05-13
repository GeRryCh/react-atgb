import React from 'react'
import Loading from './Loading'

function Answer({ data, className }) {
  if (typeof data === 'undefined') { return <Loading /> }
  if (data) {
    return <h1 className='f1 pos-color'>YES</h1>
  }
  return <h1 className='f1 neg-color'>NO</h1>
}

export default Answer;