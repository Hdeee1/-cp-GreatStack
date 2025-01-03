/* eslint-disable no-unused-vars */
import React from "react";
import "./Contact.css";
import message_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b7145fc2-86e9-4c5e-9453-b78bfade6e4c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us a message <img src={message_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum ut
          repudiandae nam animi alias consequatur architecto corrupti nemo
          iusto, at quas! Nobis, nesciunt excepturi vel in quam repudiandae
          autem praesentium. Lorem ipsum dolor sit.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Lorem@gmali.coy
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +1 399-379-910
          </li>
          <li>
            <img src={location_icon} alt="" />
            69 Lorem ipsum dolor sit.
            <br /> MA 90908, united Lorem
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
