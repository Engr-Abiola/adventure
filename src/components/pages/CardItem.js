import React from 'react';
import { Link } from 'react-router-dom';

const CardItem = () => {
    return (
        <>
          <li className='card-item'> 
              <Link className='card-item-link'> 
               <figure className='card-item-pic-wrap'>
                   <img src='' alt='Travel image' className='card-item-img'/>
               </figure>
               <div className='card-item-info'>
                   <h5 className='card-item-text'></h5>
               </div>
              </Link>

           </li>  
        </>
    );
}

export default CardItem;
