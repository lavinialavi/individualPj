import React from 'react';
import Layout from './Layout'
import blogPostsList from '../blogPostList'
import { Link } from 'react-router-dom'


function Blog(props) {
    return (
        <Layout>
             <ul>
                        {
                            blogPostsList.map(blogPost => {
                                return (<li  className="my-12 mx-4" key={blogPost.title}>
                                    <Link to={blogPost.link}>
                                        <h2 className="text-xl font-bold text-blue-500" >{blogPost.title}</h2>
                                    </Link>
                                    <div className="flex" >
                                    <small className="mr-6 ">{blogPost.date}</small>
                                    <small>{blogPost.author}</small>
                                    </div>
                                    <p>{blogPost.summary}</p>


                                </li>)
                            }
                            )
                        }
                    </ul>
        </Layout>
    )

}

export default Blog;