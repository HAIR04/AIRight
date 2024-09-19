
import { Link } from 'react-router-dom';

const Menu = () =>{
    return(
        <>
        <div className='w-[85%] mx-auto pt-26 pb-5 pl-1 border-b flex gap-6'>
            <Link to="/" className='text-2xl font-semibold'>Trending</Link>
            <Link to="/Collection" className='text-2xl font-semibold text-gray-400'>Collections</Link>
            <Link to="/NFTs" className='text-2xl font-semibold text-gray-400'>NFTs</Link>
        </div>
        </>
    )
}
export default Menu