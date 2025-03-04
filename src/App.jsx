import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import{AuthProvider} from "./context/AuthContext";

function App(){
  return(
    <AuthProvider>
      
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/quiz" element={<Quiz />}/>
         <Route path="/result" element={<Result />}/>
        </Routes>
      
    </AuthProvider>
  );
};
export default App