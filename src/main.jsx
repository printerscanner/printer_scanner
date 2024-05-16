import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Layout from './layouts/Layout.jsx';
import Collage from './pages/Collage.jsx';
import Colophon from './pages/Colophon.jsx';
import Capabilities from './pages/Capabilities.jsx';
import Contact from './pages/Contact.jsx';
import Post from './pages/Post.jsx';
import FourOhFour from './pages/404.jsx';
import Archive from './pages/Archive.jsx';
import './css/index.css';
import { CSS_COLOR_NAMES, randomProperty } from "./data/colors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/collage",
    element: <Collage />,
  },
  {
    path: "work/:id",
    element: <Post />,
  },
  {
    path: "/archive",
    element: <Archive />,
  },
  {
    path: "/colophon",
    element: <Colophon />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/capabilities",
    element: <Capabilities />,
  },
  { 
    path: "*", 
    element: <FourOhFour />,  
  },
]);


// Set the global text color using the imported color
const globalTextColor = randomProperty(CSS_COLOR_NAMES);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <style>
      {`
        /* Set the global text color */
        body {
          color: ${globalTextColor};
        }
      `}
    </style>
    <Layout currentPath={window.location.pathname}>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>,
);
