import React from 'react'
import {Link} from 'react-router-dom'

const AddButton = ({path, newClasses}) => {  
  return (
    <Link to={path} className={"btn-floating btn-large waves-effect waves-light red bottom-right " + newClasses}><i className="material-icons">add</i></Link>
  )
}

export default AddButton
