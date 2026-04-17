import './App.css'

function App() {
  return (
    <div className="app">
      <header className="hero">
        <nav className="navbar">
          <h1 className="logo">Jordan Housing</h1>

          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Listings</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="hero-label">Your housing platform in Jordan</p>
          <h2>Find apartments, rooms, and shared housing with ease</h2>
          <p className="hero-text">
            A modern platform inspired by rental marketplaces, built to help
            people in Jordan search for homes, compare listings, and connect
            with landlords or roommates faster.
          </p>

          <div className="hero-actions">
            <button className="primary-btn">Browse Listings</button>
            <button className="secondary-btn">Post a Listing</button>
          </div>
        </div>
      </header>

      <section className="features">
        <div className="section-title">
          <h3>Why use Jordan Housing?</h3>
          <p>Everything you need in one place to make finding housing easier.</p>
        </div>

        <div className="cards">
          <div className="card">
            <h4>Easy Search</h4>
            <p>
              Search for apartments, single rooms, and shared homes in different
              cities across Jordan.
            </p>
          </div>

          <div className="card">
            <h4>Trusted Listings</h4>
            <p>
              Organize property details clearly with price, location, and
              housing type in one simple view.
            </p>
          </div>

          <div className="card">
            <h4>Fast Contact</h4>
            <p>
              Contact owners or roommates directly and save time during your
              housing search.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App