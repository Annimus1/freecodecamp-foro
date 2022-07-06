import React from 'react'
import '../styles/testimony.css'

function Testimony({image,name,country,position,brand,testimony}){
  return(
    <div className='testimony-container'>
      <img 
        className='testimony-image' 
        src={require(`../img/image-${image}.png`)} 
        alt= {name + "'s testimony"} />
      
      <div className='testimony-text-container'>
        <p className='testimony-text-name'>
          <strong>{name}</strong> in {country}
        </p>
  	    
        <p className='testimony-text-position'>
          {position} at <strong>{brand}</strong>
        </p>
  	    
        <p className='testimony'>
          "{testimony}"
        </p>
      </div>
      
    </div>
  );
}

export default Testimony;

