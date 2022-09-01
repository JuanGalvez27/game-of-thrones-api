import React from 'react'
import './MainCard.css'

const MainCard = ({ book }) => {
  return (
    <div className='main-card'>
      <h2>{book.name}</h2>

      <ul>{book.authors.map((e) => {
        return (
        <li>{e}</li>
        )
      })}
      </ul> 
      <p>{book.numberOfPages}</p>
      <p>{book.country}</p>
      <p>{book.released}</p>

    </div>
  )
}

export default MainCard