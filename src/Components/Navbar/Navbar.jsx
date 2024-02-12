import react from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className='navbar navbar_bg shadow-xl'>
            <div className='navbar-start  ' >
                <div className='dropdown '>
                    <label tabIndex={0} className=' lg:hidden'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='white'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h8m-8 6h16'
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className='menu menu-compact text-black cursor-pointer font-semibold dropdown-content mt-3 p-2 shadow   w-52'
                    >
                        <li tabIndex={0} className='my-2'>

                            HOME

                        </li>
                        <Link to="/">
                        <li className='my-2'>
                            USERS
                        </li>
                        </Link>

                    </ul>
                </div>
                <a className='text-white font-semibold  normal-case text-xl'>Tech Next.</a>
                {/* <a className='btn btn-ghost normal-case text-xl'>XYZ SOURCING</a> */}
            </div>
            <div className='navbar-end text-white font-semibold  hidden lg:flex'>
                <ul className='menu menu-horizontal px-1'>
                    <li tabIndex={0} className='mx-4 cursor-pointer'>

                        HOME

                    </li>
                    <Link to="/"><li className='mx-4 cursor-pointer text-blue-700 '>
                        USERS
                    </li>
                    </Link>
                </ul>
            </div>
         
        </div>
    )
};
export default Navbar;