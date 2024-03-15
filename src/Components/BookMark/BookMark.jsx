

const BookMark = ({book}) => {
    console.log(book);
    const {title}= book;
    return (
        
        <div className="space-y-7 bg-blue-300 p-5 m-4 rounded-2xl">
            <h3 className="text-xl font-semibold text-[#111111]">{title}</h3>
        </div>
    );
};

export default BookMark;