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
					Designer and Developer of websites and digital products that are easy
					to manage and that you and the user will loves.
				</p>
			</article>
		</section>
	);
}

export default Card;
