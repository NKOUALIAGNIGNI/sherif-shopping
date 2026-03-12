import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { products } from './data'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PressingBanner from './components/PressingBanner'
import FilterBar from './components/FilterBar'
import ProductCard from './components/ProductCard'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter)

  const contactWhatsApp = (productName) => {
    const phone = "237690798604"
    const message = encodeURIComponent(`Bonjour Sherif Shopping, je suis intéressé par l'article : ${productName}`)
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  return (
    <div className="app-main">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        
        <PressingBanner onExplore={() => setFilter('pressing')} />

        <FilterBar filter={filter} setFilter={setFilter} />

        <section className="products-grid">
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                contactWhatsApp={contactWhatsApp} 
              />
            ))}
          </AnimatePresence>
        </section>
      </main>

      <footer style={{textAlign: 'center', padding: '3rem', borderTop: '1px solid var(--border)', color: 'var(--text-muted)'}}>
        <p>&copy; 2026 Sherif Shopping - Boutique Officielle</p>
      </footer>
    </div>
  )
}

export default App
