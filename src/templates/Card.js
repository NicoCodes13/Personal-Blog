import '../styles/card.css';

const Card = ({ imagen, title, resume, isBlogpost }) => {
  let button = ``;
  let img = ``;
  if (isBlogpost) {
    button = `<a class="blogs-button" href="#/:blog">Leer más</a>`;
  }
  if (imagen) {
    img = `<img src=${imagen} alt="imagen del post 6" />`;
  }

  const view = /*html*/ `
    <article class="post-container">
      ${img}
      <h4>${title}</h4>
      <p>${resume}</p>
      ${button}
    </article>
  `;

  return view;
};

export default Card;
