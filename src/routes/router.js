import Header from '../templates/Header';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import routes from './routes';
import Footer from '../templates/Footer';

const router = async () => {
  const app = null || document.getElementById('app');

  let hash = getHash();
  let render = routes[hash] ? routes[hash] : Error404;
  console.log(render);

  app.innerHTML = await `
  ${Header()}
  ${render()}
  ${hash === '/' ? '' : Footer()}
  `;
};

export default router;
