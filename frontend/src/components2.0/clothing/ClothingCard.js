import React from 'react'
import { Link } from 'react-router-dom'
import 'bulma'


const ClothingCard = ({ item }) => (
  <div className="singleImage column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <div className="card">
      <div className="card-image">
        <figure className="Image is-2by6">
          <Link to={`/clothing/${item._id}`}> <img src={item.image} alt="Placeholder image" /></Link>
        </figure>
      </div>
      <div className="card-content">
        <Link className="subtitle" to={`/clothing/${item._id}`}>{item.title}</Link>
        <p className="has-text-grey-darker">{item.brand}</p>
      </div>
    </div>
  </div>
)
export default ClothingCard