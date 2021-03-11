import { Link } from 'react-router-dom';
import SignOut from './SignOut';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/"><h4>Home</h4></Link>
            <div className="links">
                <Link to="/create"><button className="add">New Post</button></Link>
                <SignOut />
            </div>
        </nav>
    );
}

export default Navbar;