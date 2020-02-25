import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function Header(props) {


    return <div className="py-6 px-4 font-bold flex justify-between bg-blue-300 shadow-lg">
        <Link to="/">Home</Link>
        <div>
            <Link className="px-4 py-2 hover:bg-blue-400 rounded-sm" to="/contact" >Contact</Link>
            <Link className="px-4 py-2 hover:bg-blue-400 rounded-sm " to="/about" >About</Link>
            <Link className="px-4 py-2 hover:bg-blue-400 rounded-sm" to="/project" >Project</Link>


        </div>


    </div>
};

export default Header;