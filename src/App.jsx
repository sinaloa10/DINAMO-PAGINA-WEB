import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Navbar />
          <Home />
          <Footer /> 
          </>} />
      </Routes>
    </Router>
  )
}

export default App
