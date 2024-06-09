import Header from "./Header"
import { useState } from "react"

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true)

    const toggleSignIn = () => {
        setIsSignIn(!isSignIn)
    }
    return <div>
        <Header />
        <img className="absolute"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="background image"
        />
        <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 text-white bg-slate-950 bg-opacity-60">
            <h1 className="font-bold text-3xl py-3 px-2">{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && (<input type="text" placeholder="Full Name" className="p-2 m-2 w-96 bg-gray-700 rounded-lg" />)}
            <input type="text" placeholder="Email Address" className="p-2 m-2 w-96 bg-gray-700 rounded-lg" />
            <input type="password" placeholder="Password" className="p-2 m-2 w-96 bg-gray-700 rounded-lg" />
            <button className="p-2 mx-2 mt-2 mb-6 bg-red-700 w-96 rounded-lg">{isSignIn ? "Sign In" : "Sign Up"}</button>
            <p className="mb-2 p-2 cursor-pointer" onClick={toggleSignIn}>
                {isSignIn ? "New to Netflix? Sign Up" : "Already a user? Login now"}
            </p>
        </form>
    </div>
}

export default Login    