
import { Link } from 'react-router-dom';
import '../styles/loadpop.css';

// import notFoundImage from '../assets/notfound.jpg'; 


const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="home-link">Go back to Home</Link>
        </div>
    );
};

export default NotFound;


