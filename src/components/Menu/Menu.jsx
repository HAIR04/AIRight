
import { Link } from 'react-router-dom';

const Menu = () =>{
    return(
        <>
        <div className='flex mx-auto pt-26 pb-5  border-b  gap-6
                        2xl:w-[95%]
                        xl:w-[95%]'>
            <Link to="/" className='text-2xl font-semibold'>Trending</Link>
            <Link to="/Collection" className='text-2xl font-semibold text-gray-400'>Collections</Link>
            <Link to="/NFTs" className='text-2xl font-semibold text-gray-400'>NFTs</Link>
        </div>
        </>
    )
}
export default Menu