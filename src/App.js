
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/routes';


function App() {
  return (
    <div className="bg-[#FEFBFA] min-h-screen">
      <div >
        <RouterProvider router={router}></RouterProvider>
        <Toaster position='top-center' />
      </div>
    </div>
  );
}

export default App;
