import{useStae,useEffect} from"react";
import axios from "axios";
import QuizIteam from "./QuizItem";
import { Navigate, useNavigate } from "react-router-dom";

const Quiz=()=>{
    const[questions,setQuestions]=useStae([]);
    const [answers,setAnswers]=useStae([]);
    const nevigate=useNavigate

    useEffect(()=>{
        axios.get("https://thankful-eggplant-emmental.glitch.me/api/questions")
        .then ((res)=>{
            setQuestions(res.data);
        });

    },[]);

    const handelAnswer=(questionsId,answer)=>{
        setAnswers({...answers,[questionsId]:answer});

    };
    const handelSubmit=()=>{
        const correctAnswers=questions.filter(
            (q)=>q.correctAnswers===answers[q.id]
        ).length;
        Navigate("./result",{stare:{correctAnswers,total:questions.length}});
    };


    return(
        <div>
            <h2>Quiz</h2>
            {questions.map((q)=>{
                <Questions key={q.id} question={q} onAnswer={handelAnswer} />

            })}
            <button onClick={handelSubmit}>SUBMIT</button>
        </div>
    );
};
export default Quiz;