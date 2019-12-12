import React from 'react'
import { Link } from 'react-router-dom'

// All the css we've used so far is bulma classes. See https://bulma.io/documentation/
// for more info
const CurrentCards = ({ current }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <div className="card">
      <div className="card-image">
        <figure className="image is-5by5">
          <img src={current.image} alt="Placeholder image"/>
        </figure>
      </div>
      <div className="card-content">
        <Link className="subtitle" to={`/currents/${current._id}`}>{current.title}</Link>
        {/* <p className="has-text-grey-darker">{current.text}</p> */}
        {/* <p className="has-text-grey-darker">{current.author}</p> */}
      </div>
    </div>
  </div>
)

export default CurrentCards