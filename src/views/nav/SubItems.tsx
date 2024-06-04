import React from 'react'
import { NavData } from '../../model/navDataModel'

type SubItemsProps = {
  subOptions: NavData['options']
  className?: string
}

const SubItems: React.FC<SubItemsProps> = ({ subOptions, className }) => {
  const ulClasses = `${className} absolute w-72 shadow-md rounded-lg bg-gray-50`
  const liClasses = 'mt-4'
  const aClasses = 'block cursor-pointer hover:text-orange-500 flex flex-col group'
  const spanNameClasses = 'font-medium group-hover:text-orange-500'
  const spanDescriptionClasses = 'text-sm text-gray-500 group-hover:text-orange-500'

  return (
    <ul className={ulClasses}>
      {subOptions.map(option => (
        <li key={option.id} className={liClasses}>
          <a className={aClasses} href={option.path}>
            <span className={spanNameClasses}>{option.name}</span>
            <span className={spanDescriptionClasses}>{option.description}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SubItems
