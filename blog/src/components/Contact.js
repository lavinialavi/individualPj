import React from 'react';
import Layout from './Layout'
import { GoMailRead } from 'react-icons/go';
import emailjs from 'emailjs-com';
import { Card, CardContent, CardActions, Grid, Container, CardMedia, Typography } from '@material-ui/core'


function Contact(props) {
    const [firstName, setFirstName ] = React.useState();
    const [lastName, setLastName]= React.useState();
    const [subject, setSubject]=React.useState();
    const [email, setEmail]=React.useState();
    const [message, setMessage]=React.useState();

    const formData = {
        firstName: firstName,
        lastName: lastName,
        subject: subject,
        email: email,
        message: message
    }

    
    function handleFirstName(e) {
        setFirstName(e.target.value)
    }
    function handleLastName(e) {
        setLastName(e.target.value)
    }
    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handleSubject(e) {
        setSubject(e.target.value)
    }
    function handleMessage(e) {
        setMessage(e.target.value)
    }

    function submitForm(e) {
        e.preventDefault();

        emailjs.send('gmail', 'blog_template', formData, 'user_yAkgh98C8eT23ofeYaStr')
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    }

    return <Layout>
          <Container className='my-10'>
        <div className="container items-center justify-center">
            <h1 className="font-bold p-3 text-3xl" >Contact me</h1>
            <div className="flex">

                <div className="md:w-1/2">

                    <form className="flex flex-col shadow-lg px-4 py-2" onSubmit={submitForm}>

                        <div className="flex flex-no-wrap mr-8">
                            <div className="w-1/2 mr-8">
                                <label htmlFor="firstName">First name*

                                <input onChange={handleFirstName}  required className="block w-full bg-white rounded-sm px-0 py-1 border border-blue-200 italic" type="text" id="firstName" name="name" placeholder="Enter first name" />
                                </label>
                            </div>
                                                      
                            <div className="w-1/2 mr-8">
                                <label htmlFor="lastName">Last name*

                                <input onChange={handleLastName} required className="block w-full bg-white rounded-sm px-0 py-1 border border border-blue-200 italic" type="text" id="lastName" name="name" placeholder="Enter last name" />
                                </label>
                            </div>
                        </div>

                        <div>

                            <label htmlFor="email">Email*
                            
                            <input onChange={handleEmail} required className="block w-full bg-white rounded-sm px-0 py-1 border border border-blue-200 italic" type="text" id="email" name="email" placeholder="Enter email" />
                            </label>
                        </div>

                        <div>
                            <label htmlFor="subject">Subject*
                            
                                <input  onChange={handleSubject}  required className="block w-full bg-white rounded-sm px-0 py-1 border border border-blue-200 italic" type="text" id="subject" name="subject" placeholder="Enter subject" />
                            </label>
                        </div>

                        <div>
                        <label htmlFor="message">Message*
                        
                            <textarea onChange= {handleMessage} required className="block w-full bg-white rounded-sm px-0 py-1 border border border-blue-200 italic" rows="5" cols="30" id="subject" name="subject" placeholder="message"/>
                        </label>

                        </div>
                <button className="bg-blue-300 text-white rounded-lg px-2 py-1 uppercase shadow-lg" type="submit">Sent</button>

                    </form>
                </div>
                  

                <div className=" md:w-1/2 px-2 py-2">
                <div className="w-1/2 mr-4">
                <div className="flex flex-wrap items-center"  xs={12} sm={6} md={4} lg={3}> <h2 className="font-bold text-3xl " >Get in Touch </h2> <GoMailRead className=" ml-4 h-8 w-8 text-blue-500 inline"></GoMailRead></div>
                

                   <Typography>
                    Feel free to contact me at any time and I promise I will come back to you as soon as your message reaches out to me. I am open to colaborate and discuss any terms and conditions that might appear along the way.</Typography>      
                   

  </div>
                    </div>
                    </div>
        </div>
        </Container>

    </Layout>
}
                                        
                

export default Contact;