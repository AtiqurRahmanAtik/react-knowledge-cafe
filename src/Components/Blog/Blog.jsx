import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog,handleBookMarks,handleMarkAsRead }) => {
    // console.log(blog);
   
    const{ cover_image, title,author_img,author_name,reading_time,posted_date,hashtags}=blog;

    return (
        <div className="space-y-5 my-7 bg-teal-300 ">
        <img src={cover_image} alt="" />        

        <div className="flex justify-between space-y-5  p-7">

        <div className="flex items-center gap-3 p-7">
         <img className="w-20 rounded-full" src={author_img} alt="" />

         <div>
         <h3>{author_name}</h3>
        <p>{posted_date}</p>

         </div>

        </div>
        <div>

        <h3>{reading_time} min read <button onClick={()=> handleBookMarks(blog)} className='text-red-600 text-xl items-center'> <FaRegBookmark></FaRegBookmark></button></h3>

        </div>
        </div>

        <h2 className="text-[40px] font-bold text-[#111111]">{title}</h2>


        <p >
            {
                hashtags.map((hash,index) => <span key={index}> # {hash}</span>)
            }
        </p>

        <button onClick={()=> handleMarkAsRead(reading_time)} className='text-red-500 underline '>Mark as read</button>

        </div>
    );
};


Blog.propTypes={
   blog: PropTypes.object.isRequired,
}

Blog.propTypes ={
    handleBookMarks : PropTypes.func.isRequired,
}

export default Blog;