import React from 'react'
import axios from 'axios'

import CurrentCards from './currentCards'

class CurrentListing extends React.Component {

  constructor() {
    super()
    this.state = {
      currents: []
    }
  }

  componentDidMount() {
    axios.get('/api/currents')
      .then(res => this.setState({ currents: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.currents)
    return <div className="section">
      <h1 className="titleOne">What's Current?</h1>
      <h2 className="titleTwo"> Our Head of Current, Sarah, tells us..</h2>
      <div className="container">
        <div className="titleThree">
          <div className="columns is-mobile is-multiline">
            {this.state.currents.map((current, i) => {
              return <CurrentCards key={i} current={current} />
            })}
          </div>
        </div>
      </div>
    </div>
  }
}

export default CurrentListing
