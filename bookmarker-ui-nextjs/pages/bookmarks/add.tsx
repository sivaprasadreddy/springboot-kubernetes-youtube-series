import type { NextPage } from 'next'
import React, {useState} from "react";
import {saveBookmark} from "../../services/api";

const AddBookmark: NextPage = () => {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [message, setMessage] = useState<string|null>(null);

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if(!url) {
            alert("Please enter URL");
            return;
        }
        const payload = {
            title,
            url
        }
        const response = await saveBookmark(payload)
        console.log("SaveBookmark response: ", response)
        setTitle("");
        setUrl("");
        setMessage("Bookmark saved successfully")
    }

    return (
        <div>
            <div className="card">
                <div className="card-header text-center">
                    <h2>Create New Bookmark</h2>
                </div>
                <div className="card-body">
                    <div className="card-text">
                        {message && <div className="alert alert-primary" role="alert">{message}</div> }
                        <form onSubmit={e => handleSubmit(e)}>
                            <div className="mb-3">
                                <label htmlFor="url" className="form-label">URL</label>
                                <input type="text" className="form-control" id="url"
                                       value={url} onChange={e => setUrl(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title"
                                       value={title} onChange={e => setTitle(e.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBookmark
