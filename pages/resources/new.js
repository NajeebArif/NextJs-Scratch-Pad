import React,{useState} from 'react'

const DEFAULT_DATA = {
    title: "",
    description: "",
    link: "",
    priority: "2",
    timeToFinish: 60
  }

export default function ResourceCreate() {
    const [form, setForm] = useState(DEFAULT_DATA);

    const resetForm = () => setForm(DEFAULT_DATA);

    const handleSubmit = () =>{
        fetch("/api/resources",{
            body: JSON.stringify(form),
            headers: {"Content-Type":"application/json"},
            method: "POST"
        })
    }

    const handleChange = (e)=>{
        setForm({
            ...form,
           [e.target.name] :e.target.value
        })
    }

    return (
        <div>
            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <div className="resource-form">
                            <h1 className="title">Add New Resource</h1>
                            <form>
                                <div className="field">
                                    <label className="label">Title</label>
                                    <div className="control">
                                        <input
                                            value={form.title}
                                            onChange={handleChange}
                                            name="title"
                                            className="input"
                                            type="text"
                                            placeholder="Learn Next JS and Sanity IO" />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Description</label>
                                    <div className="control">
                                        <textarea
                                            className="textarea"
                                            value={form.description}
                                            onChange={handleChange}
                                            name="description"
                                            placeholder="Learn these technologies because they are very popular and enable better SEO"></textarea>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Link</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            value={form.link}
                                            onChange={handleChange}
                                            name="link"
                                            type="text"
                                            placeholder="https://academy.eincode.com" />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Priority</label>
                                    <div className="control">
                                        <div className="select">
                                            <select value={form.priority} onChange={handleChange}
                                            name="priority">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Time to finish</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            value={form.timeToFinish}
                                            onChange={handleChange}
                                            name="timeToFinish"
                                            type="number"
                                            placeholder="60 (time is in minutes)" />
                                    </div>
                                    <p className="help">Time is in minutes</p>
                                </div>

                                <div className="field is-grouped">
                                    <div className="control">
                                        <button type="button" onClick={handleSubmit} className="button is-link">Submit</button>
                                    </div>
                                    <div className="control">
                                        <button type="button" onClick={resetForm} className="button is-link is-light">Reset</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
