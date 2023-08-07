import { createHashRouter } from 'react-router-dom';
import { Home } from './pages/Home.page';
import { Contact } from './pages/Contact.page';

export const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);
