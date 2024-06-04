const Burger = ({ className = '' }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 20 20" className="menu w-6 h-6">
        <path
          fillRule="evenodd"
          d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  )
}

export default Burger
