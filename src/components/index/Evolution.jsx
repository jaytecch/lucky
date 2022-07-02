import { sampleNftImages } from '../../imports/images';
import { LINKS } from '../../data/home';


const Evolution = () => {
    return (
        <div className='row m-0 pt-5'>
            <div className='col-sm-6 mb-5' data-aos="slide-right" data-aos-duration="3000">
                <img src={sampleNftImages.elephant4} alt='' className='evol-img w-100 mx-3' />
            </div>

            <div className='third-section-title col-sm-6 d-flex flex-column align-items-center gap-3'>
                <h2 className='text-center' data-aos="zoom-out" data-aos-duration="2500">EVOLUTION</h2>
                <p className='text-center px-3'>
                    Though the elephants could not be bitten and infected via saliva, blood, or others similar to that, their food source was running slow.
                    The younger of the population was surviving well, whereas those that were older and struggling to find enough food and sustenance were slowly beginning to fade.
                    Eventually, there was only one hope left…The youngest.
                </p>
                
               
       <a href={LINKS.luckyPaper} className="btn rotated-btn">Read Our Lucky Paper</a>

       <div className='evol my-2'>
            <img src={sampleNftImages.evolution}  alt="" />
        </div>
                
            </div>
        </div>
    )
}

export default Evolution