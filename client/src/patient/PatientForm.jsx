import { useState } from "react";

import { useNavigate } from "react-router-dom";
const PatientForm = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [user,setUser] = useState("");
  const [message,setMessage] = useState("");
  const [signUpsuccess,setSignUpSuccess] = useState(false);


  const handleSubmit = async(e) => {
    e.preventDefault();
    const loginData = {
      email,
      password
    };
    if (showLogin) {
      const response = await fetch("http://localhost:3001/api/auth/login",{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        credentials : "include",
        body: JSON.stringify(loginData)
      })
      const data = await response.json();
      console.log(data);
      if(response.ok){
        setMessage(data.message);
        navigate("/profile");
      }
      else{
        setMessage(data.message);
      }
    } else {
      console.log("Signup submitted");
      const signupData = {
        user,
        email,
        password,
        phone
      };
      const response = await fetch("http://localhost:3001/api/auth/register",{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(signupData)
      })
      const data = await response.json();
      console.log(data);
      if(response.ok){
        setMessage(data.message);
        setSignUpSuccess(true);
      }
      else{
        console.log("SignUp Failed");
        setMessage(data.message);

      }
    }
  };
 const navigate = useNavigate();

  const inputStyle =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10";

  return (
    <>
    {signUpsuccess ? (
      <div className="flex min-h-screen flex-col items-center justify-center bg-teal-800 px-4 text-center text-white">
        <div className="text-7xl">🎉🥳🎊</div>

        <h1 className="mt-6 text-4xl font-bold">
          Welcome to CareNest!
        </h1>

        <p className="mt-4 text-lg">
          Your account has been created successfully!
        </p>
        <button
        onClick={() => 
          {setSignUpSuccess(false)
          setUser("");
          setEmail("");
          setPassword("");
          setPhone("");
          setMessage("");
          }}
        className="mt-8 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-teal-800 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-teal-50 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30"
        >Continue</button>
      </div>     
    ):(


    <div className="flex min-h-screen items-center justify-center bg-[#f3f8f7] px-4 py-10">

      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">

        {/* Left panel */}
        <div className="relative flex flex-col justify-between overflow-hidden bg-teal-800 p-8 text-white md:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-600/40 blur-3xl" />

          <div className="relative">
            <div className="mb-12 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-3xl font-bold text-teal-800">
                +
              </div>
              <span className="text-2xl font-bold tracking-tight">
                CareNest
              </span>
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal-200">
              Care that feels like home
            </p>

            <h1 className="max-w-sm text-4xl font-bold leading-tight md:text-5xl">
              Better care for a brighter tomorrow.
            </h1>

            <p className="mt-5 max-w-sm leading-7 text-teal-100">
              Connect with trusted healthcare professionals and get the care
              you need, right at home.
            </p>
          </div>

          <div className="relative mt-12 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-lg font-semibold">
              Your health matters.
            </p>
            <p className="mt-2 text-sm leading-6 text-teal-100">
              Book consultations and nursing visits with CareNest.
            </p>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex items-center justify-center p-6 sm:p-10 md:p-12">
          <div className="w-full max-w-md">

            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold text-teal-700">
                Welcome to CareNest
              </p>

              <h2 className="text-3xl font-bold text-slate-900">
                {showLogin ? "Welcome back!" : "Create your account"}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {showLogin
                  ? "Sign in to continue your care journey."
                  : "Sign up to get started with CareNest."}
              </p>
            </div>

            {/* Login / Signup switch */}
            <div className="mb-7 grid grid-cols-2 rounded-xl bg-slate-100 p-1">
              <button
                type="button"
                onClick={() => setShowLogin(true)}
                className={`rounded-lg py-3 text-sm font-semibold transition ${
                  showLogin
                    ? "bg-white text-teal-700 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Login
              </button>

              <button
                type="button"
                onClick={() => setShowLogin(false)}
                className={`rounded-lg py-3 text-sm font-semibold transition ${
                  !showLogin
                    ? "bg-white text-teal-700 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                {!showLogin && (
                  <>
                  <label 
                className="mb-1 block text-sm font-medium text-slate-700"
                >Name : </label>
                <input
                type="text"
                value={user}
                placeholder="Enter your name"
                className={inputStyle}
                onChange={(e) => setUser(e.target.value)}
                />
                </>
              )
            }
                <label className="mb-2 mt-2 block text-sm font-medium text-slate-700">
                  Email address
                </label>

                <input
                  type="email"
                  value={email}
                  placeholder="you@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputStyle}
                  required
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    Password
                  </label>
                </div>

                <input
                  type="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  className={inputStyle}
                  required
                />
              </div>

              {!showLogin && (
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Phone number
                  </label>

                  <input
                    type="tel"
                    value={phone}
                    placeholder="Enter your phone number"
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputStyle}
                    required
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-teal-700 py-3.5 font-semibold text-white shadow-md shadow-teal-700/20 transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-500/20"
              >
                {showLogin ? "Login to CareNest" : "Create Account"}
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-slate-500">
              {showLogin
                ? "Don't have an account?"
                : "Already have an account?"}

              <button
                type="button"
                onClick={() => setShowLogin(!showLogin)}
                className="ml-1 font-semibold text-teal-700 hover:underline"
              >
                {showLogin ? "Sign up" : "Login"}
              </button>
            </p>

            <p className="mt-8 text-center text-xs leading-5 text-slate-400">
              By continuing, you agree to CareNest's Terms of Service
              and Privacy Policy.
            </p>
            {message && 
            <p
            className="mt-4 text-center text-sm text-green-600"
            >{message}</p>}
          </div>
        </div>
      </div>
    </div>
    )}

    </>
  );
};

export default PatientForm;