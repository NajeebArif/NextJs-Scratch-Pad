import React from 'react'
import Resource from './Resource'

export default function ResourceHighlight({ resources }) {
    return (
        <>
            <section className="hero ">
                <div className="hero-body">
                    <div className="container">
                        <ResourceHighlightBanner />
                        {
                            resources.map(resource => <ResourceSection key={resource.id} resource={resource} />)
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

const ResourceHighlightBanner = () => (
    <div className="columns">
        <div className="column is-8 is-offset-2">
            <figure className="image is-16by9">
                <img src="https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=6&m=922745190&s=612x612&w=0&h=qBmau_GKQZasMW14NJBp3u2vU-f5YFCcN1N71Exa8iE=" alt="" />
            </figure>
        </div>
    </div>
)

const ResourceSection = (props) => {
    return (
        <>
            <section className="section">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <Resource {...props} />
                    </div>
                </div>
            </section>
        </>
    )
}

