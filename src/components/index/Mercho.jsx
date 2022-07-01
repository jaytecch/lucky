
import { merch } from '../../imports/images';





const Merch= () => {
    

    return (
        <div id="merch" className='merch row m-0 my-5 pt-3'>
            <div className='col-sm-6 d-flex justify-content-center '>

                <img src={merch} className='w-100' alt='' />

            </div>

            <div className='col-12 col-sm-6 d-flex flex-column align-items-center justify-content-center gap-3'>
                <h2 className='text-center'>STREET WEAR COLLECTION</h2>
                <p className='text-center px-3'>
                    Explore &amp; Shop our exclusive streetwear collection.
                </p>
                <div>
                   <a href="#" className='btn rotated-btn'>Shop Now</a>
                </div>
            </div>
        </div>


    )
}

export default Merch