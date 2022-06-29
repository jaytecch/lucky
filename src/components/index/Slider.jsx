import React from 'react'
import Bounce from 'react-reveal/Bounce';

function Slider() {
  return (
	 <section className="third-banner-bg">
            <div className="third-banner-absolute container custom-container">
              <div className="row">
                <div className="col-12">
                
                  <div className="third-banner-content text-center wow bounceInUp my-0" data-wow-delay=".2s">
                    <Bounce bottom>
                    <h6>Jungle Verse</h6>
                    <a href="/#" className="btn rotated-btn">Join Our Community</a>
                    </Bounce>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default Slider