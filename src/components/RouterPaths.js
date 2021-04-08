import Main from './routes/Main';
import Admin from './routes/Admin';

const RouterPaths = {
  main: {
    name: 'Main',
    path: '/',
    component: Main,
  },
  admin: {
    name: 'Admin',
    path: '/admin',
    component: Admin,
  },
};

export default RouterPaths;