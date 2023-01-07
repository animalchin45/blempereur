import React from 'react'
import Collapsible from 'react-collapsible'
import faqs from './faqs'
import { v4 as uuidv4 } from 'uuid'

const Questions = () => {
  const renderedFaqs = faqs.map((faq) => {
    return (
      <div key={uuidv4()}>
        <Collapsible key={uuidv4()} transitionTime={200} trigger={faq.title}>
          <p key={uuidv4()}>{faq.text}</p>
        </Collapsible>
      </div>
    )
  })

  return (
    <section className='questions'>
      <div className='questions__content'>
        <h3>Fequently Asked Questions</h3>
        <div className='questions__collapsible'>{renderedFaqs}</div>
      </div>
    </section>
  )
}

export default Questions
