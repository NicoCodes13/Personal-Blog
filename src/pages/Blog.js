import Footer from '../templates/Footer';
import img from '../assets/images/post-1.png';

const Blog = () => {
  const view = /*html*/ `
    <main>
      <section class="grid-container blogpost-img-container">
        <img src=${img} alt="main image" />
      </section>
      <section class="blogpost-main-container">
        <div class="grid-container">
          <h3></h3>
          <article>
            <h1></h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus ea sint provident dolor quasi expedita natus, id
              porro, in voluptatum corrupti totam distinctio ullam. Pariatur
              minima qui aliquid expedita autem.
            </p>
            <p></p>
            <p></p>
          </article>
        </div>
      </section>
      <section class="contact-main-container">
        <div>
          <img src="" alt="" />
          <div class="contact-left">
            <a href=""></a>
            <p></p>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <div class="contact-right">
            <a href=""></a>
            <p></p>
          </div>
        </div>
      </section>
    </main>
  `;
  return view;
};
export default Blog;
