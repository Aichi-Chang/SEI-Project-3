import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
// import Auth from './lib/auth'
import SideNav from './components/SideNav'
import Main from './components/Main'

//culture
import CultureFilms from './components2.0/culture/cultureFilms'
import CultureSingleFilms from './components2.0/culture/cultureSingleFilms'
import CultureBooks from './components2.0/culture/cultureBooks'
import CultureSingleBooks from './components2.0/culture/cultureSingleBooks'
import CultureMusic  from './components2.0/culture/cultureMusic'
import CultureSingleMusic from './components2.0/culture/cultureSingleMusic'
// import { cultureCards }  from './components/cultureCards'

//Styling
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import 'bulma'


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
  </BrowserRouter>
)



ReactDOM.render(<App />, document.getElementById('root'))