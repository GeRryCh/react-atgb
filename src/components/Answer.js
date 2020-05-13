import React from 'react'
import Loading from './Loading'

function Answer({ isBetter, className }) {
  if (typeof isBetter === 'undefined') { return <Loading /> }
  if (isBetter) {
    return <h1 className='f1 pos-color'>YES</h1>
  }
  return <h1 className='f1 neg-color'>NO</h1>
}

export default Answer;