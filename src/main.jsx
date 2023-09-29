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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    
      <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
