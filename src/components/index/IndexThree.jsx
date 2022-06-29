import React from 'react'

import HeaderThree from '../header/HeaderThree';
import Evolution from './Evolution';
import Roadmap from "./Roadmap"
import SliderThree from './Slider'
import Story from "./Story"
import Amalgamation from './Amalgamation';
import Merch from "./Merch"
import TeamArea from './TeamArea';
import { Footer } from './Footer';

function IndexThree() {
  return (
	  <>
	  	{/* header-area */}
      		<HeaderThree/>
        {/* header-area-end */}
        {/* main-area */}
        <main>
          {/* slider-area */}
          	<SliderThree/>
          {/* slider-area-end */}

          {/* Story */}
          <Story />

          {/* Evolution */}

          <Evolution />

          {/* RoadMap */}

          <Roadmap />

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