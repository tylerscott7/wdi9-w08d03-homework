import React from 'react'
import GifItem from './GifItem/GifItem'

const GifList = (props) => {
  // Here we need to map out all the gifs...
  const gifList = props.gifs.map((gif) => {
    return (
      <div key={gif.id} style={{"display": "inline-block"}}>
        <GifItem url={gif.images.original.url} />
      </div>
    )
  })

    return (
      <div>
        {gifList}
      </div>
    )
}

export default GifList
