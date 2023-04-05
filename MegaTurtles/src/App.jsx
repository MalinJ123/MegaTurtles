import { useState } from 'react'
import './App.css'
import MenyPage from './Components/MenyPage'
import './Stylesheet/menyPage.css';
import Footer from './Components/footer.jsx/'
import './footer.css'
import Header from './Components/header.jsx'
import './header.css';


function App() {
 
  return (
    <div className="App">
     
    <Header/>
    
    <MenyPage/> 
    <Footer />
    </div>
  )
}

export default App
