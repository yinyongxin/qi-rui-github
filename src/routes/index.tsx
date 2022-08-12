import Layout from '@/Layout';
import Home from '@/pages/home';
import ReduxExemple from '@/pages/reduxExemple';
import ZLMyOrder from '@/pages/myOrder';
import ZLCharts from '@/pages/charts';
import ZLManagerHome from '@/pages/managerHome';
import Login from '@/pages/login';
import NoPage from '@/pages/noPage';
import BasicInformation from '@/pages/basicInformation';
import { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'reduxExemple',
        element: <ReduxExemple />,
      },
      {
        path: 'myOrder',
        element: <ZLMyOrder />,
      },
      {
        path: 'charts',
        element: <ZLCharts />,
      },
      {
        path: 'manager',
        element: <ZLManagerHome />,
      },
      {
        path: 'basicInformation',
        element: <BasicInformation />,
      },
      {
        path: '*',
        element: <NoPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
];
