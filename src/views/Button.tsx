import React from 'react'

type ButtonProps = {
  text: string
  className?: string
  children?: React.ReactNode
  onClick: () => void
  onKeyDown?: (event: React.KeyboardEvent) => void
}

const Button: React.FC<ButtonProps> = ({
  text,
  className = '',
  children,
  onClick,
  onKeyDown
}) => {
  const baseStyle =
    'bg-orange-500 text-white text-sm px-4 py-2 rounded-lg font-semibold transition duration-300 ease-in-out transform'
  const hoverStyle = 'hover:bg-orange-600'
  const focusStyle =
    'focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50'
  const activeStyle = 'active:bg-orange-700'

  return (
    <button
      className={`${baseStyle} ${hoverStyle} ${focusStyle} ${activeStyle} ${className}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {children || text}
    </button>
  )
}

export default Button
