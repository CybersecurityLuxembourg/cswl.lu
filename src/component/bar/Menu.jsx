import React, {useState} from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);
	return (
		<nav className="custom-nav">
			<div className="nav-container">
				<button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle menu">
					<span className="nav-toggle-icon"></span>
				</button>
				<div className={`nav-menu ${isOpen ? 'open' : ''}`}>
					<NavLink exact to="/" className="nav-link nav-link-general" activeClassName="active"
							 onClick={() => setIsOpen(false)}>
						About
					</NavLink>
					<NavLink to="/spring" className="nav-link nav-link-spring" activeClassName="active"
							 onClick={() => setIsOpen(false)}>
						Spring Edition
					</NavLink>
					<NavLink to="/autumn" className="nav-link nav-link-autumn" activeClassName="active"
							 onClick={() => setIsOpen(false)}>
						Autumn Edition
					</NavLink>
					<NavLink to="/partners" className="nav-link nav-link-general" activeClassName="active"
							 onClick={() => setIsOpen(false)}>
						Partners
					</NavLink>
					<NavLink to="/gala" className="nav-link nav-link-general" activeClassName="active"
							 onClick={() => setIsOpen(false)}>
						Gala and Awards Night
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Menu;