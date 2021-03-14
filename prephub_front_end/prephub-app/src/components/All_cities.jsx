import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from './Navbar'
import { BrowserRouter as Router, Link, Route, useParams } from 'react-router-dom'


const All_cities = () => {

    let { country,state } = useParams();

    const [cities, setCities] = useState([])

    useEffect(() => {
        
        loadStates();
    }, []);



    const loadStates = async () => {
        const result = await axios.get(`http://127.0.0.1:8000/${country}/${state}/cities`);
        setCities(result.data);
    }





    return (





        <div>
            <Navbar heading="Cities" />
            <h5 className="text-dark mt-3">Table for Cities</h5>
            <table class="table  mt-2 table-bordered shadow">
                <thead className="thead-dark">
                    <tr>
                        <th>Cities</th>

                    </tr>
                </thead>
                <tbody>
                    {

                        cities.map((city, index) => (
                            <tr>

                                <td> {city.city}</td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>


        </div>



    )


}

export default All_cities;