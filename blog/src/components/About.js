import React from 'react';
import Layout from './Layout'



function About(props) {
  return <Layout>
    <div className="container mx-auto">
      <h1 className="font-bold text-3xl"> About her</h1>
      <div className="flex">

        <div className="w-full md:w-1/2">
          <div className="flex flex-col shadow-lg px-4 py-2 ">
            <div className="flex flex-no-wrap mr-6">
              <div className="w-1/2 mr-6" className="about-info">
                <p><span className="title-s">Name: </span> <span>Lavinia Budean</span></p>
                <p><span className="title-s">Profile: </span> <span>front-end developer</span></p>
                <p><span className="title-s">Email: </span> <span>lavinia.budean@evozon.com</span></p>
                <p><span className="title-s">Phone: </span> <span>0755 768574</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="skill-mf w-1/2 mr-6  shadow-lg px-4 py-2">
          <p className="title-s">Skill</p>
          <span>HTML</span> <span className="pull-right">85%</span>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <span>CSS</span> <span className="pull-right">75%</span>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <span>JAVASCRIPT</span> <span className="pull-right">90%</span>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="about-me pt-4 pt-md-0">
          <div className="title-box-2">
           
          </div>
          <p className="lead">
            
                      </p>
          <p className="lead">
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
            porttitor volutpat. Vestibulum
            ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
                      </p>
          <p className="lead">
            Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            Nulla porttitor accumsan
            tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                      </p>

        </div>
      </div>

    </div>

  </Layout>
}


export default About;