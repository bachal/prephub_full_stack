import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, useParams, Redirect, useHistory } from 'react-router-dom'
import Navbar from './Navbar'


const Working = () => {
    const [locationKeys, setLocationKeys] = useState([])
    const history = useHistory()



    return (





        <div>
            <Navbar heading="States" />
            <h1 className="text-info text-20 mt-5">We are still working on this!</h1>


        </div>



    )


}

export default Working;