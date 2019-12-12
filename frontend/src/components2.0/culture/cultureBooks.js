import React from 'react'
import axios from 'axios'

import BookCards from './bookCards'
//'cheeses' equivolent in cheesebored 

//list of music/albums
class CultureBooks extends React.Component {

  constructor() {
    super()
    this.state = {
      cultureBData: []
    }
  } 

  componentDidMount() {
    axios.get(('/api/culture-books'))
      .then(res => this.setState({ cultureBData: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.cultureBData)
    return <div className="section">
      <h1 className="titleOne">After a good read?</h1>
      <h2 className="titleTwo"> Our Head of Culture, Sonia, shares her must-reads..</h2>
      <div className="container">
        <div className="columns is-mobile is-multiline">
          {this.state.cultureBData.map((book, i) => {
            return <BookCards key={i} book={book}/>
          })}
        </div>
      </div>
    </div>
  }
}

export default CultureBooks
