
import Link from 'next/link'


const Resource = ({resource}) => {
    const {createdAt, title, description, id} = resource;
    return (
        <>
            <div className="content is-medium">
                <ResourceContent
                    createdAt={createdAt}
                    title={title}
                    description={description}
                />
            </div>
            <DetailsButton id={id} />
        </>
    )
}

const ResourceContent = ({ createdAt, title, description }) => {
    return (
        <>
            <h2 className="subtitle is-4">{createdAt}</h2>
            <h1 className="title">{title}</h1>
            <p>{description}</p>
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

export default Resource;