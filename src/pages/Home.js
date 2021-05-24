import '../styles/home.css';

const Home = () => {
  const view = /* html */ `
    <main class="home-main" id="home-main">
      <section>
        <h1 class="home-main-text">
          Conoce las novedades y <br />
          noticias del Mundo Tech
        </h1>
        <a class="home-main-button" href="#/blogs"> Entra ya! </a>
      </section>
    </main>
  `;
  return view;
};

export default Home;
