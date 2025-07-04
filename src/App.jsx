import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './Routes/Routes';
import Spinner from './Components/Spinner';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) return < Spinner />;

  return <RouterProvider router={router} />;
};

export default App;

