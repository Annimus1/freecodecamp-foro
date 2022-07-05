import React from 'react'
import '../styles/testimony.css'

function Testimony(props){
  return(
    <div className='testimony-container'>
      <img 
        className='testimony-image' 
        src={require(`../img/image-${props.image}.png`)} 
        alt= 'testimony subject'
      />
      
      <div className='testimony-text-container'>
        <p className='testimony-text-name'>
          <strong>{props.name}</strong> in {props.country}
        </p>
  	    
        <p className='testimony-text-position'>
          {props.position} at <strong>{props.brand}</strong>
        </p>
  	    
        <p className='testimony'>
          "{props.testimony}"
        </p>
      </div>
      
    </div>
  );
}

export default Testimony;

