import MainPageLayout from './views/layout/MainPageLayout'
import './App.css'
import MarketTableController from './controllers/MarketTableController'

function App() {
  return (
    <div className="min-h-screen min-w-screen bg-gray-50 bg-opacity-25 background-image">
      <MainPageLayout children={<MarketTableController />} />
    </div>
  )
}

export default App
