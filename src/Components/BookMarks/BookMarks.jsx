import BookMark from "../BookMark/BookMark";

const BookMarks = ({bookmarks,readingTime}) => {
    // console.log(bookmarks);
    // const {title}= bookmarks;
   
    console.log(readingTime);
    return (

     
        <div className="md:w-1/3 bg-yellow-200">
            <h3 className="text-2xl text-[#6047EC] font-bold m-2 p-4">Spent time on read : {readingTime} min</h3>
            <h3 className="text-2xl font-bold text-black bg-yellow-300 p-4">BookMarks Blog {bookmarks.length}</h3>
            

          {
            bookmarks.map((book) => <BookMark 
            key={book.id} 
            book={book}>

            </BookMark>)
          }
        </div>
    );
};

export default BookMarks;