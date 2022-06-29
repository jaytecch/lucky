import React from 'react'

function TeamArea() {
  return (
	 <section className="team-area team-bg">
            <div className="container custom-container">
              <div className="row">
                <div className="col-12">
                  <div className="third-section-title text-center mb-60">
                    <h2>MEET <span>OUR</span> TEAM</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                  <div className="third-team-item text-center mb-30">
                    <div className="third-team-img">
                      <img src="assets/img/team/1.png" alt="" />
                    </div>
                    <div className="third-team-content">
                      <div className="main-bg" />
                      <div className="hover-bg" />
                      <h5><a href="/#">Farid Elyased</a></h5>
                      <span>Lead</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                  <div className="third-team-item text-center mb-30">
                    <div className="third-team-img">
                      <img src="assets/img/team/2.png" alt="" />
                    </div>
                    <div className="third-team-content">
                      <div className="main-bg" />
                      <div className="hover-bg" />
                      <h5><a href="/#">Robert Jyuish</a></h5>
                      <span>Smart Contract Developer</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                  <div className="third-team-item text-center mb-30">
                    <div className="third-team-img">
                      <img src="assets/img/team/3.png" alt="" />
                    </div>
                    <div className="third-team-content">
                      <div className="main-bg" />
                      <div className="hover-bg" />
                      <h5><a href="/#">Joseph Joshua</a></h5>
                      <span>Web3 Developer</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                  <div className="third-team-item text-center mb-30">
                    <div className="third-team-img">
                      <img src="assets/img/team/4.png" alt="" />
                    </div>
                    <div className="third-team-content">
                      <div className="main-bg" />
                      <div className="hover-bg" />
                      <h5><a href="/#">Arpit Nigam</a></h5>
                      <span>Artist</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default TeamArea