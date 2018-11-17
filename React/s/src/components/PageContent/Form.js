import React from 'react';

const form = props => {
  return(
    <form className="contactUs" name="contactUs">
      <h2>Get In Touch</h2>

      <div className="ContactUs__block">
        <label>Email Address</label>
        <input type="text" name="email" placeholder="Enter email" />
        <p>We'll never share your email with anyone else</p>
      </div>

      <div className="ContactUs__block">
        <label>How many buildings do you need planned?</label>
        <select name="buildings" form="contactUs">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div className="ContactUs__block needs">
        <label>Provide a brief overview of your project needs:</label>
        <textarea rows="8" cols="40"></textarea>
      </div>


      <div className="ContactUs__block">
        <div><input type="radio" name="order_type"value="business" />I am a small business</div>
        <div><input type="radio" name="order_type" value="resident" />I am a residential owner</div>
        <div><input type="radio" name="order_type" value="corp" />I am a corporation</div>
      </div>

      <button type="submit" name="button">Submit</button>
    </form>
  );
}

export default form;
