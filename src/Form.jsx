
function Form() {
  return (
    <form 
    name="contact" 
    method="POST" 
    data-netlify="true" 
    className="form"
   >
  <input type="hidden" name="form-name" value="contact" />
     <input id="standard-basic" label="email" name="email" className="email" placeholder="Get the Newsletter" />
     <button type="submit">→</button>
    </form>
  );
}

export default Form;
