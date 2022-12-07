import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import InputForm1 from '../Pages/InputForm/InputForm1';
import InputFrom2 from '../Pages/InputForm/InputFrom2';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <InputForm1></InputForm1>
    },
    {
        path: '/inputform2',
        element: <InputFrom2></InputFrom2>
    }
])



export default routes;