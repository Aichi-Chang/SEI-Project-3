import React from 'react'
import axios from 'axios'

import cultureCards from './cultureCards'
//'cheeses' equivolent in cheesebored 

//list of music/albums
class cultureMusic extends React.Component {

  constructor() {
    super()
    this.state = {
      cultureMData: []
    }
  }

  componentDidMount() {
    axios.get(('/api/culture-music'))
      .then(res => this.setState({ cultureMData: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.cultureMData)
    return <div className="section">
      <div className="container">
        <div className="columns is-mobile is-multiline">
          {this.state.cultureMData.map((musicAlbum, i) => {
            return <musicCards key={i} musicAlbum={musicAlbum}/>
          })}
        </div>
      </div>
    </div>
  }
}

export default cultureMusic
