import React, { useState } from 'react'
import { NavData } from '../../model/navDataModel'
import Burger from '../../svg/Burger'
import DownArrow from '../../svg/DownArrow'

const BurgerMenu: React.FC<{ navData: NavData }> = ({ navData }) => {
  const [openSubmenuId, setOpenSubmenuId] = useState<number | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false) // This controls the visibility of the entire menu

  const buttonClass =
    'flex justify-between w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50'
  const arrowTransitionClass = 'transition-transform duration-300 ease-in-out'
  const menuContentClass =
    'flex flex-col items-center bg-orange-50 shadow-md rounded-lg p-4 absolute top-16 left-0 right-0 z-50'
  const menuItemClass = 'py-4 w-full border-gray-300'
  const lastMenuItemClass = 'py-4 w-full'
  const subOptionClass =
    'hover:text-orange-500 text-gray-500 text-sm pl-4 py-1 cursor-pointer focus:outline-none focus:text-orange-700'
  const toggleButtonClass =
    'focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50'

  const toggleSubmenu = (id: number) => {
    if (openSubmenuId === id) {
      setOpenSubmenuId(null)
    } else {
      setOpenSubmenuId(id)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent, toggle: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggle()
    }
  }

  return (
    <div>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        onKeyDown={e => handleKeyDown(e, () => setIsMenuOpen(!isMenuOpen))}
        aria-expanded={isMenuOpen}
        aria-controls="burger-menu-content"
        aria-label="Toggle menu"
        role="button"
        className={toggleButtonClass}
      >
        <Burger className={`${isMenuOpen ? 'fill-orange-500' : ''}`} />
      </button>
      {isMenuOpen && (
        <div id="burger-menu-content" className={menuContentClass}>
          {navData.options.map((option, i) => (
            <div
              key={option.id}
              className={
                i !== navData.options.length - 1 ? menuItemClass : lastMenuItemClass
              }
            >
              <button
                className={buttonClass}
                onClick={() => toggleSubmenu(option.id)}
                onKeyDown={e => handleKeyDown(e, () => toggleSubmenu(option.id))}
                aria-expanded={openSubmenuId === option.id}
                aria-label={`Toggle ${option.name}`}
              >
                <span className="font-medium">{option.name}</span>
                <DownArrow
                  className={`${arrowTransitionClass} ${openSubmenuId === option.id ? '-rotate-180' : 'rotate-0'}`}
                />
              </button>
              {openSubmenuId === option.id && option.subOptions.length > 0 && (
                <div className="flex flex-col mt-2">
                  {option.subOptions.map(subOption => (
                    <a
                      key={`${option.id}-${subOption.id}`}
                      href={subOption.path}
                      className={subOptionClass}
                      tabIndex={0}
                    >
                      {subOption.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BurgerMenu
