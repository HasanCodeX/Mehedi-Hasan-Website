// ContactMe.jsx
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactMe = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your actual EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your actual Template ID
        formRef.current,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setSuccess(true);
          e.target.reset();
        },
        (error) => {
          console.error("Email error:", error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div className=" bg-black text-white min-h-screen px-4 py-12 md:px-12 relative">
     
      

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4">Contact Me</h2>
        <hr className="border-gray-700 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div>
            <h3 className="text-2xl mb-4">Get in touch</h3>
            <p className="mb-4">
              <span className="font-bold">Email:</span>{" "}
              <a
                href="mailto:dev.hasan10@gmail.com"
                className="underline hover:text-gray-400"
              >
                dev.hasan10@gmail.com
              </a>
            </p>
            <p className="mb-4">
              <span className="font-bold">Phone:</span> +8801747874773
            </p>
            <p>
              Feel free to reach out for projects, collaborations, or just a
              friendly chat. I'm open to connecting!
            </p>
          </div>

          {/* Right Section (Form) */}
          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full border border-white bg-transparent px-4 py-3 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full border border-white bg-transparent px-4 py-3 outline-none"
              />
            </div>
            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              required
              className="border border-white bg-transparent px-4 py-3 outline-none"
            ></textarea>
            <button
              type="submit"
              className="border border-white px-6 py-2 hover:bg-white hover:text-black transition"
            >
              Send
            </button>
            {success === true && (
              <p className="text-green-400 mt-2">Message sent successfully!</p>
            )}
            {success === false && (
              <p className="text-red-400 mt-2">Failed to send. Try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
