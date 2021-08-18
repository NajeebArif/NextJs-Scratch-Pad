


import React, {useState} from 'react'
import FormContainer from 'components/FormContainer';
import ResourceForm from 'components/ResourceForm';
import axios from 'axios';
import { useRouter } from "next/router";

export default function Edit({resource}) {

    const router = useRouter();

    const updateResource = (formData) =>{
        axios.patch("/api/resources", formData)
            .then(_ => router.push(`/resources/${formData.id}`))
            .catch(err => alert(err?.response?.data));
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
