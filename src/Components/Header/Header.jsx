import profile from '../../assets/image/profile.png';

const Header = () => {
    return (
        <div className='flex bg-blue-400 justify-between items-center container mx-auto my-10 border-b-4 py-3'>
             <h1 className='text-3xl text-[#111111] font-bold'>Kowledge Cafe</h1>
           
           <img src={profile} alt="" />
             
        </div>
    );
};

export default Header;