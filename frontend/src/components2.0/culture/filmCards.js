import React from 'react'
import { Link } from 'react-router-dom'


export const FilmCards = ({ film }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={film.image} alt="Placeholder image"/>
        </figure>
      </div>
      <div className="card-content">
        <Link className="subtitle" to={`/culture-films/${film._id}`}>{film.title}</Link>
        <p className="has-text-grey-darker">{film.year}</p>
      </div>
    </div>
  </div>
)




export default FilmCards
