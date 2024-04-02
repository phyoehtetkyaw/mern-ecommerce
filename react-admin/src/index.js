import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/auth/Login';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main';
import Dashboard from './pages/Dashboard'
import Category from './pages/category/Category';
import AddCategory from './pages/category/AddCategory'
import Tag from './pages/Tag'
import Product from './pages/Product'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "category/add",
        element: <AddCategory />
      },
      {
        path: "tag",
        element: <Tag />
      },
      {
        path: "product",
        element: <Product />
      },
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
]);

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
