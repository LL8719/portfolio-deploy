import { React, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import { Footer } from './components/Footer';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
	useEffect(() => {
		document.title = 'Luis Lopez Portfolio';
	}, []);
	return (
		<div>
			<Navbar />
			<div>
				<Header />
			</div>
			<main class="main-container">
				<About />
				<Work />
				<Footer />
			</main>
		</div>
	);
}

export default App;
