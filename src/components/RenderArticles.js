import React from "react"
import { useMediaQuery } from 'react-responsive'
import { v4 as uuid } from 'uuid'

const RenderArticles = ({ articles }) => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })

    // All layout types for article components
    const renderedArticles = articles.map((article) => {
        switch (article.type) {
            case "left":
                return (
                    <div className="articles__content u-bottom-border" key={uuid()}>
                        <div>
                            {article.title && <h3>{article.title}</h3>}
                            {article.subtitle && <h4 className="articles__subtitle">{article.subtitle}</h4>} 
                        </div>
                        <div className="articles__content--left">
                            <div className={isDesktop ? "u-padding-right" : "u-margin-bottom"}>
                                {article.text}
                            </div>
                            <div style={{backgroundImage: `url(${article.img})`}} className="articles__img"></div> 
                        </div>
                    </div>
                )
            case "right":
                return (
                    <div className="articles__content u-bottom-border" key={uuid()}>
                        <div>
                            {article.title && <h3 className={isDesktop && "u-text-align-right"}>{article.title}</h3>}
                            {article.subtitle && <h4 className="articles__subtitle">{article.subtitle}</h4>}
                        </div> 
                        <div className="articles__content--right">
                            <div style={{backgroundImage: `url(${article.img})`}} className="articles__img"></div>
                            <div className={isDesktop && "u-padding-left"}>
                                {article.text}
                            </div>
                        </div>
                    </div>
                )
            case "video":
                return (
                    <div className="articles__content articles__content--video u-bottom-border" key={uuid()}>
                        <div>
                            <h3>{article.title}</h3>
                            {article.text}
                        </div> 
                        <div className="articles__video">
                            <iframe
                                height="360"
                                width="640"
                                src={article.video} 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            >
                            </iframe>
                        </div>
                    </div>
                )
            case "video-alt":
                return (
                    <div className="articles__content articles__content--video u-bottom-border" key={uuid()}>
                        <div>
                            {article.title && <h3>{article.title}</h3>}
                            {article.text}
                        </div> 
                        <div className="articles__video">
                            <video autoPlay controls loop muted>
                                <source src={article.video} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                )
            default:
                return (
                    <div className="articles__content u-bottom-border" key={uuid()}>
                        <div>
                            <div>
                                {article.title && <h3>{article.title}</h3>}
                                {article.subtitle && <h4 className="articles__subtitle">{article.subtitle}</h4>}
                            </div>
                            {article.text}
                        </div> 
                    </div>
                )
        }
    })

    return (
        <section className="articles">
            {renderedArticles}
        </section>
        
    )
}

export default RenderArticles