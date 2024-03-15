
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'


function App() {
  
  const [bookmarks, setBookmarks]= useState([]);
  const [readingTime, setReadingTime]= useState(0);

  const handleBookMarks = (blog)=>{
   
    console.log('bookmarks add');
   
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  
  }


  const handleMarkAsRead = (time)=>{
    console.log('time click');
    const newTime = readingTime + time;
    setReadingTime(newTime);

  }


  return (
    <>
    <Header></Header>
    
    <div className='container mx-auto flex gap-x-3'>

    <Blogs 
    
    handleBookMarks={handleBookMarks}
    handleMarkAsRead ={handleMarkAsRead}
    ></Blogs>

    <BookMarks 
    bookmarks={bookmarks}
    readingTime={readingTime}
    ></BookMarks>
    </div>
      
     
    </>
  )
}

export default App
