import React from "react";

const Contact = () => {
    return(
    <div>
        <div>
            <div className="top-spacing"></div>
            <div className="contact-header">
                <div className="image">
                    <h1>Contact Us</h1>
                </div>
            </div>
        </div>

	<div className="container">
		<div className="contact-container">
			<form>
				<div className="group">
					<label for="">Email address</label>
					<input type="text" placeholder="Enter email" />
					<p>We'll never share your email with anyone else.</p>
				</div>
				<div className="group">
					<label>How many buildings do you need planned?</label>
					<input type="number" placeholder="1" />
				</div>
				<div className="group">
					<label>Provide a brief overview of your project needs</label>
					<textarea  cols="30" rows="10"></textarea>		
				</div>
				<div className="group">
					<input type="radio" />
					<input type="radio" />
					<input type="radio" />
				</div>
				<input type="submit" />
			</form>
			<div className="location">
				<section className="contact-section">
					<h3>
						Interested in starting a project? <br />
						Let’s talk:
					</h3>
					<textArea placeholder="Enter email" rows="1"></textArea>
					<p>We'll never share your email with anyone else.</p>
				</section>
				<section>
					<div className="footer-contact">
						<h4>New York</h4>
						<p>123 Lane</p>
						<p>Suite 100</p>
						<p>Albany, NY 12345</p>
						<p>202 555 0144</p>
					</div>
				</section>

				<section>
					<div className="footer-contact">
						<h4>Florida</h4>
						<p>Ocean Drive</p>
						<p>Suite 201</p>
						<p>Orlando, FL 22345</p>
						<p>502 555 0144</p>
					</div>
				</section>
				<section>
					<div className="footer-contact">
						<h4>California</h4>
						<p>Mountain Street</p>
						<p>Suite 105</p>
						<p>San Diego, CA 22345</p>
						<p>702 555 0144</p>
					</div>
				</section>
			</div>
		</div>

	</div>
</div>
        
    );
}

export default Contact;