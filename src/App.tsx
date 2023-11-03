import { useRoutes, useLocation } from 'react-router-dom';
import router from './router';
// import BeforeEnter from './router/beforeEnter';

function BeforeEnter() {
  console.log('BeforeEnter');
  const Outlet = useRoutes(router);
  const location = useLocation();
  console.log(location);

  // const token = localStorage.getItem('token');

  // if (location.pathname === '/login' && token) {
  //   return <ToHome />;
  // }

  // if (location.pathname !== '/login' && !token) {
  //   return <ToLogin />;
  // }

  return Outlet;
}

function App() {
  // const [count, setCount] = useState(0)
  // console.log(Outlet);

  // console.log(<BeforeEnter routers={Outlet} />);
  // return <BeforeEnter routers={router} />;
  // return Outlet;
  return <BeforeEnter />;
}

export default App;
