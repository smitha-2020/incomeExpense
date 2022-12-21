import React from 'react'

const ComponentDisplay = ({title,data}:{title:string,data:any}) => {
  return (
    <div className="main-display main-span">
        <span>{title}</span>
        <span>{data}</span>
      </div>
  )
}

export default ComponentDisplay