import React from 'react'
import Resource from './Resource';

export default function ResourceList({ resources }) {
    const renderResources = () => resources.map(res => <ResourceListDetails key={res.id} resource={res} />);

    return (
        <div>
            <section className="hero ">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-multiline is-variable is-8">
                            {renderResources()}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const ResourceListDetails = (props) => {
    return (
        <>
            <div className="column is-5 is-offset-1 ">
                <div className="content is-medium">
                    <Resource {...props} />
                </div>
            </div>
        </>
    )
}
