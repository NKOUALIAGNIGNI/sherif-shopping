import { motion } from 'framer-motion'
import { Wind, ShieldCheck, Sparkles, Shirt, Truck, Clock } from 'lucide-react'

const services = [
  {
    id: 1,
    title: "Nettoyage à sec",
    desc: "Pour vos costumes et tissus délicats.",
    icon: <Wind size={32} />,
    color: "#3b82f6"
  },
  {
    id: 2,
    title: "Repassage",
    desc: "Un fini impeccable sans aucun pli.",
    icon: <Shirt size={32} />,
    color: "#6366f1"
  },
  {
    id: 3,
    title: "Traitement des Taches",
    desc: "Expertise sur les taches tenaces.",
    icon: <Sparkles size={32} />,
    color: "#f43f5e"
  },
  {
    id: 4,
    title: "Textiles Délicats",
    desc: "Soie, laine et dentelle traitées avec soin.",
    icon: <ShieldCheck size={32} />,
    color: "#ec4899"
  }
]

const PressingServices = () => {
  return (
    <section className="pressing-services">
      <div className="section-header">
        <span className="badge">NOS PRESTATIONS</span>
        <h2>Soin Premium pour vos Vêtements</h2>
        <p>Efficacité, Propreté et Rapidité pour tous vos textiles.</p>
      </div>

      <div className="services-list">
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="service-card-premium"
          >
            <div className="service-icon-wrapper" style={{ '--icon-color': service.color }}>
              {service.icon}
            </div>
            <div className="service-info">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="features-row">
        <div className="feature-item">
          <Truck size={24} className="feature-icon" />
          <div>
            <h4>Collecte</h4>
            <p>À domicile</p>
          </div>
        </div>
        <div className="feature-item">
          <Clock size={24} className="feature-icon" />
          <div>
            <h4>Express</h4>
            <p>Sous 24h</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PressingServices
