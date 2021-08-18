


import React, {useState} from 'react'
import FormContainer from 'components/FormContainer';
import ResourceForm from 'components/ResourceForm';

export default function Edit({resource}) {

    const updateResource = (formData) =>{
        alert(JSON.stringify(formData))
    }

    return (
        <FormContainer>
            <ResourceForm onFormSubmit={updateResource} initialData={resource}/>
        </FormContainer>
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
