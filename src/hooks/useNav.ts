import { useState, useEffect } from 'react'
import { NavData } from '../model/navDataModel'

const useNav = () => {
  const [navData, setNavData] = useState<NavData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeOptionId, setActiveOptionId] = useState<number | null>(null) // New state for managing hover

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/navData.json')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setNavData(data)
      } catch (error) {
        console.error('Failed to fetch navigation data:', error)
        setError('Failed to fetch navigation data: ' + error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { navData, loading, error, activeOptionId, setActiveOptionId }
}

export default useNav
