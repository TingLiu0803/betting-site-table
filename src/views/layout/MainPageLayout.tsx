import React from 'react'
import NavbarController from '../../controllers/NavbarController'
import Main from './Main'

type MainPageLayoutProps = {
  children?: React.ReactNode
}

const MainPageLayout: React.FC<MainPageLayoutProps> = ({ children }) => {
  const containerClasses = 'flex flex-col h-screen lg:py-6 py-4 lg:px-12 px-6'

  return (
    <div className={containerClasses}>
      <NavbarController />
      <Main>{children}</Main>
    </div>
  )
}

export default MainPageLayout
