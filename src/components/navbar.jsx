import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
const Navigation = () => {
    return (
        <header className='bg-black'>
            <div className="navigation">
                <div className="nav-right-section gap-11">
                    <img className='logo-img' src={logo} alt="" height={50} />
                <div className='hidden lg:flex nav-links gap-8 text-white'>
                    <li className='hover:scale-105'>

                        <NavLink to='/movies'>
                            Movies
                        </NavLink>
                    </li>
                    <li className='hover:scale-105'>
                        <NavLink to='/tvshows'>
                            TvShows
                        </NavLink>
                    </li>
                    <li className='hover:scale-105'>
                        <NavLink to='/people'>
                            People
                        </NavLink>
                    </li>
                    <li className='hover:scale-105'>
                        <NavLink to='more'>
                            More
                        </NavLink>
                    </li>
                </div>
                </div>

                <div className='flex gap-5 text-white'>
                    <li className='hover:scale-105'>
                        <NavLink to='/login'>
                        Login
                        </NavLink>
                    </li>
                    <li className='hover:scale-105'>
                        <NavLink to='/jointmdb'>
                        Join TMDB</NavLink>
                    </li>

                </div>
            </div>
        </header>
    )
}
export default Navigation