import React, {useState, useRef} from 'react'
import { useLoaderData } from 'react-router-dom'
import {collection, getDocs} from "firebase/firestore"
import emailjs from '@emailjs/browser';

import PageHeading from '../components/PageHeading'
import Faq from '../components/Faq'
import '../styles/contact.css'

export async function loader(db) {
    const faqCollection = collection(db, "faqs")
    const faqSnapshot = await getDocs(faqCollection)
    const faqList = faqSnapshot.docs.map(doc => doc.data())
    // returning the reversed docs since when adding docs, they get sent to the front of the array not the end of it
    return faqList.reverse()
}

export default function Contact() {
    const form = useRef();
    const [formData, setFormData] = useState({email : '', 
                                              name : '', 
                                              message : ''}
    )
    const [isSubmitted, setIsSubmitted] = useState(false)

    const faqs = useLoaderData()

    function handleSubmit(e) {
        e.preventDefault()
        emailjs.sendForm('service_pdgromf', 'template_u26r6wd', form.current, '6zZYN0aDPvgqb7fDq')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setIsSubmitted(true)
        clearForm()
    }

    function handleChange(e) {
        const {name, value} = e.target
        setFormData(prevFormData => ({...prevFormData, [name] : value}))
    }
    function clearForm() {
        setFormData({email : '', 
                    name : '', 
                    message : ''}
        )
    }

    return(
        <>
            <PageHeading heading="Contact Us"/>
            <main id='contact-page'>
                <aside id='faqs-section'>
                    <h1 className='heading'>Frequently Asked Questions</h1>
                    <div id="questions">
                        {faqs.map((faq, index) => <Faq question={faq.question} answer={faq.answer} key={index}/>)}
                    </div>
                </aside>
                <section id='contact-section'>
                    <h1 className='heading'>Additional Questions</h1>
                    <form id='contact-form' onSubmit={e => handleSubmit(e)} ref={form}> 
                        <input type="email" 
                               name='email'
                               placeholder='Email Address'
                               onChange={e => handleChange(e)}
                               value={formData.email}
                        />
                        <input type="text" 
                               name='name'
                               placeholder='Full Name'
                               onChange={e => handleChange(e)}
                               value={formData.name}
                               required
                        />
                        <textarea name="message"
                                  placeholder="Questions or Comments You'd Like To Share"
                                  onChange={e => handleChange(e)}
                                  value={formData.message}
                                  rows='2'
                                  required
                        ></textarea>
                        <button className='classical-cta form-cta'>{isSubmitted ? "Message Sent" : "Submit"}</button>
                    </form>
                </section>
            </main>
        </>
    )
}