import React from 'react'
import { Link } from 'react-router-dom'
import Testimonial from './Testimonial'

import {
    flower1,
    krystals,
    barbaraSquare,
    orchidHero
} from '../../img/index'

const Hero = () => {
    return (
        <section 
            className="hero"
            style={
                {
                    backgroundImage: `url(${orchidHero})`
                }
            }
        >
            <div className="hero__logo">
                <img className="hero__logo--img" src={barbaraSquare} alt="helping"/>
                <div className="hero__logo--title">
                    <h1>Barbara Lempereur</h1>
                    <h2>Unified Therapist & Counselor</h2>
                </div>
            </div>
            <div className="hero__welcome">
                <h3 className="hero__welcome--brand">Unified Therapy &trade;<br/>Where the Mind Meets the Body</h3>
                <h4>305-401-2914</h4>
                <a href="mailto:barbara@blempereur.com">
                    <h4>barbara@blempereur.com</h4>
                </a>
                <Link to="/newclients">
                    <button className="btn">Start Now</button>
                </Link>
            </div>
            <Testimonial />
        </section>
    )
}

export default Hero