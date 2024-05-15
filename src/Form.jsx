
function Form() {

  return (

    <form 
    name="contact" 
    method="POST" 
    data-netlify="true" 
   >
  <input type="hidden" name="form-name" value="contact" />
     <input id="standard-basic" label="name" name="name" />
     <input id="standard-basic" label="email" name="email" />
     <input id="standard-basic" label="message" name="message" />
     <button type="submit">Send</button>
    </form>

  );
}

export default Form;
