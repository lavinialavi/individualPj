import React from 'react';
import Layout from './Layout'


function Contact(props) {
    const [ firstName, setFirstName ] = React.useState(); // return [ undefined, function ....]
    function handleFirstName(e) {
        setFirstName(e.target.value)
        console.log(firstName)
        // console.log(e.target.value)
    }


    return <Layout>
        <div className="container mx-auto">


            <h1 className="font-bold text-3xl">Contact me</h1>
            <div className="flex">

                <div className="w-full md:w-1/2">



                    <form className="flex flex-col shadow-lg px-4 py-2">

                        <div className="flex flex-no-wrap">
                            <div className="w-1/2">
                                <label htmlFor="firstName">First name

                                <input onChange={handleFirstName}  required className="block w-full bg-white rounded-sm px-0 py-1" type="text" id="firstName" name="name" placeholder="Enter first name" />
                                </label>
                            </div>
                            
                            
                            
                            <div className="w-1/2">
                                <label htmlFor="lastName">Last name

                                <input required className="block w-full bg-white rounded-sm px-0 py-1" type="text" id="lastName" name="name" placeholder="Enter last name" />
                                </label>
                            </div>
                        </div>

                        <div>

                            <label htmlFor="email">Email
                            
                            <input required className="block w-full bg-white rounded-sm px-0 py-1" type="text" id="email" name="email" placeholder="Enter email" />
                            </label>
                        </div>

                        <div>
                            <label htmlFor="subject">Subject
                            
                                <input  className="block w-full bg-white rounded-sm px-0 py-1" type="text" id="subject" name="subject" placeholder="Enter subject" />
                            </label>
                        </div>

                        <div>
                        <label htmlFor="message">Message
                        
                            <textarea  required className="block w-full bg-white rounded-sm px-0 py-1" rows="5" cols="30" id="subject" name="subject" placeholder="tell us all about it"></textarea>
                        </label>

                        </div>
                <button className="bg-green-500 text-white rounded-lg px-2 py-1 uppercase" type="submit">Sent</button>

                    </form>
                </div>
                <div className="w-full md:w-1/2 px-4 py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia modi, culpa dolor deserunt eum sunt inventore nam perspiciatis a eveniet laborum neque nulla cupiditate tempore vero earum saepe enim!
                </div>
                </div>

        </div>


    </Layout>
};

export default Contact;