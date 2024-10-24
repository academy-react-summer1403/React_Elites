import React from 'react'

const SearchBar = ({setSearchValue}) => {
  return (
    <div className='w-full h-3/6 flex justify-center items-center'>
        <input type='select' placeholder='جستجو در نام اساتید...'></input>
    </div>
  )
}

export { SearchBar }