import React from 'react'
import './parts-css/end.css'
import Doctor from '../assets/istockphoto-636910158-612x612-removebg-preview.png';
const end = () => {
    return (
        <div className='wave'>

            <div className='cards'>
                <div className='card'><h3>Basic Full Body Checkup</h3>
                    <div className='Line1'>4.3 ⭐ (75 reviews)</div>
                    <div className='Line2'>Number of tests- 53</div>
                    <div className='Line3'>MRP <s>₹10000</s> ₹8490</div>
                    <button>Book now</button>
                </div>
                <div className='card'><h3>Advance Full Body Checkup</h3>
                    <div className='Line1'>4.7 ⭐ (100 reviews)</div>
                    <div className='Line2'>Number of tests- 70</div>
                    <div className='Line3'>MRP <s>₹12000</s> ₹10000</div>
                    <button>Book now</button>
                </div>
                <div className='card'><h3>Liver Function Test(LFT)</h3>
                    <div className='Line1'>4.3 ⭐ (43 reviews)</div>
                    <div className='Line2'>Number of tests- 889</div>
                    <div className='Line3'>MRP <s>₹13299</s> ₹11299</div>
                    <button>Book now</button>
                </div>

            </div>
            <h1 className='tag-line3'>Why <span className='change-color'>choose us?</span></h1>
            <p className="para1">We want you and your heart to be healthy so you can live a happy life!</p>
            <div className='rectangles'>
                <div className='rec1'>
                    <h4>NABL Accredited Labs</h4>
                    <p>Get accurate and safe results from our NABL-certified lab partners.  </p>
                </div>
                <div className='rec2'>
                    <h4>Value experience</h4>
                    <p>Experience seamless care without the hassle of waiting in long lines for an appointment. Book with us for a healthier lifestyle.  </p>
                </div>
                <div className='rec1'>
                    <h4>Timely collections</h4>
                    <p>We collect samples timely to prevent treatment delays and ensure your continued well-being.    </p>
                </div>
                <div className='rec2'>
                    <h4>Transparency</h4>
                    <p> Enjoy hassle free medical assistance with our transparent approach. We prioritize transparency for your smooth medical journey.  </p>
                </div>
                <img className="doctor_img" src={Doctor}/>
            </div>
          
        </div>
    )
}

export default end