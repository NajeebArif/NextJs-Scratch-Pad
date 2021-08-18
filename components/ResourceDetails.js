import React from 'react'

export default function ResourceList({ resources }) {
    const renderResources = () => resources.map(res =>
    (<div key={res.id} className="column is-5 is-offset-1 ">
        <div className="content is-medium">
            <h2 className="subtitle is-5 has-text-grey">{res.createdAt}</h2>
            <h1 className="title has-text-black is-3">{res.title}</h1>
            <p className="has-text-dark">{res.description}</p>
        </div>
    </div>));

    return (
        <div>
            <section className="hero ">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-multiline is-variable is-8">
                            {
                                renderResources()
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
