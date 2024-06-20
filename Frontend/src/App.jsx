import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// layout imports
import RootLayout from './layouts/RootLayout';

// route imports
import Home from './routes/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
