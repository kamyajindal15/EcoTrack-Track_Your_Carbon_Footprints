import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import FAQ from './Components/FAQ';
import Login from './Components/Login';
import Register from './Components/Register';
import Statistical from './Components/Statistical';
import Calculator from './Components/Calculator';
import Personal from './Components/Personal';

const router = createBrowserRouter([

    {
        path : '/',
        element : <Home></Home>,
        errorElement : <h1>Page Not Found</h1>
    },
    {
        path: '/aboutus',
        element: <AboutUs></AboutUs>
    },
    {
        path: '/contact',
        element: <Contact></Contact>
    },
    {
        path: '/faqs',
        element: <FAQ></FAQ>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }, 
    {
        path: '/stats', 
        element: <Statistical></Statistical>
    },
    {
        path: '/calc',
        element: <Calculator></Calculator>
    },
    {
        path: '/personal',
        element: <Personal></Personal>
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        
        <RouterProvider router = {router}></RouterProvider>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
