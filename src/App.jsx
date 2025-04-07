

import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookmark, setBookmark] = useState([]); 
  const [times, setTimes] = useState(0);

  const handleBookMark = (blog) => {
  
    setBookmark([...bookmark,blog])
  }

  const handleReadTime = (time, id) => {
   
    const totalTime = times + time;
    setTimes(totalTime);
    handleDelete(id)
  }
  const handleDelete = (id) => {
    const remaining = bookmark.filter((book) => book.id !== id);
    setBookmark(remaining);
  }
  

  return (
    <>
      <Navbar></Navbar>
      <div className=' flex p-4 gap-10'>
        <div className=' w-[70%]'>
          <Blogs handleBookMark={handleBookMark} handleReadTime={handleReadTime}></Blogs>
        </div>
        <div className=' w-[30%]'>
          <h2 className='text-3xl font-bold'>Total Reading time : {times }</h2>
          <h2 className='text-2xl font-bold'>Total Book Mark : {bookmark.length }</h2>
        <div>
          {
            bookmark.map((book,index) => <p key={index} className='bg-amber-200 p-4 m-4 rounded-lg'>{book.title }</p>)
          }
        </div>
        </div>
      </div>
   
    </>
  )
}

export default App
