import React from 'react'
import axios from 'axios'

import cultureCards from './cultureCards'
//'cheeses' equivolent in cheesebored 

//list of music/albums
class cultureBooks extends React.Component {

  constructor() {
    super()
    this.state = {
      cultureBData: []
    }
  } '/culture-musics/:id'

  componentDidMount() {
    axios.get((`/api/culture-book/${id}`))
      .then(res => this.setState({ cultureBData: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.cultureBData)
    return <div className="section">
      <div className="container">
        <div className="columns is-mobile is-multiline">
          {this.state.cultureBData.map((book, i) => {
            return <bookCards key={i} book={book}/>
          })}
        </div>
      </div>
    </div>
  }
}

export default cultureBooks
