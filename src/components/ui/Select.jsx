import React from 'react'

export const Select = ({options, onClickSelect}) => {
  return (
    <div className="col-sm-4">  
        <select className="form-select" onClick={onClickSelect}>
          <option defaultValue={true}>Selecciona una Categoria</option>
          {options.map((option,index) =>(
            <option key={index}>{option.name}</option>
          ))} 
        </select>
    </div>
  )
}
