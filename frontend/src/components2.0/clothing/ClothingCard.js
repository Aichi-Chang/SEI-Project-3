import React from 'react'
import { Link } from 'react-router-dom'

const ClothingCard = ({ clothes }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <div className="card">
      <div className="card-image">
        <figure className="image is-5by4">
          <img src={clothes.image} alt="Placeholder image"/>
        </figure>
      </div>
      <div className="card-content">
        <Link className="subtitle" to={`/clothing/${clothes._id}`}>{clothes.name}</Link>
        <p className="has-text-grey-darker">{clothes.brand}</p>
      </div>
    </div>
  </div>
)
export default ClothingCard