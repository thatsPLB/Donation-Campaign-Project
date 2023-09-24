import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";

const Navbar = () => {
    return (
      <div>
        <nav className="flex justify-between items-center py-5 shadow-md ">
            <Logo></Logo>
            <ul className="flex gap-6">
                {/* Home Button */}
                <li>
                <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-600 underline" : ""
                }
                >
                    Home
                    </NavLink>
                </li>

                {/* Donation */}
                
                <li>
                <NavLink
                to="/Donation"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-600 underline" : ""
                }
                >
                    Donation
                    </NavLink>
                </li>

                  {/* Statistics*/}
                
                  <li>
                <NavLink
                to="/Statistics"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-600 underline" : ""
                }
                >
                    Statistics
                    </NavLink>
                </li>
            </ul>
        </nav>
      </div>
    );
};

export default Navbar;