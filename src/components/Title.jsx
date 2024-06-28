import React from 'react'
import { Greendot } from './Greendot'

export const Title = ({title}) => {
  return (
    <div className="flex items-center space-x-2 ">
    <Greendot att={'w-3 h-3'}/>
    <h1 className="text-4xl">{title}</h1>
  </div>
  )
}
