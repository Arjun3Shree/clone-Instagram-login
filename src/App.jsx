import React, { useState, useEffect } from 'react'
import googlePlayImg from "./assets/Img/GooglePlay.png"
import microsoftPlayImg from "./assets/Img/Microsoft-play.png"
import iphoneBgImg from "./assets/Img/RootImg.png"
import instagramText from "./assets/Img/InstagramText.png"

import screenImg1 from "./assets/Img/PInsta-1.png"
import screenImg2 from "./assets/Img/PInsta-2.png"
import screenImg3 from "./assets/Img/PInsta-3.png"
import screenImg4 from "./assets/Img/PInsta-4.png"

import './App.css'

function App() {
  // Image section

  const images = {
    1: { imgName: 'PInsta-1', src: screenImg1 },
    2: { imgName: 'PInsta-2', src: screenImg2 },
    3: { imgName: 'PInsta-3', src: screenImg3 },
    4: { imgName: 'PInsta-4', src: screenImg4 }
  }

  const links = {
    1: { name: "Meta", address: "" },
    2: { name: "About", address: "" },
    3: { name: "Blog", address: "" },
    4: { name: "Jobs", address: "" },
    5: { name: "Help", address: "" },
    6: { name: "API", address: "" },
    7: { name: "Privacy", address: "" },
    8: { name: "Terms", address: "" },
    9: { name: "Locations", address: "" },
    10: { name: "Instagram Lite", address: "" },
    11: { name: "Threads", address: "" },
    12: { name: "Contact Uploading & Non-Users", address: "" },
    13: { name: "Meta Verified", address: "" }
  }

  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % totalImages);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [totalImages]);




  // Form Section
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {/* Parent */}
      <div className='w-full 2px -ml-4'>

        <div className="flex gap-5 justify-center mt-1">

          {/* Image Section */}
          <div className="hidden lg:block">
            <section id="imageCarousel" className="relative w-[470px] h-[680px] flex items-center justify-center">
              <div
                id="phoneFrame"
                className="absolute w-full h-full bg-no-repeat bg-contain"
                style={{ backgroundImage: `url(${iphoneBgImg})` }}
              >
                <div className="absolute top-[27px] right-[57px] w-[250px] h-[538px] overflow-hidden">
                  <div className="relative w-full h-full">
                    {Object.values(images).map((card, index) => (
                      <img
                        key={index}
                        className={`absolute w-[250px] h-[538px] object-cover transition-opacity duration-500 ease-in-out ${currentImage === index ? 'opacity-100 blur-none' : 'opacity-0 blur-[10px]'}`}
                        src={card.src}  // Use the imported image directly
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* LoginSection */}
          <div className="h-[80%] ml-3">
            <div className="bg-white p-8 border border-gray-300 mb-4">
              {/* Instagram Logo */}
              <div className="flex justify-center mb-8">
                <img
                  src={instagramText}
                  alt="Instagram"
                  className="h-[79px] w-[175px]"
                />
                {/* <h1 className="lobster-regular text-5xl">Instagram</h1> */}
              </div>

              {/* Login Form */}
              <form
                // onSubmit={handleSubmit}
                className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full px-2 pt-3 pb-2 bg-gray-50 border border-gray-300 rounded-sm text-xs focus:outline-none focus:border-gray-400 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="username"
                    className="absolute text-xs text-gray-500 duration-150 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-2
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                peer-focus:scale-75 peer-focus:-translate-y-3"
                  >
                    Phone number, username, or email
                  </label>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-2 pt-3 pb-2 bg-gray-50 border border-gray-300 rounded-sm text-xs focus:outline-none focus:border-gray-400 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="password"
                    className="absolute text-xs text-gray-500 duration-150 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-2
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                peer-focus:scale-75 peer-focus:-translate-y-3"
                  >
                    Password
                  </label>
                  {formData.password && (
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-2 top-2.5 text-sm font-semibold text-gray-700"
                    >

                      {showPassword ?
                        <p>Hide</p> :
                        <p>Show</p>
                      }
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  className={`w-[15rem]  bg-blue-500 text-white py-1.5 rounded text-sm font-semibold
                ${(!formData.username || !formData.password) ? 'opacity-70 bg-blue-500' : 'hover:bg-blue-600'}`}
                  disabled={!formData.username || !formData.password}
                >
                  Log in
                </button>

                {/* Divider */}
                <div className="flex items-center my-4">
                  <div className=" w-[10px] flex-grow border-t border-gray-300"></div>
                  <span className="px-4 text-gray-500 text-sm font-semibold">OR</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Facebook Login */}
                <button
                  type="button"
                  className="w-full text-[#4c83f8f9] flex items-center justify-center space-x-2 font-semibold text-sm"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                  </svg>
                  <span className="hover:text-[#224286f9]">Log in with Facebook</span>
                </button>

                {/* Forgot Password */}
                <div className="text-center mt-4">
                  <a href="#" className="text-sm text-[#385185]">
                    Forgot password?
                  </a>
                </div>
              </form>
            </div>

            <div className="flex border border-gray-300 justify-center p-4">
              <p className='text-sm'>Don't have an account? <a href="#" className='text-[#1253dff9] font-semibold'> Sign up</a></p>
            </div>

            <div className='p-6'>
              <p className='text-sm'>Get the app.</p>
              <div className="flex">
                <img src={googlePlayImg} alt="GooglePlay"
                  className="h-[59px] w-[115px]" />
                <img src={microsoftPlayImg} alt="MicrosoftPlay" className="mt-[-1px] h-[60px] w-[149px]" />
              </div>
            </div>




          </div>

        </div>

        <div className="flex-col">
          <div className="flex flex-wrap gap-4 align-bottom justify-center">
            {Object.values(links).map((value, index) => (
              <a
                className='hover:underline quicksand-reg1 text-sm'
                href={value.address}>
                {value.name}
              </a>
            ))}
          </div>
          <div className="flex justify-center mt-2 gap-4">
            <select name="" id="" className='quicksand-reg1 outline-none border-none focus:ring-0 focus:outline-none'>
              <option value="">English</option>
              <option value="">Hindi</option>
            </select>
            <p className='quicksand-reg1 text-xs mt-2'> © 2025 Instagram from Meta</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
