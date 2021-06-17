import '../styles/header.css';
import '../assets/font/flaticon.css';
import logo from '../assets/images/Logo-negro.png';

const Header = () => {
  const view = /* html */ `
    <header>
      <section class="header-icons-container">
        <div class="icons">
          <a href="https://www.facebook.com/nickcasrod/" title="facebook" target="_blank">
            <span class="flaticon-001-facebook"></span>
          </a>
          <a href="https://twitter.com/nicocast13" title="twitter" target="_blank">
            <span class="flaticon-002-twitter"></span>
          </a>
          <a href="https://www.instagram.com/nicolas_cst/" title="instagram" target="_blank">
            <span class="flaticon-011-instagram"></span>
          </a>
          <a href="https://www.linkedin.com/in/nicocodes/" title="linkedin" target="_blank">
            <span class="flaticon-010-linkedin"></span>
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" title="youtube" target="_blank">
            <span class="flaticon-008-youtube"></span>
          </a>
        </div>
      </section>
      <nav>
        <section class="nav-logo-container">
          <a href="/#"><img src=${logo} alt="Logo de mi blog" /></a>
        </section>
        <section class="profile-link">
          <a href="#/porfile">Sobre mí</a>
        </section>
      </nav>
    </header>
  `;
  return view;
};
export default Header;
