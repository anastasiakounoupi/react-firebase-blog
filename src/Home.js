import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
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

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs' />}
        </div>
    );
}

export default Home;