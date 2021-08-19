
import Link from 'next/link'


const Resource = (props) => {
    const {createdAt, title, description, id} = props.resource;
    return (
        <>
            <div className="content is-medium">
                <ResourceContent
                    {...props}
                />
            </div>
            <DetailsButton id={id} />
        </>
    )
}

const ResourceContent = ({ resource }) => {
    return (
        <>
            <h2 className="subtitle is-4">{resource.createdAt} <ResourceLabel status={resource.status}/></h2>
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

const ResourceLabel = ({status}) => {
    return (
      <span className={`tag is-large ml-4 resource-${status}`}>
        {status}
      </span>
    )
  }

export default Resource;