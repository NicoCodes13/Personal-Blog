const Card = ({ imagen, title, resume }) => {
  const view = /*html*/ `
    <article class="post-container">
      <img src=${imagen} alt="imagen del post 6" />
      <h4>${title}</h4>
      <p>
      ${resume}
      </p>
      <a class="blogs-button" href="#/:blog">Leer más</a>
    </article>
  `;
  return view;
};

export default Card;
