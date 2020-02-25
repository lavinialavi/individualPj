import React from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'
import blogPostsList from '../blogPostList'

function Home(props) {
    return (
        <Layout>
            <ul>

                {
                    blogPostsList.map(blogPost => {
                        return (<li>
                            <Link to={blogPost.link}>
                                <h2 className="text-xl font-bold">{blogPost.title}</h2>
                            </Link>
                            <small>{blogPost.date}</small>
                            <h3>{blogPost.author}</h3>
                            <p>{blogPost.summary}</p>

                        </li>)
                    })

                }
            </ul>
        </Layout>
    );
}


export default Home