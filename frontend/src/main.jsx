import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import CartPage from './pages/CartPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children:[
//     {
//       path:"",
//       element:<HomePage/>
//     },
//     {
//       path:"product",
//       element:<ProductPage/>,
//     },
//     {
//       path:"cart",
//       element:<CartPage/>,
//     },
//     {
//       path:"signin",
//       element:<LoginPage/>,
//     },
//   ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router}>
//   </RouterProvider> 
// );


// // Another way of creating router.

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="product/:id" element={ <ProductPage />} />
      <Route path="cart" element={< CartPage />} />
      <Route path="signin" element={<LoginPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


