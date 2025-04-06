import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleBookMark, handleReadTime }) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <h2 className='text-3xl font-bold mb-4'>Total Blogs : {blogs.length}</h2>
            <div className='grid grid-cols-2 gap-10'>
                {
                    blogs.map((blog) => <Blog
                        key={blog.id}
                        handleReadTime={handleReadTime}
                        handleBookMark={handleBookMark}
                        blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;