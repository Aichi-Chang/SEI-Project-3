import React from 'react'
import axios from 'axios'

class SingleMusic extends React.Component {

  constructor() {
    super()
    this.state = {
      musicAlbum: {},
      err: false
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`/api/culture-music/${id}`)
      .then(resp => this.setState({ musicAlbum: resp.data }))
      .catch(err => this.setState({ err: err.response.status }))
  }

  render() {
    console.log(this.state.musicAlbum)
    if (this.state.err === 404) {
      return <h1>404</h1>
    }
    return <div className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-half-tablet">
            <p className="title">
              {this.state.musicAlbum.album}
            </p>
            <p className="subtitle">
              {this.state.musicAlbum.artist}
            </p>
            <p>
              {this.state.musicAlbum.year}
            </p>
            <p>
              {this.state.musicAlbum.summary}
            </p>
            <p>
              {this.state.musicAlbum.rating}
            </p>
          </div>
          <div className="column is-half-tablet">
            <img src={this.state.musicAlbum.image} />
          </div>
        </div>
      </div>
    </div>
  }

}

export default SingleMusic