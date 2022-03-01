import React from 'react'
import articles from "./articles"
import Banner from '../Banner'
import RenderArticles from '../render-articles/RenderArticles'
import NewClientForm from './NewClientForm'
import Questions from './Questions'
import { flowerClient } from '../../img/index'

const NewClients = () => {

    return (
        <div className="layout__body layout__body--new-clients">
            <Banner img={flowerClient}/>
            <RenderArticles articles={articles} />
            <NewClientForm />
            <Questions />
        </div>
    )
}

export default NewClients