import React from 'react'
import { useMediaQuery } from 'react-responsive'
import articles from './articles'
import Hero from './Hero'
import Services from './Services'
import RenderArticles from '../render-articles/RenderArticles'

const Home = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })

    return (
        <div className="layout__body layout__body--home">
            <Hero />
            {isDesktop && <Services />}
            <RenderArticles articles={articles} />
        </div>
    )
}

export default Home