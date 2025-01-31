import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Roots from './root/Roots';
import Statistics from './pages/Statistics';
import Dashboard from './pages/Dashboard';
import TechCard from './components/TechCard/TechCard';
import Details from './components/Details/Details';
import Contact from './components/Contact/Contact';
import Error from './pages/Error';



const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element: <Roots></Roots>,
    children:[
      {
      path:'/',
      element:<Home></Home>,
      loader:() => fetch('../catagores.json'),
      children:[
        {
          path:'/category/:category',
          element: <TechCard></TechCard>,
          loader:() => fetch('../public.json'),
        },
        {
          path:'/',
          element: <TechCard></TechCard>,
          loader:() => fetch('../public.json'),
        }
      ]
     
    },
    {
      path:'/statistics',
      element:<Statistics></Statistics>
    },
    {
       path:'/details/:id',
       element:<Details></Details>,
       loader:() => fetch(`../public.json`)
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>
    },
    {
      path:'/contact',
      element:<Contact></Contact>
    }
  ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
