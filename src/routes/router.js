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
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');
  const footer = null || document.getElementById('footer');

  header.innerHTML = await Header();
  content.innerHTML = await Home();
};

export default router;
