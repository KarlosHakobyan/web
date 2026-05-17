const stats = [
  {
    value: '4+',
    label: 'Years Experience',
  },

  {
    value: '20+',
    label: 'Projects',
  },

  {
    value: '10+',
    label: 'Certificates',
  },
]

const Stats = () => {
  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="stat-card"
        >
          <h3>{stat.value}</h3>

          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  )
}

export default Stats