import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout imports
import RootLayout from "./layouts/RootLayout";

// route imports
import Home from "./routes/Home";
import Dashboard from "./components/Chat/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  { path: "/dashboard", element: <Dashboard /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
