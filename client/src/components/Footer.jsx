import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="w-full container flex flex-col items-center justify-between py-10 gap-8">
                <div className="flex flex-row items-center justify-between gap-7">
                    <Link to="/" className="uppercase">Home</Link>
                    <Link to="#" className="uppercase">About Us</Link>
                    <Link to="#" className="uppercase">Privacy Policy</Link>
                    <Link to="#" className="uppercase">Contact Us</Link>
                </div>
                <div>&copy; techblog.com</div>
            </footer>
        </>
    )
}

export default Footer;