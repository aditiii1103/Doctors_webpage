import React from 'react'
import './parts-css/jumbotron.css';
import contact from '../assets/contact.png';
import call from '../assets/placeholder.png';
import placeholder from '../assets/call.png';
import { Rect, Circle } from 'react-konva';
import Woman from '../assets/medium-shot-woman-looking-through-microscope-removebg-preview 1.png';
const jumbotron = () => {
    return (
        <div className='jumbotron-main'>
            <div className='jumbotron-left'>
                <div className='form1'>
                    <h4> Fill in the details to get a call</h4>
                    <form className='form_fill'>
                        <div>
                            <img src={contact} /><input type='text' value="    Full name" onfocus="this.value=''"></input></div>
                        <div><img src={call} /><input type='text' value="    Phone number" onfocus="this.value=''" ></input></div>
                        <div><img src={placeholder} /><input type='text' value="    Location" onfocus="this.value=''"></input></div>
                        <div className='checkbox_input'>
                            <input type="checkbox" />
                            <p> By continuing , you agree to our T&C and privacy policy</p>
                        </div>
                        <button>Proceed</button>
                    </form>
                </div>
                <div>

                </div>
                <div className='offer-line'>
                    <div className='offer-line-showing'><p>Get a Full Body Checkup <strong>Now</strong> at <strong><s>₹5999</s> ₹999</strong></p></div>
                    <div className='offer-line-hidden'>
                        <p>70% OFF</p>
                    </div>
                </div>



            </div>

            <div className='jumbotron-right'>
                <h1>Best in class <h1 style={{ color: "black", fontSize: "30px", marginTop: "17px", marginLeft: "-60px", fontFamily: 'Montserrat',position:"static" }}>lab tests!</h1></h1>

                <div>
                    <div className='bottom-most' style={{
                        backgroundColor: "red", width: "360px", position: "absolute",
                        height: "31rem",
                        zIndex: "0",
                        top: "14.87548828125px",
                        left: "198.26312255859375px",
                        border: "3px",
                        transform: "rotate(-45.01deg)",
                        marginTop: "14rem",
                        marginLeft: "40rem",
                        backgroundColor: "none",
                        border: "3px #008DD9 solid",


                    }}></div>
                    <div className='bottom'></div>
                    <div className='bottom' style={{ transform: "rotate(-44.99deg)", marginLeft: "18rem", paddingRight: "28px", width: "10px", height: "352px", marginTop: "14rem" }}></div>
                    <div className='background'><img id="women" src={Woman} />
                    </div>

                </div>
            </div>

            
            
        </div>

      
    )
}

export default jumbotron