import { useHistory, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const BlogDetails = () => {
    const { id } = useParams()
    const [blogs, setBlogs] = useState(null)
    const [error, setError] = useState('');
    const history = useHistory()

    useEffect(() => {
        fetch('http://localhost:8000/blogs/' + id)
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data)
            })
            .catch((err) => {
                setError(err.message)
            })
    }, []);

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;