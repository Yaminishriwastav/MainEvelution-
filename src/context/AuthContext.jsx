import { createContext,useState } from "react";
import axios from "axios";

export const AuthContext=createContext();

  export const AuthProvider=({children})=>{
 const[user,setUser]=useState(null);

const login=async(username,password)=>{
    try{
        const responce=await axios.post("https://thankful-eggplant-emmental.glitch.me/login",{
            username,
            password,
        });
        setUser(responce.data);
        return responce.data;
    }catch(error){
        console.log("Login Failed try again" ,error)
    }
};
return (
    <AuthContext.Provider value={{user,login}}>
        {children}
    </AuthContext.Provider>
);
};
