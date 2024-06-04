import React from 'react'

interface MarketTableProps {
  data: {
    playerName: string
    teamAbbr: string
    position: string
    statType: string
    line: number
    lowLine: number
    highLine: number
    marketSuspended: number
    playerId: number
  }[]
  onToggleSuspension: (playerId: number, statType: string) => void
}

const MarketTable: React.FC<MarketTableProps> = ({ data, onToggleSuspension }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 px-6 text-left">Player</th>
            <th className="py-3 px-6 text-left">Team</th>
            <th className="py-3 px-6 text-left">Position</th>
            <th className="py-3 px-6 text-left">Stat Type</th>
            <th className="py-3 px-6 text-left">Optimal Line</th>
            <th className="py-3 px-6 text-left">Low Line</th>
            <th className="py-3 px-6 text-left">High Line</th>
            <th className="py-3 px-6 text-left">Suspended</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="py-3 px-6 text-left">{item.playerName}</td>
              <td className="py-3 px-6 text-left">{item.teamAbbr}</td>
              <td className="py-3 px-6 text-left">{item.position}</td>
              <td className="py-3 px-6 text-left">{item.statType}</td>
              <td className="py-3 px-6 text-left">{item.line}</td>
              <td className="py-3 px-6 text-left">{item.lowLine}</td>
              <td className="py-3 px-6 text-left">{item.highLine}</td>
              <td className="py-3 px-6 text-left">
                <button
                  onClick={() => onToggleSuspension(item.playerId, item.statType)}
                  className={`px-4 py-2 rounded-full text-white ${item.marketSuspended === 1 ? 'bg-red-500' : 'bg-green-500'}`}
                >
                  {item.marketSuspended === 1 ? 'Suspended' : 'Active'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MarketTable
