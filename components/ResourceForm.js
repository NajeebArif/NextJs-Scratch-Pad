

import React, { useState } from 'react'

const DEFAULT_DATA = {
    title: "",
    description: "",
    link: "",
    priority: "2",
    timeToFinish: 60
}

export default function ResourceForm({ onFormSubmit, initialData }) {

    const [form, setForm] = useState(initialData || DEFAULT_DATA);

    const resetForm = () => setForm(DEFAULT_DATA);

    const submitForm = () => onFormSubmit(form);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <>
            <div className="resource-form">
                <h1 className="title">Add New Resource</h1>
                <form>
                    <ResourceTitle title={form.title} handleChange={handleChange} />

                    <ResourceDescription description={form.description} handleChange={handleChange} />

                    <ResourceLink link={form.link} handleChange={handleChange} />

                    <ResourcePriority priority={form.priority} handleChange={handleChange} />

                    <ResourceTimeToChange timeToFinish={form.timeToFinish} handleChange={handleChange} />

                    <ResourceFormButtons onFormSubmit={submitForm} resetForm={resetForm}/>
                </form>
            </div>
        </>
    )
}

const ResourceTitle = ({ title, handleChange }) => {
    return (
        <div className="field">
            <label className="label">Title</label>
            <div className="control">
                <input
                    value={title}
                    onChange={handleChange}
                    name="title"
                    className="input"
                    type="text"
                    placeholder="Learn Next JS and Sanity IO" />
            </div>
        </div>
    )
}

const ResourceDescription = ({ description, handleChange }) => {
    return (
        <div className="field">
            <label className="label">Description</label>
            <div className="control">
                <textarea
                    className="textarea"
                    value={description}
                    onChange={handleChange}
                    name="description"
                    placeholder="Learn these technologies because they are very popular and enable better SEO"></textarea>
            </div>
        </div>
    )
}

const ResourceLink = ({ link, handleChange }) => {
    return (
        <div className="field">
            <label className="label">Link</label>
            <div className="control">
                <input
                    className="input"
                    value={link}
                    onChange={handleChange}
                    name="link"
                    type="text"
                    placeholder="https://NajeebArif.github.io" />
            </div>
        </div>
    )
}

const ResourcePriority = ({ priority, handleChange }) => {
    return (
        <div className="field">
            <label className="label">Priority</label>
            <div className="control">
                <div className="select">
                    <select value={priority} onChange={handleChange}
                        name="priority">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

const ResourceTimeToChange = ({ timeToFinish, handleChange }) => {
    return (
        <div className="field">
            <label className="label">Time to finish</label>
            <div className="control">
                <input
                    className="input"
                    value={timeToFinish}
                    onChange={handleChange}
                    name="timeToFinish"
                    type="number"
                    placeholder="60 (time is in minutes)" />
            </div>
            <p className="help">Time is in minutes</p>
        </div>
    )
}

const ResourceFormButtons = ({onFormSubmit, resetForm}) => {
    return (
        <div className="field is-grouped">
            <div className="control">
                <button type="button" onClick={onFormSubmit} className="button is-link">Submit</button>
            </div>
            <div className="control">
                <button type="button" onClick={resetForm} className="button is-link is-light">Reset</button>
            </div>
        </div>
    )
}