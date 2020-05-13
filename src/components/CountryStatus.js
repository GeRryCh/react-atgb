import React from 'react'
import Loading from './Loading'
import Error from './Error'

const CountryStatus = ({ country, status, error }) => {
  //no country selected
  if (!country) { return null }
  //error fetching status
  if (error) { return <Error error={error} /> }
  //loading status
  if (status === null) { return <Loading /> }
  //status received
  switch (status) {
    case true:
      return <h1 className='f1 pos-color'>YES</h1>
    default:
      return <h1 className='f1 neg-color'>NO</h1>
  }
}

export default CountryStatus;