import React from 'react'

function Answer({ isBetter }) {
  if (typeof isBetter === 'undefined') { return null }
  if (isBetter) {
    return <h1>YES</h1>
  }
  return <h1>NO</h1>
}

export default Answer;