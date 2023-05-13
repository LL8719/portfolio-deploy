import React, { useState } from 'react';

export const Footer = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isNameValid, setIsNameValid] = useState(false);
	const [isEmailValid, setIsEmailValid] = useState(false);
	const [isMessageValid, setIsMessageValid] = useState(false);

	const handleNameChange = (event) => {
		setName(event.target.value);
		setIsNameValid(event.target.value !== '');
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
		setIsEmailValid(event.target.validity.valid);
	};

	const handleMessageChange = (event) => {
		setMessage(event.target.value);
		setIsMessageValid(event.target.value !== '');
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (isNameValid && isEmailValid && isMessageValid) {
			alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
		}
	};

	return (
		<footer className="sub-container" id="contact">
			<h2>Contact Me</h2>

			<form className="contact-form" onSubmit={handleSubmit}>
				<label>
					Name:
					<input type="text" value={name} onChange={handleNameChange} />
					{!isNameValid && <span className="required"></span>}
				</label>
				<label>
					Email:
					<input type="email" value={email} onChange={handleEmailChange} />
					{!isEmailValid && (
						<span className="required">* Invalid email address</span>
					)}
				</label>
				<label>
					Message:
					<textarea value={message} onChange={handleMessageChange} />
					{!isMessageValid && <span className="required"></span>}
				</label>
				<button type="submit">Submit</button>
			</form>

			<section>
				<aside>
					<a href="tel: 1520-971-0603">520-971-0603</a>
					<a href="mailto:luislopez.dev@gmail.com">luislopez.dev@gmail.com</a>
					<a
						href="https://github.com/luislopez-dev"
						target="_blank"
						rel="noopener noreferrer">
						GitHub
					</a>
				</aside>
			</section>
		</footer>
	);
};
