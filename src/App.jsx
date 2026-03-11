import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Heart, Search, Menu, Star, ArrowRight } from 'lucide-react'
import './App.css'

function App() {
  const products = [
    { id: 1, name: "Montre Aurora Gold", price: "299€", category: "Luxe" },
    { id: 2, name: "Casque Zenith Sound", price: "450€", category: "Audio" },
    { id: 3, name: "Sac à main Eclipse", price: "180€", category: "Mode" },
    { id: 4, name: "Lumière Solaire Home", price: "85€", category: "Maison" }
  ];

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">SHERIF SHOPPING</div>
        <div className="nav-links">
          <a href="#" className="nav-link">Accueil</a>
          <a href="#" className="nav-link">Boutique</a>
          <a href="#" className="nav-link">À propos</a>
          <div className="icons" style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
            <Search size={20} className="nav-link" />
            <ShoppingCart size={20} className="nav-link" />
            <Menu size={20} className="nav-link" />
          </div>
        </div>
      </nav>

      <main>
        <motion.section 
          className="hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>L'Élégance Redéfinie pour votre Quotidien.</h1>
          <p>Découvrez une sélection exclusive de produits premium conçus pour ceux qui exigent le meilleur.</p>
          <button className="cta-button">Découvrir la collection <ArrowRight size={18} style={{ verticalAlign: 'middle', marginLeft: '8px' }} /></button>
        </motion.section>

        <section className="products-grid">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="product-image">
                <Star size={40} color="rgba(255,255,255,0.2)" />
              </div>
              <div className="product-info">
                <span style={{ color: '#a855f7', fontSize: '0.8rem', fontWeight: 'bold' }}>{product.category}</span>
                <h3>{product.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="product-price">{product.price}</span>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Heart size={18} className="nav-link" />
                    <ShoppingCart size={18} className="nav-link" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Sherif Shopping. Créé avec passion pour une expérience unique.</p>
      </footer>
    </div>
  )
}

export default App
