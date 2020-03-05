import React from 'react';
import Layout from './Layout'
import blogPostsList from '../blogPostList'
import { Link } from 'react-router-dom'
import { Card, CardContent, Button, CardActions, Grid, Container,CardMedia,Typography} from '@material-ui/core'


function Blog(props) {
    return (
        <Layout>
            <Container className='my-10'>
                <Grid container spacing={2} alignItems="stretch" justify="center">
                    {blogPostsList.map(blogPost => {
                        return (<Grid  item xs={12} sm={6} md={4} lg={3}>
                            <Card className="h-full">

                            <CardMedia className="h-48"
                                image= "https://res.cloudinary.com/laviniaella/image/upload/v1583308812/lavv/Noble_Gardens_Mural_Wallpaper__Unique_Murals___Forest_Homes_r45m13.jpg">
                            </CardMedia>
                                <CardContent>
                                <Link to ={blogPost.link}>
                                <Typography variant="h4">{blogPost.title}</Typography>
                                </Link>
                                <Typography variant="subtitle1">{blogPost.date}</Typography>
                                <Typography variant="subtitle1">{blogPost.author}</Typography>
                                <Grid container>
                                <Grid item xs={12}> 
                               
                                </Grid>

                                </Grid>
                                </CardContent>
                                <CardActions>
                    
                                </CardActions>
                            </Card>
                        </Grid>)
                    }
                    )
                    }


                </Grid>
            </Container>
        </Layout>

    )

}

export default Blog;