import { useState } from 'react'
import './App.css'
import Header from './Components/header.jsx'
import './header.css';
import MenuPage from './Components/MenuPage'

function App() {
 
  return (
    <div className="App">
    <Header/>
    
    <MenuPage/>
    </div>
  )
}

export default App
