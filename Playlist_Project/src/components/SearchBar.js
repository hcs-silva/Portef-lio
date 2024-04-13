import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <form>
            <label className='searchbar'>
                Search
                <input type="text" required name="search"/>
            </label>
        </form>
    </div>
  )
}

export default SearchBar