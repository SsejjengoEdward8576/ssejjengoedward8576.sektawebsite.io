import React from "react";
import "../styles/registrationform.css";

const RegistrationForm = () => {
  return (
    <div className="container">
        <div className="registration form">
          <header>Registration Form</header>
          <form method="post">
              <label htmlFor="firstname">First Name:</label>
              <br />
              <input
                id="firstname"
                type="text"
                placeholder="First Name"
                name="firstname"
              />
              <br />

              <label htmlFor="middlename">Middle Name:</label>
              <br />
              <input
                id="middlename"
                type="text"
                placeholder="Middle Name"
                name="middlename"
              />
              <br />

              <label htmlFor="lastname">Last Name:</label>
              <br />
              <input
                id="lastname"
                type="text"
                placeholder="Last Name"
                name="lastname"
              />
              <br />

              <label htmlFor="email">Email:</label>
              <br />
              <input id="email" type="email" required name="email" />
              <br />

              <label>Gender:</label>
              <br />
              <input type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male" className="radioBtn">Male</label>
              <br />
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female" className="radioBtn">Female</label>
              <br />
              <input type="radio" id="other" name="gender" value="other" />
              <label htmlFor="other" className="radioBtn">Other</label>
              <br />

              {/* Buttons */}
              <div className="formBtn">
                <input className="btn" type="submit" value="Register Now" />
                <input className="btn" type="reset" />
              </div>
          </form>
        </div>
    </div>
  );
};

export default RegistrationForm;
