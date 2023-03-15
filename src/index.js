import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './reset.styles.css'
import './typography.styles.css';
import './index.styles.css';
import App from './App';
import UnderConstruction from './components/UnderConstruction/UnderConstruction.component';
import Welcome from './components/Welcome/Index.component';
import Resume from './components/Resume/Resume.component';
import Portfolio from './components/Portfolio/Index.component';
import AddProject from './components/Portfolio/Add.component';
import ViewProject from './components/Portfolio/View.component';
import Blog from './components/Blog/Index.component';
import AddBlogPost from './components/Blog/Add.component';
import BlogPost from './components/Blog/View.component';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App Element={Welcome} />,
  },
  {
    path: "/resume",
    element: <App Element={Resume} />,
  },
  {
    path: 'portfolio/add',
    element: <App Element={AddProject} />
  },
  {
    path: 'portfolio/:id',
    element: <App Element={ViewProject} />
  },
  {
    path: "/portfolio",
    element: <App Element={Portfolio} />,
  },
  {
    path: '/blog/:id',
    element: <App Element={BlogPost} />
  },
  {
    path: '/blog/add',
    element: <App Element={AddBlogPost} />
  },
  {
    path: "/blog",
    element: <App Element={UnderConstruction} />
  },
  {
    path: "gallery",
    element:  <App Element={UnderConstruction} />
  },
  {
    path: "photos",
    element:  <App Element={UnderConstruction} />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
