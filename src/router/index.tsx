// import Home from '@/views/home'
// import About from '@/views/about'
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Login from '@/views/Login';

const Layout = lazy(() => import('@/layout'));
const About = lazy(() => import('@/views/about'));
const Page1 = lazy(() => import('@/views/page1'));
const Page2 = lazy(() => import('@/views/about copy 2'));

const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense>{comp}</React.Suspense>
);

const routes = [
  {
    path: '/',
    element: <Navigate to="/about" />,
  },
  {
    path: '/',
    element: withLoadingComponent(<Layout />),
    auth: true,
    children: [
      {
        path: '/about',
        element: withLoadingComponent(<About />),
        meta: {
          about: 'test',
        },
        auth: true,
      },
      {
        path: '/page1',
        element: withLoadingComponent(<Page1 />),
      },
      {
        path: '/page2',
        element: withLoadingComponent(<Page2 />),
      },
    ],
  },
  {
    path: '/login',
    element: withLoadingComponent(<Login />),
  },
  // {
  //   path: '*',
  //   element: <Navigate to="/about" />,
  // },
];

export default routes;
