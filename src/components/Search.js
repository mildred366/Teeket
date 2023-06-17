import React from 'react'
import MapPinLine from "../assets/map.svg";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";
import Icon4 from "../assets/icon4.png";
import Icon5 from "../assets/icon5.png";
import List1 from "../assets/list1.png";
import List2 from "../assets/list2.png";
import List3 from "../assets/list3.png";
import List4 from "../assets/list4.png";
import List5 from "../assets/list5.png";
import search from "../assets/Elipse.png";
import list from "../assets/SlidersHorizontal.png";
import {useState} from 'react';


const Data_3 =[
  {
     id: 1,
     date : '03 June',
     cost : '$10.00',
     title : "The next conference 23'",
     hostProfilepix : Icon1,
     host : 'Wallace James',
     locIcon : MapPinLine,
     location : 'Abuja,Nigeria',
     adImage : List1

 },
 {
     id : 2,
     date : '03 June',
     cost : 'FREE',
     title : "DEVFEST",
     hostProfilepix : Icon2,
     host : 'Miracle Kalu',
     locIcon : MapPinLine,
     location : 'Uyo,Nigeria',
     adImage : List2

 },
 {
     id : 3,
     date : '03 June',
     cost : 'FREE',
     title : 'Sip and Paint NGat Radison Blu',
     hostProfilepix : Icon3,
     host : 'Annabel Richard',
     locIcon : MapPinLine,
     location : 'Lagos,Nigeria',
     adImage : List3

 },
    
    {
        id: 4,
       date : '03 June',
       cost : '$10.00',
       title : "GOALFEST",
       hostProfilepix : Icon4,
       host : 'Wallace James',
       locIcon : MapPinLine,
       location : 'Lagos,Nigeria',
       adImage : List4

   },
   {
    id : 5,
    date : '03 June',
    cost : 'FREE',
    title : "Swimming Training",
    hostProfilepix : Icon5,
    host : 'Wallace James',
    locIcon : MapPinLine,
    location : 'Lagos,Nigeria',
    adImage : List5

   }

];


function Search() {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredData = Data_3.filter((data) =>
  data.title.toLowerCase().startsWith(searchInput.toLowerCase())
  );

  return (
    <>
      <div className='flex mb-6'>
        <div className='flex text-[#101010] text-base bg-[#EDEDED] p-3 rounded-xl ml-2 mr-6 flex-1'>
        <img  src={search} width="30px" height="30px" alt="iconSearch" className='flex-none'/>
        <input
          className='ml-2 bg-[#EDEDED] focus:outline-none focus:border-sky-500 placeholder:text-lg placeholder:text-[#101010] opacity-30'
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="Search all events"
        /> 
        </div>
        <div className='flex-none mx-4'>
        <button className='text-white bg-[#001133] rounded-xl p-3 font-bold shadow-md shadow-black/40'>
        <img  src={list} width="30px" height="30px" alt="iconList" />
        </button>
        </div>
      </div>
      <ul >
        {filteredData.map((data, index) =>
         <li key={index}>
         <div >
           <p> {data.date} <span>{data.cost}</span> </p>
           
               <div> 
                   <h2>{data.title}</h2>
               </div>
           <div>
           <img  src={data.hostProfilepix} alt=""/>
           <p>{data.host}</p>
           </div>
           <div>
           <img  src={data.locIcon} alt=""/>
           <p>{data.location}</p>
           </div>
           <div>
           <img  src={data.adImage} alt="" className="w-[204px] h-[166px]"/>
           </div>
           
           </div>
   
         </li>
       )}
     </ul>
    </>
  )
}

export default Search;