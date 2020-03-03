import React from 'react';
import Layout from './Layout'
import imageLoader from '../media/contact.jpg'
import { GoMailRead } from 'react-icons/go';


function Contact(props) {
    const [ firstName, setFirstName ] = React.useState(); // return [ undefined, function ....]
    function handleFirstName(e) {
        setFirstName(e.target.value)
        console.log(firstName)
        
    }
    const [lastName, setLastName]= React.useState();
    function handleLastName (e){
        setLastName(e.target.value)
        console.log(lastName)
    }
    const [email, setEmail]=React.useState();
    function handleEmail(e){
        setEmail(e.target.value)
        console.log(email)
    }
    const [subject, setSubject]=React.useState();
    function handleSubject(e){
        setSubject(e.target.value)
        console.log(subject)
    }
    const [message, setMessage]=React.useState();
    function handleMessage(e){
        setMessage(e.target.value)
        console.log(message)
    }



    return <Layout>
        <div className="container mx-auto">
            <h1 className="font-bold text-3xl" >Contact me</h1>
            <div className="flex">

                <div className="w-full md:w-1/2">

                    <form className="flex flex-col shadow-lg px-4 py-2 ">

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
                  

                <div className="w-full md:w-1/2 px-4 py-2">
                <div className="w-1/2 mr-8">
                <div className="flex flex-nowrap items-center"> <h1 className="font-bold text-3xl " >Get in Touch </h1> <GoMailRead className=" ml-4 h-8 w-8 text-blue-500 inline"></GoMailRead></div>
                

                   
                    Feel free to contact me at any time and I promise I will come back to you as soon as your message reaches out to me. I am open to colaborate and discuss any terms and conditions that might appear along the way. 
                    I look forward to hearing from you! 

                  
                   

  </div>
                    </div>
                    </div>
        </div>

    </Layout>
}
                                        
                

export default Contact;