import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import{AuthProvider} from "./context/AuthContext";
import Login from "./components/login";

function App(){
  return(
    <AuthProvider>
      <Router>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/quiz" element={<Quiz />}/>
         <Route path="/result" element={<Result />}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
};
export default App