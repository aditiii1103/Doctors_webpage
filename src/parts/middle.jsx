import React from 'react'
import img1 from '../assets/Rectangle 80.png';
import img2 from '../assets/Rectangle 81.png';
import './parts-css/middle.css';
const middle = () => {
  return (
    <><div className='accredetation'>
      <div className='accredetation1'>
        <img src={img1} />
        <h3>NABL Accredited Labs</h3>
      </div>
      <div className='accredetation2'>
        <img src={img2} />
        <h3>Free sample collection</h3>
      </div>
    </div><div className='mid'>
        <div className='tag-line'><h1>We keep <span className='change-color'>expanding!</span></h1></div>
        <div className='group'>
          <div className='block'>5+ Labs</div>
          <div className='block'>100+ Collection centers</div>
          <div className='block'>1000+ Monthly tests</div>
          <div className='block'>2200 Test menu</div>
          <div className='block'>5+ cities present in</div>
        </div>
     
          <h1 className='tag-line2'>Top <span className='change-color'>packages!</span></h1>
            <p className="para">Explore our wide range of tests! We ensure that you don’t miss out on any chance to keep yourself healthy.</p>
   
      
      </div>
      </>


  )
}

export default middle