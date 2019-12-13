
import React from 'react'
import { Link } from 'react-router-dom'

export const MusicCards = ({ musicAlbum }) => (
  <div className="singleImage column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by4">
          <Link to={`/culture-music/${musicAlbum._id}`}><img src={musicAlbum.image} alt="Placeholder image"/></Link> 
        </figure>
      </div>
      {/* <div className="card-content">
        <Link className="subtitle" to={`/culture-music/${musicAlbum._id}`}>{musicAlbum.album}</Link>
        <p className="has-text-grey-darker">{musicAlbum.artist}</p>
      </div> */}
    </div>
  </div>
)

export default MusicCards
