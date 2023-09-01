import { Link } from "react-router-dom";
const Footer = () => {
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
