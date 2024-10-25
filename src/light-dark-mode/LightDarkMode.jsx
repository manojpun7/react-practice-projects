import React, { useState } from 'react'
import './LightDarkMode.css'
import useCustomHooks from './useCustomHooks'
function LightDarkMode () {
    const [ theme , setTheme] = useCustomHooks('theme' , 'dark')

    function hanldeToggleTheme() {
        setTheme(theme === 'light' ?'dark':'light')
    }

  return (
    <div className='light-dark-mode'  data-theme={theme}>
      <div className="container">
        <p>example of theme change</p>
        <button onClick={hanldeToggleTheme}>click to change theme</button>
      </div>
    </div>
  )
}

export default LightDarkMode
