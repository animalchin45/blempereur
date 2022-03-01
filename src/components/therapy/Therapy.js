import React from 'react'
import Banner from '../Banner'
import articles from './articles'
import RenderArticles from '../render-articles/RenderArticles'
import { flowerTherapy } from '../../img/index'

const Therapy = () => {

    return (
        <div className="layout__body layout__body--therapy">
            <Banner img={flowerTherapy} />
            <RenderArticles articles={articles} />
        </div>
    )
}

export default Therapy