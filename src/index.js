import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Adoptions from './adoptions/Adoptions'
import DogProvider from './DogProvider';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import Navbar from './navbar/Navbar';
import './index.css';


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
root.render(
    <DogProvider>
        <RouterProvider router={router}></RouterProvider>
    </DogProvider>
);
