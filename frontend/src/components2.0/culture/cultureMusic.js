import React from 'react'
import axios from 'axios'
import MusicCards from './musicCards'
//'cheeses' equivolent in cheesebored 

//list of music/albums
class CultureMusic extends React.Component {

  constructor() {
    super()
    this.state = {
      cultureMData: []
    }
  }

  componentDidMount() {
    axios.get('/api/culture-music')
      .then(res => this.setState({ cultureMData: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.cultureMData)
    return <div className="section">
    <h1 className="titleOne">What should you be listening to?</h1>
      <h2 className="titleTwo"> Our Head of Culture, Sonia, gives us the low down..</h2>
      <div className="container">
        <div className="columns is-mobile is-multiline">
          {this.state.cultureMData.map((musicAlbum, i) => {
            return <MusicCards key={i} musicAlbum={musicAlbum}/>
          })}
        </div>
      </div>
    </div>
  }
}

export default CultureMusic
