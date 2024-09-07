import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './modules/Dashboard/Index';
import Form from './modules/Form/Index';
function App() {
  return (
      <>
    <Routes>
    <Route path="/" element={<Dashboard/>}/>
      <Route path="/user/sign-in" element={<Form isSignInPage={true}/>}/>
      <Route path="/user/sign-up" element={<Form isSignInPage={false}/>}/>
    </Routes>
   <div className="bg-[#c8d7ee] h-screen flex justify-center items-center">
    {/* <Form/> */}
    <Dashboard/>
   </div>
   </>
  );
}

export default App;
