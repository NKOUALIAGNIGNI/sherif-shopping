import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react'

const CartDrawer = ({ isOpen, onClose, cartItems, updateQuantity, removeItem }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const checkoutWhatsApp = () => {
    const phone = "237690798604"
    const itemsList = cartItems.map(item => `- ${item.name} (x${item.quantity}) : ${item.price * item.quantity}€`).join('\n')
    const message = encodeURIComponent(`Bonjour Sherif Shopping, je souhaite commander :\n${itemsList}\n\nTotal: ${total}€`)
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="cart-overlay"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="cart-drawer"
          >
            <div className="cart-header">
              <div className="cart-title">
                <ShoppingBag size={24} />
                <h2>Votre Panier</h2>
              </div>
              <button onClick={onClose} className="close-btn"><X size={24} /></button>
            </div>

            <div className="cart-content">
              {cartItems.length === 0 ? (
                <div className="empty-cart">
                  <p>Votre panier est vide</p>
                  <button onClick={onClose} className="continue-btn">Continuer mes achats</button>
                </div>
              ) : (
                <div className="cart-items">
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} />
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <p className="item-price">{item.price}€</p>
                        <div className="quantity-controls">
                          <button onClick={() => updateQuantity(item.id, -1)}><Minus size={14} /></button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></button>
                        </div>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="remove-btn">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total</span>
                  <span>{total}€</span>
                </div>
                <button onClick={checkoutWhatsApp} className="checkout-btn">
                  Commander sur WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartDrawer
