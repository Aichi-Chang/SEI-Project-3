import React from 'react'
import { Link } from 'react-router-dom'

export const BookCards = ({ book }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={book.image} alt="Placeholder image"/>
        </figure>
      </div> 
      <div className="card-content">
        <Link className="subtitle" to={`/culture-books/${book._id}`}>{book.title}</Link>
        <p className="has-text-grey-darker">{book.author}</p>
      </div>
    </div>
  </div>
)
export default BookCards