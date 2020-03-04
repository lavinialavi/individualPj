import React from 'react';
import Layout from './Layout'
import blogPostsList from '../blogPostList'
import { Link } from 'react-router-dom'


function Blog(props) {
    return (
        <Layout>
            <ul className=" flex flex-row items-center justify-center">
                {
                    blogPostsList.map(blogPost => {
                        return (<div className="flex inline-flex grid-rows-auto"><li className="my-12 mx-4 shadow-xl m-6 " key={blogPost.title}>
                            <Link to={blogPost.link}>
                                <h2 className="text-xl font-bold text-blue-500" >{blogPost.title}</h2>
                            </Link>
                            <div className="flex" >
                                <small className="mr-6 ">{blogPost.date}</small>
                                <small>{blogPost.author}</small>
                            </div>
                            <p>{blogPost.summary}</p>


                        </li></div>)

                    }
                    )
                }

            </ul>




            {/* <section id="blog" class="blog-mf sect-pt4 route">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-box text-center">
            <h3 class="title-a">
              Blog
            </h3> */}
        </Layout>
    )

}

export default Blog;