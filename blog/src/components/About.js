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
                <div className="flex"> <img className="h-32 " src="https://res.cloudinary.com/laviniaella/image/upload/v1583226148/lavv/lavv1_p6ljh7.jpg"></img>
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


      <div className="mx-10">
        <h1 className="text-xl lead text-indigo-300"> Education </h1>
        <div><h1 className="text-indigo-300">Between  2011-2013 </h1>
          <p>
            Babes-Bolyai University, Faculty of Economics and Business Administration, specializing in Accounting and Management Information Systems, undergraduate level </p>
          <ul>
            <li>⦁ Financial Analysis</li>
            <li>⦁	Descriptive Statistic</li>
            <li>⦁	Databases and Programs</li>
            <li>⦁	Financial Reporting</li>
          </ul>

          <p>
            <h1 className="text-indigo-300">Between  2013- 2015 </h1>
            Babes-Bolyai University, Faculty of Economics and Business Administration,
                  Specialization:  Diagnosis and Evaluation,  Master Level.</p>


        </div>
      </div>
    </div>

  </Layout >
}
export default About;