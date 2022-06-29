

import { roadMapPhases, roadMapContent } from "../../data/home"
import { icons } from "../../imports/images"

const Phases = () => {
    const phaseKeys = Object.keys(roadMapPhases)


  return (
    <>
    {
  
        
    phaseKeys.map((key, index) => {
       return (
        <div className='col-12 col-sm-6 col-md-3 text-center mb-5'  key={index}>
            <h3 className='phase fst-italic'>{roadMapPhases[key][0]}</h3>
            <h5 className='phase-sub fst-italic'>{roadMapPhases[key][1]}</h5>

            <div className="gnut-wrapper  my-4 mx-auto" data-aos="zoom-in" data-aos-duration="2500">
                <img src={icons.gnut} alt="" className="w-100 h-100"/>
            </div>

            <div className="my-3 w-75 mx-auto">
                {
                key !== "phase4"?<p data-aos="flip-down" data-aos-duration="2500">{roadMapContent[key]}</p>:
                    <ul className="phase4">
                        {
                            roadMapContent[key].map((content, index )=> <li  key={index}>{content}</li>
                            )
                        }
                    </ul>
                    
            }
            </div>

            </div>
       )
})

   
    }
    </>
  )
}

export default Phases