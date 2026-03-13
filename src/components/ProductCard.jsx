import { motion } from 'framer-motion'
import { Plus, Star } from 'lucide-react'

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="product-card"
    >
      <div className="image-container">
        <img src={product.image} alt={product.name} loading="lazy" />
        <div className="rating-badge">
           <Star size={14} fill="#fbbf24" stroke="#fbbf24" /> 4.9
        </div>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="price">{product.price}€</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="add-to-cart-btn"
          >
            <Plus size={18} />
            Panier
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
