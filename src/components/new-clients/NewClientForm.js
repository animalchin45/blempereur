import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { send } from 'emailjs-com'
import { useForm } from 'react-hook-form'

const NewClientForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [toSend, setToSend] = useState({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        confirmEmail: '',
        phone: '',
        referredBy: '',
        message: ''
    })
    const [emailStatus, setEmailStatus] = useState(undefined)

    const SERVICE = process.env.REACT_APP_SERVICE_ID
    const TEMPLATE = process.env.REACT_APP_TEMPLATE_ID
    const USER = process.env.REACT_APP_USER_ID

    console.log(USER)

    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 1200px)' })

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value})
        // console.log(toSend)
    }

    const onSubmit = () => {
        if (toSend.email !== toSend.confirmEmail) {

        } else {
            send(
                SERVICE,
                TEMPLATE,
                toSend,
                USER
            )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setToSend({
                    firstName: '',
                    lastName: '',
                    age: '',
                    email: '',
                    confirmEmail: '',
                    phone: '',
                    referredBy: '',
                    message: ''
            })
                setEmailStatus('Success!')
                setTimeout(() => setEmailStatus(undefined), 4000)  
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
        }
    };

    return (
        <section className="client-form">
            <div className="client-form__content">
                <h3>New Client Form</h3>
                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <div className="client-form__row">
                        <div className="client-form__input client-form__input--name">
                            <input 
                                type="text"
                                {...register("firstName", { required: true })}
                                value={toSend.firstName}   
                                onChange={handleChange}
                            />
                            <div className="client-form__label">
                                <label>First Name</label>
                                {errors.firstName && <p className="client-form--error">Required</p>}
                            </div>  
                        </div>
                        {isDesktop && <div className="client-form__input client-form__input--name">
                            <input 
                                type="text"
                                {...register("lastName", { required: true })}
                                value={toSend.lastName} 
                                onChange={handleChange} 
                            />
                            <div className="client-form__label">
                                <label>Last Name</label>
                                {errors.lastName && <p className="client-form--error">Required</p>}
                            </div>
                        </div>}
                    </div>
                    {isMobile && <div className="client-form__row">
                            <div className="client-form__input client-form__input--name">
                                <input 
                                    type="text"
                 
                                    {...register("lastName", { required: true })}
                                    value={toSend.lastName} 
                                    onChange={handleChange} 
                                />
                                <div className="client-form__label">
                                    <label>Last Name</label>
                                    {errors.lastName && <p className="client-form--error">Required</p>}
                                </div>
                            </div>
                    </div>}
                    <div className="client-form__row">
                        <div className="client-form__input client-form__input--age">
                            <input 
                                type="text"
                                {...register("age", { required: true, valueAsNumber: true })} 
                                value={toSend.age}  
                                onChange={handleChange} 
                            />
                            <div className="client-form__label">
                                <label>Age</label>
                                {errors.age && <p className="client-form--error">Required</p>}
                            </div>
                        </div>
                    </div>
                    <div className="client-form__row">
                        <div className="client-form__input client-form__input--email">
                            <input 
                                type="text"
                                {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}   
                                value={toSend.email} 
                                onChange={handleChange}
                            />
                            <div className="client-form__label">
                                <label>Email</label>
                                {errors.email && <p className="client-form--error">Please enter valid email</p>}
                            </div>
                        </div>
                    </div>
                    <div className="client-form__row">
                        <div className="client-form__input client-form__input--email">
                            <input 
                                type="text"
                                {...register("confirmEmail", { pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}     
                                value={toSend.confirmEmail}  
                                onChange={handleChange}
                            />
                            <div className="client-form__label">
                                <label>Confirm Email</label>
                                {toSend.email !== toSend.confirmEmail && <p className="client-form--error">Email does not match</p>}
                            </div>
                        </div>
                    </div>
                    <div className="client-form__row">
                        <div className="client-form__input client-form__input--phone">
                            <input 
                                type="text"
                                {...register("phone", { required: true })}    
                                value={toSend.phone}
                                onChange={handleChange}
                            />
                            <div className="client-form__label">
                                <label>Phone</label>
                                {errors.phone && <p className="client-form--error">Required</p>}
                            </div>
                        </div>
                        <div className="client-form__input client-form__input--referred">
                            <input 
                                type="text"
                                {...register("referredBy")}  
                                value={toSend.referredBy} 
                                onChange={handleChange}
                            />
                            <div className="client-form__label">
                                <label>Referred By</label>
                                <p className="client-form--optional">Optional</p>
                            </div>
                        </div>
                    </div>
                    <div className="client-form__row--comment">
                        <textarea 
                            {...register("message", { required: true })}
                            value={toSend.message} 
                            onChange={handleChange}
                        ></textarea>
                        <div className="client-form__label">
                            <label>How can I help you?</label>
                            {errors.message && <p className="client-form--error">Required</p>}
                        </div>
                        <div className="client-form__submit">
                            <button 
                                className="btn"
                                type="submit"    
                            >
                                Submit
                            </button>
                            <p 
                                className="client-form--success"
                                style={emailStatus ? {opacity: 1} : {opacity: 0}}
                            >
                                {emailStatus}
                            </p>
                        </div>
                        
                    </div>
                    
                    <div className="client-form__row--text">
                        <p>
                            Please print & fill out the new client intake forms below (click on the links below) and bring with you to your initial consult and session.
                        </p>
                        <a 
                            href="https://storage.googleapis.com/wzukusers/user-35866045/documents/c989999e48a34dbe9fe67d324331cd93/Client%20Intake%20Form%201.pdf"
                        >
                            New Client Intake Form 1
                        </a>
                        <a 
                            href="https://storage.googleapis.com/wzukusers/user-35866045/documents/40bdaba067d74c9cbd71f02e9a154463/Client%20Intake%20Form%202.pdf"
                        >
                            New Client Intake Form 2
                        </a>
                        <p>
                            Barbara is often in treatment sessions during the day and there is a message system to receive your request. Your calls/texts/emails will be returned within 24 hours.
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default NewClientForm