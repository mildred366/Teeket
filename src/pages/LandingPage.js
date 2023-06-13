import React from 'react';
import logo from '../assets/teeket logo2.png';
import {Link} from 'react-router-dom';
import frame from '../assets/Frame.png';
import '../styles/landingpage.css';
import Footer from '../components/Footer'

function LandingPage() {
    return (
        <div className='landingpage font-manrope'>
            <div style={{textAlign: 'center',paddingTop: '4em',}}>
               <Link to='/login'> <img
                    src={logo}
                    alt='logo'
                    style={{width: '14vw', margin: '0 auto 4em auto'}}
                /></Link>
            </div>
            <main>
                <div>
                    <img
                        src={frame}
                        alt='frame'
                        style={{width: '32vw', margin: '2em auto 2em auto'}}
                    />
                </div>
                <p className='flex text-center text-lgmb-6'
                    style={{
                        width: '20rem',
                        fontSize: '20px',
                        margin: '2em auto 2em auto',
                        color: 'white',
                    }}
                >
                    Your one stop platform to create , manage and promote your
                    events at your convenience.
                </p>
                  <div className='flex justify-center pb-6'>
                    <button className='text-white text-base bg-[#0052F6] block w-1/3 px-6 py-5 rounded-xl'>
                    <Link to='/home'> Create an event</Link>
                    </button>
                  </div>
                  <div className='flex justify-center'>
                    <button className='text-black text-base bg-white block w-1/3 px-6 py-5 rounded-xl'>
                    <Link to='/eventlisting'> Discover events</Link>
                    </button>
                  </div>
            </main>
            <Footer/>
        </div>
    );
}

export default LandingPage;





// import React from 'react';
// import background from '../assets/image 42.svg'
// import logo2 from '../assets/teeket logo2.png'
// // import {Button} from '../components/Button'


// function LandingPage () {
//   return (
//     <div className='font-manrope'>
//       <div className="">
//           <div className='flex' style={{
//                     width: '100vw',
//                     height: '100vh',
//                     boxSizing: 'border-box',
//                     padding: 0,
//                     margin: 0,
//                 }}>
//             <img src={background } alt="flowers" className='bg-cover bg-center w-full h-full' />
//           </div>
          
//       </div>
//       <button />
//     </div>
//   );
// }

// export default LandingPage;