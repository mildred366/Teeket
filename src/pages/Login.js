import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import google from '../assets/google logo.png'
import {Button} from '../components/Button'


function Login () {
  return (
    <>
    <div className='font-manrope'>
      <Header/>
      <div className="mx-auto w-[90%] min-[548px]:w-[60%] lg:w-[30%]">
      <h2 className='py-14 font-normal text-3xl text-center'>Log in or sign up to continue</h2>
      <div className='flex justify-center pb-6'>
        <button className='py-4 px-20 w-full border rounded-xl '>
          <div className='flex justify-center'>
            <img src={google } width="30px" height="30px" alt="Glogo" className=' mr-3' />
            <p className='mt-1'>Continue with Google</p>
          </div>
        </button>
      </div>
      <div className='flex justify-center items-center pb-6'>
        <div className='border w-[48%]'></div>
        <p className='px-3 text-[#8F8F8F]'>or</p>
        <div className='border w-[48%]'></div>
      </div>
      <div className="">
        <form className='grid w-full  justify-items-center pb-6'>  
          <input type="email" placeholder="Enter your email address"  className='text-[#8F8F8F] text-base	mb-6 pb-6 bg-[#EDEDED] block w-full px-6 py-5 rounded-xl focus:outline-none focus:border-sky-500 placeholder:text-[#8F8F8F]'/>
          <input type="password" placeholder="Password"  className='text-[#8F8F8F] text-base bg-[#EDEDED] block w-full px-6 py-5 rounded-xl focus:outline-none focus:border-sky-500 placeholder:text-[#8F8F8F]'/>
        </form>
      </div>
      <Button title={"Continue with email"} onClick={() => {
        alert('Sign in')
      }} />
      <div className='flex justify-center mb-6'>
        <p style={{color: '#8F8F8F', textAlign: 'center', width: '23rem'}}>By continuing, you acknowledge that you have read and understand, and agree to Teeket's <span style={{fontWeight: '700', textDecoration: 'underline', color: '#101010'}}>Terms of Service</span> and <span style={{fontWeight: '700', textDecoration: 'underline', color: '#101010'}}>Privacy Policy</span>.</p>
      </div>
    </div>
    <Footer />
    </div>
    </>
  );
}

export default Login;