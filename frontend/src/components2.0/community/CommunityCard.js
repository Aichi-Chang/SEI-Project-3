import React from 'react'
import { Link } from 'react-router-dom'
import 'bulma'


const ClothingCard = ({ article }) => (
  <div className="singleImage column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <div className="card">
      <div className="card-image">
        <figure className="image is-2by6">
          <Link to={`/communities/${article._id}`}><img src={article.image} alt="Placeholder image"/></Link> 
        </figure>
      </div>
      <div className="card-content">
        <Link className="subtitle" to={`/communities/${article._id}`}>{article.title}</Link>
        <p className="has-text-grey-darker">{article.brand}</p>
      </div>
    </div>
  </div>
)
export default ClothingCard