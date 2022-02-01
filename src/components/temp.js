import React from "react";
import  "./css/style.css"




const Tempapp=()=>{



    return(
        <>
            <div className="box">
               <div className="ondata" >
                  <input  className = "infeild"  type="text"  placeholder="Search.."
                      
                  />  
               </div>
             
          
                <div>  
                  <div className="info">
                   <h2 className="location"><i className="fas fa-street-view"></i>london</h2>
                    <div className="spann" >
                         <h1 className="temp">50°C </h1>
                         <span >|cloudy</span>
                    </div>
                   
                   </div>
                   <div className="wave -one"></div>
                   <div className="wave -two"></div>
                   <div className="wave -three"></div>
                </div>
            
            </div> 
           
        </>

    )

}
export default Tempapp;
