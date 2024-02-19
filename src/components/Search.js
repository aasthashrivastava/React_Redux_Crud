import React from 'react'

const Search = ({searchValue,handleSearchTodo}) => {
  return (
    <div>
     <input type='search' placeholder='🔎 Search here....'
      className='border p-1 w-80 rounded-sm'
      value={searchValue}
      onChange={(e)=>handleSearchTodo(e.target.value)}
      />
    </div>
  )
}

export default Search