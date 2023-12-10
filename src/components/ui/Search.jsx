import React from 'react'

export const Search = ({textSearch,onChangeSeach}) => {
  return (
    <div className="col-sm-6">
        <input type="search"
         className=" form-control form-control-dark text-dark" 
         placeholder="Search..." aria-label="Search" onChange={onChangeSeach}/>
    </div>
  )
}
