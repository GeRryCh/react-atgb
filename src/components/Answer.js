import React from 'react'
import Loading from './Loading'

function Answer({ isBetter, className }) {
  if (typeof isBetter === 'undefined') { return <Loading /> }
  if (isBetter) {
    return <h1 className={className + ' yes'}>YES</h1>
  }
  return <h1 className={className + ' no'}>NO</h1>
}

export default Answer;