import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Moon, Sun, MessageCircle, ChevronRight, Star } from 'lucide-react'
import { products } from './data'
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
    const phone = "237656058437"
    const message = encodeURIComponent(`Bonjour Sherif Shopping, je suis intéressé par l'article : ${productName}`)
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  return (
    <div className="app-main">
      <nav className="navbar">
        <a href="#" className="logo">SHERIF SHOPPING</a>
        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Changer de thème">
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
          </button>
          <ShoppingCart size={24} />
        </div>
      </nav>

      <section className="hero-compact" style={{textAlign: 'center', padding: '4rem 5%'}}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{fontSize: '3rem', margin: '0'}}
        >
          Luxe & Style pour tous.
        </motion.h1>
        <p style={{color: 'var(--text-muted)'}}>Inspiré par Amazon, conçu pour l'élégance.</p>
      </section>

      <div className="category-nav">
        {['all', 'homme', 'femme', 'enfant'].map((cat) => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={`category-btn ${filter === cat ? 'active' : ''}`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <main className="products-grid">
        <AnimatePresence mode='popLayout'>
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="product-card"
            >
              <div className="image-container">
                <img src={product.image} alt={product.name} />
                <div style={{position: 'absolute', top: 15, right: 15, background: 'rgba(0,0,0,0.5)', padding: '5px 10px', borderRadius: '50px', color: 'white', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem'}}>
                   <Star size={14} fill="#fbbf24" stroke="#fbbf24" /> 4.9
                </div>
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <p style={{fontSize: '0.9rem', color: 'var(--text-muted)', height: '40px'}}>{product.description}</p>
                <div className="product-footer">
                  <span className="price">{product.price}€</span>
                  <button 
                    onClick={() => contactWhatsApp(product.name)}
                    className="whatsapp-btn"
                  >
                    <MessageCircle size={18} fill="white" />
                    Commander
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </main>

      <footer style={{textAlign: 'center', padding: '3rem', borderTop: '1px solid var(--border)'}}>
        <p>&copy; 2026 Sherif Shopping - Boutique Officielle</p>
      </footer>
    </div>
  )
}

export default App
