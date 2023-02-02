import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Button } from 'bootstrap';
import router from './Pages/Router/Router/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
