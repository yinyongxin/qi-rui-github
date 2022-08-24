import Layout from '@/Layout';
import Home from '@/pages/home';
import ReduxExemple from '@/pages/reduxExemple';
import ZLMyOrder from '@/pages/myOrder';
import ZLCharts from '@/pages/charts';
import ZLManagerHome from '@/pages/managerHome';
import ZLManagerList from '@/pages/managerList';
import ZLManagerTwo from '@/pages/managerList/cpages/managerTwo';
import ZLManagerThree from '@/pages/managerList/cpages/managerThree';
import ZLManagerFour from '@/pages/managerList/cpages/managerFour';
import ZLManagerFive from '@/pages/managerList/cpages/managerFive';
import ZLManagerSix from '@/pages/managerList/cpages/managerSix';
import ZLManagerSeven from '@/pages/managerList/cpages/managerSeven';
import ZLOperatorHome from '@/pages/operatorHome';
import ZLChartsHome from '@/pages/chartsHome';
import ZLDeliveryTwo from '@/pages/chartsHome/cpages/deliveryTwo';
import ZLDeliveryThree from '@/pages/chartsHome/cpages/deliveryThree';
import Login from '@/pages/login';
import NoPage from '@/pages/noPage';
import BasicInformation from '@/pages/basicInformation';
import { RouteObject } from 'react-router-dom';
import ZLOperatorItemCharts from '@/pages/operatorHome/cpages/operatorItemCharts';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
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
        path: 'manager/list',
        element: <ZLManagerList />,
        children: [],
      },
      {
        path: 'manager/list/two',
        element: <ZLManagerTwo />,
      },
      {
        path: 'manager/list/three',
        element: <ZLManagerThree />,
      },
      {
        path: 'manager/list/four',
        element: <ZLManagerFour />,
      },
      {
        path: 'manager/list/five',
        element: <ZLManagerFive />,
      },
      {
        path: 'manager/list/six',
        element: <ZLManagerSix />,
      },
      {
        path: 'manager/list/seven',
        element: <ZLManagerSeven />,
      },
      {
        path: 'operator',
        element: <ZLOperatorHome />,
      },
      {
        path: 'operator/item',
        element: <ZLOperatorItemCharts />,
      },
      {
        path: 'basicInformation',
        element: <BasicInformation />,
      },
      {
        path: 'chartsHome',
        element: <ZLChartsHome />,
      },
      {
        path: 'delivery/two',
        element: <ZLDeliveryTwo />,
      },
      {
        path: 'delivery/three',
        element: <ZLDeliveryThree />,
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
