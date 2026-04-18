import './App.css'
import Navbar from './component/layout/Navbar.tsx'
import HomeHeader from './component/common/HomeHeader.tsx'
import Features from './component/common/Features.tsx'

function App() {
  return (
    <div className="app">
      <header className="hero">
        <Navbar />
        <HomeHeader />
      </header>

      <Features />
    </div>
  )
}

export default App