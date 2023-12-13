import React from "react";
import './Right.css'
import Worldmap from '../../assets/new_blackworldbg.png'

function Rightsidebar(){
    return(
        <div className="right_side_bar">
            <div className="from_txt"><h6>From</h6></div>
            <div className="to_txt"><h6>To</h6></div>
            <div className="jfk_txt"><h4>JFK</h4></div>
            <div className="bom_txt"><h4>BOM</h4></div>
            <div className="non_stop"><h6>NON-STOP</h6></div>
            <img src={Worldmap}  className="image_world" alt="lll" />
        </div>
    )
}

export default Rightsidebar;