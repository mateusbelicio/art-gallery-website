import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from '@/pages/Home';
import PageNotFound from '@/pages/PageNotFound';
import Location from '@/pages/Location';

import GlobalStyles from '@/styles/GlobalStyles.tsx';

const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <PageNotFound /> },
  { path: '/location', element: <Location /> },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
