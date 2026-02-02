import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import KitDetail from './pages/KitDetail'
import Cart from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kit/:slug" element={<KitDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
