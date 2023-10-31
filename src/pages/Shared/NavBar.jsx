import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg';
import useAuth from "../../hooks/useAuth";
// import { useContext } from "react";
// import { AuthContext } from "../../provider/UserProvider";


const NavBar = () => {
    // const { user, logOut } = useContext(AuthContext); 
    const { user, logOut } = useAuth()
    const handleSignOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.error(error)
            })
    }
    const navItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/services'>Services</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
    {
        user?.email ?
        <li><Link to='/bookings'>My Bookings</Link></li>
        :
        <Link to='/login'><button className="btn bg-red-500">Login</button></Link>
    }
    </>
    return (
        <div className="navbar bg-base-100 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                   
                </ul>
            </div>
            <div className="navbar-end">
            {
                    user ?
                        <>
                            <h3 className="mr-5">{user.displayName
                            }</h3>
                            <img className="w-10 h-10 rounded-full mr-2" src={user.photoURL} />
                            <button onClick={handleSignOut} className="btn btn-sm">Sign out</button>

                        </>
                        :
                        <Link to='/login'><button className="btn bg-red-500">Login</button></Link>
                }

            </div>
        </div>
    );
};

export default NavBar;