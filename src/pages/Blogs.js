import '../styles/blogs.css';
import mainNews from '../assets/images/main-news-img.png';
import Card from '../templates/Card';
import blogs from '../assets/json/blogs.json';

const Blogs = () => {
  const view = /* html */ `
    <main class="blogs-main">
      <section class="blogs-news-container">
        <div class="grid-container blogs-main-news">
          <h3>Noticias</h3>
          <div class="blogs-news-img-container">
            <img src=${mainNews} alt="imagen blog reciente" />
          </div class="grid-container">
          <div class="blogs-news-info-container">
            <h2>Titulo del Blogpost</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              consequuntur magni voluptates ab quibusdam quae dolorem sed.
              Natus, accusamus aliquam. Nulla recusandae alias consequatur
              maxime. A eveniet fuga nam et.
            </p>
            <a href="#/:blog" class="blogs-button">Leer más</a>
          </div>
        </div>
      </section>
      <section class="blogs-post-container">
      <h3>Ultimos blogposts</h3>
        <div class="grid-container blogs-grid">
          ${blogs.posts
            .map((post) =>
              Card({
                imagen: post.image,
                title: post.title,
                resume: post.resume,
              })
            )
            .join('')}
        </div>
      </section>
    </main>
  `;
  return view;
};

export default Blogs;
