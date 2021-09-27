import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import SuccessResponse from './SuccessResponse';
import UnsuccessResponse from './UnsuccessResponse';

const ContactFrom = () => {
    const [result, setResult] = useState(false);
    const [response, setResponse] = useState(true);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1is35s9', 'template_fsqccg2', e.target, 'user_IyV5H1u9Y4QUiRp8N4J4a')
          .then(() => {
              setResponse(true);
          }, (error) => {
              console.log(error.text);
              setResponse(false);
          });
          e.target.reset();
          setResult(true);
      };
    return (
        <>
        {result ? response ? <SuccessResponse /> : <UnsuccessResponse/> :
        <div class="container" id="container">
	<div class="form-container sign-up-container">
		<form onSubmit={sendEmail}>
			<h1>Get In Touch</h1>
			<input class="k1" type="text" placeholder="Full Name" name="name" required="" data-validate="Enter Full Name"/>
			<input type="tel" placeholder="Phone" name="phone" required="" data-validate="Enter Phone Number"/>
			<textarea id="message" name="message" placeholder="Enter Your Message"></textarea>
            <button>Send</button>

			<div class="social-container">
				<a href="https://www.linkedin.com/in/komal-pal-6527b61a5" class="social"><img src="/images/linkedin.png" alt="linkedin" /></a>
				<a href="https://github.com/komal3120" class="social"><img src="/images/github.png" alt="github" /></a>
				<a href="mailto:komalpal0000@gmail.com" class="social"><img src="/images/gmail.png" alt="gmail" /></a>
			</div>
			<span>Contact Us...</span>
		</form>
	</div> 
	<div class="form-container sign-container">
		<form action="#">
			<h1 class="heads">Knowlegde Is Power
			</h1>
			<div class="social-container">
</div>
			<h2 class="headss"><br/>Discover Greate Opportunies With Us...</h2>
	</form>
	</div>
	<div class="overlay-container">
		 <div class="overlay">
         <div class="overlay-panel overlay-left">
        
        <h1>Welcome!...</h1>
        <p>For all enquiries, please get in touch with us using this form</p>
        <button class="ghost" id="back" onClick={() => {
            
            const container = document.getElementById('container');
            container.classList.remove("right-panel-active");}}>Back</button>
    </div>
    <div class="overlay-panel overlay-right">
        <h1>Hello, Friend!</h1>
        <p>How can we help?..</p>
        <button class="ghost" id="signUp" onClick={() => {
            
            const container = document.getElementById('container');
            container.classList.add("right-panel-active");}}>Contact Us</button>
    </div>
         </div> 
	</div>
</div>
}
			
</>
    );
}

export default ContactFrom;