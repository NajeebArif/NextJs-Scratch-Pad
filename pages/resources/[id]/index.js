import React from 'react'
import Link from 'next/link';
import axios from "axios";
import BodyContainer from 'components/BodyContainer';

import Resource from 'components/Resource';

export default function ResourceDetail({ resource }) {

    const activeResource = () => {
        axios.patch("/api/resources", { ...resource, status: "active" })
            .then(_ => location.reload())
            .catch(_ => alert("Cannot active the resource!"))
    }

    return (
        <>
            <BodyContainer>
                <Resource resource={resource}>
                    <p className="mb-1">Time to finish: {resource.timeToFinish} min</p>
                    {
                        resource.status==="inactive" &&
                        <>
                            <EditResourceButton _id={resource.id} />
                            <ActivateResourceButton onClick={activeResource} />
                        </>
                    }
                </Resource>
            </BodyContainer>
        </>
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

const EditResourceButton = ({ _id }) => {
    return (
        <Link href={`/resources/${_id}/edit`}>
            <a className="button is-warning">
                Edit Resource
            </a>
        </Link>
    )
}

const ActivateResourceButton = (props) => {
    return (
        <button
            {...props}
            className="button is-success ml-1">
            Activate
        </button>
    )
}