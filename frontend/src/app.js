import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Auth from './lib/auth'
// import SideNav from './components/SideNav'
// import Main from './components/Main'


import Home from './components2.0/commonComponents/Home'
import About from './components2.0/About'
//culture
import CultureFilms from './components2.0/culture/cultureFilms'
import CultureSingleFilms from './components2.0/culture/cultureSingleFilms'
import CultureBooks from './components2.0/culture/cultureBooks'
import CultureSingleBooks from './components2.0/culture/cultureSingleBooks'
import CultureMusic  from './components2.0/culture/cultureMusic'
import CultureSingleMusic from './components2.0/culture/cultureSingleMusic'
import ClothesListing from './components2.0/clothing/Index'

//community
import CommunityListing from './components2.0/community/Index'
import SingleCommunity from './components2.0/community/Show'

//current
import CurrentListing from './components2.0/current/currentListing'
import CurrentSingle from './components2.0/current/currentSingle'

//clothing
import SingleClothing from './components2.0/clothing/Show'
import RegisterUser from './components2.0/user/RegisterUser'
import LoginUser from './components2.0/user/LogingUser'
// import Home from './components2.0/commonComponents/Home'

import BottomNav from './components2.0/commonComponents/BottomNav' 
import './style.css'


const App = () => {

  // console.log(Auth.getToken())
  // console.log(Auth.getUser().username)
  return <BrowserRouter>

    <BottomNav />

    <Switch>
      <Route exact path= '/' component={Home} />    
      <Route exact path= '/clothing' component={ClothesListing} />
      <Route exact path= '/clothing/:id' component={SingleClothing} /> 
      <Route exact path= '/communities' component={CommunityListing} />
      <Route exact path= '/communities/:id' component={SingleCommunity} />

      <Route exact path= '/currents' component={CurrentListing} />
      <Route exact path= '/currents/:id' component={CurrentSingle} />

      <Route path="/culture-films/:id" component={CultureSingleFilms} />
      <Route path="/culture-films" component={CultureFilms} />
      <Route path="/culture-books/:id" component={CultureSingleBooks} />
      <Route path="/culture-books" component={CultureBooks} />
      <Route path="/culture-music/:id" component={CultureSingleMusic} />
      <Route path="/culture-music" component={CultureMusic} />
      <Route path="/about" component={About} />
      <Route path="/register" component={RegisterUser} />
      <Route path="/login" component={LoginUser} />
    </Switch>


  </BrowserRouter>
}



ReactDOM.render(
  <App />, 
  document.getElementById('root')
)