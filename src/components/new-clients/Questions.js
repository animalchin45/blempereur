import React from 'react'
import Collapsible from 'react-collapsible'
import faqs from './faqs'
import { v4 as uuidv4 } from 'uuid'

const Questions = () => {
    const renderedFaqs = faqs.map((faq) => {
        return (
            <Collapsible 
                transitionTime={200}
                trigger={faq.title}
                key={uuidv4()}
            >
                <p>{faq.text}</p>
            </Collapsible>
        )
    })

    return (
        <section className="questions">
            <div className="questions__content">
                <h3>Fequently Asked Questions</h3>
                <div className="questions__collapsible">
                    {renderedFaqs}
                </div>
            </div>
        </section>
    )
}

export default Questions