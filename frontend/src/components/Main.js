
import React from 'react'
import { Route } from 'react-router-dom'
import Homepage from './Homepage'
import ArticleListing from './ArticleListing'

function Main() {
  return (
    <main>
      <Route path="/" exact={true} component={
        props => <Homepage {...props} />
      } />
      <Route path="/current" component={
        props => <ArticleListing {...props} content={{
          header: 'Current Articles'
        }} apiUrl="http://localhost:8000/api/currents" />
      } />
    </main>
  )
}

export default Main