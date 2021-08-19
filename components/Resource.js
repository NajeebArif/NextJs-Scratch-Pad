
import Link from 'next/link'
import moment from 'moment';


const Resource = (props) => {
    return (
        <>
            <div className="content is-medium">
                <ResourceContent
                    {...props}
                />
            </div>
            {
                props.children ? props.children : <DetailsButton id={props.resource.id} />
            }
        </>
    )
}

const ResourceContent = ({ resource }) => {
    return (
        <>
            <h2 className="subtitle is-4">{moment(resource.createdAt).format("LLL")} <ResourceLabel status={resource.status} /></h2>
            <h1 className="title">{resource.title}</h1>
            <p>{resource.description}</p>
        </>
    )
}

const DetailsButton = ({ id }) => {
    return (
        <Link href={`resources/${id}`}>
            <button className="button is-link">
                Details
            </button>
        </Link>
    )
}

const ResourceLabel = ({ status }) => {
    return (
        <span className={`tag is-large ml-4 resource-${status}`}>
            {status}
        </span>
    )
}

export default Resource;