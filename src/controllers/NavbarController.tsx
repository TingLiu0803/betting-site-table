import useNav from '../hooks/useNav'
import Windows from '../svg/Windows'
import Navbar from '../views/nav/Navbar'

const NavbarController = () => {
  const { navData, loading, error, activeOptionId, setActiveOptionId } = useNav()
  const localStateData = { activeOptionId, setActiveOptionId }

  if (loading || !navData)
    return (
      <div className="flex items-center justify-center">
        <Windows className="cursor-pointer animate-rotate-and-move" />
      </div>
    )

  if (error) return <div>Error: {error}</div>

  return <Navbar navData={navData} localStateData={localStateData} />
}

export default NavbarController
