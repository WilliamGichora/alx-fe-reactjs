import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './Footer'

function App() {
 

  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Services' element={<Services />} />
        <Route path='Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
