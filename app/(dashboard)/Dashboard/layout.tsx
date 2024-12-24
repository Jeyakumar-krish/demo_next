import React from 'react'

const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div> Layout
        {children}
    </div>
    
  )
}

export default layout