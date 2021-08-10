import { Link } from "react-router-dom";

const SideNav = () => {
    return(
        <nav className='sidenav'>
            <ul>
                <li><a href='/'> Home </a></li>
                <li> <Link to='/theme'> Theme App </Link></li>
                <li> <Link to='/timer'> Timer App </Link></li>
                <li> <Link to='/todo'> ToDo App </Link></li>
            </ul>
        </nav>

)

};

export default SideNav