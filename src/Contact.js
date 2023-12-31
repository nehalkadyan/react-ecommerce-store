import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>

    <h2 className="common-heading">Contact Page</h2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.9478793538244!2d77.07943325000001!3d28.63288615000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04c00014b0b3%3A0xe345ee11a19a4d7d!2sVIKAS%20KUNJ%2C%20Vikaspuri%2C%20Delhi%2C%20110018!5e0!3m2!1sen!2sin!4v1689426258530!5m2!1sen!2sin" width="100%" height="400" style={{border:0}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xyyqyqqk" method ="POST" className="contact-inputs">
          <input type="text" placeholder="username" name="username" required autoComplete="off" />
          <input type="email" name="Email" placeholder="Email" required autoComplete="off" />
          <textarea placeholder="Enter your message" cols="30" rows="10" name=" User's Message" required autoComplete="off">

          </textarea>

          <input type="submit" value="Send" />


        </form>
      </div>
    </div>


  </Wrapper>;
};

export default Contact;
