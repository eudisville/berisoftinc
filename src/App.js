import './App.css';
import About from './pages/About';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/Blog';
import Products from './pages/Products';

const router = createBrowserRouter ([
  {
      path : '/',
      element : <Home></Home>
  },
  {
      path : '/about',
      element : <About></About>
  }, 
  {
      path : '/products',
      element : <Products></Products>
  },
  {
      path : '/blog',
      element : <Blog></Blog>
  }
])

function App() {
  return (<RouterProvider router={router} />)
}

export default App;
