import { Route, Routes, Navigate} from "react-router-dom";
import "./App.css";
import Dashboard from "./modules/Dashboard/Index";
import Form from "./modules/Form/Index";


const ProtectedRoutes = ({ children }) => {
  
  const isLoggedIn = localStorage.getItem("user:token") !== null || true;
  // console.log(isLoggedIn);

  if (!isLoggedIn){
    return <Navigate to={'/users/sign_in'}/>
    
  } 
  return children;
};

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route path="/users/sign_in" element={<Form isSignInPage={true} />} />
        <Route path="/users/sign_up" element={<Form isSignInPage={false} />} />
      </Routes>
    </>
  );
}

export default App;
