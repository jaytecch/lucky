import AOS from 'aos';
import Merch from './Merch';
import Team from './Team';
import Amalgamation from './Amalgamation';
import Roadmap from './Roadmap';
import Evolution from './Evolution';
import Story from './Story';
import Slider from './Slider';




const Main = () => {
    AOS.init();

    return (
        <main>


            {/* Slider */}
            <Slider />

            {/* STORY */}
            <Story />

            {/*Evolution  */}

            <Evolution />

            {/* ROADMAP */}

            <Roadmap />

            {/*AMALGATION*/}
            <Amalgation />

            {/* GAME */}

            {/* <Game /> */}

            {/* STREET WEAR COLLECTION */}

            <StreetWear />

            {/* TEAM */}
            <Team />


        </main>
    )
}

export default Main;