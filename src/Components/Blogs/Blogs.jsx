import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'; 

const Blogs = ({handleBookMarks,handleMarkAsRead }) => {

    const [blogs,setBlogs]= useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])


    return (
        <div className="md:w-2/3">
            <h3 className="text-3xl font-bold text-black">blogs : {blogs.length}</h3>

            {
                blogs.map((blog) => <Blog 
                key={blog.id} 
                blog={blog}
                handleBookMarks={handleBookMarks}
                handleMarkAsRead  ={handleMarkAsRead }
                ></Blog>)
            }
       

        </div>
    );
};


Blogs.propTypes={
    handleBookMarks: PropTypes.func.isRequired,
}
export default Blogs;