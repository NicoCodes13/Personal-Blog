const Hero = ({ imagen, title, resume, isBlogpost }) => {
  let button = ``;
  if (isBlogpost) {
    button = `<a class="blogs-button" href="#/:blog">Leer más</a>`;
  }

  const view = /*html*/ `
  <section class="blogs-news-container">
    <div class="grid-container blogs-main-news">
      <h3>Noticias</h3>
      <div class="blogs-news-img-container">
        <img src=${imagen} alt="imagen blog reciente" />
      </div class="grid-container">
      <div class="blogs-news-info-container">
        <h2>${title}</h2>
        <p>${resume}
        </p>
        ${button}
      </div>
    </div>
  </section>
  `;
  return view;
};

export default Hero;
