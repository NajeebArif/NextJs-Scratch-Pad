import React from 'react'
import Link from 'next/link';
import axios from "axios";

import Resource from 'components/Resource';

export default function ResourceDetail({ resource }) {

    const activeResource = () => {
        axios.patch("/api/resources", { ...resource, status: "active" })
            .then(_ => location.reload())
            .catch(_ => alert("Cannot active the resource!"))
    }

    return (
        <div>
            <section className="hero ">
                <div className="hero-body">
                    <div className="container">
                        <section className="section">
                            <div className="columns">
                                <div className="column is-8 is-offset-2">
                                    <Resource resource={resource}>
                                        <p>Time to finish: {resource.timeToFinish} min</p>
                                        <EditResourceButton id={resource.id} />
                                        <ActivateResourceButton status={resource.status} activeResource={activeResource}/>
                                    </Resource>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    const resData = await fetch(`http://localhost:3001/api/resources/${params.id}`)
    const data = await resData.json();
    return {
        props: {
            resource: data
        }
    }
}

const EditResourceButton = ({ id }) => {
    return (
        <Link href={`/resources/${id}/edit`}>
            <a className="button is-warning">
                Edit Resource
            </a>
        </Link>
    )
}

const ActivateResourceButton = ({status, activeResource}) => {
    return (
        <button
            hidden={status === "complete"}
            onClick={activeResource}
            className="button is-success ml-1">
            Activate
        </button>
    )
}