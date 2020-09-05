import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="bg-dark justify-content-center d-flex" style={{padding: '10px'}}>
            <Link to="/home" className="justify-content-center d-flex text-light" style={{textDecoration: 'none'}}>
                <h1>My Posts</h1>
            </Link>
        </div>
    );
};

export default Header;