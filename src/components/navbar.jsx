import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import {useState } from 'react'
const Navigation = () => {
    const navigate = useNavigate()
    const [searchInput, setSearchInput] = useState('')
    // useEffect(() => {
    //     let timeOut = setTimeout(() => navigate(`/search?=${searchInput}`), 1000)
    //     // console.log(searchInput)
    //     return () => clearTimeout(timeOut)
    // }, [searchInput, navigate])
    const searchHanlder = () => {
        if (searchInput )  navigate(`/search?=${searchInput}`)
    
    }

    return (
        <header className=''>
            <div className="navigation">
                <div className="nav-right-section gap-11">
                    <img className='logo-img' src={logo} alt=""  />
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

                <div className='flex items-center gap-5 text-white'>
                    <div className='search-field '>

                        <input id='search-field' type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder='Search Movies and Shows' />
                        <button onClick={searchHanlder} className='search-btn'>Search</button>
                    </div>
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