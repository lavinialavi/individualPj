import React from 'react';
import Layout from './Layout'

function About(props) {
  return <Layout>
    <div className="container mx-auto">
      <h1 className="font-bold text-3xl"> About her</h1>
      <div className="flex">

        <div className="w-full md:w-1/2  shadow-lg h-48">
          <div className="flex flex-col px-4 py-2 ">
            <div className="flex flex-no-wrap mr-6">
              <div className="w-1/2 mr-6" className="about-info">
               <div className="flex"> <img  className="h-32 " src="https://res.cloudinary.com/laviniaella/image/upload/v1583226148/lavv/lavv1_p6ljh7.jpg"></img>
               <div className="ml-4">
                <p className="font-bold text-xl text-blue-700"><span className="title-s ">Name: </span> <span>Lavinia Budean</span></p>
                <p className="text-sm text-grey-700"><span className="title-s">Profile: </span> <span>front-end developer</span></p>
                <p><span className="title-s">Email: </span> <span>lavinia.budean@evozon.com</span></p>
                <p><span className="title-s">Phone: </span> <span>0755 768574</span></p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skill-mf  h-48 w-1/2 mr-6 shadow-lg px-3 py-2">
          <p className="title-s">Skill</p>
          <span>HTML</span> <span className="pull-right">85%</span>
          <div className="progress" className='h-3 bg-indigo-200'>
            <div className="progress-bar h-full bg-blue-600" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <span>CSS</span> <span className="pull-right">75%</span>
          <div className="progress" className='h-3 bg-indigo-200'>
            <div className="progress-bar h-full bg-blue-600" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <span>JAVASCRIPT</span> <span className="pull-right">90%</span>
          <div className="progress" className='h-3 bg-indigo-200'>
            <div className="progress-bar h-full bg-blue-600" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="about-me pt-4 pt-md-0">
          <div className="title-box-2">

          </div>
          <p className="lead">
            Whether You Think You Can Or Think You Can’t, You’re Right. – Quote By Henry Ford
             Truly a quote to live by, the American captain of industry, Henry Ford, made this proclamation while reflecting on his life. He is still one of the wealthiest figures of the modern period. Ford also said, “Failure is simply the opportunity to begin again, this time more intelligently.”
                      </p>
          <p className="lead"></p>

        </div>
      </div>

    </div>

  </Layout>
}
export default About;