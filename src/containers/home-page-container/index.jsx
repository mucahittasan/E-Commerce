import { Link } from 'react-router-dom';
import HomeBg from '../../assets/images/home-bg.png';

// Images
import phoneImg from '../../assets/images/items/phone1.png';
import joystick from '../../assets/images/items/joystick.jpg';
import headPhone from '../../assets/images/items/head_phone1.jpg';
import gamingChair from '../../assets/images/items/gaming_chair.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';





const HomePageContainer = () => { 

  const [data, setData] = useState([]);

  
useEffect(() => {

  axios.get("http://localhost:3500/items")
  .then(data => setData(data.data))

}, []);

useEffect(() => {
  console.log(data.map(item => console.log(item.main_image)))
}, [data])

  return (
  
  <div style={{backgroundImage: `url(${HomeBg})`}} className="h-[calc(100vh_-_102px)] md:h-[calc(100vh_-_117px)] bg-contain xl:bg-cover bg-no-repeat bg-light-home-bg bg-[#F4F9FD]  ">

   <div className='p-6 sm:px-6 flex items-center h-full w-full sm:flex-row flex-col-reverse content gap-x-5 justify-between px-4 2xl:px-0'>
      <div className='max-w-[500px]'>
          <h3 className='font-medium mb-3'>SHOP BETTER</h3>
          <h2 className='text-[clamp(50px,6.5454vw,72px)] leading-none font-bold mb-4'>The Greatest Journey Of Online <span className='text-primaryOrange'>Shop</span> </h2>
          <p className='text-base text-slate-600'>It only takes 5 minutes and we handle everything from payment to delivery</p>
          <button className='btn mt-8 bg-primaryOrange text-white hover:shadow-[0_0_10px_2px_rgba(255,125,26,0.75)]'>
            <Link to="/shop">Get Started</Link>  
          </button>
      </div>

      <div className='flex md:gap-12 gap-6 sm:w-auto w-full justify-around sm:justify-start'>
        <div className='flex flex-col md:gap-y-12 gap-y-6'>
    
            <div className='md:w-36 sm:w-24 w-28 p-2 transition-transform hover:scale-[1.05] cursor-pointer bg-white max-h-[217px] rounded-md shadow-[0px_0px_20px_0px_rgba(0,0,0,0.75)]'>
              <img className='m-auto md:max-w-[100px]' src={headPhone} alt="shop item" />
              <h4 className='font-bold md:text-[16px] text-[14px] pt-2'>Headphone</h4>
              <div className='text-xs md:text-sm text-slate-500'>1700 TL</div>
            </div>
            <div className='md:w-36 sm:w-24 w-28 p-2 transition-transform hover:scale-[1.05] cursor-pointer bg-white max-h-[217px] rounded-md shadow-[0px_0px_20px_0px_rgba(0,0,0,0.75)]'>
              <img className='m-auto md:max-w-[100px]' src={joystick} alt="shop item" />
              <h4 className='font-bold md:text-[16px] text-[14px] pt-2'>Joystick</h4>
              <div className='text-xs md:text-sm text-slate-500'>1099 TL</div>
            </div>
    
        </div>
        <div className='mt-10 flex flex-col md:gap-y-12 gap-y-6'>
    
            <div className='md:w-36 sm:w-24 w-28 p-2 transition-transform hover:scale-[1.05] cursor-pointer bg-white max-h-[217px] rounded-md shadow-[0px_0px_20px_0px_rgba(0,0,0,0.75)]'>
              <img className='m-auto md:max-w-[100px]' src={gamingChair} alt="shop item" />
              <h4 className='font-bold md:text-[16px] text-[14px] pt-2'>Gaming Chair</h4>
              <div className='text-xs md:text-sm text-slate-500'>4100 TL</div>
            </div>
            <div className='md:w-36 sm:w-24 w-28 p-2 transition-transform hover:scale-[1.05] cursor-pointer bg-white max-h-[217px] rounded-md shadow-[0px_0px_20px_0px_rgba(0,0,0,0.75)]'>
              <img className='m-auto md:max-w-[100px]' src={phoneImg} alt="shop item" />
              <h4 className='font-bold md:text-[16px] text-[14px] pt-2'>Phone</h4>
              <div className='text-xs md:text-sm text-slate-500'>4900 TL</div>
            </div>

        </div>
      </div>
   </div>

  </div>
  
  )
};

export default HomePageContainer;
