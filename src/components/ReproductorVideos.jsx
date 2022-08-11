//Info: https://www.npmjs.com/package/react-player
import ReactPlayer from "react-player"
import { useState } from "react"
import'./ReproductorVideos.css'


export const ReproductorVideos = ({titulo}) => {

 let[vid, setVid]=useState("https://youtu.be/38y_1EWIE9I")
  

  return (
    <>
    <div className="contenedorvideos">
    <button onClick={()=>setVid(vid="https://youtu.be/5L4DQfVIcdg")}>UN BOTON</button>  
    <h1>{titulo} {vid}</h1>    
    <ReactPlayer className='react-player' 
    url={vid}
    controls={true} 
    height="100%" 
    width="100%"
    playing    
    onEnded={()=>{
      setVid(vid="https://youtu.be/B6uuIHpFkuo")          
    }}/>
    
    </div>
       
    </>    
  )
}
