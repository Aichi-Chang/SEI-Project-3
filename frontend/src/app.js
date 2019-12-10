import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import Auth from './lib/auth'
// import SideNav from './components/SideNav'
// import Main from './components/Main'

//Styling
// import '@trendmicro/react-sidenav/dist/react-sidenav.css'
// import 'bulma'


import ClothesListing from './components2.0/clothing/Index'


const App = () => { 
  return <BrowserRouter>
    <Switch>
      <Route exact path= '/clothing' component={ClothesListing} />
      {/* <Route exact path= '/clothing/' component={ClothesListing} />
      <Route exact path= '/clothing' component={ClothesListing} /> */}
    </Switch>
    {/* <SideNav />
    <Main /> */}
  </BrowserRouter>
}



ReactDOM.render(
  <App />, 
  document.getElementById('root')
)