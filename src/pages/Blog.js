import img from '../assets/images/post-1.png';
import '../styles/blog.css';
import Contact from '../templates/Contact';

const Blog = () => {
  const view = /*html*/ `
    <main>
      <section class="grid-container blogpost-img-container">
        <img src=${img} alt="main image" />
      </section>
      <section class="blogpost-main-container">
        <div class="grid-container">
          <h3>Noticias</h3>
          <article>
            <h1>Título del Blogpost</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus ea sint provident dolor quasi expedita natus, id
              porro, in voluptatum corrupti totam distinctio ullam. Pariatur
              minima qui aliquid expedita autem.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, voluptate! Error voluptatum, voluptates, quo, ipsum
              earum quasi maiores eaque tempore impedit quos placeat. Ipsum,
              modi quod temporibus fuga iste beatae quam cumque iusto
              reprehenderit consequuntur saepe porro dolores omnis inventore
              sint laborum nemo nobis quae? Exercitationem ut molestias
              reprehenderit repellat nulla impedit voluptas animi doloremque
              temporibus saepe eius magni neque, nobis, blanditiis quae? Et
              voluptatem illo tenetur laboriosam ex! Quis assumenda labore sunt,
              inventore deserunt blanditiis dicta totam asperiores ratione!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              illo sint fugiat sed sapiente enim, ut accusantium, odit
              aspernatur iste beatae explicabo minima suscipit, perferendis fuga
              voluptatem. Quod eaque veniam consequatur sunt porro quo voluptas
              perspiciatis hic, ab repudiandae! Est repellat consequuntur earum
              perferendis placeat quae officia minus error debitis sed
              voluptatum aliquam qui, autem suscipit quas magni beatae aperiam
              nemo, veritatis atque ratione. Quidem numquam laborum ut quasi
              dolore porro qui? Non veritatis, vero nisi placeat delectus
              obcaecati omnis officia magni nobis, amet quaerat reprehenderit
              iusto inventore quae tempore!
            </p>
          </article>
        </div>
      </section>
      ${Contact()}
    </main>
  `;
  return view;
};
export default Blog;
