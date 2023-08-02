import React, { useState, useEffect } from 'react'
import UserService from '../services/user.service'
const Home = () => {
  const [content, setContent] = useState('en chargement!!')
  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data)
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString()
        setContent(_content)
      }
    )
  }, [])
  return (
    <>
      <div class='dc-homesliderholder dc-haslayout'>
        <div id='dc-homeslider' class='dc-homeslider'>
          <div
            id='dc-bannerslider'
            class='dc-bannerslider carousel slide'
            data-ride='false'
            data-interval='false'
          >
            <ol class='carousel-indicators dc-bannerdots'>
              <li
                data-target='#dc-bannerslider'
                data-slide-to='0'
                class='active'
              ></li>
              <li data-target='#dc-bannerslider' data-slide-to='1'></li>
              <li data-target='#dc-bannerslider' data-slide-to='2'></li>
            </ol>
            <div class='carousel-inner'>
              <div class='carousel-item active' id='carousel-item-1'>
                <div class='d-flex justify-content-center dc-craousel-content'>
                  <div class='mx-auto'>
                    <img
                      class='d-block dc-bannerimg'
                      src='assets/images/slider/img-01.png'
                      alt='First slide'
                    />
                    <div class='dc-bannercontent dc-bannercotent-craousel'>
                      <div class='dc-content-carousel'>
                        <div class='dc-num'></div>
                        <h1>
                          <em>Emergency?</em> Find Nearest
                          <span> Medical Facility</span>
                        </h1>
                        <div class='dc-btnarea'>
                          <a
                            href='javascript:void(0);'
                            class='dc-btn dc-btnactive'
                          >
                            View Hospitals
                          </a>
                          <a href='/doctors' class='dc-btn'>
                            View Doctors
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='carousel-item' id='carousel-item-2'>
                <div class='d-flex justify-content-center dc-craousel-content'>
                  <div class='mx-auto'>
                    <img
                      class='d-block dc-bannerimg'
                      src='assets/images/slider/img-02.png'
                      alt='Second slide'
                    />
                    <div class='dc-bannercontent dc-bannercotent-craousel'>
                      <div class='dc-content-carousel'>
                        <div class='dc-num'></div>
                        <h1>
                          <em>Emergency?</em> Find Nearest
                          <span> Medical Facility</span>
                        </h1>
                        <div class='dc-btnarea'>
                          <a
                            href='javascript:void(0);'
                            class='dc-btn dc-btnactive'
                          >
                            View Hospitals
                          </a>
                          <a href='javascript:void(0);' class='dc-btn'>
                            View Doctors
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='carousel-item' id='carousel-item-3'>
                <div class='d-flex justify-content-center dc-craousel-content'>
                  <div class='mx-auto'>
                    <img
                      class='d-block dc-bannerimg'
                      src='assets/images/slider/img-03.png'
                      alt='Third slide'
                    />
                    <div class='dc-bannercontent dc-bannercotent-craousel'>
                      <div class='dc-content-carousel'>
                        <div class='dc-num'></div>
                        <h1>
                          <em>Emergency?</em> Find Nearest
                          <span> Medical Facility</span>
                        </h1>
                        <div class='dc-btnarea'>
                          <a
                            href='javascript:void(0);'
                            class='dc-btn dc-btnactive'
                          >
                            View Hospitals
                          </a>
                          <a href='javascript:void(0);' class='dc-btn'>
                            View Doctors
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class='dc-carousel-control-prev'
                href='#dc-bannerslider'
                role='button'
                data-slide='prev'
              >
                <span class='dc-carousel-control-prev-icon' aria-hidden='true'>
                  <span>PR</span>
                  <span class='d-block'>EV</span>
                </span>
                <span class='sr-only'>Previous</span>
              </a>
              <a
                class='dc-carousel-control-next'
                href='#dc-bannerslider'
                role='button'
                data-slide='next'
              >
                <span class='dc-carousel-control-next-icon ' aria-hidden='true'>
                  <span>NE</span>
                  <span class='d-block'>XT</span>
                </span>
                <span class='sr-only'>Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <main id='dc-main' class='dc-main dc-haslayout'>
        <section class='dc-searchholder dc-haslayout'>
          <div class='container'>
            <div class='row'>
              <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                <div class='dc-searchform-holder'>
                  <div class='dc-advancedsearch'>
                    <div class='dc-title'>
                      <h2>Start Your Search</h2>
                      <a href='javascript:void(0);' class='dc-docsearch'>
                        <span class='dc-advanceicon'>
                          <i></i> <i></i> <i></i>
                        </span>
                        <span>
                          Advanced <br />
                          Search
                        </span>
                      </a>
                    </div>
                    <form class='dc-formtheme dc-form-advancedsearch'>
                      <fieldset>
                        <div class='form-group'>
                          <input
                            type='text'
                            name='search'
                            class='form-control'
                            placeholder='Search doctors, clinics, hospitals, etc.'
                          />
                        </div>
                        <div class='form-group'>
                          <div class='dc-select'>
                            <select
                              class='chosen-select locations'
                              data-placeholder='Country'
                              name='locations'
                            >
                              <option value='Location'>Location*</option>
                              <option value='United State'>United State</option>
                              <option value='Canada'>Canada</option>
                              <option value='England'>England</option>
                              <option value='Switzerland'>Switzerland</option>
                              <option value='New Zealand'>New Zealand</option>
                            </select>
                          </div>
                        </div>
                        <div class='dc-formbtn'>
                          <a href='javascript:void(0);'>
                            <i class='ti-arrow-right'></i>
                          </a>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                  <div class='dc-jointeamholder'>
                    <div class='dc-jointeam'>
                      <span class='dc-jointeamnoti'>
                        <i class='ti-light-bulb'></i>
                      </span>
                      <figure class='dc-jointeamimg'>
                        <img
                          src='assets/images/slider/img-04.png'
                          alt='img description'
                        />
                      </figure>
                      <div class='dc-jointeamcontent'>
                        <h3>
                          <span>Are You a Doctor?</span>Join Our Team
                        </h3>
                        <a
                          href='javascript:void(0);'
                          class='dc-btn dc-btnactive'
                        >
                          Join as Doctor
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='dc-haslayout'>
            <div class='container-fluid'>
              <div class='row'>
                <div id='dc-doctorslider' class='dc-doctorslider owl-carousel'>
                  <div class='item dc-doctordetails-holder dc-titlecolor1'>
                    <span class='dc-slidercounter'>01.</span>
                    <h3>
                      <span>Live Chat With</span> Doctors
                    </h3>
                    <a href='javascript:void(0);' class='dc-btn'>
                      Show All Nearest Hospitals
                    </a>
                  </div>
                  <div class='item dc-doctordetails-holder dc-titlecolor2'>
                    <span class='dc-slidercounter'>02.</span>
                    <h3>
                      <span>Fast Appointment With</span> Nearest Hospital
                    </h3>
                    <a href='javascript:void(0);' class='dc-btn'>
                      Show All Nearest Hospitals
                    </a>
                  </div>
                  <div class='item dc-doctordetails-holder dc-titlecolor3'>
                    <span class='dc-slidercounter'>03.</span>
                    <h3>
                      <span>Articles From Top</span> Hospitals &amp; Doctors
                    </h3>
                    <a href='javascript:void(0);' class='dc-btn'>
                      Show All Nearest Hospitals
                    </a>
                  </div>
                  <div class='item dc-doctordetails-holder dc-titlecolor4'>
                    <span class='dc-slidercounter'>04.</span>
                    <h3>
                      <span>Our 24/7 Active</span> Help Support
                    </h3>
                    <a href='javascript:void(0);' class='dc-btn'>
                      Show All Nearest Hospitals
                    </a>
                  </div>
                  <div class='item dc-doctordetails-holder dc-titlecolor5'>
                    <span class='dc-slidercounter'>05.</span>
                    <h3>
                      <span>Help on The Go</span> Download App
                    </h3>
                    <a href='javascript:void(0);' class='dc-btn'>
                      Show All Nearest Hospitals
                    </a>
                  </div>
                  <div class='item dc-doctordetails-holder dc-titlecolor6'>
                    <span class='dc-slidercounter'>06.</span>
                    <h3>
                      <span>Live Chat With</span> Doctors
                    </h3>
                    <a href='javascript:void(0);' class='dc-btn'>
                      Show All Nearest Hospitals
                    </a>
                  </div>
                  <div class='item dc-doctordetails-holder dc-titlecolor7'>
                    <span class='dc-slidercounter'>07.</span>
                    <h3>
                      <span>Fast Appointment With</span> Nearest Hospital
                    </h3>
                    <a href='javascript:void(0);' class='dc-btn'>
                      Show All Nearest Hospitals
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class='dc-haslayout dc-main-section dc-sectionbg'>
          <div class='container'>
            <div class='row'>
              <div class='col-12 col-sm-12 col-md-12 col-lg-6 align-self-center'>
                <div class='dc-bringcarecontent'>
                  <div class='dc-sectionhead dc-sectionheadvtwo'>
                    <div class='dc-sectiontitle'>
                      <h2>
                        Bring Care to Your<span>Home With One Click</span>
                      </h2>
                    </div>
                    <div class='dc-description'>
                      <p>
                        Lorem ipsum dolor amet consectetur adipisicing eliteiuim
                        sete eiusmod tempor incididunt ut labore etnalom dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div class='dc-btnarea'>
                    <a href='javascript:void(0);' class='dc-btn'>
                      About Us
                    </a>
                    <a href='javascript:void(0);' class='dc-btn dc-btnactive'>
                      Contact
                    </a>
                  </div>
                </div>
              </div>
              <div class='col-12 col-sm-12 col-md-12 col-lg-6'>
                <div class='dc-bringimg-holder'>
                  <figure class='dc-doccareimg'>
                    <img
                      src='assets/images/doc-imgs/img-01.png'
                      alt='img description'
                    />
                    <figcaption>
                      <div class='dc-doccarecontent'>
                        <h3>
                          <em>Greetings &amp; Welcome </em>Dr. Tyrone Grindle
                        </h3>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class='dc-haslayout'>
          <div class='dc-haslayout dc-bgcolor dc-main-section dc-workholder'>
            <div class='container'>
              <div class='row justify-content-center align-self-center'>
                <div class='col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-8 push-lg-2'>
                  <div class='dc-sectionhead dc-text-center'>
                    <div class='dc-sectiontitle'>
                      <h2>
                        <span>We Made It Simple</span>How It <em>Works?</em>
                      </h2>
                    </div>
                    <div class='dc-description'>
                      <p>
                        Lorem ipsum dolor amet consectetur adipisicing eliteiuim
                        sete eiusmod tempor incididunt ut labore etnalom dolore
                        magna aliqua udiminimate veniam quis norud.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='dc-haslayout dc-main-section dc-workdetails-holder'>
            <div class='container'>
              <div class='row'>
                <div class='col-12 col-sm-6 col-md-4 col-lg-4'>
                  <div class='dc-workdetails'>
                    <div class='dc-workdetail'>
                      <figure>
                        <img
                          src='assets/images/work-icon/img-01.png'
                          alt='img description'
                        />
                      </figure>
                    </div>
                    <div class='dc-title'>
                      <span>Search Best Online</span>
                      <h3>
                        <a href='javascript:void(0);'>Professional</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div class='col-12 col-sm-6 col-md-4 col-lg-4'>
                  <div class='dc-workdetails dc-workdetails-border'>
                    <div class='dc-workdetail'>
                      <figure>
                        <img
                          src='assets/images/work-icon/img-02.png'
                          alt='img description'
                        />
                      </figure>
                    </div>
                    <div class='dc-title'>
                      <span>SGet Instant</span>
                      <h3>
                        <a href='javascript:void(0);'>Appointment</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div class='col-12 col-sm-6 col-md-4 col-lg-4'>
                  <div class='dc-workdetails dc-workdetails-bordertwo'>
                    <div class='dc-workdetail'>
                      <figure>
                        <img
                          src='assets/images/work-icon/img-03.png'
                          alt='img description'
                        />
                      </figure>
                    </div>
                    <div class='dc-title'>
                      <span>Leave Your</span>
                      <h3>
                        <a href='javascript:void(0);'>Feedback</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class='dc-haslayout dc-main-section'>
          <div class='container-fluid'>
            <div class='row'>
              <div class='col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-3'>
                <div class='row'>
                  <div class='dc-ratedecontent dc-bgcolor'>
                    <figure class='dc-neurosurgeons-img'>
                      <img
                        src='assets/images/doc-imgs/img-02.png'
                        alt='img description'
                      />
                    </figure>
                    <div class='dc-sectionhead dc-sectionheadvtwo dc-text-center'>
                      <div class='dc-sectiontitle'>
                        <h2>
                          Our Top Rated<span>Neurosurgeons</span>
                        </h2>
                      </div>
                      <div class='dc-description'>
                        <p>
                          Lorem ipsum dolor amet consectetur adipisicing eliuim
                          sete eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                    <div class='dc-btnarea'>
                      <a href='javascript:void(0);' class='dc-btn'>
                        View All
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-9'>
                <div class='row'>
                  <div
                    id='dc-docpostslider'
                    class='dc-docpostslider owl-carousel'
                  >
                    <div class='item'>
                      <div class='dc-docpostholder'>
                        <figure class='dc-docpostimg'>
                          <img
                            src='assets/images/doctors/img-01.jpg'
                            alt='img description'
                          />
                          <figcaption>
                            <span class='dc-featuredtag'>
                              <i class='fa fa-bolt'></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div class='dc-docpostcontent'>
                          <a href='javascript:void(0);' class='dc-like'>
                            <i class='fa fa-heart'></i>
                          </a>
                          <div class='dc-title'>
                            <a href='javascript:void(0)' class='dc-docstatus'>
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href='javascript:void(0);'>
                                Dr. Tinisha Amenta
                              </a>{' '}
                              <i class='fa fa-award dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>{' '}
                              <i class='fa fa-check-circle dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul class='dc-docinfo'>
                              <li>
                                <em>MBBS, MCPS, MSc (Immunology)</em>
                              </li>
                              <li>
                                <span class='dc-stars'>
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div class='dc-doclocation'>
                            <span>
                              <i class='ti-direction-alt'></i> Manchester, UK
                            </span>
                            <span>
                              <i class='ti-calendar'></i>{' '}
                              <em class='dc-dayon'>Mo</em>, Tu, We, Th, Fr, Sa
                            </span>
                            <a href='javascript:void(0);' class='dc-btn'>
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='item'>
                      <div class='dc-docpostholder'>
                        <figure class='dc-docpostimg'>
                          <img
                            src='assets/images/doctors/img-02.jpg'
                            alt='img description'
                          />
                          <figcaption>
                            <span class='dc-featuredtag'>
                              <i class='fa fa-bolt'></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div class='dc-docpostcontent'>
                          <a href='javascript:void(0);' class='dc-like'>
                            <i class='fa fa-heart'></i>
                          </a>
                          <div class='dc-title'>
                            <a href='javascript:void(0)' class='dc-docstatus'>
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href='javascript:void(0);'>
                                Dr. Carmelo G. lock{' '}
                              </a>{' '}
                              <i class='fa fa-award dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>{' '}
                              <i class='fa fa-check-circle dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul class='dc-docinfo'>
                              <li>
                                <em>MBBS, MCPS, MSc (Immunology)</em>
                              </li>
                              <li>
                                <span class='dc-stars'>
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div class='dc-doclocation'>
                            <span>
                              <i class='ti-direction-alt'></i> Manchester, UK
                            </span>
                            <span>
                              <i class='ti-calendar'></i> Mo, Tu,{' '}
                              <em class='dc-dayon'>We</em>, Th, Fr, Sa
                            </span>
                            <a href='javascript:void(0);' class='dc-btn'>
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='item'>
                      <div class='dc-docpostholder'>
                        <figure class='dc-docpostimg'>
                          <img
                            src='assets/images/doctors/img-04.jpg'
                            alt='img description'
                          />
                          <figcaption>
                            <span class='dc-featuredtag'>
                              <i class='fa fa-bolt'></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div class='dc-docpostcontent'>
                          <a href='javascript:void(0);' class='dc-like'>
                            <i class='fa fa-heart'></i>
                          </a>
                          <div class='dc-title'>
                            <a href='javascript:void(0)' class='dc-docstatus'>
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href='javascript:void(0);'>
                                Dr. Maryland Nicol lock
                              </a>{' '}
                              <i class='fa fa-award dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>{' '}
                              <i class='fa fa-check-circle dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul class='dc-docinfo'>
                              <li>
                                <em>MBBS, MCPS, MSc (Immunology)</em>
                              </li>
                              <li>
                                <span class='dc-stars'>
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div class='dc-doclocation'>
                            <span>
                              <i class='ti-direction-alt'></i> Manchester, UK
                            </span>
                            <span>
                              <i class='ti-calendar'></i> Mo,{' '}
                              <em class='dc-dayon'>Tu</em>, We, Th, Fr, Sa
                            </span>
                            <a href='javascript:void(0);' class='dc-btn'>
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='item'>
                      <div class='dc-docpostholder'>
                        <figure class='dc-docpostimg'>
                          <img
                            src='assets/images/doctors/img-03.jpg'
                            alt='img description'
                          />
                          <figcaption>
                            <span class='dc-featuredtag'>
                              <i class='fa fa-bolt'></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div class='dc-docpostcontent'>
                          <a href='javascript:void(0);' class='dc-like'>
                            <i class='fa fa-heart'></i>
                          </a>
                          <div class='dc-title'>
                            <a href='javascript:void(0)' class='dc-docstatus'>
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href='javascript:void(0);'>
                                Dr. Arron Benning
                              </a>{' '}
                              <i class='fa fa-award dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>{' '}
                              <i class='fa fa-check-circle dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul class='dc-docinfo'>
                              <li>
                                <em>MBBS, MCPS, MSc (Immunology)</em>
                              </li>
                              <li>
                                <span class='dc-stars'>
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div class='dc-doclocation'>
                            <span>
                              <i class='ti-direction-alt'></i> FAAAAI (USA), PGT
                              Allergy (UK)
                            </span>
                            <span>
                              <i class='ti-calendar'></i> Mo, Tu, We, Th,{' '}
                              <em class='dc-dayon'>Fr</em>, Sa
                            </span>
                            <a href='javascript:void(0);' class='dc-btn'>
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='item'>
                      <div class='dc-docpostholder'>
                        <figure class='dc-docpostimg'>
                          <img
                            src='assets/images/doctors/img-05.jpg'
                            alt='img description'
                          />
                          <figcaption>
                            <span class='dc-featuredtag'>
                              <i class='fa fa-bolt'></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div class='dc-docpostcontent'>
                          <a href='javascript:void(0);' class='dc-like'>
                            <i class='fa fa-heart'></i>
                          </a>
                          <div class='dc-title'>
                            <a href='javascript:void(0)' class='dc-docstatus'>
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href='javascript:void(0);'>
                                Dr. Nubia Riccardi
                              </a>{' '}
                              <i class='fa fa-award dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>{' '}
                              <i class='fa fa-check-circle dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul class='dc-docinfo'>
                              <li>
                                <em>MBBS, MCPS, MSc (Immunology)</em>
                              </li>
                              <li>
                                <span class='dc-stars'>
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div class='dc-doclocation'>
                            <span>
                              <i class='ti-direction-alt'></i> Manchester, UK
                            </span>
                            <span>
                              <i class='ti-calendar'></i> Mo, Tu, We, Th, Fr, Sa
                            </span>
                            <a href='javascript:void(0);' class='dc-btn'>
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='item'>
                      <div class='dc-docpostholder'>
                        <figure class='dc-docpostimg'>
                          <img
                            src='assets/images/doctors/img-01.jpg'
                            alt='img description'
                          />
                          <figcaption>
                            <span class='dc-featuredtag'>
                              <i class='fa fa-bolt'></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div class='dc-docpostcontent'>
                          <a href='javascript:void(0);' class='dc-like'>
                            <i class='fa fa-heart'></i>
                          </a>
                          <div class='dc-title'>
                            <a href='javascript:void(0)' class='dc-docstatus'>
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href='javascript:void(0);'>
                                Dr. Tinisha Amenta
                              </a>{' '}
                              <i class='fa fa-award dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>{' '}
                              <i class='fa fa-check-circle dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul class='dc-docinfo'>
                              <li>
                                <em>MBBS, MCPS, MSc (Immunology)</em>
                              </li>
                              <li>
                                <span class='dc-stars'>
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div class='dc-doclocation'>
                            <span>
                              <i class='ti-direction-alt'></i> Manchester, UK
                            </span>
                            <span>
                              <i class='ti-calendar'></i>{' '}
                              <em class='dc-dayon'>Mo</em>, Tu, We, Th, Fr, Sa
                            </span>
                            <a href='javascript:void(0);' class='dc-btn'>
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='item'>
                      <div class='dc-docpostholder'>
                        <figure class='dc-docpostimg'>
                          <img
                            src='assets/images/doctors/img-03.jpg'
                            alt='img description'
                          />
                          <figcaption>
                            <span class='dc-featuredtag'>
                              <i class='fa fa-bolt'></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div class='dc-docpostcontent'>
                          <a href='javascript:void(0);' class='dc-like'>
                            <i class='fa fa-heart'></i>
                          </a>
                          <div class='dc-title'>
                            <a href='javascript:void(0)' class='dc-docstatus'>
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href='javascript:void(0);'>
                                Dr. Tinisha Amenta
                              </a>{' '}
                              <i class='fa fa-award dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>{' '}
                              <i class='fa fa-check-circle dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul class='dc-docinfo'>
                              <li>
                                <em>MBBS, MCPS, MSc (Immunology)</em>
                              </li>
                              <li>
                                <span class='dc-stars'>
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div class='dc-doclocation'>
                            <span>
                              <i class='ti-direction-alt'></i> Manchester, UK
                            </span>
                            <span>
                              <i class='ti-calendar'></i> Mo, Tu, We, Th, Fr,{' '}
                              <em class='dc-dayon'>Sa</em>
                            </span>
                            <a href='javascript:void(0);' class='dc-btn'>
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='item'>
                      <div class='dc-docpostholder'>
                        <figure class='dc-docpostimg'>
                          <img
                            src='assets/images/doctors/img-02.jpg'
                            alt='img description'
                          />
                          <figcaption>
                            <span class='dc-featuredtag'>
                              <i class='fa fa-bolt'></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div class='dc-docpostcontent'>
                          <a href='javascript:void(0);' class='dc-like'>
                            <i class='fa fa-heart'></i>
                          </a>
                          <div class='dc-title'>
                            <a href='javascript:void(0)' class='dc-docstatus'>
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href='javascript:void(0);'>
                                Dr. Carmelo G. lock{' '}
                              </a>{' '}
                              <i class='fa fa-award dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>{' '}
                              <i class='fa fa-check-circle dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul class='dc-docinfo'>
                              <li>
                                <em>MBBS, MCPS, MSc (Immunology)</em>
                              </li>
                              <li>
                                <span class='dc-stars'>
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div class='dc-doclocation'>
                            <span>
                              <i class='ti-direction-alt'></i> Manchester, UK
                            </span>
                            <span>
                              <i class='ti-calendar'></i> Mo,{' '}
                              <em class='dc-dayon'>Tu</em>, We, Th, Fr, Sa
                            </span>
                            <a href='javascript:void(0);' class='dc-btn'>
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='item'>
                      <div class='dc-docpostholder'>
                        <figure class='dc-docpostimg'>
                          <img
                            src='assets/images/doctors/img-04.jpg'
                            alt='img description'
                          />
                          <figcaption>
                            <span class='dc-featuredtag'>
                              <i class='fa fa-bolt'></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div class='dc-docpostcontent'>
                          <a href='javascript:void(0);' class='dc-like'>
                            <i class='fa fa-heart'></i>
                          </a>
                          <div class='dc-title'>
                            <a href='javascript:void(0)' class='dc-docstatus'>
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href='javascript:void(0);'>
                                Dr. Maryland Nicol lock
                              </a>{' '}
                              <i class='fa fa-award dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>{' '}
                              <i class='fa fa-check-circle dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul class='dc-docinfo'>
                              <li>
                                <em>Clin Immn (Euro), FCPP</em>
                              </li>
                              <li>
                                <span class='dc-stars'>
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div class='dc-doclocation'>
                            <span>
                              <i class='ti-direction-alt'></i> Manchester, UK
                            </span>
                            <span>
                              <i class='ti-calendar'></i> Mo, Tu, We, Th, Fr,{' '}
                              <em class='dc-dayon'>Sa</em>
                            </span>
                            <a href='javascript:void(0);' class='dc-btn'>
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='item'>
                      <div class='dc-docpostholder'>
                        <figure class='dc-docpostimg'>
                          <img
                            src='assets/images/doctors/img-03.jpg'
                            alt='img description'
                          />
                          <figcaption>
                            <span class='dc-featuredtag'>
                              <i class='fa fa-bolt'></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div class='dc-docpostcontent'>
                          <a href='javascript:void(0);' class='dc-like'>
                            <i class='fa fa-heart'></i>
                          </a>
                          <div class='dc-title'>
                            <a href='javascript:void(0)' class='dc-docstatus'>
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href='javascript:void(0);'>
                                Dr. Arron Benning
                              </a>{' '}
                              <i class='fa fa-award dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>{' '}
                              <i class='fa fa-check-circle dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul class='dc-docinfo'>
                              <li>
                                <em>MBBS, MCPS, MSc (Immunology)</em>
                              </li>
                              <li>
                                <span class='dc-stars'>
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div class='dc-doclocation'>
                            <span>
                              <i class='ti-direction-alt'></i> FAAAAI (USA), PGT
                              Allergy (UK)
                            </span>
                            <span>
                              <i class='ti-calendar'></i> Mo, Tu, We, Th, Fr, Sa
                            </span>
                            <a href='javascript:void(0);' class='dc-btn'>
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='item'>
                      <div class='dc-docpostholder'>
                        <figure class='dc-docpostimg'>
                          <img
                            src='assets/images/doctors/img-05.jpg'
                            alt='img description'
                          />
                          <figcaption>
                            <span class='dc-featuredtag'>
                              <i class='fa fa-bolt'></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div class='dc-docpostcontent'>
                          <a href='javascript:void(0);' class='dc-like'>
                            <i class='fa fa-heart'></i>
                          </a>
                          <div class='dc-title'>
                            <a href='javascript:void(0)' class='dc-docstatus'>
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href='javascript:void(0);'>
                                Dr. Nubia Riccardi
                              </a>{' '}
                              <i class='fa fa-award dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>{' '}
                              <i class='fa fa-check-circle dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul class='dc-docinfo'>
                              <li>
                                <em>MBBS, MCPS, MSc (Immunology)</em>
                              </li>
                              <li>
                                <span class='dc-stars'>
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div class='dc-doclocation'>
                            <span>
                              <i class='ti-direction-alt'></i> Manchester, UK
                            </span>
                            <span>
                              <i class='ti-calendar'></i> Mo, Tu, We, Th, Fr, Sa
                            </span>
                            <a href='javascript:void(0);' class='dc-btn'>
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='item'>
                      <div class='dc-docpostholder'>
                        <figure class='dc-docpostimg'>
                          <img
                            src='assets/images/doctors/img-01.jpg'
                            alt='img description'
                          />
                          <figcaption>
                            <span class='dc-featuredtag'>
                              <i class='fa fa-bolt'></i>
                            </span>
                          </figcaption>
                        </figure>
                        <div class='dc-docpostcontent'>
                          <a href='javascript:void(0);' class='dc-like'>
                            <i class='fa fa-heart'></i>
                          </a>
                          <div class='dc-title'>
                            <a href='javascript:void(0)' class='dc-docstatus'>
                              Neurosurgeon
                            </a>
                            <h3>
                              <a href='javascript:void(0);'>
                                Dr. Tinisha Amenta
                              </a>{' '}
                              <i class='fa fa-award dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>{' '}
                              <i class='fa fa-check-circle dc-awardtooltip'>
                                <em>Medical Registration Verified</em>
                              </i>
                            </h3>
                            <ul class='dc-docinfo'>
                              <li>
                                <em>MBBS, MCPS, MSc (Immunology)</em>
                              </li>
                              <li>
                                <span class='dc-stars'>
                                  <span></span>
                                </span>
                                <em>2100 Feedback</em>
                              </li>
                            </ul>
                          </div>
                          <div class='dc-doclocation'>
                            <span>
                              <i class='ti-direction-alt'></i> Manchester, UK
                            </span>
                            <span>
                              <i class='ti-calendar'></i> Mo, Tu, We, Th, Fr, Sa
                            </span>
                            <a href='javascript:void(0);' class='dc-btn'>
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class='dc-haslayout dc-bgcolor'>
          <div class='container'>
            <div class='row'>
              <div class='col-xs-12 col-sm-12 col-md-12 col-lg-6'>
                <div class='dc-appbgimg'>
                  <figure>
                    <img
                      src='assets/images/app-imgs/img-01.png'
                      alt='img description'
                    />
                  </figure>
                </div>
              </div>
              <div class='col-xs-12 col-sm-12 col-md-12 col-lg-6 justify-content-center align-self-center'>
                <div class='dc-appcontent'>
                  <div class='dc-sectionhead dc-sectionheadvtwo'>
                    <div class='dc-sectiontitle'>
                      <h2>
                        Care on the GO<span>Download Mobile App</span>
                      </h2>
                    </div>
                    <div class='dc-description'>
                      <p>
                        Lorem ipsum dolor amet consectetur adipisicing eliteiuim
                        sete eiusmod tempor incididunt ut labore etnalom dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                  <ul class='dc-appicons'>
                    <li>
                      <a href='javascript:void(0);'>
                        <img
                          src='assets/images/app-imgs/img-03.png'
                          alt='img description'
                        />
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>
                        <img
                          src='assets/images/app-imgs/img-02.png'
                          alt='img description'
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class='dc-haslayout dc-main-section'>
          <div class='container'>
            <div class='row justify-content-center align-self-center'>
              <div class='col-xs-12 col-sm-12 col-md-12 col-lg-8 push-lg-2'>
                <div class='dc-sectionhead dc-text-center'>
                  <div class='dc-sectiontitle'>
                    <h2>
                      <span>Read Professional Articles</span>Latest{' '}
                      <em>Articles</em>
                    </h2>
                  </div>
                  <div class='dc-description'>
                    <p>
                      Lorem ipsum dolor amet consectetur adipisicing eliteiuim
                      sete eiusmod tempor incididunt ut labore etnalom dolore
                      magna aliqua udiminimate veniam quis norud.
                    </p>
                  </div>
                </div>
              </div>
              <div class='dc-articlesholder'>
                <div class='col-12 col-sm-12 col-md-6 col-lg-4 float-left'>
                  <div class='dc-article'>
                    <figure class='dc-articleimg'>
                      <img
                        src='assets/images/articles/img-01.jpg'
                        alt='img description'
                      />
                      <figcaption>
                        <div class='dc-articlesdocinfo'>
                          <img
                            src='assets/images/articles/user/img-01.jpg'
                            alt='img description'
                          />
                          <span>Lincoln Claggett</span>
                        </div>
                      </figcaption>
                    </figure>
                    <div class='dc-articlecontent'>
                      <div class='dc-title'>
                        <a href='javascript:void(0);' class='dc-articleby'>
                          Business
                        </a>
                        <h3>
                          <a href='javascript:void(0);'>
                            Best Way to Stay Healthy and Boost Your Metabolism
                          </a>
                        </h3>
                        <span class='dc-datetime'>
                          <i class='ti-calendar'></i> Jun 27, 2019
                        </span>
                      </div>
                      <ul class='dc-moreoptions'>
                        <li>
                          <a href='javascript:void(0);'>
                            <i class='ti-heart'></i> 12,032
                          </a>
                        </li>
                        <li>
                          <a href='javascript:void(0);'>
                            <i class='ti-eye'></i> 1,26,558
                          </a>
                        </li>
                        <li>
                          <a href='javascript:void(0);'>
                            <i class='ti-share'></i> Share
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class='col-12 col-sm-12 col-md-6 col-lg-4 float-left'>
                  <div class='dc-article'>
                    <figure class='dc-articleimg'>
                      <img
                        src='assets/images/articles/img-02.jpg'
                        alt='img description'
                      />
                      <figcaption>
                        <div class='dc-articlesdocinfo'>
                          <img
                            src='assets/images/articles/user/img-02.jpg'
                            alt='img description'
                          />
                          <span>Lincoln Claggett</span>
                        </div>
                      </figcaption>
                    </figure>
                    <div class='dc-articlecontent'>
                      <div class='dc-title'>
                        <a href='javascript:void(0);' class='dc-articleby'>
                          Lifestyle
                        </a>
                        <h3>
                          <a href='javascript:void(0);'>
                            10 Tips, We Challenge You Won’t Get Tired Easily
                          </a>
                        </h3>
                        <span class='dc-datetime'>
                          <i class='ti-calendar'></i> Jun 27, 2019
                        </span>
                      </div>
                      <ul class='dc-moreoptions'>
                        <li>
                          <a href='javascript:void(0);'>
                            <i class='ti-heart'></i> 12,032
                          </a>
                        </li>
                        <li>
                          <a href='javascript:void(0);'>
                            <i class='ti-eye'></i> 1,26,558
                          </a>
                        </li>
                        <li>
                          <a href='javascript:void(0);'>
                            <i class='ti-share'></i> Share
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class='col-12 col-sm-12 col-md-6 col-lg-4 float-left'>
                  <div class='dc-article'>
                    <figure class='dc-articleimg'>
                      <img
                        src='assets/images/articles/img-03.jpg'
                        alt='img description'
                      />
                      <figcaption>
                        <div class='dc-articlesdocinfo'>
                          <img
                            src='assets/images/articles/user/img-03.jpg'
                            alt='img description'
                          />
                          <span>Lincoln Claggett</span>
                        </div>
                      </figcaption>
                    </figure>
                    <div class='dc-articlecontent'>
                      <div class='dc-title'>
                        <a href='javascript:void(0)' class='dc-articleby'>
                          Medical
                        </a>
                        <h3>
                          <a href='javascript:void(0);'>
                            Always Keep Your First Aid Box Ready Near to You
                          </a>
                        </h3>
                        <span class='dc-datetime'>
                          <i class='ti-calendar'></i> Jun 27, 2019
                        </span>
                      </div>
                      <ul class='dc-moreoptions'>
                        <li>
                          <a href='javascript:void(0);'>
                            <i class='ti-heart'></i> 12,032
                          </a>
                        </li>
                        <li>
                          <a href='javascript:void(0);'>
                            <i class='ti-eye'></i> 1,26,558
                          </a>
                        </li>
                        <li>
                          <a href='javascript:void(0);'>
                            <i class='ti-share'></i> Share
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class='dc-haslayaout dc-footeraboutus dc-bgcolor'>
          <div class='container'>
            <div class='row'>
              <div class='col-12 col-sm-6 col-md-3 col-lg-3'>
                <div class='dc-widgetskills'>
                  <div class='dc-fwidgettitle'>
                    <h3>By Speciality</h3>
                  </div>
                  <ul class='dc-fwidgetcontent'>
                    <li>
                      <a href='javascript:void(0);'>Allergy Specialist</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>Andrologist</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>Anesthetist</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>Audiologist</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>Dietitian/Nutritionist</a>
                    </li>
                    <li class='dc-viewmore'>
                      <a href='javascript:void(0);'>View All</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class='col-12 col-sm-6 col-md-3 col-lg-3'>
                <div class='dc-widgetskill'>
                  <div class='dc-fwidgettitle'>
                    <h3>Doctors In US</h3>
                  </div>
                  <ul class='dc-fwidgetcontent'>
                    <li>
                      <a href='javascript:void(0);'>Laproscopic Surgeon</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>
                        Oral And Maxillofacial Surgeon
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>Orthopedic Surgeon</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>
                        Pediatric Cardiac Surgeon
                      </a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>
                        Pediatric Orthopedic Surgeon
                      </a>
                    </li>
                    <li class='dc-viewmore'>
                      <a href='javascript:void(0);'>View All</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class='col-12 col-sm-6 col-md-3 col-lg-3'>
                <div class='dc-footercol dc-widgetcategories'>
                  <div class='dc-fwidgettitle'>
                    <h3>By Categories</h3>
                  </div>
                  <ul class='dc-fwidgetcontent'>
                    <li>
                      <a href='javascript:void(0);'>Cosmetic Surgeon</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>Eye Specialist</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>Gastroenterologist</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>General Physician</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>General Practitioner</a>
                    </li>
                    <li class='dc-viewmore'>
                      <a href='javascript:void(0);'>View All</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class='col-12 col-sm-6 col-md-3 col-lg-3'>
                <div class='dc-widgetbylocation'>
                  <div class='dc-fwidgettitle'>
                    <h3>By Location</h3>
                  </div>
                  <ul class='dc-fwidgetcontent'>
                    <li>
                      <a href='javascript:void(0);'>Switzerland</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>Canada</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>Germany</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>United Kingdom</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);'>Japan</a>
                    </li>
                    <li class='dc-viewmore'>
                      <a href='javascript:void(0);'>View All</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default Home
