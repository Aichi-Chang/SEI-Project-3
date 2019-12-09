import React from 'react'
import axios from 'axios'

import cultureCards from './cultureCards'
//'cheeses' equivolent in cheesebored 

//list of films
class cultureFilms extends React.Component {

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
      <div className="container">
        <div className="columns is-mobile is-multiline">
          {this.state.cultureFData.map((film, i) => {
            return <cultureCards key={i} film={film}/>
          })}
        </div>
      </div>
    </div>
  }
}

export default cultureFilms
