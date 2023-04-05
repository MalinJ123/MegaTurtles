import { useState } from 'react'
import './App.css'
import Footer from './Components/footer.jsx/'
import './footer.css'
import Header from './Components/header.jsx'
import './header.css';
import MenuPage from './Components/MenuPage'

function App() {
 
  return (
    <div className="App">
     
    <Header/>
    
    <MenuPage/> 
    <Footer />
    </div>
  )
}

export default App
