import { useLocation } from "react-router-dom";

const Result=()=>{
    const {state} =useLocation();
    return(
        <div>
            <h2>Yay! Quiz Completed!</h2>
            <p>
                You answered {state.correctAnswer} out of{state.total} correctly!
            </p>
        </div>
    );
};
export default Result;