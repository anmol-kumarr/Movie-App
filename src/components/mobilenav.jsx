import { MdMovie } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";


const data = [
    {
        id: 1,
        icon: <FaHome />,
        title: 'Home',
        path:'/'
    },
    {
        id: 2,
        icon: <MdMovie />,
        title: 'Movies',
        path:'/movies'
    },
    {
        id: 3,
        icon: <MdOutlineLiveTv />,
        title: 'Tv Shows',
        path:'/tvshows'
    },
    {
        id: 4,
        icon: <IoSearch></IoSearch>,
        title: 'Search',
        path:'/search'
    }
]
const MobileNav = () => {
    return (
        <div className="mobile-nav">
            {
                data.map((item) => (
                    <NavLink to={`${item.path}`}>

                        <div className="flex flex-col items-center" key={item.id}>
                            <div className="nav-icon">{item.icon}</div>
                            <p>{item.title}</p>
                        </div>
                    </NavLink>
                ))
            }
        </div>

    )
}
export default MobileNav;