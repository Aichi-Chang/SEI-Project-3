import React from 'react'
import axios from 'axios'

class CurrentSingle extends React.Component {

  constructor() {
    super()
    this.state = {
      current: {},
      err: false
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`/api/currents/${id}`)
      .then(resp => this.setState({ current: resp.data }))
      .catch(err => this.setState({ err: err.response.status }))
  }

  render() {
    console.log(this.state.current)
    // If there's a 404 error, return a 404 page
    if (this.state.err === 404) {
      return <h1>404</h1>
    }
    return <div className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-half-tablet">
            <p className="title">
              {this.state.current.title}
            </p>
            <p className="subtitle">
              {this.state.current.text}
            </p>
            <p>
              {this.state.current.author}
            </p>
          </div>
          <div className="column is-half-tablet">
            <img src={this.state.current.image} />
          </div>
        </div>
      </div>
    </div>
  }

}

export default CurrentSingle