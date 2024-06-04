import React from 'react'

type ContentBlockProps = {
  title: string
  description: string
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, description }) => {
  const containerClasses = 'lg:p-6 p-1 lg:m-6 m-1 max-w-2xl'
  const titleClasses = 'lg:text-4xl text-2xl font-bold text-gray-900 mb-4'
  const descriptionClasses = 'lg:text-lg text-gray-600'

  return (
    <div className={containerClasses}>
      <h1 className={titleClasses}>{title}</h1>
      <p className={descriptionClasses}>{description}</p>
    </div>
  )
}

export default ContentBlock
