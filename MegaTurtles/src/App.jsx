import { useState } from 'react'
import './App.css'
import ContentMain from './Components/content'
import './ContentMain.css'
import MenyPage from './Components/MenyPage'
import './Stylesheet/menyPage.css';
import Footer from './Components/footer.jsx/'
import './footer.css'
import Header from './Components/header.jsx'
import './header.css';
import './mermat.css';
import MyForm from './Components/mermat'

function App() {
 
  return (
    <div className="App">
     
    <Header/>
    {/* <ContentMain /> */}
    <MyForm/>
     {/* <MenyPage/>  */}
    <Footer />
    </div>
  )
}

export default App
