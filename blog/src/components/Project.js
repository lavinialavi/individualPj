import React from 'react';
import Layout from './Layout'
 import Codepan from './Codepan'



function Project(props) {
    return (
        <Layout>
            <h1>{props.title}</h1>
            <small>{props.rules}</small>
            <h3>Made by me: {props.author}</h3>
            <Codepan>
                
            </Codepan> 
            {props.children}
        </Layout>
    )

}



export default Project