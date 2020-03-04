import React from 'react'
import Layout from './Layout'
import '../../node_modules/video-react/dist/video-react.css';
import { Player } from 'video-react';
// import 'typeface-roboto';


function Home(props) {
  return (
    <Layout>

      <div className="text-6xl bold text-center"> I'm Lavinia.</div>
      <p className="text-center mr-12 ml-12 focus:underline">
        I'm a Java Script developer based in Romania, creating awesome and effective visual identities for companies of all sizes around the globe. You can start surfing this little app in order to learn more about me.
               I consider that more important then working is enjoying life as it is. Two things I like most, a good coffee and summers.</p>
      <div className=" flex flex-row items-center justify-center">
        <div>
          <Player className="mx-5 w-10 md:w-5/12 mb-8 mt-8 shadow-outline "

            fluid={false}
            width={600}
            height={300}
            padding={100}
            poster="/assets/poster.png"
            src="https://res.cloudinary.com/laviniaella/video/upload/v1583351274/lavv/video_bRO3ncni_z0mM_p1m3ln.mp4" /></div>
        <div> <img className=" h-64 mb-8 mt-8 w-auto shadow-outline" src="https://res.cloudinary.com/laviniaella/image/upload/v1583226148/lavv/coffee_rvcbrn.png"></img></div>
      </div>
    </Layout>
  )
}

export default Home
