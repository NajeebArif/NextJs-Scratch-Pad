import React from 'react'

export default function ResourceList({ resources }) {
    return (
        <div>
            <section className="hero ">
                <div className="hero-body">
                    <div className="container">
                        {
                            resources.map(res => {

                                <section key={res.id} className="section">
                                    <div className="columns is-variable is-8">
                                        <div className="column is-5 is-offset-1 ">
                                            <div className="content is-medium">
                                                <h2 className="subtitle is-5 has-text-grey">{res.createdAt}</h2>
                                                <h1 className="title has-text-black is-3">{res.title}</h1>
                                                <p className="has-text-dark">{res.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
