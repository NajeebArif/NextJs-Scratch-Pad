import React from 'react'
import axios from 'axios';
import { useRouter } from "next/router";
import ResourceForm from 'components/ResourceForm';
import FormContainer from 'components/FormContainer';

const ResourceCreate = () => {

    const router = useRouter();

    const submitForm = formData => {
        axios.post("/api/resources", formData)
            .then(_ => router.push("/"))
            .catch(err => alert(err?.response?.data));
    }

    return (
        <FormContainer>
            <ResourceForm
                onFormSubmit={submitForm}
            />
        </FormContainer>
    )
}


export default ResourceCreate;