import '../styles/header.css';
import '../assets/font/flaticon.css';

const Header = () => {
  const view = /*html*/ `
    <section class="header-icons-container">
      <div class="icons">
        <a href="" title="facebook"
          ><span class="flaticon-001-facebook"></span
        ></a>
        <a href="" title="twitter"
          ><span class="flaticon-002-twitter"></span
        ></a>
        <a href="" title="instagram"
          ><span class="flaticon-011-instagram"></span
        ></a>
        <a href="" title="linkedin"
          ><span class="flaticon-010-linkedin"></span
        ></a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" title="youtube"
          ><span class="flaticon-008-youtube"></span
        ></a>
      </div>
    </section>
    <nav>
      <section class="nav-logo-container">
        <a href="/"><img src="/" alt="Logo de mi blog" /></a>
      </section>
      <section class="profile-link">
        <a href="#/porfile">Sobre mí</a>
      </section>
    </nav>
  `;
  return view;
};
export default Header;
