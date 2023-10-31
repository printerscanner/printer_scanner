import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Collage from './Collage.jsx'
import Post from './Post.jsx'
import './index.css'
import FourOhFour from './404.jsx';
import { CSS_COLOR_NAMES, randomProperty } from "./colors"; // Import color-related functions

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
  { path: "*", 
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
    <Header />
    
      <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
