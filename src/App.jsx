// import React from 'react'
import { fetchdata,fetchvideodata } from "./API/mediaApi"

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-950 text-white">
      <button className="bg-green-500 text-white py-3 px-6 m-5" onClick={async ()=>{
        const imgdata =  await fetchdata('cat')

        console.log(imgdata.results)
      }}>Get images</button>

      <button className="bg-green-500 text-white py-3 px-6 m-5" onClick={async ()=>{
        const videodata = await fetchvideodata('cyberpunk')

        console.log(videodata.hits)
      }}>Get videos</button>
    </div>
  )
}

export default App
