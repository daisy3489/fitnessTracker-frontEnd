import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1><Link to='/'>Fitness Tracker</Link></h1>
            <div className="links">
                <Link to="/home">Home</Link>
                <Link to='/routines'>Routines</Link>
                <Link to="/users/login">Login</Link>

            </div>
        </nav>
    );
}
 
export default Navbar;