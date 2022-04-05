import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
const Navbar = () => {
    return (
        <div className='w-full top-0 bg-rose-600 px-12 py-4 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <Link className='font-sans font-bold text-3xl text-white' to='/'>
                    FireArms
                </Link>
            </div>
            <div className='flex font-black gap-2 text-[16px]'>
                <CustomLink to='/'>HOME</CustomLink>
                <CustomLink to='/reviews'>REVIEWS</CustomLink>
                <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
                <CustomLink to='/blogs'>BLOGS</CustomLink>
                <CustomLink to='/about'>ABOUT</CustomLink>
            </div>
        </div>
    )
}

export default Navbar;