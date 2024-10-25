import React from 'react'

function Suggestions ({data})  {
  return (
    <ul>
      {
        data && data.length ? 
        data.map((item,index ) => <li key={index}>{item}</li>) 
        :null
      }
    </ul>
  )
}

export default Suggestions
