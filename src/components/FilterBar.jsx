const FilterBar = ({ filter, setFilter }) => {
  const categories = [
    { id: 'all', label: 'Tout' },
    { id: 'homme', label: 'Homme' },
    { id: 'femme', label: 'Femme' },
    { id: 'enfant', label: 'Enfant' },
    { id: 'pressing', label: 'Pressing ✨' },
    { id: "L'Équipe", label: 'L\'Équipe' }
  ]

  return (
    <div className="category-nav">
      {categories.map((cat) => (
        <button 
          key={cat.id}
          onClick={() => setFilter(cat.id)}
          className={`category-btn ${filter === cat.id ? 'active' : ''}`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}

export default FilterBar
