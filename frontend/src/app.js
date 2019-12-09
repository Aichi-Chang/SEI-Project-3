import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import Auth from './lib/auth'
import SideNav from './components/SideNav'
import Main from './components/Main'

//Styling
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import 'bulma'


const App = () => (
  <BrowserRouter>
    <SideNav />
    <Main />
  </BrowserRouter>
)



ReactDOM.render(<App />, document.getElementById('root'))