//Info: https://www.npmjs.com/package/react-player
import ReactPlayer from "react-player"
import'./ReproductorVideos.css'


export const ReproductorVideos = ({titulo, url}) => {
  return (
    <>
    <div className="contenedorvideos">
    <h1>{titulo}</h1>    
    <ReactPlayer className='react-player' 
    url={url} 
    controls={true} 
    height="100%" 
    width="100%"
    onEnded={()=>alert("Finalizó el video")}/>
    </div>     
    </>    
  )
}
