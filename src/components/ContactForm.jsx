import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import closeIcon from '../assets/1544641784.svg'
import emailLogo from '../assets/empty-email-svgrepo-com.svg'
import MyLinks from './MyLinks';

const ContactForm = () => {

    const [modal, setModal] = useState(false);


  


    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_gz0rpj9', 'template_p5j66z4', form.current, 'Tk-zLKSJ36TzPh9BJ')
        .then((result) => {
            // console.log(result.text);
            console.log('message sent')
        }, (error) => {
            console.log(error.text);
        });
    };



    return(

<>

      
        


 <section  className="bg-white dark:bg-gray-900">
  <div className="py-8 mt-24 md:mt-12 lg:py-10 px-4 mx-auto max-w-screen-md mb-16">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Send me a message:</h2>
      {/* <MyLinks /> */}
      <p className="mb-6 lg:mb-10 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
      <form ref={form} onSubmit={sendEmail} className="space-y-8  ">
          <div className='drop-shadow-md '>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
              <input type="text"  name="user_name"  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Type your name here.." required />
          </div>
          <div className='drop-shadow-md'>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" placeholder="Type your email.." id="email" name="user_email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"  required />
          </div>
          
          <div id="contact" className="sm:col-span-2 drop-shadow-md">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message.." required></textarea>
          </div>
          <div className='grid  place-items-center'>

          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content flex flex-col">
              <div className='m-5'>
                <h2 className='text-center text-xl'>Thank you, message was sent!</h2>
                </div>

               <div>
                <button className="close-modal" onClick={toggleModal}>
                  <img className='w-4 h-4' src={closeIcon} alt="closeIcon" />
                </button>
                </div>
              </div>
            </div>
          )}
          
          <button  type="submit" value="Send" onClick={toggleModal}  className=" text-gray-900 drop-shadow-md bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
          <img src={emailLogo} alt="emailLogo" className='w-6 h-6 m-1 mr-3' />
          Send message</button>
          </div>
      </form>
  </div>
</section> 

</>

    )
}

export default ContactForm;