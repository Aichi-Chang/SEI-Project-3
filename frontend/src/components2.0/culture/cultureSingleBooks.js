import React from 'react'
import axios from 'axios'

class SingleBooks extends React.Component {

  constructor() {
    super()
    this.state = {
      book: {},
      err: false
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`/api/culture-books/${id}`)
      .then(resp => this.setState({ book: resp.data }))
      .catch(err => this.setState({ err: err.response.status }))
  }

  render() {
    console.log(this.state.book)
    if (this.state.err === 404) {
      return <h1>404</h1>
    }
    return <div className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-half-tablet">
            <p className="title">
              {this.state.book.title}
            </p>
            <p className="subtitle">
              {this.state.book.author}
            </p>
            <p>
              {this.state.book.review}
            </p>
          </div>
          <div className="column is-half-tablet">
            <img src={this.state.book.image} />
          </div>
        </div>
      </div>
    </div>
  }

}

export default SingleBooks