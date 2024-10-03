
import './ContactForm.css'
import Swal from 'sweetalert2';
import {useState} from "react";

export default function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event) => {
        setIsLoading(true);

        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "4e0d7796-17d0-48dc-abad-01c9bcfa2055");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: 'Success!',
                text: 'Your message was sent successfully! We will contact you soon!',
                icon: 'success'
            });

            event.target.reset();

            setIsLoading(false);
        }
    };

    return (
        <section className='contactForm' >
            <h1>Fill out this form and we will get back to you as soon as possible!</h1>
            <form onSubmit={onSubmit}>
                <div className='fieldWrapper'>
                    <label htmlFor='name'>Full Name</label>
                    <input className='fieldInput' id='name' type='text' name='name' placeholder='Enter full name' required/>
                </div>
                <div className='fieldWrapper'>
                    <label htmlFor='email'>Email</label>
                    <input className='fieldInput' id='email' type='email' name='email' placeholder='Enter email' required/>
                </div>
                <div className='fieldWrapper'>
                    <label htmlFor='company'>Company Name</label>
                    <input className='fieldInput' id='company' type='text' name='company' placeholder='Enter company name' required/>
                </div>
                <div className='fieldWrapper'>
                    <label htmlFor='message'>Message</label>
                    <textarea className='fieldTextArea' id='message' name='message' placeholder='Enter message' required/>
                </div>
                <button type='submit' className='formButton' disabled={isLoading}>
                    {isLoading ? (
                        <div className="buttonSpinner">
                            <div className="loadingSpinner"></div> Sending...
                        </div>
                    ) : 'Send Message'}
                </button>
            </form>
        </section>
    )
}