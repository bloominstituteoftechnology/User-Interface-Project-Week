import React from 'react';

import Input from './Input/Input';
import Select from './Select/Select';

import Css from './ContactForm.css';

const options = [ { value:"1", text:1 }, { value:"2", text:2 }, { value:"3", text:3 }, { value:"4", text:4 }, { value:"5", text:5 } ]

const ContactForm = () => (
    <form>
		<div className={Css.Row}>
            <Input for="email" label="Email address" type="email" placeholder="Enter email" name="email" />
			<p>We'll never share your email with anyone else.</p>
		</div>
		<div className={Css.Row}>
			<label for="buildings" id="buildings-label">How many buildings do you need planned?</label>
			<Select options={options} />
		</div>
		<div className={Css.Row}>
			<label for="overview" id="overview-label">Provide a brief overview of your project needs:</label>
			<textarea name="overview" id="overview"></textarea>
		</div>
		<div className={Css.Row}>
			<div className={Css.RadioHolder}>
                <Input for="radio-1" label="I am a small business" type="radio" value="I am a small business" name="customer-type" reverse={true} />
			</div>
			<div className={Css.RadioHolder}>
                <Input for="radio-2" label="I am a residential owner" type="radio" value="I am a residential owner" name="customer-type" reverse={true}  />
			</div>
			<div className={Css.RadioHolder}>
                <Input for="radio-3" label="I am a corporation" type="radio" value="I am a corporation" name="customer-type" reverse={true}  />
			</div>
		</div>
		<button type="submit" class={Css.Button}>Submit</button>
	</form>
)

export default ContactForm;