import React from 'react'

interface FilterProps {
  filters: {
    position: string
    statType: string
    status: string
  }
  onFilterChange: (filterKey: keyof FilterProps['filters'], value: string) => void
}

const FILTER_OPTIONS = {
  position: [
    { value: 'PG', label: 'Point Guard (PG)' },
    { value: 'SG', label: 'Shooting Guard (SG)' },
    { value: 'SF', label: 'Small Forward (SF)' },
    { value: 'PF', label: 'Power Forward (PF)' },
    { value: 'C', label: 'Center (C)' }
  ],
  statType: [
    { value: 'points', label: 'Points' },
    { value: 'rebounds', label: 'Rebounds' },
    { value: 'assists', label: 'Assists' },
    { value: 'steals', label: 'Steals' }
  ],
  status: [
    { value: 'active', label: 'Active' },
    { value: 'suspended', label: 'Suspended' }
  ]
}

const Filter: React.FC<FilterProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="flex gap-4">
      {Object.keys(filters).map(key => (
        <select
          key={key}
          className="form-select rounded-lg border-2 border-orange-500 p-2 shadow-md focus:border-orange-600 focus:ring focus:ring-orange-300 focus:ring-opacity-50 transition duration-200 ease-in-out cursor-pointer"
          value={filters[key as keyof typeof filters]}
          onChange={e => onFilterChange(key as keyof typeof filters, e.target.value)}
        >
          <option value="">{`All ${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}`}</option>
          {FILTER_OPTIONS[key as keyof typeof FILTER_OPTIONS].map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ))}
    </div>
  )
}

export default Filter
