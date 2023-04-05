import { useState } from 'react'
import './App.css'
import MenyPage from './Components/MenyPage'
import './Stylesheet/menyPage.css';


import Header from './Components/header.jsx'
import './header.css';
import MenuPage from './Components/MenuPage'

function App() {
 
  return (
    <div className="App">
    <Header/>
    
    <MenyPage/>
    </div>
  )
}

export default App
