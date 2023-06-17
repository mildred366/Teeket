import React, {useState} from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import google from '../assets/google logo.png'


import {useNavigate} from 'react-router-dom';
import {firebaseSetup} from '../firebase.config';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import {doc, setDoc, getDoc, serverTimestamp} from 'firebase/firestore';
import {toast} from 'react-toastify';


function Login () {
  const navigate = useNavigate();
  const [formInput, setformInput] = useState({ email: "", password: "" });
  const { email, password } = formInput;

  const onChange = (e) => {
    setformInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            formInput.email,
            formInput.password,
        );
        const user = userCredential.user;
        const formInputCopy = {...formInput};
        delete formInputCopy.password;
        formInputCopy.timestamp = serverTimestamp();

        await setDoc(doc(firebaseSetup, 'users', user.uid), formInputCopy);
        navigate('/home');
        toast.success('Successful Login!', {
          position: "top-center",
          theme: "light",
        });
    } catch (error) {
        toast.error('Oops..Try again!');
    }
};


const onGoogleClick = async () => {
  try {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const docRef = doc(firebaseSetup, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      await setDoc(doc(firebaseSetup, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        timestamp: serverTimestamp(),
      });
    }
    navigate("/home");
    toast.success("Login Successful!", {
      position: "top-center",
      theme: "light",
    });
  } catch (error) {
    toast.error("Login not successful!");
  }
};


  return (
    <>
    <div className='font-manrope'>
      <Header/>
      <div className="mx-auto w-[90%] min-[548px]:w-[60%] lg:w-[30%]">
      <h2 className='py-14 font-normal text-3xl text-center'>Log in or sign up to continue</h2>
      <div className='flex justify-center pb-6'>
        <button className='py-4 px-20 w-full border rounded-xl '>
          <div className='flex justify-center' onClick={onGoogleClick}>
            <img src={google } width="30px" height="30px" alt="Glogo" className='mr-3' />
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
        <form className='grid w-full  justify-items-center pb-6' >  
          <input type="text" onChange={onChange} id="email" name="email" value={email} placeholder="Enter your email address"  className='text-[#8F8F8F] text-base	mb-6 pb-6 bg-[#EDEDED] block w-full px-6 py-5 rounded-xl focus:outline-none focus:border-sky-500 placeholder:text-[#8F8F8F]'/>
          <input type="password" onChange={onChange} name='password' id='password' minLength="8" value={password} autoComplete='on' placeholder="Password"  className='text-[#8F8F8F] text-base bg-[#EDEDED] block w-full px-6 py-5 rounded-xl focus:outline-none focus:border-sky-500 placeholder:text-[#8F8F8F]'/>
          <button type='submit' className='text-white text-base bg-[#0052F6] block w-full px-6 py-5 rounded-xl mt-6' onClick={onSubmit}>
              Continue with email
            </button>
        </form>
      </div>
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