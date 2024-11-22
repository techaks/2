import React, { useEffect, useRef } from 'react';
import sound from './use/audio.mp3'

const Play = ({ delayTime = 1000 }) => {
  const audioRef = useRef(null);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (audioRef.current) {
//         audioRef.current.muted = true; // Initially mute the audio
//         audioRef.current.play().then(() => {
//           // After playing, unmute the audio
//           audioRef.current.muted = false;
//         }).catch((error) => {
//           console.error('Error playing audio:', error);
//         });
//       }
//     }, delayTime);

//     // Clean up the timer if the component unmounts
//     return () => clearTimeout(timer);
//   }, [delayTime]);

useEffect(() => {
    const handleScroll = () => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => {
            console.log('Audio is playing!');
          })
          .catch((error) => {
            console.error('Error playing audio:', error);
          });
      }
    };

    // Attach the scroll event to the window
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return ( 
    <div>
      <p>Audio will play after {delayTime / 1000} seconds.</p>
      <audio ref={audioRef}>
        <source src={sound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Play;
