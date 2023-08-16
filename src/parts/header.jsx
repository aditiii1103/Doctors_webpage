import React from 'react'
import './parts-css/header.css'
import playstore_logo from '/Users/kotha/OneDrive/Desktop/React Projects/assignment/src/assets/png-clipart-computer-icons-google-play-android-android-angle-rectangle.png'
import logo from '/Users/kotha/OneDrive/Desktop/React Projects/assignment/src/assets/NIL_logo_Transparent (1) 1logo.png'
import logo_name from '/Users/kotha/OneDrive/Desktop/React Projects/assignment/src/assets/Screenshot_2023-07-25_165513-removebg-preview 1.png'
const header = () => {
    return (
        <div className='header'>
            <div className='header-left'>
                <img id="logo1" src={logo} />
                <img id="logo2" src={logo_name} />
            </div>
            <div className='header-middle'>
                <a className="middle1" href="#">Home</a>
                <a className="middle1" href="#">Health conditions</a>
                <a className="middle1" id="blue" href="#" ><b>Lab tests</b></a>
                <a className="middle1" href="#">Medicines</a>
            </div>
            <div className='header-right'>
                <button>For Patients</button>
                <button>For Hospitals</button>
            </div>
            <div href="#" className='playstore_btn'>
            <img src={playstore_logo} />
            Play store</div>

        </div>
           
        
    )
}

export default header