import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Main from './components/Main';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Reservation from './pages/Reservations';
import Login from './pages/Login';
import OrderOnline from './pages/OrderOnline';
const CommonLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const LoginLayout = ({ children }) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
const App = () => {
  const isLoggedIn = true;
  return (
    <>
      <Routes>
        <Route path='/' element={<CommonLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/order-online' element={<OrderOnline />} />
        </Route>
        <Route path='/login' element={<LoginLayout />}>
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
      {/* <Routes>
     <Route path='/' element={isLoggedIn ? <CommonLayout /> : <Navigate to="/login" />}>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/reservation" element={<Reservation />}/>
        <Route path="/order-online" element={<OrderOnline />}/>
      </Route>
      <Route path="/login" element={<LoginLayout />}>
        <Route path="/login" element={<Login />}/>
      </Route>
    </Routes> */}
    </>
  );
};

export default App;
