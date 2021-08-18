


import React from 'react'

export default function Edit({resource}) {
    return (
        <div>
            <h2>I am edit page: {resource.title}</h2>
        </div>
    )
}

export async function getServerSideProps({params}){
    const resData = await fetch(`http://localhost:3001/api/resources/${params.id}`)
    const data = await resData.json();
    return {
        props: {
            resource: data
        }
    }
}
