import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Blog Page</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create new Blog Post</Link>
            </div>
        </nav>
    );
}

export default Navbar;