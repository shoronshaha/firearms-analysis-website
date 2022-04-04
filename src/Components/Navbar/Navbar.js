import CustomLink from '../CustomLink/CustomLink';
const Navbar = () => {
    return (
        <div className='w-full top-0 bg-orange-400 px-12 py-4 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <CustomLink className='font-sans font-bold text-3xl text-white' to='/'>
                    FireArms
                </CustomLink>
            </div>
            <div className='flex gap-2 text-xl'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/reviews'>Reviews</CustomLink>
                <CustomLink to='/dashboard'>Dashboard</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </div>
        </div>
    )
}

export default Navbar;