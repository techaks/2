import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import sound from './use/audio.mp3'
import Play from "./Play";
import { useRef, useState } from "react";



function App() {
  const [click,setClick] = useState(false)
  const audioRef = useRef(null);

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          console.log('Music is playing!');
        })
        .catch((error) => {
          console.error('Error playing music:', error);
        });
    }
  };
  return (
    <div className="App">

      {
        click ? <>
        <Card/>
        </> : <>
        
        <div className="emoji" onClick={()=>{setClick(true) ; startMusic() }}>
         
        🙏CLICK ME🙏
          </div>
        </>
      }

      {
        <audio ref={audioRef} loop >
        <source src={sound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      }

   
    
       </div>


  
  );
}

export default App;
