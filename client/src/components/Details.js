import React from 'react';
import {useLocation} from 'react-router-dom';
 
function Details() {
 
   const location = useLocation();
   const date = new Date(location.state.dob.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
 
   return(
       <div>
           <div>
               <img src={location.state.picture.large} ></img>
           </div>
               <tbody className="detailsInfo">
                   <tr><strong>Full name:</strong>{location.state.name.first} {location.state.name.last}</tr>
                   <tr><strong>Email: </strong>{location.state.email}</tr>
                   <tr><strong>Address: </strong>{location.state.location.street.number} {location.state.location.street.name}, {location.state.location.city} {location.state.location.country}</tr>
                   <tr><strong>Phone number: </strong>{location.state.cell}</tr>
                   <tr><strong>Date of Birth: </strong>{date}</tr>
               </tbody>
       </div>
   );
}
 
export default Details;