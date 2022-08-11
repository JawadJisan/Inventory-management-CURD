import { Route, Routes } from 'react-router-dom';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import NotFound from './components/NotFound/NotFound';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home.js'

function App() {
  return (
    <div className="">

      <Header></Header>

      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/products' element={<Home/>}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/checkout/:name' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
      

    </div>
  );
}

export default App;
