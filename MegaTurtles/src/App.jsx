import { useState } from 'react'
import './App.css'
import ContentMain from './Components/content'
import './ContentMain.css'

import Header from './Components/header.jsx'
import './header.css';
import MenuPage from './Components/MenuPage'

function App() {
 
  return (
    <div className="App">
    <Header/>
    <ContentMain />

    
    {/* <MenuPage/> */}
    </div>
  )
}

export default App
