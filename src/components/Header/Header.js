import React from 'react'
import './Header.css'




function Header(){
    return(
        <div className='head_control_box'>
           <div className='location_box'>Hello</div>
           <div className='date_box'></div>
           <div className='traveler_box'></div>
           <div className='trip_control_box'></div>
           <div className='one_way'></div>
           <div className='passenger_class_box'></div>
           <div className='search_box'></div>
        </div>
    )
}
export default Header;