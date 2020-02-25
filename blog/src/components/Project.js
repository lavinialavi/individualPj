import React from 'react';
import Layout from './Layout'
 
function Project(props) {
    return (
        <Layout>
            <h1>{props.title}</h1>
            <small>{props.date}</small>
            <h3>Written by: {props.author}</h3>
            {props.children}
        </Layout>
    )

}



export default Project