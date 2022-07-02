import React from 'react'
import { LINKS } from '../../data/home';

const Story = () => {
    return (
        <section  id="story">
        <div className='our-story third-section-title pt-5 d-flex align-items-center flex-column gap-3' data-aos="fade-up" data-aos-duration="2000">
            <h2 className=''>OUR STORY</h2>
            <p className="w-75 text-center">
                The world had been rampaged by disease, killing off millions as the world fought an infection that they were likely to never come back from. From humans to trees, the infection was ruthless, spoiling the soil and waters which blackened with ease, and with the new world, came a new species. Those that were previously human and had been taken hold of by the disease transformed, their skin paling and thickening as they were reprogrammed to be hunting machines. What we now call the Eopma. Jungles had already been horribly ruined by the humans, even before they became restless and infected… Jungle animals had gone rabid with the disease, trees were withering and falling, and at the center of it all? The singular species that by some miracle could not be infected. The elephants...
            </p>



    <a href={LINKS.luckyDiscord} className="btn rotated-btn">Join Our Discord</a>

        </div>
        </section>
    )
}

export default Story