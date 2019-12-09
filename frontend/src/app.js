import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
// import Auth from './lib/auth'
import SideNav from './components/SideNav'
import Main from './components/Main'

//culture
// import { musicCards }  from './components/cultureCards'
// import { bookCards }  from './components/cultureCards'
// import { cultureCards }  from './components/cultureCards'

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