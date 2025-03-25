import { useState } from "react"

function App() {
  const [color ,setColor] = useState("olive")
/*
  const blue = () =>{
    setColor("blue")
  }
  const red = () =>{
    setColor("red")
  }
  const green = () =>{
    setColor("green")
  }
  const purple = () =>{
    setColor("purple")
  }
  const yellow = () =>{
    setColor("yellow")
  }
  const skyblue = () =>{
    setColor("skyblue")
  }
    isko bus onclick = {"colorname"}(ya function name bhi khskte hai) krdete hai to ye chl jyga
*/
  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-end bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=> setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=> setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=> setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=> setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={()=> setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=> setColor("skyblue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"skyblue"}}>SkyBlue</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
