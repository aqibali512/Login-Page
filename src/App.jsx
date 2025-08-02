import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
   const [isLogin, setIsLogin] = useState(true);
   const [showPassword, setShowPassword]=useState(false)
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
        <div className="flex justify-center gap-4 mb-6">

          <button onClick={() => setIsLogin(true)}
            className={` cursor-pointer px-4 py-2 rounded-md font-semibold ${
              isLogin
                ? " bg-blue-500 text-white text shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}>Login</button>

          <button  onClick={() => setIsLogin(false)}
            className={` cursor-pointer px-4 py-2 rounded-md font-semibold ${
              !isLogin
                ? "bg-blue-500 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}>SignUp</button>
        </div>

        <h2 className="text-xl font-bold text-center mb-4">
          {isLogin ? "Login Form" : "Sign Up Form"}
        </h2>

        <form className="space-y-4">
          {!isLogin && ( 
            <input type="text" placeholder='Username' className='w-full border rounded-md px-4 py-2' />
           )}
           <input type="email" placeholder='Email' className='w-full border rounded-md px-4 py-2' />
          
           {/* Password Field with toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border rounded-md px-4 py-2 pr-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-sm text-blue-500 hover:underline"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
           <div>
          <button onClick={()=>setIsLogin((prev) =>!prev)}
            className='underline'>{isLogin ? "SignUp" : "Login"}</button>
         </div>

         <div>
          <button onClick={()=>setIsLogin((prev) =>!prev)}
            className='underline'>Submit</button>
         </div>

         
        </form>
      </div>
    </div>
    </>
  )
}

export default App
