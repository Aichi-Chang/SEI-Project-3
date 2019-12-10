import React from 'react'
import axios from 'axios'

class SingleFilms extends React.Component {

  constructor() {
    super()
    this.state = {
      film: {},
      err: false
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`/api/culture-films/${id}`)
      .then(resp => this.setState({ film: resp.data }))
      .catch(err => this.setState({ err: err.response.status }))
  }

  render() {
    console.log(this.state.film)
    if (this.state.err === 404) {
      return <h1>404</h1>
    }
    return <div className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-half-tablet">
            <p className="title">
              {this.state.film.title}
            </p>
            <p className="subtitle">
              {this.state.film.year}
            </p>
            <p>
              {this.state.film.summary}
            </p>
            <p>
              {this.state.film.rating}
            </p>
          </div>
          <div className="column is-half-tablet">
            <img src={this.state.film.image} />
          </div>
        </div>
      </div>
    </div>
  }

}

export default SingleFilms