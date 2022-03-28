import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Banner from '../Banner'
import articles from './articles'
import RenderArticles from '../RenderArticles'
import Partners from './Partners'

import { flowerAbout } from '../../img/index'

const About = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })

    return (
        <div className="layout__body layout__body--about">
            <Banner img={flowerAbout} />
            <RenderArticles articles={articles} />
            {isDesktop && <Partners />}
        </div>
    )
}

export default About