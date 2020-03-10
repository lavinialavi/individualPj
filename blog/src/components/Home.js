import React from 'react'
import Layout from './Layout'
import '../../node_modules/video-react/dist/video-react.css';
import { Player} from 'video-react';
import { Card, CardContent, Button, CardActions, Grid, Container, CardMedia, Typography } from '@material-ui/core'



function Home(props) {
  return (
    <Layout>
<Container className='my-10'>
      <h2 className="text-6xl bold text-center p-2"> I'm Lavinia.</h2>
      <Typography className="text-center mr-20 ml-20 focus:underline">
        I'm a Java Script developer based in Romania, creating awesome and effective visual identities for companies of all sizes around the globe. You can start surfing this little app in order to learn more about me.
               I consider that more important then working is enjoying life as it is. Two things I like most, a good coffee and summers.</Typography>
      
               {/* <Grid container spacing={1} alignItems="stretch" justify="center"> */}
               <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
  xs={12} sm={6} md={4} lg={3}>
   
        <div>
          {/* <Player className="mx-5 w-10 md:w-5/12 mb-8 mt-8 shadow-outline " */}
<Player
            fluid={false}
            width={200}
            height={250}
            padding={100}
            poster="/assets/poster.png" 
            src="https://res.cloudinary.com/laviniaella/video/upload/v1583351274/lavv/video_bRO3ncni_z0mM_p1m3ln.mp4" /></div>
        <div> <img className=" h-64 mb-8 mt-8 w-auto shadow-outline" src="https://res.cloudinary.com/laviniaella/image/upload/v1583226148/lavv/coffee_rvcbrn.png"></img></div>



</Grid>
    
      </Container>
    </Layout>
  )
}

export default Home
