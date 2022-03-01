import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ScrollIntoView from "../components/ScrollIntoView"
import Layout from './layout/Layout'
import Home from './home/Home'
import ServicesMobile from './home/ServicesMobile'
import NewClients from './new-clients/NewClients'
import Therapy from './therapy/Therapy'
import About from './about/About'
import PartnersMobile from './about/PartnersMobile'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <ScrollIntoView>
                    <Layout>
                        <Switch>
                            <Route path='/' component={Home} exact={true} />
                            <Route path='/services' component={ServicesMobile} />
                            <Route path='/newclients' component={NewClients} />
                            <Route path='/unified-therapy' component={Therapy} />
                            <Route path='/aboutme' component={About} />
                            <Route path='/team' component={PartnersMobile} />
                        </Switch>
                    </Layout>
                </ScrollIntoView>
            </BrowserRouter>
        </div>
    )
}

export default App