import { Moon, Sun, ShoppingCart } from 'lucide-react'

const Navbar = ({ theme, toggleTheme, cartCount, onOpenCart }) => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">SHERIF SHOPPING</a>
      <div className="nav-actions">
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Changer de thème">
          {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
        </button>
        <div className="cart-icon-wrapper" onClick={onOpenCart} style={{ cursor: 'pointer' }}>
          <ShoppingCart size={24} />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
