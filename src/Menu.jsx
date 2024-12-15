/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Menu = ({setBrushColor,setBrushOpacity,setBrushWidth}) => {
  return (
    <div className='menu'>
        <label htmlFor='brush'>Brush Color:</label>
        <input type='color' onChange={(e)=>setBrushColor(e.target.value)} />

        <label htmlFor='brush_width'>Brush Width:</label>
        <input type='range' min='3' max='20' onChange={(e)=>setBrushWidth(e.target.value)}/>

        <label htmlFor='brush_opacity'>Brush Opacity:</label>
        <input type='range' min='0' max='0.5' step='0.01' onChange={(e)=>setBrushOpacity(e.target.value)}/>
    </div>
  )
}

export default Menu