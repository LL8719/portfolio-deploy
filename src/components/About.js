import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Card() {
	return (
		<section id="about" class="sub-container">
			<h2>About Me</h2>
			<article>
				<p>
					I'm a very ambitious Web developer looking for a role in an
					established IT company with the opportunity to work with the latest
					technologies on challenging and diverse projects.
				</p>
			</article>
		</section>
	);
}

export default Card;
