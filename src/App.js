import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/appRoutes";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
function App() {
  // const [sessionExist, setSessionExist] = useState(true);
  // useEffect(() => {
  //   const accessToken = localStorage.getItem("token");
  //   if (accessToken) {
  //     axios
  //       .post(
  //         "https://98e8-39-36-18-26.ngrok-free.app/api/v1/auth/verify-session",
  //         {
  //           token: accessToken,
  //         }
  //       )
  //       .then((res) => {
  //         setSessionExist(false);
  //       })
  //       .catch((err) => {
  //         setSessionExist(false);
  //         localStorage.clear();
  //       });
  //   } else {
  //     setSessionExist(false);
  //   }
  // }, []);
  
  //  sessionExist ? (
  //   <div className="lodingDiv">
  //     <CircularProgress />
  //   </div>
  // ) :
   
  return(
    <div className="App">
      <GoogleOAuthProvider clientId="765183561278-9qisrvi0d7gs03422gauv727ovgj8gaq.apps.googleusercontent.com">
        <Router>
          <AppRoutes />
        </Router>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
