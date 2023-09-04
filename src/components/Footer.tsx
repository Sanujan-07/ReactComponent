import { Link } from "react-router-dom";
import React from 'react';
const Footer: React.FC = () => {
    return (
        <footer>
            <p>
                copyright &copy; 2023
            </p>
            <Link to="/about">about</Link>
        </footer>
    )
}

export default Footer;
