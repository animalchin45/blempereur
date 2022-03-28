import React from 'react'
import serviceList from './serviceList'
import { v4 as uuidv4 } from 'uuid'

const Services = () => {
    const renderedServices = serviceList.map((service) => {
        // Layout for Services
        return (
            <div className="articles-column__item" key={uuidv4()}>
                <img src={service.img} alt={service.title}></img>
                <h4>{service.title}</h4>
                <div key={uuidv4()}>
                    {service.description}
                </div>   
            </div>
        )
    })

    return (
        <section className="articles-column articles-column--services">
            <h3>Services</h3>
            <div className="articles-column__content">
                {renderedServices}
            </div>
        </section>
    )
}

export default Services