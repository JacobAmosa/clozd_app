import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
 
function List() {
   useEffect( ()=> {
       fetchItems();
   }, []);
 
   const [items, setItems] = useState([]);
 
   const fetchItems = async() => {
       const response = await fetch('/all');
       console.log(response);
       const data = await response.json();
       console.log(data);
       setItems(data.results);
       
   }
  
   const navigate = useNavigate();
 
   return(
       <div>
           <h1>List of Employees:</h1>
 
           <table className="table">
               <thead>
                   <tr>
                       <th scope="col">View Employee</th>
                       <th scope="col">Name</th>
                       <th scope="col">Email</th>
                       <th scope="col">City/Country</th>
                   </tr>
               </thead>
               <tbody>
                   {
                   items.map(item => (
                       <tr>
                       <td><a style={{color: "blue"}} onClick={() => {
                           navigate('/details', {state: item})
                       }} className="nav-item nav-link active">View</a></td>
                       <td>{item.name.first} {item.name.last}</td>
                       <td>{item.email}</td>
                       <td>{item.location.city}/{item.location.country}</td>
                   </tr>
                   ))
                   }
               </tbody>
           </table>
       </div>
 
 
   );
}
 
export default List;