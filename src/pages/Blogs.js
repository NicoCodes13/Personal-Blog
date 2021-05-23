import '../styles/blogs.css';
import mainNews from '../assets/images/main-news-img.png';
import post1 from '../assets/images/post-1.png';
import post2 from '../assets/images/post-2.png';
import post3 from '../assets/images/post-3.png';
import Card from '../templates/Card';
import blogs from '../assets/json/blogs.json';

const Blogs = () => {
  const view = /*html*/ `
  <main class="blogs-main">
    <section class="blogs-news-container">
      <div class="blogs-main-news">
        <h3>Noticias</h3>
        <div class="blogs-news-img-container">
          <img
            src=${mainNews}
            alt="imagen blog reciente"
          />
        </div>
        <div class = "blogs-news-info-container">
          <h2>Titulo del Blogpost</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur consequuntur magni voluptates ab quibusdam quae dolorem sed. Natus, accusamus aliquam. Nulla recusandae alias consequatur maxime. A eveniet fuga nam et.
          </p>
          <a href="" class ="blogs-button">Leer más</a>  
        </div>
      </div>
    </section>
    <section class="blogs-post-container">
    <div class="blogs-posts">
      <h3>Ultimos blogposts</h3>
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
