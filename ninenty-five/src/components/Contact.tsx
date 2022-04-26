import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";
import styled from "styled-components";
import img from "../assets/contact.jpeg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_0xponww",
      "template_fk8rjsp",
      e.target,
      "BAGGmf0wIJ0RbUhWB"
    );

    e.target.reset();
  };
  return (
    <ContactContainer>
      <div className="container form_page" id="contact">
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>

        <div className="form_container contact__container">
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              id=""
              rows={7}
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn">
              Send Messsage
            </button>
            <div className="contact__options">
              <article className="contact__option">
                <MdOutlineEmail className="contact__option-icon" />
                <h4>Email</h4>
                <h5>Websamuraikun@gmail.com</h5>
                <a
                  href="mailto:Websamuraikun@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Send an email
                </a>
              </article>
              <article className="contact__option">
                <RiMessengerLine className="contact__option-icon" />
                <h4>Messanger</h4>
                <h5>something</h5>
                <a
                  href="https://m.me/104209262265227"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Send a message
                </a>
              </article>
              <article className="contact__option">
                <RiWhatsappLine className="contact__option-icon" />
                <h4>Whatsapp</h4>
                <h5>+123456789</h5>{" "}
                <a
                  href="https://api.whatsapp.com//send?phone=123456789"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Send a message
                </a>
              </article>
            </div>
          </form>
          <div className="shop_info">
            <img src={img} alt="" />
            <div className="info">
              <p>Open 8-20</p>
              <p>Open 8-20</p>
              <p>Open 8-20</p>
              <p>Open 8-20</p>
              <p>Open 8-20</p>
            </div>
          </div>
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: columns;

  .btn {
    border: 1px solid var(--color-bg);
    background: transparent;
    color: var(--color-bg);
    &:hover {
      color: white;
      background: var(--color-bg);
    }
  }
  .form_page {
    justify-items: center;
    flex-direction: column;
    align-items: center;
    padding: 5rem;
  }
  .form_container .contact__container {
    width: 100%;
    display: grid;
    grid-template-columns: 45% 50%;
    gap: 5%;
    padding: 2rem;
  }

  .contact__options {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .contact__option {
    background: var(--color-bg);
    padding: 1.2rem;
    border-radius: 1.2rem;
    text-align: center;
    color: #ffffff;
    border: 1px solid transparent;
    transition: var(--transition);
  }

  .contact__option:hover {
    background: transparent;
    border-color: var(--color-bg);
  }

  .contact__option-icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .contact__option a {
    margin-top: 0.7rem;
    display: inline-block;
    font-size: 0.8rem;
  }

  .shop_info {
    height: 100%;
    width: 100%;
    padding: 2rem;
    img {
      width: 100%;
      height: auto;
      border-radius: 25px;
    }
  }

  /*============FORM ===============*/

  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid var(--color-bg);
    resize: none;
    color: black;
  }

  /* ===================== MEDIA QUERIES ( MEDIA DEVICES) ================= */

  @media (max-width: 1024px) {
    width: 100vw;
    .form_page {
      justify-items: center;
      flex-direction: column;
      align-items: center;
      padding: 0;
    }
    .form_container .contact__container {
      width: 100%;
      display: grid;
      grid-template-columns: 100% 100%;
      margin: auto 0;
    }


    .contact__options {
      display: flex;
      flex-direction: column;
    }

    .contact__option {
      background: var(--color-bg);
      padding: 1.2rem;
      border-radius: 1.2rem;
      text-align: center;
      color: #ffffff;
      border: 1px solid transparent;
      transition: var(--transition);
    }

    .contact__option:hover {
      background: transparent;
      border-color: var(--color-bg);
    }

    .contact__option-icon {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .contact__option a {
      margin-top: 0.7rem;
      display: inline-block;
      font-size: 0.8rem;
    }

    .shop_info {
      height: 100%;
      width: 100%;
      padding: 2rem;
      img {
        width: 100%;
        height: auto;
        border-radius: 25px;
      }
    }

    form{
      display: grid;
      grid-template-columns: 1fr;
      width: 90vw;
      margin: 0 auto;
    }
  }

  /* ===================== MEDIA QUERIES ( SMALL DEVICES) ================= */

  @media (max-width: 600px) {
    .form_container .contact__container {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
`;
