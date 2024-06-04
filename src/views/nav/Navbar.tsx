import { useState } from 'react'
import '../../index.css'
import { NavData, NavOption } from '../../model/navDataModel'
import DownArrow from '../../svg/DownArrow'
import Windows from '../../svg/Windows'
import SubItems from './SubItems'
import Button from '../Button'
import BurgerMenu from './BurgerMenu'

type LocalStateData = {
  activeOptionId: number | null
  setActiveOptionId: React.Dispatch<React.SetStateAction<number | null>>
}

const Navbar: React.FC<{ navData: NavData; localStateData: LocalStateData }> = ({
  navData,
  localStateData
}) => {
  const isActive = localStateData.activeOptionId !== null
  const [visibleSub, setVisibleSub] = useState<number | null>(null)

  const navContainerStyles = 'flex justify-between w-full'
  const menuItemStyles = 'cursor-pointer flex items-center group'
  const menuItemActiveStyles = 'text-orange-500'
  const menuItemHoverStyles = 'hover:text-orange-500'
  const iconTransitionStyles = 'transition-transform duration-500 ease-in-out'
  const rotateIconStylesWindows = `${isActive ? 'animate-rotate-and-move' : ''}`
  const rotateIconStyles = `${isActive ? 'animate-rotate-and-back' : ''}`
  const subMenuVisibleStyles = 'submenu-visible'
  const subMenuHiddenStyles = 'submenu-hidden'
  const iconRotateStyles =
    'inline-block ml-1 transition-transform duration-300 ease-in-out'

  const handleMouseEnter = (id: number) => {
    localStateData.setActiveOptionId(id)
    setVisibleSub(id)
  }

  const handleMouseLeave = () => {
    localStateData.setActiveOptionId(null)
    setVisibleSub(null)
  }

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLAnchorElement>,
    id: number,
    option: NavOption
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      if (option.subOptions.length > 0) {
        event.preventDefault() // Prevent the default anchor click behavior
      }
      handleMouseEnter(id)
    }
  }

  return (
    <nav
      id={navData.id.toString() + 'nav'}
      className={navContainerStyles}
      role="navigation"
    >
      <ul className="lg:flex hidden" role="menubar">
        {navData.options.map(option => (
          <li
            key={option.id}
            className="relative pl-8 mt-0.5"
            onMouseEnter={() => handleMouseEnter(option.id)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href={option.path}
              className={`${menuItemStyles} ${localStateData.activeOptionId === option.id ? menuItemActiveStyles : menuItemHoverStyles}`}
              aria-expanded={visibleSub === option.id}
              role="menuitem"
              tabIndex={0}
              onKeyDown={e => handleKeyDown(e, option.id, option)}
            >
              <span className="font-medium">{option.name}</span>
              <DownArrow
                className={`${iconRotateStyles} ${
                  localStateData.activeOptionId === option.id
                    ? '-rotate-180 fill-orange-500'
                    : 'group-hover:-rotate-180 group-hover:fill-orange-500'
                } ${option.subOptions.length > 0 ? 'block' : 'hidden'}`}
              />
            </a>
            <div
              className={
                option.subOptions.length > 0 && visibleSub === option.id
                  ? subMenuVisibleStyles
                  : subMenuHiddenStyles
              }
            >
              <SubItems subOptions={option.subOptions} className="left-4 p-4 z-10" />
            </div>
          </li>
        ))}
        <div className="ml-8">
          <Windows className={`cursor-pointer ${rotateIconStylesWindows}`} />
        </div>
      </ul>
      <div className="flex items-center space-x-4">
        <Button text="Log in" onClick={() => {}} />
        <div className="lg:flex cursor-pointer hidden">
          <span className="pr-4 py-2 rounded-lg font-medium">English</span>
          <DownArrow className="mt-3 -ml-2" />
        </div>
        <div className="block lg:hidden">
          <BurgerMenu navData={navData} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
