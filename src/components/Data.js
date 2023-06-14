import React from "react"
import wallaceJames from "../imgassets/wallaceJames.svg";
import MapPinLine from "../imgassets/MapPinLine.svg";
import Frame_167 from "../imgassets/Frame_167.svg";
import frame_166 from "../imgassets/Frame 166.png";
import image6 from "../imgassets/image6.png";
import Frame_165 from "../imgassets/Frame_165.svg";
import unsplash_3 from "../imgassets/unsplash_3.png";


const Data_1 =[
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

    }
];





const Data = () => {
  return (
    <>
    <div>
         <ul >
    {Data_1.map((Data_1, index) => (
      <li key={index}>
      <div >
        <p> {Data_1.date} <span>{Data_1.cost}</span> </p>
        
            <div> 
                <h2>{Data_1.title}</h2>
            </div>
        <div>
        <img  src={Data_1.hostProfilepix} alt=""/>
        <p>{Data_1.host}</p>
        </div>
        <div>
        <img  src={Data_1.locIcon} alt=""/>
        <p>{Data_1.location}</p>
        </div>
        <div>
         </div>
        
        </div>

      </li>
    ))}
  </ul>
  </div>


  </>
  )
}

export default Data;
