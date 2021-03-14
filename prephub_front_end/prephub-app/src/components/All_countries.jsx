import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from './Navbar'
import {BrowserRouter as Router,Link,Route,useHistory} from 'react-router-dom'


const All_countries = () => {
    
let history=useHistory();
const[countries,setCountries]=useState([])

useEffect(()=>{
    loadCountries();
},[]);

   
   
const loadCountries =async ()=>{
    const result=await axios.get("http://127.0.0.1:8000/countries");
    setCountries(result.data);
    
}



    

    return (
        
        
    

 
        <div>
                    <Navbar heading="Countries" />
                    <h5 className="text-dark mt-3">Table for Countries</h5>

            <table class="table  mt-2 table-bordered shadow">
                <thead className="thead-dark">
                    <tr>
                        <th>Countries</th>
                       
                    </tr>
                </thead>
                <tbody>
                 {

                     countries.map((country,index)=>(
                         <tr>

                             <td> <Link to={country.country+"/states"}>{country.country}</Link></td>
                         </tr>

                     ))
                 }
                </tbody>
            </table>
           

        </div>
        


    )


}

export default All_countries;