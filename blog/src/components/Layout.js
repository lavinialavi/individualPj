import React from 'react';
import Footer from './Footer';
import Header from './Header';


function Layout(props) {





    return <div>

        <Header></Header>

        {props.children}

        <Footer></Footer>




    </div>
};

export default Layout;