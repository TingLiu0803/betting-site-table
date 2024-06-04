import { useEffect, useState } from 'react'
import { Prop, Alternate } from '../model/tableModel'

export const useData = () => {
  const [props, setProps] = useState<Prop[]>([])
  const [alternates, setAlternates] = useState<Alternate[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('/props.json').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      }),
      fetch('/alternates.json').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
    ])
      .then(([propsData, alternatesData]) => {
        const typedPropsData: Prop[] = propsData as Prop[]
        const typedAlternatesData: Alternate[] = alternatesData as Alternate[]

        // Process props with suspension rules
        const updatedProps = typedPropsData.map((prop: Prop) => {
          const relevantAlternates = typedAlternatesData.filter(
            (alt: Alternate) =>
              alt.playerId === prop.playerId && alt.statType === prop.statType
          )

          const optimalLineExists = relevantAlternates.some(
            (alt: Alternate) => alt.line === prop.line
          )

          const probabilitiesMet = relevantAlternates.some(
            (alt: Alternate) =>
              alt.line === prop.line &&
              (alt.underOdds > 0.4 || alt.overOdds > 0.4 || alt.pushOdds > 0.4)
          )

          const isSuspended =
            prop.marketSuspended === 1 || !optimalLineExists || !probabilitiesMet

          return { ...prop, marketSuspended: isSuspended ? 1 : 0 }
        })

        setProps(updatedProps)
        setAlternates(typedAlternatesData)
        setLoading(false)
      })
      .catch(error => {
        console.error('Failed to fetch data:', error)
        setLoading(false)
      })
  }, [])

  return { props, alternates, loading, setProps, setAlternates }
}
