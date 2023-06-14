import React from 'react';
import wallaceJames from "../imgassets/wallaceJames.svg";
import MapPinLine from "../imgassets/MapPinLine.svg";
import unsplash_1 from "../imgassets/unsplash_1.png";
import unsplash_2 from "../imgassets/umsplash_2.png";



const Data_2 =[
    
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





const SportEvent = () => {
  return (
    <> 
    <div>
    <ul >
{Data_2.map((Data_2, index) => (
 <li key={index}>
 <div >
   <p> {Data_2.date} <span>{Data_2.cost}</span> </p>
   
       <div> 
           <h2>{Data_2.title}</h2>
       </div>
   <div>
   <img  src={Data_2.hostProfilepix} alt=""/>
   <p>{Data_2.host}</p>
   </div>
   <div>
   <img  src={Data_2.locIcon} alt=""/>
   <p>{Data_2.location}</p>
   </div>
   <div>
   <img  src={Data_2.adImage} alt=""/>
   </div>
   
   </div>

 </li>
))}
</ul>
</div>
</>
  )
}

export default SportEvent