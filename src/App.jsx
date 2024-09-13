import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import { Header } from './Container/Header'
import { ProductList } from './Container/ProductList'
import { ProductDetails } from './Container/ProductDetails'

function App() {

  return (
    <>
    <Router>
      <Switch >
      <Route path='/' exact component={ProductList} />
      <Route path='/product/:productid' exact component={ProductDetails} />
      <Route>404 Not Found</Route>
      </Switch>
    </Router>
    
    </>
  )
}

export default App
