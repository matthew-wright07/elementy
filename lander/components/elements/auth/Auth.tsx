import { useState } from "react"
import { Link } from "react-router-dom";
const VITE_API_URL = import.meta.env.VITE_API_URL;
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../utils/firebase";

export default function Auth(){
    const facebookProvider = new FacebookAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [name,setName] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    
    function handleEmailChange(event:React.ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value)
    }
    function handlePasswordChange(event:React.ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }
    function handleNameChange(event:React.ChangeEvent<HTMLInputElement>){
        setName(event.target.value)
    }
    function handleConfirmPasswordChange(event:React.ChangeEvent<HTMLInputElement>){
        setConfirmPassword(event.target.value)
    }

    const [type,setType] = useState("login")
    function changeType(change:string){
        setType(change)
    }

    async function googleAuth(){
        const result = await signInWithPopup(auth, googleProvider);
        const firebaseToken = await result.user.getIdToken();
        console.log(firebaseToken)   
        const res = await fetch(VITE_API_URL+"/auth/oauth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ oAuthToken: firebaseToken }),
            credentials: "include",
        });
        const data = await res.json()
        window.location.href = data.redirect;
    }

    async function facebookAuth(){
        const result = await signInWithPopup(auth, facebookProvider);
        const firebaseToken = await result.user.getIdToken();
        console.log(firebaseToken)   
        const res = await fetch(VITE_API_URL+"/auth/oauth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ oAuthToken: firebaseToken }),
            credentials: "include",
        });
        const data = await res.json()
        window.location.href = data.redirect;
    }

    async function handleSignup(){
        const res = await fetch(VITE_API_URL+"/auth/signup",{
            method:"POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            }),
            credentials: "include",
        })
        const data = await res.json()
        window.location.href = data.redirect;
    }
    async function handleLogin(){
        const res = await fetch(VITE_API_URL+"/auth/login",{
            method:"POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
            credentials: "include",
        })
        const data = await res.json()
        window.location.href = data.redirect;
    }

    return (
        <div className="flex flex-col justify-center lg:flex-row h-screen">
            <div className="bg-background p-8 lg:p-16 flex flex-col gap-8 w-full lg:w-1/2 h-full justify-center">                
                <Link to="/" className="flex gap-2 items-center">
                    <img src="/logo.svg" className="w-8 h-8"/>
                    <h1 className="text-white text-2xl font-bold">Elementy</h1>
                </Link>
                <div className="flex flex-col gap-2">
                    <p className="text-white text-xl font-bold">{type==="login"?"Welcome Back":"Let's Get Started"}</p>
                    <p className="text-secondary">{type==="login"?"We Are Happy To See You Again":"We Are Happy Your Here"}</p>
                </div>
                <div className="flex border border-white p-2 rounded-lg">
                    <button onClick={()=>changeType("login")} className={`${type==="login"?"bg-primary":null} w-1/2 text-white p-2 rounded-lg text-center hover:cursor-pointer`}>Login</button>
                    <button onClick={()=>changeType("signup")} className={`${type==="signup"?"bg-primary":null} w-1/2 text-white p-2 rounded-lg text-center hover:cursor-pointer`}>Signup</button>
                </div>
                <div className="flex flex-col gap-4">
                    {type==="signup"?<input onChange={handleNameChange} value={name} type="text" className="border border-white rounded-lg w-full p-4 placeholder-secondary text-white" placeholder="Name"/>:null}
                    <input type="email" onChange={handleEmailChange} value={email} className="border border-white rounded-lg w-full p-4 placeholder-secondary text-white" placeholder="Email"/>
                    <input type="password" onChange={handlePasswordChange} value={password} className="border border-white rounded-lg w-full p-4 placeholder-secondary text-white" placeholder="Password"/>
                    {type==="signup"?<input onChange={handleConfirmPasswordChange} value={confirmPassword} type="password" className="border border-white rounded-lg w-full p-4 placeholder-secondary text-white" placeholder="Confirm Password"/>:null}
                </div>
                {type==="signup"?<button onClick={handleSignup} className="bg-primary rounded-lg w-full p-4 placeholder-secondary text-white hover:cursor-pointer hover:bg-white hover:text-primary transition duration-500">Signup</button>:null}
                {type==="login"?<button onClick={handleLogin} className="bg-primary rounded-lg w-full p-4 placeholder-secondary text-white hover:cursor-pointer hover:bg-white hover:text-primary transition duration-500">Login</button>:null}
                <div className="flex items-center">
                    <div className="flex-grow border-t border-secondary"></div>
                    <span className="px-3 text-secondary">OR</span>
                    <div className="flex-grow border-t border-secondary"></div>
                </div>
                <div className="flex md:flex-row flex-col items-center gap-4 justify-center">
                    <img onClick={googleAuth} src="/google.svg" className="w-68 lg:w-60 hover:cursor-pointer"/>
                    <img onClick={facebookAuth} src="/facebook.svg" className="w-68 lg:w-60 hover:cursor-pointer"/>
                </div>
            </div>
            <img src="/auth.svg" className="h-full w-1/2 object-cover lg:block hidden"/>
        </div>
    )
}