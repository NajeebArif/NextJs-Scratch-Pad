import React from 'react'

export default function ResourceHighlight({ resources }) {
    return (
        <>
            <section className="hero ">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-8 is-offset-2">
                                <figure className="image is-16by9">
                                    <img src="https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=6&m=922745190&s=612x612&w=0&h=qBmau_GKQZasMW14NJBp3u2vU-f5YFCcN1N71Exa8iE=" alt="" />
                                </figure>
                            </div>
                        </div>
                        {resources.map(resource => {
                            return (
                                <section key = {resource.id} className="section">
                                    <div className="columns">
                                        <div className="column is-8 is-offset-2">
                                            <div className="content is-medium">
                                                <h2 className="subtitle is-4">{resource.createdAt}</h2>
                                                <h1 className="title">{resource.title}</h1>
                                                <p>{resource.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
