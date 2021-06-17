import '../styles/blogs.css';
import mainNews from '../assets/images/main-news-img.png';
import Card from '../templates/Card';
import blogs from '../assets/json/blogs.json';
import Hero from '../templates/Hero';

const Blogs = () => {
  const view = /* html */ `
    <main class="blogs-main">
      ${Hero({
        imagen: mainNews,
        title: 'Titulo del Blogpost',
        resume:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rerum repellendus ad nulla incidunt? Perferendis minima provident itaque repellendus odit!',
        isBlogpost: blogs.posts[0].isBlogpost,
      })}
      <section class="blogs-post-container">
      <h3>Ultimos blogposts</h3>
        <div class="grid-container blogs-grid">
          ${blogs.posts
            .map((post) =>
              Card({
                imagen: post.image,
                title: post.title,
                resume: post.resume,
                isBlogpost: post.isBlogpost,
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
