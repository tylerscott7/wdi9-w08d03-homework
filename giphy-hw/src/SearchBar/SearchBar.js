import React from 'react'
import { Input } from 'semantic-ui-react';

const SearchBar = (props) => {
    return (
      <div>
        <Input 
        fluid 
        onChange={props.handleInput.bind(this)} 
        // onSubmit={props.getGifs.bind(this)} 
        action={ { icon: 'search', onClick: props.getGifs.bind(this) } }
        icon='search' 
        placeholder='Search...' 
        name='searchText'
        />
      </div>
    )
}

export default SearchBar
