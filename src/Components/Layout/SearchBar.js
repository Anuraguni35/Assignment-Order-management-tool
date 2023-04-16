import React from 'react'
import "./SearchBar.css"
export default function SearchBar({SearchResult,setSearchResult}) {
  
  return (
    <div>
      <input type="text" value={SearchResult} className='SearchBar' placeholder='Search by name,email or role' onChange={(e)=>{setSearchResult(e.target.value.toLocaleLowerCase())}} />
    </div>
  )
}
    