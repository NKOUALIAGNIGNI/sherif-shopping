import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const PressingBanner = ({ onExplore }) => {
  return (
    <section className="campaign-banner">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="campaign-card"
      >
        <div className="campaign-content">
          <span className="badge">NOUVEAU SERVICE</span>
          <h2>Votre linge, notre priorité. <Sparkles className="inline-icon" size={28} /></h2>
          <p>Découvrez notre service de Pressing Premium. Un soin délicat pour vos tissus les plus précieux, une finition irréprochable.</p>
          <button onClick={onExplore} className="campaign-btn">Explorer le Pressing</button>
        </div>
        <div className="campaign-image">
          <img src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800" alt="Pressing Premium" />
        </div>
      </motion.div>
    </section>
  )
}

export default PressingBanner
