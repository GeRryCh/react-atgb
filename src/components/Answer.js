import React from 'react'
import Loading from './Loading'

function Answer({ isBetter }) {
  if (typeof isBetter === 'undefined') { return <Loading /> }
  if (isBetter) {
    return <h1>YES</h1>
  }
  return <h1>NO</h1>
}

export default Answer;