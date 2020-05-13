import React from 'react'
import Select from 'react-select'
import Error from './Error'
import Loading from './Loading';

const Dropbox = ({ data, onSelect, error }) => {
  if (!data && error) {
    return <Error error={error} />
  }
  if (!data) {
    return <Loading />
  }
  return (
    <Select
      className='tl mt4 measure center black-color'
      placeholderClassName='mv1-l black-color'
      arrowClassName='mv1-l'
      options={data}
      onChange={onSelect}
      placeholder="Select a country"
    />
  )

}

export default Dropbox;