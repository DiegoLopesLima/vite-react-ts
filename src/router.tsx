import { createBrowserRouter } from 'react-router-dom';

import Default from './layouts/Default';
import Home from './views/Home';
import About from './views/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ]
  }
]);

export default router;
