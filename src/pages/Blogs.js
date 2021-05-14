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
    <section class="blogs-main-last">
      <div>
        <h3>Noticias</h3>
        <div>
          <img
            src=${mainNews}
            alt="imagen blog reciente"
          />
        </div>
      </div>
      <div>
        <div>
          <h2>Titulo del Blogpost</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            perspiciatis dicta reprehenderit corporis excepturi iste
            distinctio ea, esse aut quod optio illum vero similique nulla
            blanditiis placeat, nesciunt voluptates cupiditate.
          </p>
          <a href="">Leer más</a>
        </div>
      </div>
    </section>
    <section class="blogs-secondary">
      <h3>Ultimos blogposts</h3>
      <div class="blogs-posts">
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
