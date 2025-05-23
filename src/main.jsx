import React, { Suspense } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { router } from './Routes/Routes';
import AuthProvider from './Context/AuthProvider';
import { ToastContainer } from 'react-toastify';
import Loading from './Components/Loading';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Suspense fallback={<Loading></Loading>}>
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
    <ToastContainer />
  </StrictMode>
);
