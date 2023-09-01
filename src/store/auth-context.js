import React,{useState} from "react";

const AuthContext=React.createContext({
    isloggedIn:false,
    onLogout:()=>{}
});
const AuthContextProvider=(props)=>{
    return <AuthContext.Provider>{props.children}</AuthContext.Provider>
};
export default AuthContext;