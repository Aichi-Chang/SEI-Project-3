import React from 'react'
import axios from 'axios'

import FilmCards from './filmCards'
//'cheeses' equivolent in cheesebored 

//list of films
class CultureFilms extends React.Component {

  constructor() {
    super()
    this.state = {
      cultureFData: []
    }
  }

  componentDidMount() {
    axios.get(('/api/culture-films'))
      .then(res => this.setState({ cultureFData: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.cultureFData)
    return <div className="section">
      <h1 className="titleOne">After Cult Classics?</h1>
      <h2 className="titleTwo"> Our Head of Culture, Sonia, shares her faves..</h2>
      <div className="container">
        <div className="img columns is-mobile is-multiline">
          {this.state.cultureFData.map((film, i) => {
            return <FilmCards key={i} film={film}/>
          })}
        </div>
      </div>
    </div>
  }
}

export default CultureFilms
