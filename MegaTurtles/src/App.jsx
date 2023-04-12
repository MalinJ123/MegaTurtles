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
import '../src/Stylesheet/mermat.css';
import AdminPage from './Components/mermat'
import AdminLogin from './Components/adminlogin';
import '../src/Stylesheet/adminlogin.css'
import UserForm from './Components/Userform'
import './Stylesheet/userForm.css'


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);

  };

  return (
    <div className="App">
     
    <Header cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart}/>
    {/* <ContentMain/> */}
    {/* <UserForm /> */}
    <AdminPage/>
    {/* <MenyPage cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} /> */}
    <Footer />
    </div>
  );
}


export default App
