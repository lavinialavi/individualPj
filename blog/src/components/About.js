import React from 'react';
import Layout from './Layout'

function About(props) {
    return (
        <Layout>
            <h2>About me {props.title}</h2>

            <p> Aerosmith: “Dream until your dreams come true.” {props.mantra}</p>

            <h2> Contact details{props.details} </h2>
            <h3> Name: Lavinia Budean {props.name}</h3>
            <p></p>
            {props.children}

        </Layout>
    )

}



export default About;