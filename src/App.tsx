import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const PageNotFound = lazy(() => import('@/pages/PageNotFound'));
const Location = lazy(() => import('@/pages/Location'));

import GlobalStyles from '@/styles/GlobalStyles.tsx';
import Loader from './ui/Loader';

const router = createBrowserRouter(
  [
    {
      path: '/',
      errorElement: <PageNotFound />,
      children: [
        { path: '', element: <Home /> },
        { path: 'location', element: <Location /> },
      ],
    },
  ],
  { basename: '/art-gallery-website/' }
);

function App() {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<Loader full={true} />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
