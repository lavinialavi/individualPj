import React from 'react';
import Layout from './Layout'
import Codepan from './Codepan'
import { Container } from '@material-ui/core';


function Project(props) {
    return (
        <Container className='mt-48'>
        <Layout >
            <h1>{props.title}</h1>
            <small>{props.rules}</small>
            <h2 className="font-bold text-2xl"> A little project I have worked on {props.author} </h2>

            <Codepan className="timeline-entry animate-box fadeInLeft animated ">
            </Codepan>
            {props.children}
        </Layout>
        </Container>
    )

}



export default Project