import { useState } from 'react'
import { useData } from '../hooks/useData'
import MarketTable from '../views/table/MarketTable'
import Filter from '../views/table/Filter'
import Search from '../views/table/Search'

const MarketTableController = () => {
  const { props, alternates, loading, setProps } = useData()
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    position: '',
    statType: '',
    status: ''
  })

  const getFilteredData = () => {
    return props
      .map(prop => {
        const relevantAlternates = alternates.filter(
          alt => alt.playerId === prop.playerId && alt.statType === prop.statType
        )

        const lowLine = Math.min(...relevantAlternates.map(alt => alt.line))
        const highLine = Math.max(...relevantAlternates.map(alt => alt.line))

        const optimalLineExists = relevantAlternates.some(alt => alt.line === prop.line)
        const probabilitiesMet = relevantAlternates.some(
          alt =>
            alt.line === prop.line &&
            (alt.underOdds > 0.4 || alt.overOdds > 0.4 || alt.pushOdds > 0.4)
        )

        const isSuspended =
          prop.marketSuspended === 1 || !optimalLineExists || !probabilitiesMet

        return {
          ...prop,
          lowLine,
          highLine,
          isSuspended
        }
      })
      .filter(prop => {
        return (
          (filters.position ? prop.position === filters.position : true) &&
          (filters.statType ? prop.statType === filters.statType : true) &&
          (filters.status
            ? filters.status === 'suspended'
              ? prop.isSuspended
              : !prop.isSuspended
            : true) &&
          (prop.playerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prop.teamAbbr.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      })
  }

  const filteredData = getFilteredData()

  const toggleSuspension = (playerId: number, statType: string) => {
    if (
      window.confirm(
        `Are you sure you want to change the suspension status for this market?`
      )
    ) {
      setProps(prevProps =>
        prevProps.map(prop => {
          if (prop.playerId === playerId && prop.statType === statType) {
            const newSuspensionStatus = prop.marketSuspended === 1 ? 0 : 1
            return { ...prop, marketSuspended: newSuspensionStatus }
          }
          return prop
        })
      )
    }
  }
  console.log(props && props[11] && props[11].marketSuspended)
  console.log(filteredData && filteredData[11] && filteredData[11].isSuspended)

  if (loading) {
    return <div className="flex items-center justify-center">Loading...</div>
  }

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-white shadow">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Filter
          filters={filters}
          onFilterChange={(key, value) => setFilters(prev => ({ ...prev, [key]: value }))}
        />
      </div>
      <MarketTable data={filteredData} onToggleSuspension={toggleSuspension} />
    </>
  )
}

export default MarketTableController
