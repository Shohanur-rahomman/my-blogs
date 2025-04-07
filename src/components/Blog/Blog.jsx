import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark, handleReadTime }) => {
    
    const { author, author_img, title, hashtags, img, reading_time,id } = blog;
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
                <figure>
                    <img
                        src={author_img} />
                </figure>
                <div className='flex justify-between mt-4 px-4'>
                    <img className='w-16' src={img} alt="" />
                    <h2 className="card-title">{author}</h2>
                    <button onClick={()=>handleBookMark(blog)}  className='cursor-pointer'>
                        <FaBookmark ></FaBookmark>
                    </button>

                </div>
                <div className="card-body">
                    <p>{title}</p>
                    <div className='flex justify-between'>
                        {
                            hashtags.map((has,index) => <p key={index}>{ has}</p>)

                        }
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleReadTime(reading_time,id)} className="btn btn-primary">Reading Time</button>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;