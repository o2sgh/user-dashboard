import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/appRoutes";
import { GoogleOAuthProvider } from "@react-oauth/google";
function App() {
  return (
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
