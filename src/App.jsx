

import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookmark, setBookmark] = useState([]); 
  const [times, setTimes] = useState(0);

  const handleBookMark = (blog) => {
    console.log(blog);
    setBookmark([...bookmark,blog])
  }

  const handleReadTime = (time) => {
    const totalTime = times + time;
    setTimes(totalTime)
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
            bookmark.map((book) => <p>{book.title }</p>)
          }
        </div>
        </div>
      </div>
   
    </>
  )
}

export default App
