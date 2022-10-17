import { createBrowserRouter, RouterProvider, useFetcher } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Main from "./components/layouts/Main";

import Shop from './components/Shop/Shop'
import { loader } from './loaaders/loader';
import Orders from './Orders/Orders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>,
          loader: () => {
            return fetch('products.json')
          },
        },
        {
          path: 'orders',
          element: <Orders></Orders>,
          loader: loader,
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'about',
          element: <About></About>
        }
      ]
    },

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
