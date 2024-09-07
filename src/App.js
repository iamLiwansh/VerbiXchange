import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './modules/Dashboard/Index';
import Form from './modules/Form/Index';

const ProtectedRoutes = ({ children}) => {
  const isLoggedIn = localStorage.getItem('user:token') !== null
}
function App() {
  return (
      <>
    <Routes>
    <Route path="/" element={<Dashboard/>}/>
      <Route path="/users/sign_in" element={<Form isSignInPage={true}/>}/>
      <Route path="/users/sign_up" element={<Form isSignInPage={false}/>}/>
    </Routes>
   </>
  );
}

export default App;
