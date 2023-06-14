import React from 'react'
import wallaceJames from "../imgassets/wallaceJames.svg";
import MapPinLine from "../imgassets/MapPinLine.svg";
import Frame_167 from "../imgassets/Frame_167.svg";
import frame_166 from "../imgassets/Frame 166.png";
import image6 from "../imgassets/image6.png";
import Frame_165 from "../imgassets/Frame_165.svg";
import unsplash_3 from "../imgassets/unsplash_3.png";
import unsplash_1 from "../imgassets/unsplash_1.png";
import unsplash_2 from "../imgassets/umsplash_2.png";
import {useState} from 'react';


const Data_3 =[
  {
     id: 1,
     date : '03 June',
     cost : '$10.00',
     title : "The next conference 23'",
     hostProfilepix : wallaceJames,
     host : 'Wallace James',
     locIcon : MapPinLine,
     location : 'Abuja,Nigeria',
     adImage : Frame_167

 },
 {
     id : 2,
     date : '03 June',
     cost : 'FREE',
     title : "DEVFEST",
     hostProfilepix : frame_166,
     host : 'Miracle Kalu',
     locIcon : MapPinLine,
     location : 'Uyo,Nigeria',
     adImage : image6

 },
 {
     id : 3,
     date : '03 June',
     cost : 'FREE',
     title : 'Sip and Paint NGat Radison Blu',
     hostProfilepix : Frame_165,
     host : 'Annabel Richard',
     locIcon : MapPinLine,
     location : 'Lagos,Nigeria',
     adImage : unsplash_3

 },
    
    {
        id: 4,
       date : '03 June',
       cost : '$10.00',
       title : "GOALFEST",
       hostProfilepix : wallaceJames,
       host : 'Wallace James',
       locIcon : MapPinLine,
       location : 'Lagos,Nigeria',
       adImage : unsplash_1

   },
   {
    id : 5,
    date : '03 June',
    cost : 'FREE',
    title : "Swimming Training",
    hostProfilepix : wallaceJames,
    host : 'Wallace James',
    locIcon : MapPinLine,
    location : 'Lagos,Nigeria',
    adImage : unsplash_2

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
      <div>
       <input
       className=''
        type="text"
        value={searchInput}
        onChange={handleSearchInputChange}
        placeholder="Search"
      /> 
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