import Link from 'next/link'
import React from 'react'
import { NavLink1 } from '@/constant'

const testy = (props:any) => {
  return (
    <div className='flex flex-col'>
      {props.navLink.map((item:any) =>{
        return (<div key={item.route}>{item.label}</div> )
      })}
    </div>
  )
}

export default testy