import React from "react";
import Navbar from "./Navbar";
 import './Contacts.css'

const Contacts = () => {
  

  return (
    <>
    <Navbar/> 

    <div class="container">
    <form action="https://formspree.io/f/mrgrekzy" method="POST" id="my-form">

<div class="form-group">
  <label for="firstName"> First Name</label>
  <input type="text" id="firstName" name="firstName" placeholder="First Name"/>
</div>

<div class="form-group">
  <label for="latsName">Last Name</label>
  <input type="text" id="lastName" name="lastName" placeholder="Last Name"/>
</div>

<div class="form-group">
  <label for="email">Email</label>
  <input type="email" id="email" name="email" placeholder="Email"/>
</div>

<div class="form-group">
  <label for="massage">Massage</label>
  <textarea name="massage" id="massage" cols="30" rows="5" placeholder="Messege"></textarea>
</div>

<button type="submit">Submit</button>
</form>
     </div>
     
    </>
  );
};

export default Contacts;
