import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout imports
import RootLayout from "./layouts/RootLayout";

// route imports
import Home from "./routes/Home";
import Dashboard from "./components/Chat/Dashboard";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
