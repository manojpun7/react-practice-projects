import React from 'react'
import MenuItem from './MenuItem'

function MenuList  ({list=[]})  {
  return (
    <ul>
      {
        list && list.length >0 ?
        list.map(listItem => <MenuItem item={listItem}/>)
        :null
      }
    </ul>
  )
}

export default MenuList
