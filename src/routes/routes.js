import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Blogs from '../pages/Blogs';
import Porfile from '../pages/Porfile';

const routes = {
  '/': Home,
  blogs: Blogs,
  ':blog': Blog,
  porfile: Porfile,
};

export default routes;
