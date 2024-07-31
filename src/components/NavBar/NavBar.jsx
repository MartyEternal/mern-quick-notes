import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <div className="navbar">
            <nav className="navbar-menu">
                <ul className="menu-ui">
                    <li><Link to="/">All Notes</Link></li>
                    &nbsp;|&nbsp;
                    <li><Link to="/notes/new">New Note</Link></li>
                </ul>
                <ul className="user-ui">
                    &nbsp;<span>Welcome, {user.name}</span>
                    &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
                </ul>
            </nav>
        </div>

    );
} 