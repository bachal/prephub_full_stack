import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'
import axios from "axios";
import { BrowserRouter as Router, Link, Route, useParams, Redirect, useHistory } from 'react-router-dom'


const All_states = () => {

    let { id } = useParams();
    let history = useHistory();

    const [states, setStates] = useState([])

    useEffect(() => {
        loadStates();
    }, []);



    const loadStates = async () => {
        const result = await axios.get(`http://127.0.0.1:8000/${id}/states`);


        setStates(result.data);
        if (result.data.length == 0) {
            history.push("/countries")
            history.push("/working")



        }

    }




    return (





        <div>

            <Navbar heading="States" />
            <h5 className="text-dark mt-3">Table for States</h5>

            <table class="table  mt-2 table-bordered shadow">
                <thead className="thead-dark">
                    <tr>
                        <th>States</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        states.map((state, index) => (
                            <tr>

                                <td> <Link to={state.state + "/cities"}>{state.state}</Link></td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>


        </div>



    )


}

export default All_states;