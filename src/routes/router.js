import Blog from '../pages/Blog.html';
import Blogs from '../pages/Blogs.html';
import Porfile from '../pages/Porfile.html';
import Header from '../templates/Header';

const routes = {
  '/': Blog,
  '/blogs': Blogs,
  '/porfile': Porfile,
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');
  const footer = null || document.getElementById('footer');

  header.innerHTML = await Header();
};

export default router;
