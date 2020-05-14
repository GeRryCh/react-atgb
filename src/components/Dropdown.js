import React from 'react'
import Select from 'react-select'
import Error from './Error'
import './Dropdown.css'
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
      className='tl mw7 mt4 center black-color'
      classNamePrefix='react-select'
      placeholderClassName='black-color'
      options={data}
      onChange={onSelect}
      placeholder="Select a country"
    />
  )

}

export default Dropbox;