import React from 'react'

import HeaderThree from '../header/HeaderThree';
import Evolution from './Evolution';
import SliderThree from './Slider'
import Story from "./Story"
import Amalgamation from './Amalgamation';
import Merch from "./Merch"
import Benefits from './Benefits';
import TeamArea from './TeamArea';
import { Footer } from './Footer';
import RoadMap from './Roadmap';


function IndexThree() {
  return (
    <>
      {/* header-area */}
      <HeaderThree />
      {/* header-area-end */}

      {/* main-area */}
      <main>
        {/* slider-area */}
        <SliderThree />
        {/* slider-area-end */}

        {/* Story */}
        <Story />

        {/* Evolution */}

        <Evolution />

        {/* benfits */}
        <Benefits />

        {/* RoadMap */}
        <RoadMap />

       

        {/* Amalgamation  */}
        <Amalgamation />

        {/* Merch */}
        <Merch />

        {/* Team */}
        <TeamArea />

        {/* Footer */}
        <Footer />
      </main>
    </>



  )
}

export default IndexThree