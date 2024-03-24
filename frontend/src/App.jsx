import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup'
import Search from './components/Sidebar/Search.jsx'
import Home from './pages/home/home.jsx'
import { Route, Navigate, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './Context/authContext.jsx'
function App() {
  const { authUser } = useAuthContext();
  return (
    <div className='w-full h-screen text-white bg-[#09090B]'>
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Search/> */}
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={authUser ? <Home /> :<Navigate to="/login" />} />
        <Route path='/login' element={authUser ? <Navigate to="/" /> :<Login />} />
        <Route path='/signup' element={ authUser ? <Navigate to="/" /> : <Signup/>} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
