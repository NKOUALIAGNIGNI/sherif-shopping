import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { products } from './data'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PressingBanner from './components/PressingBanner'
import FilterBar from './components/FilterBar'
import ProductCard from './components/ProductCard'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')
  const [filter, setFilter] = useState('all')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter)

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta)
        return { ...item, quantity: newQty }
      }
      return item
    }))
  }

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className="app-main">
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />
      
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
                onAddToCart={addToCart} 
              />
            ))}
          </AnimatePresence>
        </section>
      </main>

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />

      <Footer />
    </div>
  )
}

export default App
