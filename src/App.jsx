import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import About from './about/About';
import Contact from './contact/Contact';
import Portfolio from './portfolio/Portfolio';

function App() {
  let router = createBrowserRouter([
    {
      path:"",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About/> },
        { path: "portfolio", element: <Portfolio/> },
        { path: "contact", element: <Contact/> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
