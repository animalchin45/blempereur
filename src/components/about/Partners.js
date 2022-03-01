import React from "react"
import partnersList from './partnersList'
import { v4 as uuidv4 } from 'uuid'

const Partners = () => {
    const renderedPartners = partnersList.map((partner) => {
        return (
            <div className="articles-column__item" key={uuidv4()}>
                <img src={partner.img} alt={partner.title}/>
                <h4>{partner.title}</h4>
                <a href={partner.url}>
                    {partner.site}
                </a>
                {partner.text}
            </div>
        )
    })

    return (
        <section className="articles-column">
            <h3>Unified Therapy Team</h3>
            <div className="articles-column__content">
                {renderedPartners}
            </div>
        </section>
    )
}

export default Partners