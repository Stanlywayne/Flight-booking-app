import React from "react";
import './Card.css'



function Card(props){
    return(
        
            <div className="card_box">
             {props.children}
            </div>
    )
}

export default Card;