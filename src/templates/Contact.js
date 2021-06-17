import '../styles/contact.css';
import like from '../assets/images/006-like.png';
import newsletter from '../assets/images/013-newsletter.png';

const Contact = () => {
  const view = /*html*/ `
    <section class="contact-main-container">
      <div>
        <img src=${newsletter} alt="newsletter icon" />
        <div class="contact-left">
          <a href="">Contacto</a>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      </div>
      <div>
        <img src=${like} alt="like icon" />
        <div class="contact-right">
          <a href="">Escribe</a>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      </div>
    </section>
  `;
  return view;
};
export default Contact;
