import React from "react";
import Header from "./components/Header/Header";
import Text from "./components/Text/Text";
import InstrumentList from "./components/InstrumentList/InstrumentList";
import guitar1 from './images/guitar-1.webp';

export default function App() {
  return (
    <div class="container">
      <Header/>
      <br/>
      <Text content={"Example store contains the finest instruments from all around the world. We can assure you that any purchase made will be only the finest quality."}/>
      <InstrumentList/>
    </div>
  )
}