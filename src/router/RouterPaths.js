import Main from '../components/routes/Main';
import Admin from '../components/routes/Admin';

const RouterPaths = {
  admin: {
    name: 'Admin',
    path: '/admin',
    order: 2,
    component: Admin,
  },
  main: {
    name: 'Main',
    path: '/',
    order: 1,
    component: Main,
  },
};

export default RouterPaths;