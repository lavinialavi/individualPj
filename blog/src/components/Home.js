import React from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'
import blogPostsList from '../blogPostList'
// import "~video-react/styles/scss/video-react";
import '../../node_modules/video-react/dist/video-react.css';
import { Player } from 'video-react';



function Home(props) {
    return (
        <Layout>

            <ul>
                {
                    blogPostsList.map(blogPost => {
                        return (<li key={blogPost.title}>
                            <Link to={blogPost.link}>
                                <h2 className="text-xl font-bold">{blogPost.title}</h2>
                            </Link>
                            <small>{blogPost.date}</small>
                            <h3>{blogPost.author}</h3>
                            <p>{blogPost.summary}</p>
                           

                        </li>)
                    }
                    )
                }
            </ul>

            <Player
        playsInline
        poster="/media/coffee.png"

        fluid={false}
        width={600}
        height={300}
   

      />
        </Layout>
    )
}





export default Home



