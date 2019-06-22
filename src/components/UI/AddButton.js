import React from 'react'
import {Link} from 'react-router-dom'

const AddButton = ({path, className}) => {  
  return (
    <Link to={path} className={`btn-floating btn-large waves-effect waves-light red bottom-right ${className}`}><i className="material-icons">add</i></Link>
  )
}

export default AddButton
