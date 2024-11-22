import React from 'react';
import Confetti from 'react-confetti';

const Card = () => (
  <div className="birthday-card" >
    {/* <Confetti /> */}
    <div className='box'>
        <div className='quote'>
        <h2>HAPPY WALA BIRTHDAY RITU</h2>
        </div>
   
    
    </div>
   
    <img className='image' style={{paddingTop:'55px'}} src="https://res.cloudinary.com/dmbr1jnez/image/upload/v1726557617/diejrzstfkiigsnkupa1.jpg" alt="img" />

    <h2 style={{color:"#4335A7" ,paddingTop:'55px'}}>Happy birthday brother,  May your day be filled with joy and celebration 🥳</h2>

    <img className='image' style={{paddingTop:'55px'}}  src="https://res.cloudinary.com/dmbr1jnez/image/upload/v1726559891/uzx3sb58rdr5rh1ulaox.jpg" alt="" />


    <h2  >The best is yet to come , believe in yourself and make it happen</h2>
    <Confetti height="1990px" />
    <img className='image' src="https://res.cloudinary.com/dmbr1jnez/image/upload/v1732071451/WhatsApp_Image_2024-11-20_at_8.26.49_AM_gbkzho.jpg" alt="" />
    <h2 style={{color:"red"}}>Your friendship is the greatest gift in my life</h2>

    <img className='image' src="https://res.cloudinary.com/dmbr1jnez/image/upload/v1732071566/WhatsApp_Image_2024-11-20_at_8.26.03_AM_hnsxpf.jpg" alt="" />
    <h2 style={{color:"green"}} >भगवान कृपा बनईले रहश  🙏 </h2>

    <div class="falling-container">
        <div class="falling-item">🌸</div>
        <div class="falling-item">⭐</div>
        <div class="falling-item">🎂</div>
        <div class="falling-item">✨</div>
        <div class="falling-item">🥰</div>
      </div>

      <div class="falling-container2">
        <div class="falling-item">🌸</div>
        <div class="falling-item">⭐</div>
        <div class="falling-item">🎂</div>
        <div class="falling-item">✨</div>
        <div class="falling-item">🥰</div>
      </div>
     
  </div>
);

export default Card;
