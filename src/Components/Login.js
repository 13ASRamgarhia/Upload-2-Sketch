import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import axios from "axios";
import loginContext from "../Context/loginContext";

const Login = () => {
  document.title = "Login | CineSense"

  const context = useContext(loginContext)
  const { setLoggedIn } = context

    const [loading, setLoading] = useState(false)
    const [user,setUser] = useState({
    email:"",password:""
    })
  
    const [error, setError] = useState({
        email: "", password: ""
    })

  const clearForm = () => {
    setUser({email:"",password:""})
  }

  const clearError = () => {
    setError({email:"",password:""})
  }

  const handleInputs = (e) => {
    let inputName = e.target.name
    let inputValue = e.target.value

    setUser({...user,[inputName]:inputValue})
    setError({email:"",password:""})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    clearError();
      try {
          const res = await axios.post(`https://cinesense-hgch.onrender.com/login`, {
          email: user.email,
          password: user.password,
        }
        );

        const statusCode = res.request.status
        console.log(res)
        if(statusCode === 200){
          setUser({ email: "", password: "" });
          setLoggedIn(true)
          console.log("logged in")
        }
        else if(statusCode === 404){
          console.log("Error Occured")
          console.log(res)
        }
      } catch (err) {
        console.log(err.message);
      }
      setLoading(false)
      clearForm();
  }

    return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full laptop:w-[50%]">
      <div className="bg-cardColor px-4 py-4 h-full rounded-xl">
        <h2 className="text-3xl font-bold text-cardHeading mb-10">
          Login
        </h2>
        <form onSubmit={handleSubmit} id="signUpForm">
          <div className="formGroup m-auto mt-3 py-1 text-lg space-x-2 border-b border-cardBody">
            <label htmlFor="email">
              <Icon name="mail" size="large" className="text-cardBody" />
            </label>
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              autoCapitalize="off"
              value={user.email}
              onChange={handleInputs}
              placeholder="Email"
              className="formInput bg-transparent focus:outline-0 w-[80%]"
            />
          </div>
          <p className="text-cardBodyLight text-sm mb-3">{error.email}</p>

          <div className="formGroup m-auto mt-3 py-1 text-lg space-x-2 border-b border-cardBody">
            <label htmlFor="password">
              <Icon name="lock" size="large" className="text-cardBody" />
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              autoCapitalize="off"
              value={user.password}
              onChange={handleInputs}
              placeholder="Password"
              className="formInput bg-transparent focus:outline-0 w-[80%]"
            />
          </div>
          <p className="text-cardBodyLight text-sm mb-3">{error.password}</p>

          <div className="mt-3 w-fit">
          </div>
          
          <div className="flex justify-center items-center mt-6">
          {loading ? <p>Logging in...</p> : <></>}
          <button type="submit" onClick={handleSubmit} className="submitBtn bg-cardHeading text-navbarText text-lg rounded-lg px-12 py-2 mx-auto border-2 border-logoColor hover:bg-logoColor hover:text-white hover:scale-110 duration-200">Login</button>
          </div>
          <div className="flex justify-center items-center mt-6">

          <Link to="/Signup" className="text-headingColor hover:text-headingColor underline hover:underline text-base hover:scale-110 duration-200">I don't have an account</Link>
          </div>

        </form>

        <div className="mt-6 flex flex-col items-center">
            <p className="">OR</p>
            <Link to="/Prefrences" className="mt-3 text-headingColor hover:text-headingColor underline hover:underline text-base hover:scale-110 duration-200">Continue as Guest</Link>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Login;
