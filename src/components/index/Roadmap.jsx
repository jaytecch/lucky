import Phases from './Phases';
import { LINKS } from '../../data/home';



const Roadmap = () => {
  return (
    <section className='pt-5' id="roadmap">

    <div className='d-flex justify-content-center mb-5'>
        <h2 className='col-ss' data-aos="zoom-out" data-aos-duration="2500">ROADMAP</h2>
        <div className=' d-flex justify-content-center align-items-center'>
        
    <a href={LINKS.luckyDiscord} target="_blank" rel="noreferrer" className="btn rotated-btn">Join Our Discord</a>

         

        </div>
    </div>

{/* PHASES */}

    <div className='row'>
    <Phases/>

    </div>

</section>  )
}

export default Roadmap