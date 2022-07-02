import { sampleNftImages, icons} from '../../imports/images';



const Amalgamation = () => {
  return (
    <section className='mt-5 text-center' data-aos="slide-up" data-aos-duration="3000">
                <h2>AMALGAMATION</h2>
                <article className='w-75 mx-auto'>
                    <h3 style={{ color: 'white', textDecoration: 'underline' }} className="fst-italic">WHAT DOES <span style={{ color: 'gold' }}>BREEDING</span> MEAN FOR LEC?</h3>

                    <p>
                        The simplest answer is you will create a new elephant that will inherit some attributes from the parents, andsome will be traits added randomly.
                        But here is the thing, we are not sticking to the traditional way of inheriting traits from female and male parents.We wanted to change it up and let your Lucky Elephant evolve, reaching uncharted territory by our style ofcrossbreeding.
                    </p>
                </article>
                <h6 className='d-inline-block p-2 rounded' style={{
                    color: 'black',
                    border: '2px solid black',
                    backgroundColor: 'gold',
                    fontStyle: "italic",

                }}>AMALGAMATION &nbsp; (THE PROCESS)</h6>
                <div className='row px-3 mb-4'>
                    <div className=' col-sm-4 col col-md-3 rs-image' data-aos="fade-up" data-aos-duration="2500">
                        <img src={sampleNftImages.elephant1} alt='' className='w-100 h-100' />
                    </div>
                    <div className='col-sm-4 col-md-2 plus-equal d-flex justify-content-center align-items-center gold'>
                        +
                    </div>
                    <div className=' col-sm-4 col-md-3 rs-image' data-aos="fade-down" data-aos-duration="2500">
                        <img src={sampleNftImages.elephant2} alt='' className='w-100 h-100' />
                    </div>
                    <div className='col-md-2 plus-equal d-flex justify-content-center align-items-center gold'>
                        =
                    </div>
                    <div className='col-md-2 d-flex justify-content-center align-items-center q-mark'>
                        ?
                    </div>
                </div>

                <article className='w-75 mx-auto'>
                    <h3 style={{ color: 'white', textDecoration: 'underline' }} className="fst-italic">WHAT IF I ONLY OWN <span style={{ color: 'gold' }}>ONE</span> ELEPHANT?</h3>

                    <p>
                        Not a problem at all, we have added a way to evolve your solo NFT with our Amalgamator and valuable
                        $PNUT
                        coin
                        A breeding function that requires 1 NFT and
                        $PNUT
                        coins, after breeding the NFT can't be used to breed again.
                    </p>
                </article>

                <div className='row text-start'>
                    <div className='offset-md-2 col-sm-6 col-md-4 d-flex justify-content-center align-items-center'>
                        <div className='work  gold my-3'><span className="d-inline-block p-2 fst-italic">HOW THIS WILL WORK</span></div>
                    </div>
                    <ol className='list-group list-group-numbered flushed col-sm-6 col-md-4 text-center my-4'>
                        <li className='list-group-item list-style'>Amalgamate Price: 2000 <span className='currency gold'>$PNUT</span></li>
                        <li className='list-group-item list-style'>Change Name Price: 500 <span className='currency gold'>$PNUT</span></li>
                        <li className='list-group-item list-style'>Change Bio Price: 500 <span className='currency gold'>$PNUT</span></li>
                    </ol>
                </div>
                <div className='row px-3 mb-4'>
                    <div className='col-sm-4 col-12 col-md-3  rs-image' data-aos="flip-left" data-aos-duration="2500" data-aos-delay="500">
                        <img src={icons.pnut} alt='' className='coin w-100 h-100' />
                    </div>
                    <div className='col-sm-4 col-12 col-md-2  plus-equal d-flex justify-content-center align-items-center gold'>
                        +
                    </div>
                    <div className='col-sm-4 col-12 col-md-3  rs-image' data-aos="flip-left" data-aos-duration="2500" data-aos-delay="500">
                        <img src={sampleNftImages.elephant4} alt='' className='w-100 h-100' />
                    </div>
                    <div className='col-12 col-md-1 plus-equal d-flex justify-content-center align-items-center gold'>
                        =
                    </div>
                    <div className='col-md-2 d-flex justify-content-center align-items-center q-mark'>
                        ?
                    </div>
                </div>

            </section>

           
  )
}

export default Amalgamation