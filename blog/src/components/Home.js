import React from 'react'
import Layout from './Layout'
import '../../node_modules/video-react/dist/video-react.css';
import { Player} from 'video-react';



function Home(props) {
    return (
                <Layout>
        <div style={{}}>

           

            <Player className="mx-auto w-full md:w-8/12 mb-8"

              fluid={false}
                width={600}
                height={300}
                padding={100}

              poster="/assets/poster.png"
              src="https://res.cloudinary.com/laviniaella/video/upload/v1583226149/lavv/video_ivyvce.mp4"/>

</div>
                </Layout>
            )
        }

        export default Home
