import Header from '../templates/Header';
import Home from '../pages/Home';
import Blog from '../pages/Blog.html';
import Blogs from '../pages/Blogs.html';
import Porfile from '../pages/Porfile.html';

const routes = {
  '/': Home,
  '/blog': Blog,
  '/blogs': Blogs,
  '/porfile': Porfile,
};

const router = async () => {
  const app = null || document.getElementById('app');
  app.innerHTML = `${Header()}
  ${Home()}
  `;
};

export default router;
