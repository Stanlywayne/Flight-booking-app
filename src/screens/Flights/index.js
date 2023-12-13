import React,{useEffect, useState} from "react";
import './flights.css'


function Flights(){

   const [newData, setNewdata] = useState([]);
   const [isloading,setIsloading] = useState(false);

    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/photos").then(res => {
        return res.json()
      }).then(data => {
        let Data = data;
        setNewdata(Data)
        setIsloading(true);
      })
    },[])




    return(
        <div className="control_flight_list">
            {!isloading && <h3>Loading...</h3> }
            {isloading && newData.map(item => {
                return(
              <div className="flight_list_box">
              <div>{item.id}</div>
              <div>{item.title}</div>
              <div><img src={item.url} alt="oooo"  className="ur_img"/> </div>
             </div>
                )
            })}
            
        </div>
    )
}

export default Flights;