import React from 'react';

import 'firebase/firestore';
import 'firebase/auth';
import { firestore } from './firebase.config'
import BlogItem from './BlogItem';

import { useCollectionData } from 'react-firebase-hooks/firestore';



const BlogList = () => {
    const blogsRef = firestore.collection('blogs');
    const query = blogsRef.orderBy('createdAt', 'desc').limit(25);

    const [blogs] = useCollectionData(query, { idField: 'id' });

    return (
        <div className="content">
            <div className="blog-container">
                {blogs && blogs.map(blog => {
                    return (
                        <BlogItem key={blog.id} blog={blog} />
                    )
                })}
            </div>
        </div>
    )
}

export default BlogList;