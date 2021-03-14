import React, { useState } from 'react';

const Navbar = (props) => {

    return (

        <div>
            <nav class="navbar navbar-expand-md bg-primary navbar-dark">
                <a class="navbar-brand" href="#">{props.heading}</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">

                </div>
            </nav>
        </div>

    )


}

export default Navbar;