import React from 'react';
import '../styles/style.css';
import resume from '../assets/updatedresume.pdf';
// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
	const handleResume = () => {
		const downloadLink = document.createElement('a');

		downloadLink.href = resume;

		downloadLink.download = 'updatedresume.pdf';

		downloadLink.click();
	};
	return (
		<header>
			<h1>Luis Lopez</h1>
			<nav>
				<a href="#about">About</a>
				<a href="#work">Work</a>
				<a href="#contact">Contact me</a>
				<a href="#resume" onClick={handleResume}>
					Resume
				</a>
			</nav>
		</header>
	);
}

export default Navbar;
