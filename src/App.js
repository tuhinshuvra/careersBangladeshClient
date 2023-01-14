import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Button } from 'bootstrap';
import router from './Pages/Router/Router/Router';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
