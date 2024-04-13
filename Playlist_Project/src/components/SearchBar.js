import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <form className="search">
            <label className='searchbar'>
                Search
                <input type="text" required name="search"/>
                <input type="submit" className='button'/>
            </label>
        </form>
    </div>
  )
}

export default SearchBar