import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-compact">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Luxe & Style pour tous.
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{color: 'var(--text-muted)', fontSize: '1.2rem', marginTop: '1rem'}}
      >
        Inspiré par l'élégance, conçu pour votre quotidien.
      </motion.p>
    </section>
  )
}

export default Hero
