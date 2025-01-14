import React from 'react';
import '../Contact Us/ContactUs.css';
import msg_icon from '../../assets/logo.png'
import mail_icon from '../../assets/logo.png'
import phone_icon from '../../assets/logo.png'
import location_icon from '../../assets/logo.png'

const Contact = () => {
  
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "4c1c933a-dfad-4c34-a9c8-53c7375620b5");   
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Email sent Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
  
  
    return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
        <p>
          If you have any questions, feedback, or require further assistance, we’d love to hear from you! 
          Our team is here to ensure your experience with us is seamless and enjoyable. 
          Please fill out the form below with your details and message, and we’ll get back to you as soon as possible. 
          Whether it’s a query, a suggestion, or simply a hello, we’re always happy to connect with you!
        </p>
        <ul>
            <li> <img src={mail_icon} alt="" />  jalleli.hibaa@gmail.com</li>
            <li>  <img src={phone_icon} alt="" />  Phone: 123-456-7890</li>
            <li> <img src={location_icon} alt="" />Harrouch  elkef <br/> Tunisia </li>
            

        </ul>
      </div>
      <div className="contact-col">
       <form onSubmit={onSubmit}  >
        <label > Your name</label>
        <input type="text" name="name" placeholder='Enter your name' required />
        <label > Phone Number</label>
        <input type="tel" name="phone" placeholder='Enter your mobile number' required />
        <label > write your messages here</label>
          <textarea name="message"  rows='6' placeholder='Enter your message' required ></textarea>
          <button type='submit'  className='btn dark-btn'> Send now </button>
        
       </form>
       <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;