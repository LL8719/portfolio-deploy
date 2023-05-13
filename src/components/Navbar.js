import React from 'react';
import '../styles/style.css';
// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
	return (
		<header>
			<h1>Luis Lopez</h1>
			<nav>
				<a href="#about">About</a>
				<a href="#work">Work</a>
				<a href="#contact">Contact me</a>
				<a href="#resume">Resume</a>
			</nav>
		</header>
	);
}

export default Navbar;
