import { useEffect, useRef, useState } from "react"
import Menu from "./Menu"
import './App.css'

function App() {
  const [brushColor,setBrushColor] = useState('black')
  const [brushWidth,setBrushWidth] = useState(8)
  const [brushOpacity,setBrushOpacity] = useState(0.5)
  const canvasRef = useRef(null)
  const ctxRef = useRef(null)
  const [isDraw,setIsDraw] = useState(false)

  useEffect(()=>{
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')
    ctx.lineCap = 'round';
    ctx.lineJoine = 'round';
    ctx.lineWidth = brushWidth;
    ctx.globalAlpha = brushOpacity;
    ctx.strokeStyle = brushColor;
    ctxRef.current = ctx;

  },[brushColor,brushOpacity,brushWidth])

  const startDraw = (e) =>{
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    )
    setIsDraw(true)
  }

  const endDraw = () => {
    ctxRef.current.closePath()
    setIsDraw(false)
  }

  const draw = (e) => {
    if(!isDraw){
      return;
    }
    ctxRef.current.lineTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    )
    ctxRef.current.stroke()
  }

  return (
    <div className="App">
      <h1>Paint App</h1>
      <div className="draw-area">
       <Menu 
        setBrushColor={setBrushColor}
        setBrushOpacity={setBrushOpacity}
        setBrushWidth={setBrushWidth}
       />
       <canvas
        width='1200px'
        height='500px'
        ref={canvasRef}
        onMouseDown={startDraw}
        onMouseUp={endDraw}
        onMouseMove={draw}
       >

       </canvas>
      </div>     
    </div>
  )
}

export default App
