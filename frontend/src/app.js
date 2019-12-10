import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD
import { BrowserRouter, Route } from 'react-router-dom'
=======
import { BrowserRouter, Switch, Route } from 'react-router-dom'

>>>>>>> 05b73afa425cac8b75cc912924f3836e7e161f74
// import Auth from './lib/auth'
// import SideNav from './components/SideNav'
// import Main from './components/Main'

//culture
import CultureFilms from './components2.0/culture/cultureFilms'
import CultureSingleFilms from './components2.0/culture/cultureSingleFilms'
import CultureBooks from './components2.0/culture/cultureBooks'
import CultureSingleBooks from './components2.0/culture/cultureSingleBooks'
import CultureMusic  from './components2.0/culture/cultureMusic'
import CultureSingleMusic from './components2.0/culture/cultureSingleMusic'
// import { cultureCards }  from './components/cultureCards'

//Styling
// import '@trendmicro/react-sidenav/dist/react-sidenav.css'
// import 'bulma'


import ClothesListing from './components2.0/clothing/Index'


<<<<<<< HEAD
const App = () => (
  <BrowserRouter>
    <SideNav />
    <Route path="/culture-films/:id" component={CultureSingleFilms} />
    <Route path="/culture-films" component={CultureFilms} />
    <Route path="/culture-books/:id" component={CultureSingleBooks} />
    <Route path="/culture-books" component={CultureBooks} />
    <Route path="/culture-music/:id" component={CultureSingleMusic} />
    <Route path="/culture-music" component={CultureMusic} />
  
  
    <Main />
=======
const App = () => { 
  return <BrowserRouter>
    <Switch>
      <Route exact path= '/clothing' component={ClothesListing} />
      {/* <Route exact path= '/clothing/' component={ClothesListing} />
      <Route exact path= '/clothing' component={ClothesListing} /> */}
    </Switch>
    {/* <SideNav />
    <Main /> */}
>>>>>>> 05b73afa425cac8b75cc912924f3836e7e161f74
  </BrowserRouter>
}



ReactDOM.render(
  <App />, 
  document.getElementById('root')
)