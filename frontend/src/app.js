import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

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
import CommunityListing from './components2.0/community/Index'
import SingleCommunity from './components2.0/community/Show'
import SingleClothing from './components2.0/clothing/Show'




const App = () => {


  return <BrowserRouter>
    <Switch>
      <Route exact path= '/clothing' component={ClothesListing} />
      <Route exact path= '/clothing/:id' component={SingleClothing} /> 
      <Route exact path= '/communities' component={CommunityListing} />
      <Route exact path= '/communities/:id' component={SingleCommunity} />
      <Route path="/culture-films/:id" component={CultureSingleFilms} />
      <Route path="/culture-films" component={CultureFilms} />
      <Route path="/culture-books/:id" component={CultureSingleBooks} />
      <Route path="/culture-books" component={CultureBooks} />
      <Route path="/culture-music/:id" component={CultureSingleMusic} />
      <Route path="/culture-music" component={CultureMusic} />
    </Switch>


  </BrowserRouter>
}



ReactDOM.render(
  <App />, 
  document.getElementById('root')
)