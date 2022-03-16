import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Buttons = ({information="/", direction="/"}) =>{
    // const [links, setLinks] = useState({info:"/", dir:"/"});
    // useEffect(()=>{
    //    setLinks({info:information, dir:direction})
    // }, [information, direction])

    // console.log(information, direction)
    return(
        <div className="buttons">
            <Link to={information} className="btn-info" >Information</Link>
            <Link to={direction} className="btn-info">
                 <button className="btn-buy">Buy </button> 
            </Link>
          </div>
    )
};

export default Buttons;