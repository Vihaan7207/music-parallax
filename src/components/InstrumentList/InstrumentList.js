import React from "react";
import Instrument from "../Instrument/Instrument";
import './InstrumentList.css';
import guitar1 from '../../images/guitar-1.webp';
import villainizer from '../../images/villainizer.png';
import gibson_m_4 from '../../images/gibson-m-4.png';

export default function InstrumentList() {
    return (
        <div className="instrumentlist">
             <Instrument image={guitar1} name={"Reverend Billy Corgan Signature Z-One"} description={"A unique single-cutaway design with a mahogany body, a maple neck, and a rosewood fingerboard."}/>
             <Instrument image={villainizer} name={"Villainizer"} description={"A one-of-a-kind guitar custom made by Rhodes Jackson"}/>
             <Instrument image={gibson_m_4} name={"Gibson M-4 Sherman Explorer"} description={"An awesome personalized guitar belonging to  Five Finger Death Punch’s Jason Hook"}/>
        </div>
    )
}