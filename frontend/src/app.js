import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'

const App = () => {

  // const [data, setData] = useState({
  //   name: ''
  // })

  return <section className="hero has-text-centered is-large">
    <div className="hero-body">
      <div className="container">
        <img src="" alt="Logo" />
        <h1 className="title">The Vault</h1>
        <h2 className="subtitle">Unlock your lifestyle...</h2>
      </div>
    </div>
  </section>

}


ReactDOM.render(<App />, document.getElementById('root'))