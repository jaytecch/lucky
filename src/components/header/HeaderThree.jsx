import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery';
import ScrollToTop from "react-scroll-to-top";
import { LINKS } from '../../data/home';


function HeaderThree() {

  useEffect(() => {
    //SubMenu Dropdown Toggle
    if ($('.menu-area li.menu-item-has-children ul').length) {
      $('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

    }

    //Mobile Nav Hide Show
    if ($('.mobile-menu').length) {

      var mobileMenuContent = $('.menu-area .push-menu').html();
      $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

      //Dropdown Button
      $('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
        $(this).toggleClass('open');
        $(this).prev('ul').slideToggle(500);
      });


      $('.menu-backdrop, .mobile-menu .close-btn').click(() => {
        $('body').removeClass('mobile-menu-visible');
      })


      //Menu Toggle Btn
      $('.mobile-nav-toggler').on('click', function () {
        $('body').addClass('mobile-menu-visible');
      });
    }


  }, []);
  useEffect(() => {
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $("#sticky-header").removeClass("sticky-menu");
        $('.scroll-to-target').removeClass('open');

      } else {
        $("#sticky-header").addClass("sticky-menu");
        $('.scroll-to-target').addClass('open');
      }
    });

  }, [])
  return (

    <header className="third-header-bg">
      <ScrollToTop smooth top="500" color="#000" />
      <div className="bg" />
      <div className="container custom-container">
        <div className="header-top-area t-header-top-area d-none d-lg-block">
          <div className="row">
            <div className="col-sm-6">
              <div className="header-top-social">
                <ul>
                  <li>Follow</li>
                  <li><a href={LINKS.luckyTwitter}><i className="fab fa-twitter" /></a></li>
                  <li><a href={LINKS.luckyDiscord}><i className="fab fa-discord" /></a></li>
                  <li><a href={LINKS.luckyInstagram}><i className="fab fa-instagram" /></a></li>

                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="header-top-login">
                <ul>
                  <li><a href="/#"><i className="fas fa-plug" />Connect Wallet</a></li>
                  {/* <li className="or">or</li>
                      <li><a href="/#"><i className="far fa-edit" />sign in</a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="sticky-header" className="menu-area">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler"><i className="fas fa-bars" /></div>
              <div className="main-menu  menu-style-two">
                <nav>
                  <div className="logo d-block d-lg-none">
                    <a href="/"><img src="assets/img/logo/logo.png" alt="Logo" /></a>
                  </div>
                  <div className="navbar-wrap d-none d-lg-flex">
                    <ul className="left">
                      <li className="show"><Link to="/">Home</Link></li>
                      <li><a href="#story">Story</a></li>
                      <li><a href="#">Benefits</a></li>
                      <li><a href="/#roadmap">Roadmap</a></li>

                    </ul>
                    <div className="logo">
                      <Link to="/home-three"><img src="assets/img/logo/logol.png" alt="Logo" /></Link>
                    </div>
                    <ul className="right">
                      <li><a href="#">Lucky paper</a></li>
                      <li><a href="#merch">Merch</a></li>
                      <li><a href="#">Stake</a></li>
                      <li><a href="#team">Team</a></li>
                    </ul>
                  </div>
                  <div className="header-action">
                    <ul>
                      <li className="header-search"><a href="/#" data-toggle="modal" data-target="#search-modal"><i className="fas fa-search" /></a></li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="mobile-menu-wrap main-menu d-block d-lg-none">
                <nav>
                  <div className="navbar-wrap push-menu">
                    <ul className="navigation">
                      <li className="show menu-item-has-children"><Link to="/">Home</Link></li>
                      <li><a href="#story">Story</a></li>
                      <li><a href="#">Benefits</a></li>
                      <li><a href="/#roadmap">Roadmap</a></li>
                      <li><a href="#">Lucky paper</a></li>
                      <li><a href="#merch">Merch</a></li>
                      <li><a href="#">Stake</a></li>
                      <li><a href="#team">Team</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/* mobile-menu           */}
              <div className="mobile-menu">
                <nav className="menu-box">
                  <div className="close-btn"><i className="fas fa-times" /></div>
                  <div className="nav-logo"><Link to="/"><img src="assets/img/logo/logo.png" alt="" title='true' /></Link>
                  </div>
                  <div className="menu-outer">

                  </div>
                  <div className="social-links">
                    <ul className="clearfix">
                      <li><a href={LINKS.luckyTwitter}><i className="fab fa-twitter" /></a></li>
                      <li><a href={LINKS.luckyDiscord}><i className="fab fa-discord" /></a></li>
                      <li><a href={LINKS.luckyInstagram}><i className="fab fa-instagram" /></a></li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="menu-backdrop" />
            </div>
            {/* Modal Search */}
            <div className="modal fade" id="search-modal" tabIndex={-1} role="dialog" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <form>
                    <input type="text" placeholder="Search here..." />
                    <button><i className="fa fa-search" /></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom-bg" />
    </header>
  )
}

export default HeaderThree