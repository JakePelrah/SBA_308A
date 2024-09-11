import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Adoptions from './adoptions/Adoptions'
import './index.css';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import Navbar from './navbar/Navbar';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/adoptions",
                element: <Adoptions />
            },
        ]
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}></RouterProvider>);
